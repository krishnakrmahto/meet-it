import { takeMeBackToMeetContextMenuId } from "./contextMenus";
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