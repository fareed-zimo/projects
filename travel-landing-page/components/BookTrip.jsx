import Image from "next/image";
import React from "react";

const items = [
  {
    color: "#F0BB1F",
    src: "/trip_section/choose.png",
    title: "Choose",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    color: "#F15A2B",
    src: "/trip_section/payment.png",
    title: "Make Payment",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    color: "#006380",
    src: "/trip_section/taxi.png",
    title: "Reach Airport on Selected Date",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const BookTrip = () => {
  return (
    <div className="relative px-4 lg:px-[80px] 2xl:px-[140px] space-y-20">
      {/* <div className="BackgroundImage absolute inset-0 w-[100vw] h-[100vh] overflow-hidden">
        <div className="overlay_div" />
        <Image
          src={"/background.jpg"}
          width={1920}
          height={0}
          className="object-cover "
        />
      </div> */}
      <div className="relative w-full flex flex-col top-[30px]">
        <div className="flex flex-col w-1/2 space-y-8">
          <div>
            <p className="uppercase font-semibold text-[#5E6282] text-[16px] lg:text-[18px]">
              Easy and Fast
            </p>
            <p className="font-bold font-serif text-[#14183E] text-[30px] lg:text-[50px]">
              Book Your Next Trip <br /> In 3 Easy Steps
            </p>
          </div>
          <div className="space-y-14">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-5">
                <div
                  style={{ backgroundColor: item.color }}
                  className={`rounded-[13px] p-3`}
                >
                  <img src={item.src} />
                </div>
                <div>
                  <p className="font-bold text-[16px] text-[#5E6282]">
                    {item.title}
                  </p>
                  <p className="text-[16px] text-[#5E6282]">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
