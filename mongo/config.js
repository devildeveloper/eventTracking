module.exports = {
	url : 'mongodb://localhost:27017/messages',
	settings:{
		db:{
			maxPoolSize : 10,
			native_parser:false
		}
	}
}
