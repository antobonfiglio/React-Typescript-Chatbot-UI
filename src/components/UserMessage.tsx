import React from "react";

type UserMessageProps = {
  message: string;
};

export default function UserMessage({
  message
}: UserMessageProps): JSX.Element {
  return (
    <div className="message-container">
      <div className="user-message">{message}</div>
    </div>
  );
}
