"use strict"

const tap = require('tap'),
      helpers = require('../index')().helpers;

tap.equal(
  helpers.be('block', 'element'),
  'block__element'
);
tap.equal(
  helpers.bem('element', 'modifier'),
  'element--modifier'
);
tap.equal(
  helpers.bemv('element', 'modifier', 'value'),
  'element--modifier-value'
);
