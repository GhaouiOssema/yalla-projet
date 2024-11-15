const DateBadge = ({ date, Icon, condition }) => {
    return (
        <span className="bg-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full flex items-center gap-1 whitespace-nowrap">
            <Icon className="h-3 w-3" />
            <span>
                {condition === "entre"
                    ? `Entre le ${date[0]} et ${date[1]}`
                    : condition === "avant"
                    ? `Avant le ${date}`
                    : `À livrer le ${date} `}
            </span>
        </span>
    );
};

export default DateBadge;
