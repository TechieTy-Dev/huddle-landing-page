/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				pink: "hsl(322, 100%, 66%)",
				gray: "hsl(208, 11%, 55%)",
				lightcyan: "hsl(193, 100%, 96%)",
				darkcyan: "hsl(192, 100%, 9%)",
			},
		},
	},
	plugins: [],
};
