import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import Information from "./Information";
import DownloadGreen from "./icons/DownloadGreen";
import { useDispatch, useSelector } from "react-redux";
import { infoTabOpen } from "@/src/features/metadataSlice";

const Content = () => {
  const { color, secondary } = useSelector((state) => state.theme.data);
  const { inInfo } = useSelector((state) => state.metadata);
  const dispatch = useDispatch();

  const [counting, setCounting] = useState(false);
  const [counted, setCounted] = useState(false);

  const countUpRef = React.useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 175.31,
    duration: 4,
    startOnMount: false,
    decimals: 2,
    onStart: () => setCounting(true),
    onEnd: () => {
      setCounting(false);
      setCounted(true);
    },
  });

  useEffect(() => {
    countUpRef.current.textContent = 0;
  }, [countUpRef]);

  return (
    <div>
      <div
        className={`flex flex-col lg:flex-row ${
          inInfo && "h-screen"
        }  items-center justify-center lg:justify-end w-full padding_zifi lg:space-x-6`}
      >
        <div>
          <p
            ref={countUpRef}
            className="text-[28vw] md:text-[30.83dvh] select-none -translate-y-[20px] lg:translate-y-0"
          />
        </div>
        <div className=" flex flex-col items-center lg:space-y-3 2xl:space-y-6">
          <p className="text-[3.7dvh] tracking-[0.4dvh] font-light  -translate-y-[12vw] md:-translate-y-[8vw] lg:translate-y-0">
            Mbps
          </p>
          <div className="translate-y-[35px] lg:translate-y-0">
            {counting ? (
              <DownloadGreen
                fill={
                  secondary === "white" || color === "#000000"
                    ? "#009105"
                    : "#17B169"
                }
                className="w-[12dvh] h-[12dvh] SvgColorTransition"
              />
            ) : (
              <div>
                <button
                  onClick={start}
                  className="border-[#FFFF00] border-[0.35dvh] rounded-full bg-transparent w-[12dvh] h-[12dvh] flex items-center justify-center text-[3.5dvh] uppercase hover:bg-white hover:bg-opacity-25"
                >
                  Go
                </button>
                {counted && (
                  <div className="absolute inset-0 lg:inset-auto flex lg:flex-none justify-center lg:justify-normal lg:right-0 -translate-y-[12dvh] lg:translate-y-[4dvh]">
                    <button
                      onClick={() => dispatch(infoTabOpen(true))}
                      className="uppercase text-[1.85dvh] tracking-[1.5px] opacity-50 whitespace-nowrap"
                    >
                      more information
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {inInfo && (
        <div className="absolute inset-0">
          <Information />
        </div>
      )}
    </div>
  );
};

export default Content;
