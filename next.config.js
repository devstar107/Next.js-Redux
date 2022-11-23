module.exports = {
	compiler: {
		styledComponents: true,
	},
	env: {
		API_URL: process.env.API_URL || " https://ulventech-react-exam.netlify.app/api/form",
		API_TOKEN: process.env.API_TOKEN || "API_TOKEN"
	},
	reactStrictMode: true,
};
