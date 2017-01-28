"use strict"

const tap = require('tap'),
      generate = require('../index')({
        separators: {
          element: '____',
          modifier: '----',
          value: '-_-'
        }
      }).generate;

tap.equal(generate('block', 'element', { 'mod': 'val' }), 'block____element block____element----mod block____element----mod-_-val');
