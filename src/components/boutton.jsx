const Boutton = ({ IconSrc, Text, onClick }) => {
  return (
    <div
      className=" flex w-full h-[50px] items-center justify-center gap-2 rounded-lg  hover:cursor-pointer bg-yellow-500    "
      onClick={onClick}
    >
      <div className="rounded-full text-xl text-white">
        <img
          width="26"
          height="26"
          src={IconSrc}
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      <p className="font-medium text-white text-sm"> {Text}</p>
    </div>
  );
};

export default Boutton;
