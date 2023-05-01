import { createSignal, For, Show } from "solid-js";
import { isChatOpen } from "./App";
import PrimaryUserMessage from "./PrimaryUserMessage";
import SecondaryUserMessage from "./SecondaryUserMessage";
import SecondaryUserTyping from "./SecondaryUserTyping";

const [input, setInput] = createSignal("");
const [isTyping, setIsTyping] = createSignal(false);

interface Message {
  value: string;
  type: number;
}

const [message, setMessage] = createSignal<Message[]>([]);

const handleOnChatInput: any = (event: any, data: any) => {
  const inputVal = event.target.value;
  if (event.key === "Enter") {
    setInput("");
    setMessage((a) => [...a, { value: inputVal, type: 0 }]);
    callChatService(inputVal);
    setIsTyping(true);
    if (window.updateChatScroll !== undefined) {
      window.updateChatScroll();
    }
  } else {
    setInput(inputVal);
  }
};

const handleOnButtonSubmit: any = (event: any, data: any) => {
  const inputVal = input();
  setInput("");
  setMessage((a) => [...a, { value: inputVal, type: 0 }]);
  callChatService(inputVal);
  setIsTyping(true);
  if (window.updateChatScroll !== undefined) {
    window.updateChatScroll();
  }
};

function callChatService(messageValue: string) {
  const responseVal = "Hello";
  setTimeout(() => {
    const newMessages = [...message(), { value: responseVal, type: 1 }];
    setIsTyping(false);
    setMessage((a) => newMessages);
    if (window.updateChatScroll !== undefined) {
      window.updateChatScroll();
    }
  }, 3000);
  return responseVal;
}

function ChatWidget() {
  return (
    <Show when={isChatOpen()}>
      <div
        id="chat-widget"
        class={`rounded-md ${isChatOpen() ? "fade-in" : "fade-out"}`}
      >
        <div class="flex-1 p:1 sm:p-4 justify-end flex flex-col transition duration-1000 ease-in-out">
          <div class="flex sm:items-center justify-between pt-0 pb-3 border-b-2 border-gray-200 ">
            <div class="relative flex items-center space-x-4">
              <div class="relative">
                <span class="absolute text-green-500 right-0 bottom-0">
                  <svg width="20" height="20">
                    <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                  </svg>
                </span>
                <img
                  src="/src/assets/secondary-user.png"
                  alt=""
                  class="w-8 sm:w-12 h-8 sm:h-12 rounded-full"
                />
              </div>
              <div class="flex flex-col leading-tight">
                <div class="text-lg mt-0 flex items-center">
                  <span class="text-gray-700 mr-3">Bodhify</span>
                </div>
                <span class="text-sm text-gray-500">Bodhify Chat Agent</span>
              </div>
            </div>
            <div class="flex items-center space-x-1"></div>
          </div>
          <div
            id="messages"
            class="message-box flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-w-2 scrolling-touch"
          >
            <For each={message()}>
              {(msg, i) => {
                return msg.type === 0 ? (
                  <PrimaryUserMessage message={msg.value} />
                ) : (
                  <SecondaryUserMessage message={msg.value} />
                );
              }}
            </For>
            <Show when={isTyping()}>
              <SecondaryUserTyping />
            </Show>
          </div>
          <div class="border-t-2 border-gray-200 px-0 pt-3 mb-2 sm:mb-0">
            <div class="relative flex">
              <input
                value={input()}
                type="text"
                placeholder="Write message here"
                class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-700 placeholder-gray-500 pl-12 bg-gray-200 rounded-lg py-3 h-10"
                onKeyUp={handleOnChatInput}
              />
              <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                <button
                  type="button"
                  onClick={handleOnButtonSubmit}
                  class="inline-flex items-center justify-center rounded-lg px-4 py-2.5 transition duration-500 ease-in-out text-white border-blue-500 hover:bg-indigo-500 focus:outline-none "
                >
                  <span class="font-bold"></span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5 ml-2 transform rotate-0"
                  >
                    <path d="M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
}

export { input, message };
export default ChatWidget;
