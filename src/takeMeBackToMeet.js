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
        chrome.tabs.query({ currentWindow: true }, function (tabs) {

            if (tabs.length === 1) return;

            switchToMeetTab(tabs);
        });
    }
});

const switchToMeetTab = (tabs) => {
    tabs.forEach((tab, index) => {
        if ('meet.google.com' === new URL(tab.url).hostname) {
            chrome.tabs.update(tabs[index].id, {active: true});
        }
    });
};