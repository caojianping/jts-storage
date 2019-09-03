const sessionStorage = window.sessionStorage;

export default class SessionStorage {
    /**
     * 获取SessionStorage
     * @param key
     */
    public static getItem<T>(key: string): T | null {
        if (!sessionStorage || !key) return null;

        try {
            const value = sessionStorage.getItem(key);
            if (value == null) return null;
            return <T>JSON.parse(value);
        } catch (err) {
            throw `SessionStorage's getItem error: ${JSON.stringify(err)}!`;
        }
    }

    /**
     * 设置SessionStorage
     * @param key
     * @param value
     */
    public static setItem<T>(key: string, value: T): boolean {
        if (!sessionStorage || !key) return false;
        if (value === undefined || value === null) return false;

        try {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (err) {
            throw `SessionStorage's setItem error: ${JSON.stringify(err)}!`;
        }
    }

    /**
     * 移除SessionStorage
     * @param key
     */
    public static removeItem(key: string): boolean {
        if (!sessionStorage || !key) return false;

        sessionStorage.removeItem(key);
        return true;
    }

    /**
     * 清除SessionStorage
     */
    public static clear(): void {
        sessionStorage && sessionStorage.clear();
    }
}