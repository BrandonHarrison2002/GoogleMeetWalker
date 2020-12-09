chrome.runtime.onInstalled.addListener(function() {
    console.log("The extension is installed");
    chrome.tabs.create({url: "https://meet.google.com/?authuser=2"});
});

//https://meet.google.com/?authuser=2
