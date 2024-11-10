import React from "react";
import { useParams } from "react-router-dom";
import "tailwindcss/tailwind.css";


const MessagesChat = () => {
  const { name } = useParams();

  return (
    <div className=" inset-0 flex flex-col h-screen w-full bg-white dark:bg-gray-900">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="/placeholder-avatar.jpg" alt="Recipient" />
            </div>
          </div>
          <div>
            <div className="font-semibold">{name}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-circle">
            <EyeIcon className="w-5 h-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <MoveHorizontalIcon className="w-5 h-5" />
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex flex-col gap-4">
          <Message message="Hey there! How's it going?" time="10:30 AM" avatarSrc="/placeholder-avatar.jpg" avatarFallback="JD" />
          <div className="flex justify-end">
            <div className="max-w-[70%] bg-yellow-500 text-white rounded-lg p-4 text-sm">
              <p>I'm doing great, thanks for asking!</p>
              <div className="text-xs text-gray-200 mt-2">10:31 AM</div>
            </div>
          </div>
          <Message message="That's good to hear! I was wondering if you'd be free for a call later today?" time="10:32 AM" avatarSrc="/placeholder-avatar.jpg" avatarFallback="JD" />
          <div className="flex justify-end">
            <div className="max-w-[70%] bg-yellow-500 text-white rounded-lg p-4 text-sm">
              <p>Sure, I'm available anytime after 2pm. What works best for you?</p>
              <div className="text-xs text-gray-200 mt-2">10:33 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-6 py-4 border-t border-gray-200 dark:border-gray-800">
        <input className="input input-bordered flex-1 mr-4" placeholder="Type your message..." type="text" />
        <button className="btn btn-primary">
          <SendIcon className="w-5 h-5 mr-2" />
        </button>
        <button className="btn btn-ghost btn-circle ml-2">
          <PaperclipIcon className="w-5 h-5" />
          <span className="sr-only">Attach file</span>
        </button>
      </div>
    </div>
  );
};

function Message({ message, time, avatarSrc, avatarFallback }) {
  return (
    <div className="flex items-start gap-3">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={avatarSrc} alt="Avatar" />
        </div>
      </div>
      <div className="max-w-[70%] bg-gray-100 rounded-lg p-4 text-sm dark:bg-gray-800">
        <p>{message}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {time}
        </div>
      </div>
    </div>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default MessagesChat;
