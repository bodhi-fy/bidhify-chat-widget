import { Component, createSignal } from "solid-js";

// import styles from './App.module.css';
import ChatButton from "./ChatButton";
import ChatWidget from "./ChatWidget";
import { ChatWidgetCtx, getBodhifyChatWidgetCtxEntry } from "./util/contextExposer";
import primaryUserImageUrl from './assets/primary-user.png'
import secondaryUserImageUrl from './assets/secondary-user.png'

interface Message {
  value: string;
  type: number;
}

const [isChatOpen, setIsChatOpen] = createSignal(false);
const [primaryUserDetails, setPrimaryUserDetails] = createSignal({name:'', description:'', imageURL:primaryUserImageUrl});
const [secondaryUserDetails, setSecondaryUserDetails] = createSignal({name:'', description:'', imageURL:secondaryUserImageUrl});
const [isSecondaryUserOnline, setIsSecondaryUserOnline] = createSignal(false);
const [isSecondaryUserTyping, setIsSecondaryUserTyping] = createSignal(false);
const [message, setMessage] = createSignal<Message[]>([]);


declare global {
  interface Window {
    updateChatScroll?: () => void;
    getBodhifyChatWidgetCtxEntry?: () => ChatWidgetCtx;
  }
}

window.updateChatScroll = () => {
  const element: HTMLElement | null = document.getElementById("messages");
  if (element !== null) {
    element.scrollTop = element.scrollHeight;
  }
};

window.getBodhifyChatWidgetCtxEntry = getBodhifyChatWidgetCtxEntry;

const App: Component = () => {
  return (
    <>
      <ChatButton />
      <ChatWidget />
    </>
  );
};

export default App;
export { 
  isChatOpen, 
  setIsChatOpen,
  primaryUserDetails,
  setPrimaryUserDetails,
  secondaryUserDetails,
  setSecondaryUserDetails,
  isSecondaryUserOnline,
  setIsSecondaryUserOnline,
  isSecondaryUserTyping,
  setIsSecondaryUserTyping,
  message,
  setMessage
};
