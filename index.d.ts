export = ObjectTypeTraits;
export as namespace ObjectTypeTraits;
declare namespace ObjectTypeTraits {
    /**
     * detect type
     * @param obj target
     * @returns typename(String,Number,Boolean,Date,Error,Array,Function,RegExp,Object, ...)
     */
    export function of(obj?: any): string;
    /**
     * check type
     * @param type typename(String,Number,Boolean,Date,Error,Array,Function,RegExp,Object, ...)
     * @param obj target
     */
    export function isSame(type: string, obj: any): boolean;
}
