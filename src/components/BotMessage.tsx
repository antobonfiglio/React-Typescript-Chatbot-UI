import React, { useState, useEffect } from "react";

type BotMessageProps = {
  fetchMessage: () => Promise<string>;
};

type BotMessageState = {
  isLoading: boolean;
  message: string;
};

export default function BotMessage({
  fetchMessage
}: BotMessageProps): JSX.Element {
  const [state, setState] = useState<BotMessageState>({
    isLoading: true,
    message: ""
  });

  useEffect(() => {
    async function fetch() {
      const msg: string = await fetchMessage();
      setState({ isLoading: false, message: msg });
    }
    fetch();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">
        {state.isLoading ? "..." : state.message}
      </div>
    </div>
  );
}
