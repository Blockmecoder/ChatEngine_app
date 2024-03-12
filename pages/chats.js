import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "../context";
import dynamic from "next/dynamic";
const ChatEngine = dynamic(() => import("react-chat-engine").then((module)=>module.ChatEngine));
const MessageFormSocial = dynamic(() => import("react-chat-engine").then((module)=>module.MessageFormSocial));

export default function Chats() {
  const { secret, username} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();
  useEffect(() => {
    typeof document !== null && setShowChat(true)
  });
  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push('/')
  });
  if (!showChat) return <div />;
  return (<div className="background">
    <div className="shadow">
      <ChatEngine
        height="calc(100vh - 200px)"
        projectID='01983b05-a85e-418c-8fcd-636f9e789f1d'
        userName ={username}
        userSecret={secret}
        renderNewMessageForm = {()=><MessageFormSocial/>}
      /></div>
  </div>)
}
