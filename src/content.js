import { MEET_MESSAGE_WHEN_MUTE_IS_OFF, MEET_MESSAGE_WHEN_MUTE_IS_ON, MUTE, UNMUTE } from "./constants"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let requestedMuteState = message.muteState;

    if (requestedMuteState === MUTE) {
        setMuteState(MEET_MESSAGE_WHEN_MUTE_IS_OFF);
    }
    else if (requestedMuteState === UNMUTE) {
        setMuteState(MEET_MESSAGE_WHEN_MUTE_IS_ON);
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