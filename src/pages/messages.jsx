import React from "react";
import "tailwindcss/tailwind.css";
import MessageItem from "../components/MessageItem";
import Icons from "../components/Icons/Icons";

const Messages = () => {
  return (
    <div className="flex flex-col gap-4 p-2 md:w-[50%] mt-10">
      <header className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <Icons.SearchIcon className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Icons.FilterIcon className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Icons.PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <div className="space-y-4">
        <MessageItem
          name="Olivia Davis"
          date="Oct 08, 2023"
          title="Question about Budget"
          content="Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success."
          amount="$500"
          avatarInitials="CN"
        />
        <MessageItem
          name="John Doe"
          date="Oct 07, 2023"
          title="Proposal for New Project"
          content="Hi team, I've put together a proposal for the new project we discussed last week. I'd like to schedule a meeting to go over the details and get your feedback."
          amount="$1,000"
          avatarInitials="JD"
        />
        <MessageItem
          name="Sarah Miller"
          date="Oct 06, 2023"
          title="Update on Marketing Campaign"
          content="Hi everyone, I wanted to provide an update on the marketing campaign we launched last week. The initial results are looking promising, and I'd like to schedule a meeting to discuss next steps."
          amount="$750"
          avatarInitials="SM"
        />
        <MessageItem
          name="Jessica Bates"
          date="Oct 05, 2023"
          title="Feedback on Design Mockups"
          content="Hi team, I've had a chance to review the design mockups for the new website. I have a few suggestions and feedback that I'd like to discuss in our next meeting."
          amount="$300"
          avatarInitials="JB"
        />
      </div>
    </div>
  );
};




export default Messages;
