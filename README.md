# jts-storage

Web存储localStorage、sessionStorage的TypeScript封装，提供通用的API方法（同原有的js方法名称均一致），同时支持泛型方法。

## 安装

Using npm:

```bash
$ npm install jts-storage
```

Using yarn:

```bash
$ yarn add jts-storage
```

## 示例

```ts
import { LocalStorage, SessionStorage } from 'jts-storage';

// LocalStorage测试
const key1 = 'local_number';
const value1 = 666888;
const expires1 = 3600 * 1000 * 2;// 过期时间
LocalStorage.setItem<number>(key1, value1, expires1); // 返回：true/false;
LocalStorage.getItem<number>(key1); // 返回：666888/null;
LocalStorage.removeItem(key1); // 返回：true/false;

const key2 = 'local_string';
const value2 = 'hello world';
const expires2 = 3600 * 1000 * 2;// 过期时间
LocalStorage.setItem<string>(key2, value2, expires2); // 返回：true/false;
LocalStorage.getItem<string>(key2); // 返回：'hello world'/null;
LocalStorage.removeItem(key2); // 返回：true/false;

// 备注：过期时间参数默认undefined不设置时，表示缓存数据没有过期时间
const key3 = 'local_string';
const value3 = true;
LocalStorage.setItem<boolean>(key3, value3); // 返回：true/false;
LocalStorage.getItem<boolean>(key3); // 返回：true/null;
LocalStorage.removeItem(key3); // 返回：true/false;

// SessionStorage测试
const key4 = 'session_number';
const value4 = 666888;
SessionStorage.setItem<number>(key3, value4); // 返回：true/false;
SessionStorage.getItem<number>(key3); // 返回：666888/null;
SessionStorage.removeItem(key3); // 返回：true/false

const key5 = 'session_string';
const value5 = 'bala bala xiaomoxian';
SessionStorage.setItem<string>(key5, value5); // 返回：true/false;
SessionStorage.getItem<string>(key5); // 返回：'bala bala xiaomoxian'/null;
SessionStorage.removeItem(key5); // 返回：true/false;
```

## API

##### LocalStorage.setItem<T>(key: string, value: T[, expires?: number]): boolean

##### LocalStorage.getItem<T>(key: string): T | null

##### LocalStorage.removeItem(key: string): boolean

##### LocalStorage.clear(): void

##### SessionStorage.setItem<T>(key: string, value: T): boolean

##### SessionStorage.getItem<T>(key: string): T | null

##### SessionStorage.removeItem(key: string): boolean

##### SessionStorage.clear(): void
