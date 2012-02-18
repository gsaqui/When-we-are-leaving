var background = {
    setBadgeText: function() {
        var now = moment().sod();
        var wedding =  moment([2012, 7, 19]).sod();
        chrome.browserAction.setBadgeText({text: '' + wedding.diff(now, 'days')});
    }
}

/**
 * Initializes everything.
 */
function init() {
    background.setBadgeText();
    setInterval(function() {
        background.setBadgeText();
    }, globals.waitTime);
}

//Adding listener when body is loaded to call init function.
window.addEventListener('load', init, false);