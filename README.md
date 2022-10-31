<!-- <p align="center">
  <a href="https://v2.dinerojs.com/docs">
    <img alt="Dinero.js" src="https://raw.githubusercontent.com/johnhooks/dinero.js/main/.github/banner.png">
  </a>
</p> -->

<div align="center">
  <h1>
    @bitmachina/dinero.js
  </h1>

  <p>
    This repo is a fork of <a href="https://github.com/dinero/dinero.js">Dinero.js</a> by <a href="https://github.com/sarahdayan">Sarah Dayan</a>.
  </p>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@bitmachina/dinero.js?activeTab=versions"><img alt="Stability: alpha" src="https://img.shields.io/badge/stability-alpha-f4d03f.svg" /></a>
  <a href="https://circleci.com/gh/dinerojs/dinero.js"><img alt="CircleCI" src="https://img.shields.io/circleci/build/gh/dinerojs/dinero.js"></a>
  <a href="https://github.com/johnhooks/dinero.js/blob/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/@bitmachina/dinero.js"></a>
</p>

---

<p align="center">
  Dinero.js lets you create, calculate, and format money safely in JavaScript and TypeScript.<br>
  <a href="https://v2.dinerojs.com/docs"><strong>v2.dinerojs.com/docs</strong></a>
</p>

---

Money is complex, and the primitives of the language aren't enough to properly represent it. Dinero.js is a JavaScript library that lets you express monetary values, but also perform mutations, conversions, comparisons, formatting, and overall make money manipulation easier and safer in your application.

## 📦 Install

```sh
npm install @bitmachina/dinero.js@alpha

# or

yarn add @bitmachina/dinero.js@alpha

# or

pnpm add @bitmachina/dinero.js@alpha
```

## ⚡️ Quick start

`Dinero` objects are minimal. Every function in `dinero.js` is side-effect free, allowing you only to bundle exactly what you use.

```js
import { USD } from '@bitmachina/dinero-currencies';
import { dinero, add } from '@bitmachina/dinero.js';

const d1 = dinero({ amount: 500, currency: USD });
const d2 = dinero({ amount: 800, currency: USD });

add(d1, d2);
```

Check out the [quick start guide](https://v2.dinerojs.com/docs/getting-started/quick-start) on the documentation.

## 📚 Documentation

The documentation lets you learn about all aspects of the library.

- [**Getting started**](https://v2.dinerojs.com/docs/getting-started/quick-start) to get up and running quickly with Dinero.js
- [**Core concepts**](https://v2.dinerojs.com/docs/core-concepts/amount) to learn about the underlying principles behind the library
- [**Guides**](https://v2.dinerojs.com/docs/guides/using-different-amount-types) to dig deeper into specific use cases.
- [**API**](https://v2.dinerojs.com/docs/api/mutations/add) for a comprehensive list of available functions and their parameters.
- [**FAQ**](https://v2.dinerojs.com/docs/faq/does-dinerojs-support-cryptocurrencies) for common answers to questions you might have

Visit the [full documentation](https://v2.dinerojs.com/docs) to know more.

## 👥 Contributors

[![Dinero.js contributors](https://contrib.rocks/image?repo=johnhooks/dinero.js)](https://github.com/johnhooks/dinero.js/graphs/contributors)

## 📜 License

[MIT](LICENSE)

