import "babel-polyfill";
import { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { createBasicNotificationWithoutId, switchToMeetTab, setMeetMuteState } from "./utils";
import { MUTE, MUTED, TAKE_ME_BACK_TO_MEET, UNMUTE, UNMUTED } from "./constants"

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === takeMeBackToMeetContextMenuId) {
    switchToMeetTab();
  }

  if (info.menuItemId === muteContextMenuId) {
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
    createBasicNotificationWithoutId("/icons/muted-notification.png", notificationTitle, "Muted!", function () { });
  }
  else if (mutingMessage && mutingMessage === UNMUTED) {
    createBasicNotificationWithoutId("/icons/unmuted-notification.png", notificationTitle, "Unmuted!", function () { });
  }
});

chrome.commands.onCommand.addListener((command) => {
  if (command && (command === MUTE || command === UNMUTE)) {
    setMeetMuteState(command);
  }
  else if (command && (command === TAKE_ME_BACK_TO_MEET)) {
    switchToMeetTab();
  }
});
