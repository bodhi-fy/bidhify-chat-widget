# Bodhify Chat Widget

* bodhify chat widget is a ready to use universal chat widget for any web site

* can be added to any website by adding a single script tag
 
* full chat functionality can be implemented by using simple to use functions.


# How to use

**add the following script tag in the html page:**
```
<script src="https://cdn.jsdelivr.net/gh/bodhi-fy/bodhify-chat-widget@0.1/dist/bodhify-chat-widget.js"></script>
```
**get chat widget context:**

```
getBodhifyChatWidgetCtx(onLoadCallback, onErrorCallback)
```
**set primary user details:**
```
setPrimaryUserName(primaryUserName) //text
setPrimaryUserDescription(primaryUserDescription) //text
setPrimaryUserImageURL(primaryUserImageURL) //text
```
**set secondary user details:**
```
setSecondaryUserName(secondaryUserName) //text
setSecondaryUserDescription(secondaryUserDescription) //text
setSecondaryUserImageURL(secondaryUserImageURL) //text
setSecondaryUserIsOnline(secondaryUserOnlineStatus) //true or false
setSecondaryUserIsTyping(secondaryUserTypingStatus) //true or false
```
**add message**
```
setPrimaryUserMessage(message) //text
setSecondaryUserMessage(message) //text
```
**get primary user message on typing** 
```
onPrimaryUserMessageChange(onPrimaryUserMessageTypingCallback)
```
**get primary user message on submit** 
```
onPrimaryUserMessageSubmit(onPrimaryUserMessageSubmitCallback)
```

# Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/gh/bodhi-fy/bodhify-chat-widget@0.1/dist/bodhify-chat-widget.js"></script>
    <title>Bodhify Chat Widget Example</title>
</head>
<body>
    <h1>Bodhify Chat Widget Example</h1>
    <script>
        var chatWidgetCtx = null;
        function onLoadChatWidgetCtx(widgetCtx){
            chatWidgetCtx = widgetCtx;
            chatWidgetCtx.setPrimaryUserName('Primary User')
            chatWidgetCtx.setPrimaryUserDescription('Primary User Description')
            chatWidgetCtx.setPrimaryUserImageURL(primaryUserImageURL)

            chatWidgetCtx.setSecondaryUserName('Secondary User')
            chatWidgetCtx.setSecondaryUserDescription('Secondary User Description')
            chatWidgetCtx.setSecondaryUserImageURL(secondaryUserImageURL)
            chatWidgetCtx.setSecondaryUserIsOnline(true)
            chatWidgetCtx.setSecondaryUserIsTyping(false)

            chatWidgetCtx.onPrimaryUserMessageSubmit(function onPrimaryUserMessageSubmit(message) {
                chatWidgetCtx.setPrimaryUserMessage(message)
                chatWidgetCtx.setSecondaryUserIsTyping(true)
                setTimeout(() => {
                    chatWidgetCtx.setSecondaryUserMessage('Hello from Secondary User')
                    chatWidgetCtx.setSecondaryUserIsTyping(false)
                }, 3000);
            })

        }
        function onErrorChatWidgetCtx(errorCause){
            console.log(errorCause);
        }
        getBodhifyChatWidgetCtx(onLoadChatWidgetCtx, onErrorChatWidgetCtx);
    </script>
</body>
</html>
```

# License
Bodhify Chat Widget is [MIT licensed](https://github.com/bodhi-fy/bodhify-chat-widget/blob/main/LICENSE "MIT licensed").