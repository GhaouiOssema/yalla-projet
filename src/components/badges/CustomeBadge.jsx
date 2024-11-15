const CustomeBadge = ({ text, Icon }) => {
    return (
        <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1 whitespace-nowrap">
            <Icon className="h-3 w-3" />
            <span>{text}</span>
        </span>
    );
};
export default CustomeBadge;
