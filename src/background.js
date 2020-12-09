chrome.runtime.onInstalled.addListener(function() {
    console.log("The extension is installed");
    let value = 'NaN'
    chrome.storage.local.set({'c1': value}, function() {
        console.log('Class 1 is set to ' + value);
    });
    chrome.storage.local.set({'c2': value}, function() {
        console.log('Class 2 is set to ' + value);
    });
    chrome.storage.local.set({'c3': value}, function() {
        console.log('Class 3 is set to ' + value);
    });
    chrome.storage.local.set({'c4': value}, function() {
        console.log('Class 4 is set to ' + value);
    });
    chrome.storage.local.set({'c5': value}, function() {
        console.log('Class 5 is set to ' + value);
    });
    chrome.storage.local.set({'c6': value}, function() {
        console.log('Class 6 is set to ' + value);
    });
    chrome.storage.local.set({'c7': value}, function() {
        console.log('Class 7 is set to ' + value);
    });
});