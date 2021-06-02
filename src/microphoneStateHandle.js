import { muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { isLiveGoogleMeetTab } from "./utils"

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === muteContextMenuId) {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach((tab) => {
                if (isLiveGoogleMeetTab(tab)) {
                    const muted = tab.mutedInfo.muted;
                    if(!muted) {
                        chrome.tabs.update(tab.id, { muted: true });
                    }
                }
            })
        });
    }
});