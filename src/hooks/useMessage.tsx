'use client'
import { message } from "antd";
import React, { createContext, useContext, useMemo } from "react";

export interface IMessage {
  type: "success" | "info" | "warning" | "error";
  content: string;
}

interface MessageContextType {
  showMessage: (props: IMessage) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (props: IMessage) => {
    messageApi.open({
      type: props.type,
      content: props.content,
    });
  };

  const value = useMemo(() => ({ showMessage }), [messageApi]);

  return (
    <MessageContext.Provider value={value}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = (): MessageContextType => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
};
