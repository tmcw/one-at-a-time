var test = require('tape'),
    oneatatime = require('./');

test('one at a time', function(t) {
    function timeout(cb) {
        setTimeout(function() {
            cb();
        }, 10);
        return true;
    }
    function end() {
        t.pass('called callback once');
        t.end();
    }
    var limited = oneatatime(timeout);
    for (var i = 0; i < 10; i++) {
        t.equal(i === 0, limited(end));
    }
});

test('serialized', function(t) {
    function timeout(cb) {
        setTimeout(function() {
            cb();
        }, 10);
        return true;
    }
    function end() {
        t.pass('called callback once');
        t.end();
    }
    var limited = oneatatime(timeout);
    limited(function() {
        t.pass('called callback');
        limited(function() {
            t.pass('did it again');
            end();
        });
    });
});

test('arguments', function(t) {
    function timeout(n, cb) {
        setTimeout(function() {
            cb(n + 1);
        }, 10);
        return true;
    }
    function end(n) {
        t.equal(n, 101);
        t.pass('called callback once');
        t.end();
    }
    var limited = oneatatime(timeout);
    for (var i = 0; i < 5; i++) {
        limited(100, end);
    }
});
