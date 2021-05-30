let contextMenu = {};

contextMenu.createTakeMeBackToMeetMenu = chrome.contextMenus.create({
    "title": "Take me back to meet"
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message)
    }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === contextMenu.createTakeMeBackToMeetMenu) {
        console.log("Menu clicked");
    }
});

