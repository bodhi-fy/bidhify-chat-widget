import { createSignal } from "solid-js";
import { isChatOpen, setIsChatOpen } from "./App";

function ChatButton() {
  const [classListOpenIcon, setClassListOpenIcon] = createSignal("plus-icon");
  const [classListCloseIcon, setClassListCloseIcon] = createSignal("close-icon");

  const addClass=()=>{
    if (isChatOpen()) {
      setClassListOpenIcon("plus-icon close-icon-animate")
      setClassListCloseIcon("cose-icon plus-icon-animate")
    } else {
      setClassListOpenIcon("plus-icon plus-icon-animate")
      setClassListCloseIcon("close-icon close-icon-animate")
    }
    setIsChatOpen(!isChatOpen())
  }

  return (
        <button id="chat-button" onClick={addClass} class="bg-gradient-to-r from-emerald-500 to-indigo-600">
          <svg class={`${classListOpenIcon()}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h28v24H0z"/><path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z" fill="rgba(255,255,255,1)"/></svg>
          <svg class={classListCloseIcon()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)"/></svg>
        </button>
  );
}

export default ChatButton;
