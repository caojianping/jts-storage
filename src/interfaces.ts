/**
 * 本地存储数据类
 */
export default class StorageStore<T> {
    data: T;
    expires?: number;

    constructor(data: T, expires?: number) {
        this.data = data;
        this.expires = expires;
    }
}
