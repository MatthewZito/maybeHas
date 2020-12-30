const { Maybe, Prop, isString, isObject, identity } = require('./core');

/**
 * @description Builds a function to evaluate nested properties on a given object
 * @param {object} obj The object on which the returned function will evaluate property chains
 * @returns {function}
 */
function maybeHas(obj) {
	if (!isObject(obj)) throw new Error('Must be of type Object');
	return function (propList) {
		if (!propList.length === 1 && !isString(propList))
			throw new Error("Must be a '.' delimited string");

		const props = propList.split('.');

		let prospect = Maybe.of(obj);

		for (const candidate of props) {
			prospect = prospect.chain(Prop(candidate));
		}

		return !prospect.chain(identity).hasOwnProperty('chain');
	};
}

module.exports = maybeHas;
