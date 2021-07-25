[![](https://github.com/Umut-Ozkan/astroide/actions/workflows/test_and_publish.yml/badge.svg)](https://github.com/Umut-Ozkan/astroide) [![](https://github.com/Umut-Ozkan/astroide/actions/workflows/test.yml/badge.svg)](https://github.com/Umut-Ozkan/astroide) [![](https://img.shields.io/npm/v/astroide.svg?maxAge=3600)](https://github.com/Umut-Ozkan/astroide) [![](https://img.shields.io/npm/dt/astroide.svg?maxAge=3600)](https://github.com/Umut-Ozkan/astroide) [![](https://status.david-dm.org/gh/Umut-Ozkan/astroide.svg)](https://github.com/Umut-Ozkan/astroide) [![](https://status.david-dm.org/gh/Umut-Ozkan/astroide.svg?type=dev)](https://github.com/Umut-Ozkan/astroide) 

[![](https://nodei.co/npm/astroide.png?downloads=true&stars=true)](https://github.com/Umut-Ozkan/astroide)

## Install Package 

```js
npm i --save astroide
```

## Usage

```js
const db = require("astroide");
```

[Setting A Value](https://lodash.com/docs/4.17.15#set)

```js
db.set("my.cool.database","astroide") => astroide
db.set("my.cool.database.array",[]) => []
db.set("my.cool.database.number",31) => 31
```

[Fetching Value](https://lodash.com/docs/4.17.15#get)

```js
db.get("my.cool.database");
db.fetch("my.cool.database.number");
```

[Check if data created](https://lodash.com/docs/4.17.15#has)

```js
db.has("my.cool.database") => true
db.has("my.bad.database") => false
```

[Add specified data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)

```js
db.add("my.cool.database.number", 31); // => 62
db.add("my.cool.database.number", 31); // => 93
```

[Subtract specified data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)

```js
db.subtract("my.cool.database.number", 31); // => 62
db.subtract("my.cool.database.number", 31); // => 31
```

[Push specified data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

```js
db.push("my.cool.database.array", 2); // => [2]
db.push("my.cool.database.array", null); // => [2, null, 3, "str1", {}]
db.push("my.cool.database.array", 3); // => [2, null, 3]
db.push("my.cool.database.array", "str1"); // => [2, null, 3, "str1"]
db.push("my.cool.database.array", {}); // => [2, null, 3, "str1", {}]
```

[Deleting a value in the database](https://lodash.com/docs/4.17.15#unset)

```js
db.delete("my.bad.database"); // => true
```
