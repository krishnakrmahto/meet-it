const parentContextMenuId = chrome.contextMenus.create({
    title: "Meet It",
    contexts: ["all"]
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const takeMeBackToMeetContextMenuId = chrome.contextMenus.create({
    title: "Take me back to Meet",
    contexts: ["all"],
    parentId: parentContextMenuId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const muteParentContextMenuId = chrome.contextMenus.create({
    title: "Microphone",
    contexts: ["all"],
    parentId: parentContextMenuId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const muteContextMenuId = chrome.contextMenus.create({
    title: "Mute",
    contexts: ["all"],
    parentId: muteParentContextMenuId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const unmuteContextMenuId = chrome.contextMenus.create({
    title: "Unmute",
    contexts: ["all"],
    parentId: muteParentContextMenuId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

export { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId };