import { Component, createSignal } from 'solid-js';

// import styles from './App.module.css';
import ChatButton from './ChatButton';
import ChatWidget from './ChatWidget';

const [isChatOpen, setIsChatOpen] = createSignal(false);
  
const App: Component = () => {
  return (
    <>
      <ChatButton/>
      <ChatWidget/>
    </>
  );
};

export {isChatOpen, setIsChatOpen}
export default App;
