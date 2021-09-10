import React, { useState, useEffect } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import Header from "./components/Header";

import API from "./Api";
import "./styles.css";

export default function Chatbot(): JSX.Element {
  const [messages, setMessages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    function loadWelcomeMessage(): void {
      setMessages([
        <BotMessage
          key={0}
          fetchMessage={async (): Promise<string> =>
            await API.GetBotResponse("hi")
          }
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = (text: string): void => {
    if (text.trim() === "") return;
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} message={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetBotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}
