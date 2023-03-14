---
to: packages/<%= folder %>/__tests__/<%= folder %>.test.js

---
'use strict';

const <%= folder %> = import('../src');
const assert = require('assert').strict;

assert.strictEqual(<%= folder %>.name, <%= folder %>);
console.info("<%= folder %> tests passed");