# jts-storage
Caojianping's localStorage and sessionStorage library.

## Installing
Using npm:
```bash
$ npm install jts-storage
```

Using yarn:
```bash
$ yarn add jts-storage
```

## Example
```ts
import {LocalStorage, SessionStorage} from 'jts-storage';

// test for LocalStorage
const key1 = 'local_number';
LocalStorage.setItem<number>(key1, 666888, 3600 * 1000 * 2);// return true/false;
LocalStorage.getItem<number>(key1);// return 666888/null;
LocalStorage.removeItem(key1);// return true/false;

const key2 = 'local_string';
LocalStorage.setItem<string>(key2, 'hello world', 3600 * 1000 * 2);// return true/false;
LocalStorage.getItem<string>(key2);// return hello world/null;
LocalStorage.removeItem(key2);// return true/false;

// test for SessionStorage
const key3 = 'session_number';
SessionStorage.setItem<number>(key3, 666888);// return true/false;
SessionStorage.getItem<number>(key3);// return 666888/null;
SessionStorage.removeItem(key3);// return true/false

const key4 = 'session_string';
SessionStorage.setItem<string>(key4, 'hello world abc');// return true/false;
SessionStorage.getItem<string>(key4);// return hello world abc/null;
SessionStorage.removeItem(key4);// return true/false;
```

## API
##### LocalStorage.setItem<T>(key: string, value: T[, expires: number = 2 hours]): boolean
##### LocalStorage.getItem<T>(key: string): T | null
##### LocalStorage.removeItem(key: string): boolean
##### LocalStorage.clear(): void
##### SessionStorage.setItem<T>(key: string, value: T): boolean
##### SessionStorage.getItem<T>(key: string): T | null
##### SessionStorage.removeItem(key: string): boolean
##### SessionStorage.clear(): void
