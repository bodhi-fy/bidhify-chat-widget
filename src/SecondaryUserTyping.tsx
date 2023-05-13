import { secondaryUserDetails } from "./App";

function SecondaryUserTyping() {
  return (
    <div class="chat-message fade-in">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <div class="chat-typing-bubble h-8">
            <div class="typing">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            </div>
          </div>
        </div>
        <img
          src={secondaryUserDetails().imageURL}
          alt="Secondary User Profile"
          class="w-8 h-8 rounded-full order-1"
        />
      </div>
    </div>
  );
}
export default SecondaryUserTyping;
