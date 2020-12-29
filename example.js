const { maybeHas } = require("./lib");

const obj = {
  anchor: {
    anchor: {
      anchor: 1,
    },
  },
  bank: 2,
  case: {
    anchor: {
      bank: {
        anchor: 99,
      },
    },
  },
};

const objHas = maybeHas(obj);

const m = objHas("anchor.anchor.anchor");

const n = objHas("case.anchor.bank.anchor");

const r = objHas("case");

const v = objHas("does.not.exist");

console.log(m);
console.log(n);
console.log(r);
console.log(v);

const apiResponse = {
  status: 200,
  statusText: "",
  data: {
    data: {
      token: "base64",
      guid: "something-here",
    },
  },
};

(async function getToken() {
  const response = await Promise.resolve(apiResponse);

  if (maybeHas(response)("data.data.token"))
    console.log(response.data.data.token);
  else console.log("token not extant");
})();
