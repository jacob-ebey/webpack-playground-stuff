module.exports.pitch = async function pitch(source) {
  console.log({ source });
  const callback = this.async();
  const exports = await this.importModule(
    this.resourcePath + ".webpack[javascript/auto]" + "!=!" + source,
    {}
  );

  // let styles = exports.default[0].slice(1).join("\n");
  console.log(exports.default);

  return callback(
    undefined,
    `export default ${JSON.stringify(exports.default)}`
  );
};
