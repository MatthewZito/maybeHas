const { Maybe, Prop, isString, identity } = require("./core");

function maybeHas(obj) {
  return function (propList) {
    if (!propList.length === 1 && !isString(propList))
      throw new Error("Must be a '.' delimited string");

    const props = propList.split(".");

    let prospect = Maybe.of(obj);

    for (const candidate of props) {
      prospect = prospect.chain(Prop(candidate));
    }

    return !prospect.chain(identity).hasOwnProperty("chain");
  };
}

module.exports = {
  maybeHas,
};
