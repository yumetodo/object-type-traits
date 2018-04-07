class ObjectTypeTraits {
    /**
     * detect type
     * @param {any} obj target
     * @returns {string} typename(String,Number,Boolean,Date,Error,Array,Function,RegExp,Object, ...)
     */
    static of(obj) {
        return (typeof(obj) === 'undefined') ? 'undefined' : Object.prototype.toString.call(obj).slice(8, -1);
    }
    /**
     * check type
     * @param {string} type typename(String,Number,Boolean,Date,Error,Array,Function,RegExp,Object, ...)
     * @param {any} obj target
     * @returns {boolean}
     */
    static isSame(type, obj) {
        return obj !== undefined && obj !== null && ObjectTypeTraits.of(obj) === type;
    }
}

module.exports = ObjectTypeTraits;
