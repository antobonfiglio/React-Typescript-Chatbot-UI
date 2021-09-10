import React, { useEffect, useRef } from "react";

type MessagesProps = {
  messages: JSX.Element;
};

export default function Messages({ messages }: MessagesProps): JSX.Element {
  const el = useRef<HTMLInputElement>(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });
  return (
    <div className="messages">
      {messages}
      <div id={"el"} ref={el} />
    </div>
  );
}
