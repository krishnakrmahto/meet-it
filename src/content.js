import { MEET_MESSAGE_WHEN_MUTE_IS_OFF, MEET_MESSAGE_WHEN_MUTE_IS_ON, MUTE, UNMUTE, MUTED, UNMUTED, GET_MEET_NUM_PARTICIPATS } from "./constants"

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
  else if (message.requestQuery && message.requestQuery == GET_MEET_NUM_PARTICIPATS) {
    sendResponse(parseInt(document.getElementsByClassName("uGOf1d")[0].innerText));
  }
});

const setMuteState = (searchString) => {
  let microphoneToggleButton = [...document.querySelectorAll("[aria-label]")].filter((item) =>
    item.getAttribute("aria-label").toString().includes(searchString))[0];
  if (microphoneToggleButton) {
    microphoneToggleButton.click();
  }
}
