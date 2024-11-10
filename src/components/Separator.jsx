const Separator = ({ text }) => {
  return (
    <div className="mb-4 flex items-center  gap-3">
      <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
      <p className="text-base text-gray-600"> {text} </p>
      <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
    </div>
  );
};

export default Separator;
