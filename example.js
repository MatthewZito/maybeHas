const maybeHas = require('./lib');

const obj = {
	anchor: {
		anchor: {
			anchor: 0
		}
	},
	bank: 2,
	case: {
		anchor: {
			bank: {
				anchor: 99
			}
		}
	}
};

const objHas = maybeHas(obj);

[
	objHas('anchor.anchor.anchor'),
	objHas('case.anchor.bank.anchor'),
	objHas('case'),
	objHas('does.not.exist')
].forEach(output => console.log(output));

const apiResponse = {
	status: 200,
	statusText: '',
	data: {
		data: {
			token: 'base64',
			guid: 'something-here'
		}
	}
};

(async function getToken() {
	const response = await Promise.resolve(apiResponse);

	if (maybeHas(response)('data.data.token'))
		console.log(response.data.data.token);
	else console.log('token not extant');
})();
