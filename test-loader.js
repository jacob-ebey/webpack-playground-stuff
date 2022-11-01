module.exports = async function testLoader(content) {
  let callback = this.async();

  let resourcePath = this.resourcePath;

  const styleURLMod = resourcePath + "?url";
  const styleNamedExportsMod = resourcePath + "?css-named-exports";

  return callback(
    undefined,
    `
import styleHref from ${JSON.stringify(styleURLMod)};
export * from ${JSON.stringify(styleNamedExportsMod)};

export default styleHref;
`
  );
};
