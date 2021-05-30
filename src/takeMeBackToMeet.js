let contextMenu = {};

contextMenu.createTakeMeBackToMeetMenu = chrome.contextMenus.create({
    "title": "Take me back to meet",
    "contexts": ["all"]
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message)
    }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === contextMenu.createTakeMeBackToMeetMenu) {
        chrome.tabs.query({ currentWindow: true }, function (tabs) {

            if (tabs.length === 1) return;
        
            tabs.forEach((tab, index) => {
                if ('meet.google.com' === new URL(tab.url).hostname) {
                    chrome.tabs.update(tabs[index].id, {active: true});
                }
            })
        });
    }
});

