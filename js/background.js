var background = {
    setBadgeText: function() {
        var now = moment().sod();
        var wedding =  moment([2013, 11, 24]).sod();
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
init();
//Adding listener when body is loaded to call init function.
window.addEventListener('load', init, false);