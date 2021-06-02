import "babel-polyfill";
import { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { isLiveGoogleMeetTab } from "./utils";

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === takeMeBackToMeetContextMenuId) {
        chrome.tabs.query({}, function (tabs) {
            console.log("tabs", tabs);
            if (tabs.length === 1) return;

            switchToMeetTab(tabs);
        });
    }
});

const switchToMeetTab = (tabs) => {
    tabs.forEach((tab, index) => {
        if (isLiveGoogleMeetTab(tab)) {
            chrome.tabs.update(tab.id, { selected: true, active: true });
            chrome.windows.update(tab.windowId, { drawAttention: true, focused: true });
        }
    });
};

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === muteContextMenuId) {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach((tab) => {
                if (isLiveGoogleMeetTab(tab)) {
                    chrome.tabs.sendMessage(tab.id,{ action: "mute" },function (response) {});
                }
            })
        });
    }
    if (info.menuItemId === unmuteContextMenuId) {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach((tab) => {
                if (isLiveGoogleMeetTab(tab)) {
                    chrome.tabs.sendMessage(tab.id,{ action: "unmute" },function (response) {});
                }
            })
        });
    }
});