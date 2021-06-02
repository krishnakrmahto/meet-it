const ongoingMeetRegex = /meet.google.com\/[a-zA-Z]{3}\-[a-zA-Z]{4}\-[a-zA-Z]{3}.*/gm;

export const isLiveGoogleMeetTab = (tab) => {
    return tab.url.match(ongoingMeetRegex);
};
