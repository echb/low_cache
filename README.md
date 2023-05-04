# Installing

Using npm:
`npm install low_js_cache`
Using yarn:
`yarn add low_js_cache`

Once the package is installed, you can import the library using import or require approach:

`import { LCache } from 'low_cache';`

`const { low_cache } = require('low_cache');`


# Methods/Properties

| Methods/Properties |
| ----------- |
| keys |
| values |
| size |
| cache |
| get |
| add |
| delete |
| clear |


# Example
```js
import { LCache } from 'low_cache';

const lCache = new LCache()

lCache.add({ key: 'item', value: 9 })
lCache.add({ key: '0', value: 978162 })
lCache.add({ key: '1', value: { "0": [1] } })
console.log(lCache.get("1"));
console.log(lCache.exist({ key: "1" }));
console.log(lCache.exist({ key: "5", value: 081 }));
console.log(lCache.exist({ key: "1", value: 3 }));

console.log(lCache.cache)
console.log(lCache.keys)
console.log(lCache.values)
console.log(lCache.size)

lCache.delete('item')
console.log(lCache.cache)
lCache.delete('0')
console.log(lCache.cache)
lCache.clear()
console.log(lCache.cache)
```