"use strict";

const loaderUtils = require('loader-utils');
const tagMap = require('./componet-name');

function replaceTag (source) {
  if (type === 'boolean' && !options.prefix) {
    Object.keys(tagMap).forEach(key => {
      source = source.replace(new RegExp(`<${key}(?!-)`, 'g'), `<${tagMap[key]}`)
            .replace(new RegExp(`<\/${key}>`, 'g'), `<\/${tagMap[key]}>`);
    });
    return source;
  } else if (type === 'string' && options.prefix.length <= 4) {
    source = source.replace(new RegExp(options.prefix, 'g'), 'v');
    return source;
  } else {
    this.emitError('eagle-loader的参数options中，prefix只能为布尔值（true 或 false），或者string类型并且length不能超过4位！');
    return false;
  }
}

function eagleLoader (source) {
  const options = loaderUtils.getOptions(this) || { prefix: true };
  const type = typeof options.prefix;

  this.cacheable();

  return replaceTag(source);
}

module.exports = eagleLoader;
