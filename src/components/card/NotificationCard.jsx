const NotificationCard = () => {
    return (
        <div className="w-[20rem] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-sm font-medium leading-none text-gray-900 dark:text-white">
                    Dernière Notification
                </h5>
                <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Voire tous
                </a>
            </div>
            <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700">
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="/docs/images/people/profile-picture-1.jpg"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@flowbite.com
                            </p>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="/docs/images/people/profile-picture-3.jpg"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Bonnie Green
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@flowbite.com
                            </p>
                        </div>
                    </div>
                </li>

                <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="/docs/images/people/profile-picture-4.jpg"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Lana Byrd
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@flowbite.com
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NotificationCard;
