const takeMeBackToMeetContextMenuId = chrome.contextMenus.create({
    "title": "Take me back to Meet",
    "contexts": ["all"]
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const takeMeBackToMeetContextMenu = { contextMenuId: takeMeBackToMeetContextMenuId };

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === takeMeBackToMeetContextMenu.contextMenuId) {
        chrome.tabs.query({}, function (tabs) {
            console.log("tabs", tabs);
            if (tabs.length === 1) return;

            switchToMeetTab(tabs);
        });
    }
});

const switchToMeetTab = (tabs) => {
    tabs.forEach((tab, index) => {
        let ongoingMeetRegex = /meet.google.com\/[a-zA-Z]{3}\-[a-zA-Z]{4}\-[a-zA-Z]{3}.*/gm
        if (tab.url.match(ongoingMeetRegex)) {
            chrome.tabs.update(tab.id, { selected: true, active: true });
            chrome.windows.update(tab.windowId, { drawAttention: true, focused: true });
        }
    });
};