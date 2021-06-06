import { MEET_MESSAGE_WHEN_MUTE_IS_OFF, MEET_MESSAGE_WHEN_MUTE_IS_ON, MUTE, UNMUTE, MUTED, UNMUTED } from "./constants"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let requestedMuteState = message.muteState;

  if (requestedMuteState && requestedMuteState === MUTE) {
    setMuteState(MEET_MESSAGE_WHEN_MUTE_IS_OFF);
    chrome.runtime.sendMessage({ mutingMessage: MUTED });
    console.log("Runtime message sent:", MUTED);
  }
  else if (requestedMuteState && requestedMuteState === UNMUTE) {
    setMuteState(MEET_MESSAGE_WHEN_MUTE_IS_ON);
    chrome.runtime.sendMessage({ mutingMessage: UNMUTED });
    console.log("Runtime message sent:", UNMUTED);
  }
});

const setMuteState = (searchString) => {
  console.log("Search string for muting/unmuting:", searchString);
  let microphoneToggleButton = [...document.querySelectorAll("[data-tooltip]")].filter((item) =>
    item.getAttribute("aria-label").toString().includes(searchString))[0];
  if (microphoneToggleButton) {
    microphoneToggleButton.click();
    console.log("Clicked microphone toggle button");
  }
}
