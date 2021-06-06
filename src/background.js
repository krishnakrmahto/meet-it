import "babel-polyfill";
import { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId } from "./contextMenus";
import { switchToMeetTab, setMeetMuteState } from "./utils";
import { MUTE, UNMUTE } from "./constants"

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === takeMeBackToMeetContextMenuId) {
        console.log("Switch to meet tab option clicked.")
        switchToMeetTab();
        console.log("switchToMeetTab call done.")
    }

    if (info.menuItemId === muteContextMenuId) {
        setMeetMuteState(MUTE);
    }

    if (info.menuItemId === unmuteContextMenuId) {
        setMeetMuteState(UNMUTE);
    }
});

