import { useSelector } from "react-redux";
import ZimoGroupSvg from "./icons/ZimoGroupSvg";
import ZimoMeetSvg from "./icons/ZimoMeetSvg";
import ZtfrSvg from "./icons/ZtfrSvg";

const Footer = () => {
  const { text } = useSelector((state) => state.theme.data);
  const { inInfo, mobileScreen } = useSelector((state) => state.metadata);

  const fillColor = text;

  return (
    <footer
      className={`${
        inInfo
          ? `absolute inset-x-0 ${
              mobileScreen ? "translate-y-[13px] " : "bottom-0"
            }  items-end`
          : "relative"
      }  flex justify-between  padding_zifi pb-[12px] lg:pb-[20px] 2xl:pb-[40px]`}
    >
      {/* left */}
      <div className="absolute lg:relative flex justify-center items-end inset-0 pb-[12px] lg:pb-0">
        <ZimoGroupSvg
          fill={fillColor}
          className="w-[13.7dvh] SvgColorTransition"
        />
      </div>

      {/* right */}
      <div className="flex w-full justify-between lg:justify-end space-x-5 2xl:space-x-10 items-center">
        <ZtfrSvg fill={fillColor} className="w-[9.547dvh] SvgColorTransition" />

        <ZimoMeetSvg
          fill={fillColor}
          className="w-[7.281dvh] SvgColorTransition"
        />
      </div>
    </footer>
  );
};

export default Footer;
