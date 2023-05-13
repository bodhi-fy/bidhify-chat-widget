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
    const currentScriptElm = document.currentScript;
    if (currentScriptElm) {
        let widgetScriptSrc  = (currentScriptElm as HTMLScriptElement).src
        const uiWidgetScriptSrcJS = widgetScriptSrc.replace('bodhify-chat-widget.js', 'index.js')
        const uiWidgetScriptSrcCSS = widgetScriptSrc.replace('bodhify-chat-widget.js', 'style.css')
        script.src = uiWidgetScriptSrcJS
        script.crossOrigin = "anonymous";
        script.type = "module"
        document.head.appendChild(script);

        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = uiWidgetScriptSrcCSS
      
        document.head.appendChild(stylesheet);
    } else {
        console.log('current bodhify chat widget url not available');
    }
}

init()


