import { getMeetTab, updateContextMenuTitle, isCurrentlyMuted } from "./utils";

const takeMeBackToMeetContextMenuId = chrome.contextMenus.create({
    title: "Take me back to Meet",
    contexts: ["all"]
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const setMuteStateContextMenuId = chrome.contextMenus.create({
    title: "Meet muter",
    contexts: ["all"],
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const muteContextMenuId = chrome.contextMenus.create({
    title: "Mute",
    contexts: ["all"],
    parentId: setMuteStateContextMenuId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const unmuteContextMenuId = chrome.contextMenus.create({
    title: "Unmute",
    contexts: ["all"],
    parentId: setMuteStateContextMenuId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

export { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId };