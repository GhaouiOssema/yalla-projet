const LoginWith = ({ iconSrc, text }) => {
  return (
    <div className="w-full">
      <div className=" mb-4  flex w-full h-[50px] items-center justify-center gap-2 rounded-lg bg-lightPrimary hover:cursor-pointer  border border-gray-200">
        <div className="rounded-full text-xl">
          <img width="23" height="23" src={iconSrc} />
        </div>
        <p className="font-medium text-sm text-gray-800">{text}</p>{" "}
      </div>
    </div>
  );
};

export default LoginWith;
