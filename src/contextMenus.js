const meetItParentContextId = chrome.contextMenus.create({
    title: "Meet It",
    contexts: ["all"],
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const takeMeBackToMeetContextMenuId = chrome.contextMenus.create({
    title: "Take me back to Meet",
    contexts: ["all"],
    parentId: meetItParentContextId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const muteContextMenuId = chrome.contextMenus.create({
    title: "Mute",
    contexts: ["all"],
    parentId: meetItParentContextId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

const unmuteContextMenuId = chrome.contextMenus.create({
    title: "Unmute",
    contexts: ["all"],
    parentId: meetItParentContextId
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
    }
});

export { takeMeBackToMeetContextMenuId, muteContextMenuId, unmuteContextMenuId };
