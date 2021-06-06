import "babel-polyfill";
import { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { createBasicNotificationWithoutId, switchToMeetTab, setMeetMuteState } from "./utils";
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
  const notificationTitle = "Meet It Microphone Control";
  if (mutingMessage && mutingMessage === MUTED) {
    createBasicNotificationWithoutId("/icons/muted-notification.png", notificationTitle, "Muted!", function() {});
  }
  else if (mutingMessage && mutingMessage === UNMUTED) {
    createBasicNotificationWithoutId("/icons/unmuted-notification.png", notificationTitle, "Unmuted!",  function() {});
  }
});