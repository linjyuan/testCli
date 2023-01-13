#!/usr/bin/env node
let lib = require("mycli-ljy-2")
console.log({ lib })
console.log({ sum: lib.sum(1, 2), mul: lib.mul(4, 5) });
console.log("hello mycli-ljy")