chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "mute") {
        changeMicrophoneState("Turn on microphone");
    } else {
        changeMicrophoneState("Turn off microphone");
    }
});


function mute(searchString) {
    let elem = [...document.querySelectorAll("[data-tooltip]")].filter((item) => 
    item.getAttribute("aria-label").toString().includes(searchString))[0];
    if (elem) {
        elem.click();
    }
}