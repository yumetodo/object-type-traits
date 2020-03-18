// eslint-disable-next-line node/no-unsupported-features/es-syntax,node/no-unpublished-import
import test from 'ava';
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import type from '../index'

test('type.of', t => {
    t.true('String' === type.of('aaa'));
    t.true('String' === type.of(new String()));
    t.true('Number' === type.of(123));
    t.true('Number' === type.of(new Number()));
    t.true('Boolean' === type.of(true));
    t.true('Boolean' === type.of(false));
    t.true('Boolean' === type.of(new Boolean()));
    t.true('Date' === type.of(new Date()));
    t.true('Error' === type.of(new Error('aaaa')));
    t.true('Array' === type.of([]));
    t.true('Array' === type.of(new Array()));
    t.true('RegExp' === type.of(/a/));
    t.true('RegExp' === type.of(new RegExp('a')));
});
test('type.of: Function', t => {
    // Make sure that false values return false
    t.true('Function' !== type.of(), 'No Value');
    t.true('Function' !== type.of(null), 'null Value');
    t.true('Function' !== type.of(undefined), 'undefined Value');
    t.true('Function' !== type.of(''), 'Empty String Value');
    t.true('Function' !== type.of(0), '0 Value');

    // Check built-ins
    t.true('Function' === type.of(String), 'String Function(' + String + ')');
    t.true('Function' === type.of(Array), 'Array Function(' + Array + ')');
    t.true('Function' === type.of(Object), 'Object Function(' + Object + ')');
    t.true('Function' === type.of(Function), 'Function Function(' + Function + ')');

    // When stringified, this could be misinterpreted
    const mystr = 'function';
    t.true('Function' !== type.of(mystr), 'Function String');

    // When stringified, this could be misinterpreted
    const myarr = [ 'function' ];
    t.true('Function' !== type.of(myarr), 'Function Array');

    // When stringified, this could be misinterpreted
    const myfunction = { 'function': 'test' };
    t.true('Function' !== type.of(myfunction), 'Function Object');

    // Make sure normal functions still work
    const fn = function() {};
    t.true('Function' === type.of(fn), 'Normal Function');

    const inheriting = Object.create(fn);
    t.true('Function' !== type.of(inheriting), 'object inheriting function');

    // Recursive function calls have lengths and array-like properties
    function callme(callback) {
        function fn(response) {
            callback(response);
        }

        t.true('Function' === type.of(fn), 'Recursive Function Call');

        fn({ some: 'data' });
    }

    callme(function() {
        callme(function() {});
    });

    //TODO: detect fnExoticToStringTag as function.
    function fnExoticToStringTag() {}
    fnExoticToStringTag[ Symbol.toStringTag ] = 'foo';
    t.true('Function' !== type.of(fnExoticToStringTag), 'function with exotic @@toStringTag');

    t.true('Function' === type.of(() => {}), 'Arrow Fuction');
});
test('type.isSame', t => {
    t.true(type.isSame('String', 'aaa'));
    t.true(type.isSame('String', new String()));
    t.true(type.isSame('Number', 123));
    t.true(type.isSame('Number', new Number()));
    t.true(type.isSame('Boolean', true));
    t.true(type.isSame('Boolean', false));
    t.true(type.isSame('Boolean', new Boolean()));
    t.true(type.isSame('Date', new Date()));
    t.true(type.isSame('Error', new Error('aaaa')));
    t.true(type.isSame('Array', []));
    t.true(type.isSame('Array', new Array()));
    t.true(type.isSame('RegExp', /a/));
    t.true(type.isSame('RegExp', new RegExp('a')));
});
test('type.isSame: Function', t => {
    // Make sure that false values return false
    t.true(!type.isSame('Function', ), 'No Value');
    t.true(!type.isSame('Function', null), 'null Value');
    t.true(!type.isSame('Function', undefined), 'undefined Value');
    t.true(!type.isSame('Function', ''), 'Empty String Value');
    t.true(!type.isSame('Function', 0), '0 Value');

    // Check built-ins
    t.true(type.isSame('Function', String), 'String Function(' + String + ')');
    t.true(type.isSame('Function', Array), 'Array Function(' + Array + ')');
    t.true(type.isSame('Function', Object), 'Object Function(' + Object + ')');
    t.true(type.isSame('Function', Function), 'Function Function(' + Function + ')');

    // When stringified, this could be misinterpreted
    const mystr = 'function';
    t.true(!type.isSame('Function', mystr), 'Function String');

    // When stringified, this could be misinterpreted
    const myarr = [ 'function' ];
    t.true(!type.isSame('Function', myarr), 'Function Array');

    // When stringified, this could be misinterpreted
    const myfunction = { 'function': 'test' };
    t.true(!type.isSame('Function', myfunction), 'Function Object');

    // Make sure normal functions still work
    const fn = function() {};
    t.true(type.isSame('Function', fn), 'Normal Function');

    const inheriting = Object.create(fn);
    t.true(!type.isSame('Function', inheriting), 'object inheriting function');

    // Recursive function calls have lengths and array-like properties
    function callme(callback) {
        function fn(response) {
            callback(response);
        }

        t.true(type.isSame('Function', fn), 'Recursive Function Call');

        fn({ some: 'data' });
    }

    callme(function() {
        callme(function() {});
    });

    //TODO: detect fnExoticToStringTag as function.
    function fnExoticToStringTag() {}
    fnExoticToStringTag[ Symbol.toStringTag ] = 'foo';
    t.true(!type.isSame('Function', fnExoticToStringTag), 'function with exotic @@toStringTag');

    t.true(type.isSame('Function', () => {}), 'Arrow Fuction');
});
