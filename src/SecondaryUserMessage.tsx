function SecondaryUserMessage(props:{message:string}) {
  return (
    <div class="chat-message fade-in">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-black-600" style="color:black;">
              {props.message}
            </span>
          </div>
        </div>
        <img
          src="/src/assets/secondary-user.png"
          alt="Secondary User Profile"
          class="w-8 h-8 rounded-full order-1"
        />
      </div>
    </div>
  );
}
export default SecondaryUserMessage;
