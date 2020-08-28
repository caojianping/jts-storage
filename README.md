# jts-storage

提供通用 localStorage、sessionStorage 的 API 方法。

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
// 备注：过期时间参数默认undefined不设置时，表示缓存数据没有过期时间
const key1 = 'local_number';
LocalStorage.setItem<number>(key1, 666888, 3600 * 1000 * 2); // 返回：true/false;
LocalStorage.getItem<number>(key1); // 返回：666888/null;
LocalStorage.removeItem(key1); // 返回：true/false;

const key2 = 'local_string';
LocalStorage.setItem<string>(key2, 'hello world', 3600 * 1000 * 2); // 返回：true/false;
LocalStorage.getItem<string>(key2); // 返回：hello world/null;
LocalStorage.removeItem(key2); // 返回：true/false;

// SessionStorage测试
const key3 = 'session_number';
SessionStorage.setItem<number>(key3, 666888); // 返回：true/false;
SessionStorage.getItem<number>(key3); // 返回：666888/null;
SessionStorage.removeItem(key3); // 返回：true/false

const key4 = 'session_string';
SessionStorage.setItem<string>(key4, 'hello world abc'); // 返回：true/false;
SessionStorage.getItem<string>(key4); // 返回：hello world abc/null;
SessionStorage.removeItem(key4); // 返回：true/false;
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
