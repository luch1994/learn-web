'use strict';
const uniID = require('uni-id')
exports.main = async (event, context) => {
	const res = uniID.acceptInvite({
		uid: '5f3b5d5635d7940001788c49',
		inviteCode: 'US8XSW'
	})
	return res
};
