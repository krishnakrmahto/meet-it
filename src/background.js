import "babel-polyfill";
import { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { switchToMeetTab, setMeetMuteState } from "./utils";
import { MUTE, MUTED, UNMUTE, UNMUTED } from "./constants"

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === takeMeBackToMeetContextMenuId) {
        console.log("Switch to meet tab option clicked.");
        switchToMeetTab();
        console.log("switchToMeetTab call done.");
    }

    if (info.menuItemId === muteContextMenuId) {
        console.log("Mute meet tab option clicked.");
        setMeetMuteState(MUTE);
    }

    if (info.menuItemId === unmuteContextMenuId) {
        setMeetMuteState(UNMUTE);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let mutingMessage = message.mutingMessage;
    console.log("Runtime mutingMessage received:", mutingMessage);
    if (mutingMessage && mutingMessage === MUTED) {
        chrome.notifications.create("muting-message",
            {
              type: "basic",
              iconUrl: "/static/image.png",
              title: "Meet microphone",
              message: MUTED,
            },
            function () {}
          );
    }
    else if (mutingMessage && mutingMessage === UNMUTED) {
        chrome.notifications.create("muting-message",
        {
          type: "basic",
          iconUrl: "/static/image.png",
          title: "Meet microphone",
          message: MUTED,
        },
        function () {}
      );
    }
});