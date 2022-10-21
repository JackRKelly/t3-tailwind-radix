function alpha(variableName) {
	// some tailwind magic to allow us to specify opacity with CSS variables (eg: bg-app/80)
	// https://tailwindcss.com/docs/customizing-colors#using-css-variables
	return `rgba(var(--${variableName[0]}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Segment", "-apple-system", "sans-serif"]
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
			},
			boxShadow: {
				slider: "0 0 0 5px rgba(0, 0, 0, 0.3)"
			},
			keyframes: {
				// Dropdown menu
				"scale-in": {
					"0%": { opacity: 0, transform: "scale(0)" },
					"100%": { opacity: 1, transform: "scale(1)" }
				},
				"slide-down": {
					"0%": { opacity: 0, transform: "translateY(-10px)" },
					"100%": { opacity: 1, transform: "translateY(0)" }
				},
				"slide-up": {
					"0%": { opacity: 0, transform: "translateY(10px)" },
					"100%": { opacity: 1, transform: "translateY(0)" }
				},
				// Tooltip
				"slide-up-fade": {
					"0%": { opacity: 0, transform: "translateY(2px)" },
					"100%": { opacity: 1, transform: "translateY(0)" }
				},
				"slide-right-fade": {
					"0%": { opacity: 0, transform: "translateX(-2px)" },
					"100%": { opacity: 1, transform: "translateX(0)" }
				},
				"slide-down-fade": {
					"0%": { opacity: 0, transform: "translateY(-2px)" },
					"100%": { opacity: 1, transform: "translateY(0)" }
				},
				"slide-left-fade": {
					"0%": { opacity: 0, transform: "translateX(2px)" },
					"100%": { opacity: 1, transform: "translateX(0)" }
				},
				// Navigation menu
				"enter-from-right": {
					"0%": { transform: "translateX(200px)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 }
				},
				"enter-from-left": {
					"0%": { transform: "translateX(-200px)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 }
				},
				"exit-to-right": {
					"0%": { transform: "translateX(0)", opacity: 1 },
					"100%": { transform: "translateX(200px)", opacity: 0 }
				},
				"exit-to-left": {
					"0%": { transform: "translateX(0)", opacity: 1 },
					"100%": { transform: "translateX(-200px)", opacity: 0 }
				},
				"scale-in-content": {
					"0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
					"100%": { transform: "rotateX(0deg) scale(1)", opacity: 1 }
				},
				"scale-out-content": {
					"0%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
					"100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 }
				},
				"fade-in": {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				},
				"fade-out": {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 }
				},
				// Toast
				"toast-hide": {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 }
				},
				"toast-slide-in-right": {
					"0%": { transform: `translateX(calc(100% + 1rem))` },
					"100%": { transform: "translateX(0)" }
				},
				"toast-slide-in-bottom": {
					"0%": { transform: `translateY(calc(100% + 1rem))` },
					"100%": { transform: "translateY(0)" }
				},
				"toast-swipe-out": {
					"0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
					"100%": {
						transform: `translateX(calc(100% + 1rem))`
					}
				}
			},
			animation: {
				// Dropdown menu
				"scale-in": "scale-in 0.2s ease-in-out",
				"slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
				// Tooltip
				"slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-right-fade": "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
				// Navigation menu
				"enter-from-right": "enter-from-right 0.25s ease",
				"enter-from-left": "enter-from-left 0.25s ease",
				"exit-to-right": "exit-to-right 0.25s ease",
				"exit-to-left": "exit-to-left 0.25s ease",
				"scale-in-content": "scale-in-content 0.2s ease",
				"scale-out-content": "scale-out-content 0.2s ease",
				"fade-in": "fade-in 0.2s ease",
				"fade-out": "fade-out 0.2s ease",
				// Toast
				"toast-hide": "toast-hide 100ms ease-in forwards",
				"toast-slide-in-right": "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				"toast-slide-in-bottom": "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				"toast-swipe-out": "toast-swipe-out 100ms ease-out forwards"
			},
			colors: {
				navigation: {
					DEFAULT: alpha`color-navigation`,
					type: alpha`color-navigation-type`,
					faint: alpha`color-navigation-faint`
				},
				button: {
					DEFAULT: alpha`color-button`,
					bold: alpha`color-button-bold`,
					type: alpha`color-button-type`
				},
				type: {
					DEFAULT: alpha`color-type`
				},
				app: {
					DEFAULT: alpha`color-app`
				},
				primary: {
					DEFAULT: "#0066FF",
					50: "#B8D4FF",
					100: "#A3C8FF",
					200: "#7AAFFF",
					300: "#5297FF",
					400: "#297EFF",
					500: "#0066FF",
					600: "#0050C7",
					700: "#00398F",
					800: "#002357",
					900: "#000C1F"
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms"), require("tailwindcss-radix")()]
};
