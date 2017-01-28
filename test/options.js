"use strict"

const tap = require('tap'),
      build = require('../index')({
        separators: {
          element: '____',
          modifier: '----',
          value: '-_-'
        }
      }).build;

tap.equal(build('block', 'element', { 'mod': 'val' }), 'block____element block____element----mod block____element----mod-_-val');
