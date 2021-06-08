import { MEET_MESSAGE_WHEN_MUTE_IS_OFF, MEET_MESSAGE_WHEN_MUTE_IS_ON, MUTE, UNMUTE, MUTED, UNMUTED } from "./constants"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let requestedMuteState = message.muteState;

  if (requestedMuteState && requestedMuteState === MUTE) {
    setMuteState(MEET_MESSAGE_WHEN_MUTE_IS_OFF);
    chrome.runtime.sendMessage({ mutingMessage: MUTED });
  }
  else if (requestedMuteState && requestedMuteState === UNMUTE) {
    setMuteState(MEET_MESSAGE_WHEN_MUTE_IS_ON);
    chrome.runtime.sendMessage({ mutingMessage: UNMUTED });
  }
});

const setMuteState = (searchString) => {
  [...document.querySelectorAll("button[aria-label]")].filter(
    (item) => item.getAttribute("aria-label").toString().includes(searchString))[0].click();
}
