const identity = _ => _;

const Maybe = { Just, Nothing, of: Just };

const isString = isType('String');
const isObject = isType('Object');

function Just(v) {
  return { map, chain, ap };

  function map(fn) {
    return Just(fn(v));
  }

  function chain(fn) {
    return fn(v);
  }

  function ap(monad) {
    return monad.map(v);
  }
}

function Nothing() {
  return {
    map: Nothing,
    chain: Nothing,
    ap: Nothing
  };
}

function fromNullable(val) {
  if (val == null) return Maybe.Nothing();
  return Maybe.of(val);
}

function Prop(prop) {
  return function (obj) {
    return fromNullable(obj[prop]);
  };
}

function isType(name) {
  return function (obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
}

module.exports = {
  Maybe,
  Prop,
  identity,
  isString,
  isObject
};
