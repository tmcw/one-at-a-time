/**
 * Given a function that takes a callback, return a version that only
 * permits one callbacker to run at a time
 * @param {Function} fn input
 * @returns {Function} one-at-a-time limited version
 */
function one(fn) {
    var isRunning = false;
    return function() {
        if (isRunning) return false;
        var callback = arguments[arguments.length - 1];
        if (typeof callback !== 'function') throw new Error('must provide function');
        var wrappedCallback = function() {
            isRunning = false;
            callback.apply(null, arguments);
        };
        var newArgs = Array.prototype.slice.apply(arguments);
        newArgs[newArgs.length - 1] = wrappedCallback;
        isRunning = true;
        return fn.apply(null, newArgs);
    };
}

module.exports = one;
