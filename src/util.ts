export default class Util {
    public static isUndefinedOrNull(data: any) {
        return (
            Object.prototype.toString.call(data) === '[object Undefined]' ||
            Object.prototype.toString.call(data) === '[object Null]'
        );
    }
}
