import { primaryUserDetails } from "./App";

function PrimaryUserMessage(props:{message:string}) {
  return (
          <div class="chat-message fade-in">
            <div class="flex items-end justify-end">
              <div class="flex flex-col items-end space-y-2 text-xs mx-2 max-w-xs order-1">
                <div><span class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg rounded-br-none">{props.message}</span></div>
              </div>
              <img src={primaryUserDetails().imageURL} alt="Primary User Profile" class="w-7 h-7 rounded-full order-2" />
            </div>
          </div>
  );
}
export default PrimaryUserMessage;
