module.exports.pitch = async function pitch(source) {
  const callback = this.async();
  const exports = await this.importModule(
    this.resourcePath + ".webpack[javascript/auto]" + "!=!" + source,
    {}
  );

  let styles = exports.default[0].slice(1).join("\n");

  return callback(undefined, styles);
};
