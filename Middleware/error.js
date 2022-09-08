const commonErrorHandler = (err, req, res, next) => {
	console.log(err.stack.red);
	if (err) {
		res.status(err.status || 500).json({ error: err.message });
	} else {
		res.status(500).json({ error: "Something went wrong!" });
	}
};

module.exports = commonErrorHandler;