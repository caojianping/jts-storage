import Util from './util';
import StorageStore from './interfaces';

const localStorage = window.localStorage;

export default class LocalStorage {
    /**
     * 获取LocalStorage
     * @param key
     */
    public static getItem<T>(key: string): T | null {
        if (!localStorage || !key) return null;

        try {
            const value = localStorage.getItem(key);
            if (value == null) return null;

            let store: StorageStore<T> = <StorageStore<T>>JSON.parse(value);
            if (Util.isUndefinedOrNull(store.expires)) return <T>store.data;
            else {
                if (store.expires <= Date.now()) {
                    localStorage.removeItem(key);
                    return null;
                }
                return <T>store.data;
            }
        } catch (err) {
            throw `LocalStorage's getItem error: ${JSON.stringify(err)}!`;
        }
    }

    /**
     * 设置LocalStorage
     * @param key
     * @param value
     * @param expires
     */
    public static setItem<T>(key: string, value: T, expires?: number): boolean {
        if (!localStorage || !key) return false;
        if (Util.isUndefinedOrNull(value)) return false;

        try {
            let store = expires === undefined ? new StorageStore(value) : new StorageStore(value, Date.now() + expires);
            localStorage.setItem(key, JSON.stringify(store));
            return true;
        } catch (err) {
            throw `LocalStorage's setItem error: ${JSON.stringify(err)}!`;
        }
    }

    /**
     * 移除LocalStorage
     * @param key
     */
    public static removeItem(key: string): boolean {
        if (!localStorage || !key) return false;

        localStorage.removeItem(key);
        return true;
    }

    /**
     * 清除LocalStorage
     */
    public static clear(): void {
        localStorage && localStorage.clear();
    }
}
