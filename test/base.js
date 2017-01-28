"use strict"

const tap = require('tap'),
      bem = require('../index')();

tap.equal(bem('block'), 'block');
tap.equal(bem('block', 'elem'), 'block__elem');
tap.equal(bem('block', 'elem', 'mod'), 'block__elem block__elem--mod');
tap.equal(bem('block', 'elem', ['mod1', 'mod2']), 'block__elem block__elem--mod1 block__elem--mod2');
tap.equal(bem('block', 'elem', { 'mod1': 'opt', 'mod2': true }), 'block__elem block__elem--mod1-opt block__elem--mod2');
tap.equal(bem('block', 'elem', { 'mod1': false, 'mod2': true }), 'block__elem block__elem--mod2');
tap.equal(bem('block', 'elem', { 'mod1': false, 'mod2': false }, 'mix'), 'block__elem mix');
tap.equal(bem('block', 'elem', { 'mod1': false, 'mod2': false }, ['mix1', 'mix2']), 'block__elem mix1 mix2');
tap.equal(bem('block', 'elem', { 'mod1': false, 'mod2': false }, { 'mix1': true, 'mix2': false }), 'block__elem mix1');
tap.equal(bem('block', null, { 'mod1': 'opt', 'mod2': true }, ['mix1', 'mix2']), 'block block--mod1-opt block--mod2 mix1 mix2');
