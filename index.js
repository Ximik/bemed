"use strict"

module.exports = (opts) => {
  opts = opts || {};
  const separators = opts.separators || {};
  const be = ((separator) => (block, element) => element ? block + separator + element : block)(separators.element || '__');
  const bem = ((separator) => (element, modifier) => element + separator + modifier)(separators.modifier || '--');
  const bemv = ((separator) => (element, modifier, value) => bem(element, modifier) + separator + value)(separators.value || '-');

  const build = (block, element, modifiers, mixins) => {
    element = be(block, element);
    let className = element;

    switch (typeof modifiers) {
      case 'string':
        className += ' ' + bem(element, modifiers);
        break;
      case 'object':
        if (Array.isArray(modifiers)) {
          for (let i = 0; i < modifiers.length; i++) {
            className += ' ' + bem(element, modifiers[i]);
          }
          break;
        }
        for (let modifier in modifiers) {
          let value = modifiers[modifier];
          if (value === false) {
            continue;
          }
          className += ' ' + bem(element, modifier);
          if (value !== true) {
            className += ' ' + bemv(element, modifier, value);
          }
        }
        break;
    }

    switch (typeof mixins) {
      case 'string':
        className += ' ' + mixins;
        break;
      case 'object':
        if (Array.isArray(mixins)) {
          for (let i = 0; i < mixins.length; i++) {
            className += ' ' + mixins[i];
          }
          break;
        }
        for (let mixin in mixins) {
          if (mixins[mixin]) {
            className += ' ' + mixin;
          }
        }
        break;
    }
    return className;
  }

  return { build, helpers: { be, bem, bemv } };
};
