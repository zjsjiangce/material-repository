---
to: packages/<%= folder %>/__tests__/<%= name %>.test.js

---
'use strict';

const <%= name %> = import('../src');
const assert = require('assert').strict;

assert.strictEqual(<%= name %>.name, <%= name %>);
console.info("<%= name %> tests passed");