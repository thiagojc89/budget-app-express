const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	firstName:{type:String, required:true},
	lastName:{type:String, required:true},
	password:{type:String, required:true},
	email:{type:String, required:true},
	budget:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Group'
	}],
	balance: Array
})

const User = mongoose.model('User', userSchema);

module.exports = User;