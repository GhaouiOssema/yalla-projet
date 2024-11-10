import React from "react";

const SmallCardLayout = ({
  sign,
  Icon,
  text,
  title,
  textColor,
  textSize,
  firstElement,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full  rounded-lg bg-white border ">
      <div className="text-center flex items-center  justify-center">
        <h3 className="leading-none text-yellow-400">
          {Icon && (
            <Icon
              sx={{
                color: textColor ? "" : "",
              }}
            />
          )}
        </h3>
      </div>
      <div className="text-[36px] text-center font-semibold leading-none ">
        <span
          className={` ${
            textColor ? "text-yellow-400" : "text-yellow-400"
          }  ${firstElement} ${sign ? "ml-5" : null}  `}
          style={{ flex: "none" }}
        >
          {title}
        </span>
        <span className="text-yellow-400  text-[21px] ">{sign}</span>
      </div>
      <p
        className="text-gray-900 
           text-[14px]
            text-center  overflow-hidden whitespace-nowrap break-words"
      >
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </p>
    </div>
  );
};

export default SmallCardLayout;
