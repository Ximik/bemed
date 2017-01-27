module.exports = (opts = {}) => {
  const sElement = ((separator) => (block, element) => element ? block + separator + element : block)(opts.elementSeparator || '__');
  const sModifier = ((separator) => (element, modifier) => element + separator + modifier)(opts.modSeparator || '--');
  const sModifierValue = ((separator) => (element, modifier, value) => sModifier(element, modifier) + separator + value)(opts.modValueSeparator || '-');

  return (block = '', element, modifiers, mixins) => {
    element = sElement(block, element);
    let className = element;

    switch (typeof modifiers) {
      case 'string':
        className += ' ' + sModifier(element, modifiers);
        break;
      case 'object':
        if (Array.isArray(modifiers)) {
          for (let i = 0; i < modifiers.length; i++) {
            className += ' ' + sModifier(element, modifiers[i]);
          }
          break;
        }
        for (let modifier in modifiers) {
          let value = modifiers[modifier];
          if (value === false) {
            continue;
          }
          if (value === true) {
            className += ' ' + sModifier(element, modifier);
            continue;
          }
          className += ' ' + sModifierValue(element, modifier, value);
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
};
