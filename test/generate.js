"use strict"

const tap = require('tap'),
      generate = require('../index')().generate;

const check = (params, result) => tap.equal(generate.apply(null, params), result);

check(
  [ 'block' ],
  'block'
);
check(
  [ 'block', 'elem' ],
  'block__elem'
);
check(
  [ 'block', 'elem', 'mod' ],
  'block__elem block__elem--mod'
);
check(
  [ 'block', 'elem', ['mod1', 'mod2'] ],
  'block__elem block__elem--mod1 block__elem--mod2'
);
check(
  [ 'block', 'elem', { 'mod1': 'opt', 'mod2': true } ],
  'block__elem block__elem--mod1 block__elem--mod1-opt block__elem--mod2'
);
check(
  [ 'block', 'elem', { 'mod1': false, 'mod2': true } ],
  'block__elem block__elem--mod2'
);
check(
  [ 'block', 'elem', { 'mod1': false, 'mod2': false }, 'mix' ],
  'block__elem mix'
);
check(
  [ 'block', 'elem', { 'mod1': false, 'mod2': false }, ['mix1', 'mix2'] ],
  'block__elem mix1 mix2'
);
check(
  [ 'block', 'elem', { 'mod1': false, 'mod2': false }, { 'mix1': true, 'mix2': false } ],
  'block__elem mix1'
);
check(
  [ 'block', null, { 'mod1': 'opt', 'mod2': true }, ['mix1', 'mix2'] ],
  'block block--mod1 block--mod1-opt block--mod2 mix1 mix2'
);
