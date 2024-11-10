import React from 'react'
import Icons from './Icons/Icons'
import { Link } from 'react-router-dom'

const MessageItem = ({
    name,
    date,
    title,
    content,
    amount,
    avatarInitials }) => {
    return (
        <>
            <Link to={`/messageschat/${name}`}  style={{ 
        color: 'inherit', 
        textDecoration: 'none' 
    }} className="text-current no-underline">
                <div className="group flex text-current no-underline cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                    <div className="avatar">
                        <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
                            <span className="text-xl">{avatarInitials}</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <div className="font-medium">{name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{date}</div>
                        </div>
                        <div className="mt-1 font-medium">{title}</div>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                            {content}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                            <div className="font-semibold flex items-center">
                                {amount}
                                <Icons.ArrowRightIcon className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MessageItem