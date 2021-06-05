import "babel-polyfill";
import { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { switchToMeetTab, setMeetMuteState } from "./utils";
import { MUTE, UNMUTE } from "./constants"

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === takeMeBackToMeetContextMenuId) {
        switchToMeetTab(tabs);
    }

    if (info.menuItemId === muteContextMenuId) {
        setMeetMuteState(MUTE);
    }

    if (info.menuItemId === unmuteContextMenuId) {
        setMeetMuteState(UNMUTE);
    }
});

