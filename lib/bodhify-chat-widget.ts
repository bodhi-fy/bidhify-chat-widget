import { ChatWidgetCtx } from "../src/util/contextExposer";

  declare global {
    interface Window {
      getBodhifyChatWidgetCtx?: (cbOnLoad:(ctx: ChatWidgetCtx) => any, cbOnError:(cause: string) => any) => boolean;
    }
  }  

function getBodhifyChatWidgetCtxLoader(cbOnLoad:(ctx: ChatWidgetCtx) => any, cbOnError:(cause: string) => any) {
    try {
        if (typeof window.getBodhifyChatWidgetCtxEntry !== "undefined") {
            if (cbOnLoad) {
                cbOnLoad(window.getBodhifyChatWidgetCtxEntry());
            } else {
                console.log('onLoad func not defined');
            }
        }
        else {
            setTimeout(()=>getBodhifyChatWidgetCtxLoader(cbOnLoad, cbOnError), 250);
        }
    }
    catch (error) {
        if (cbOnError) {
            cbOnError('Error getting context');
        } else {
            console.log('onError func not defined');
        }
        console.log(error);
    }
}

function init(){
    window.getBodhifyChatWidgetCtx = function getBodhifyChatWidgetCtx(cbOnLoad:(ctx: ChatWidgetCtx) => any, cbOnError:(cause: string) => any):boolean{
        try {
            getBodhifyChatWidgetCtxLoader(cbOnLoad, cbOnError);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const script = document.createElement("script");
    script.src = "index.js";
    script.crossOrigin = "anonymous";
    script.type = "module"
  
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "style.css";
  
    document.head.appendChild(script);
    document.head.appendChild(stylesheet);
}

init()


