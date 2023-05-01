import { Component, createSignal } from "solid-js";

// import styles from './App.module.css';
import ChatButton from "./ChatButton";
import ChatWidget from "./ChatWidget";

const [isChatOpen, setIsChatOpen] = createSignal(false);

declare global {
  interface Window {
    updateChatScroll?: () => void;
  }
}

window.updateChatScroll = () => {
  const element: HTMLElement | null = document.getElementById("messages");
  if (element !== null) {
    element.scrollTop = element.scrollHeight;
  }
};

const App: Component = () => {
  return (
    <>
      <ChatButton />
      <ChatWidget />
    </>
  );
};

export { isChatOpen, setIsChatOpen };
export default App;
