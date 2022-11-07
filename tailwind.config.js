function alpha(variableName) {
	// some tailwind magic to allow us to specify opacity with CSS variables (eg: bg-app/80)
	// https://tailwindcss.com/docs/customizing-colors#using-css-variables
	return `hsla(var(--${variableName[0]}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
				// Slide Fades (In & Out)
				"slide-up-fade-in": {
					"0%": { opacity: 0, transform: "scale(.7) translateY(2px)" },
					"100%": { opacity: 1, transform: "scale(1) translateY(0)" }
				},
				"slide-up-fade-out": {
					"0%": { opacity: 1, transform: "scale(1) translateY(0)" },
					"100%": { opacity: 0, transform: "scale(.7) translateY(-2px)" }
				},
				"slide-right-fade-in": {
					"0%": { opacity: 0, transform: "scale(.7) translateX(-2px)" },
					"100%": { opacity: 1, transform: "scale(1) translateX(0)" }
				},
				"slide-right-fade-out": {
					"0%": { opacity: 1, transform: "scale(1) translateX(0)" },
					"100%": { opacity: 0, transform: "scale(.7) translateX(2px)" }
				},
				"slide-down-fade-in": {
					"0%": { opacity: 0, transform: "scale(.85) translateY(-2px)" },
					"100%": { opacity: 1, transform: "scale(1) translateY(0)" }
				},
				"slide-down-fade-out": {
					"0%": { opacity: 1, transform: "scale(1) translateY(0)" },
					"100%": { opacity: 0, transform: "scale(.85) translateY(2px)" }
				},
				"slide-left-fade-in": {
					"0%": { opacity: 0, transform: "scale(.7) translateX(2px)" },
					"100%": { opacity: 1, transform: "scale(1) translateX(0)" }
				},
				"slide-left-fade-out": {
					"0%": { opacity: 1, transform: "scale(1) translateX()" },
					"100%": { opacity: 0, transform: "scale(.7) translateX(-2px)" }
				},
				// Dialog
				"scale-fade-in": {
					"0%": { opacity: 0, transform: "scale(.95)" },
					"100%": { opacity: 1, transform: "scale(1)" }
				},
				"scale-fade-out": {
					"0%": { opacity: 1, transform: "scale(1)" },
					"100%": { opacity: 1, transform: "scale(.95)" }
				},
				// Collapsible
				"collapsible-in": {
					"0%": { maxHeight: 0 },
					"100%": { maxHeight: "var(--radix-collapsible-content-height)" }
				},
				"collapsible-out": {
					"0%": { maxHeight: "var(--radix-collapsible-content-height)" },
					"100%": { maxHeight: 0 }
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
				"slide-right": "slide-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
				// Slide Fades (In & Out)
				"slide-up-fade-in": "slide-up-fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-up-fade-out": "slide-up-fade-out 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-right-fade-in": "slide-right-fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-right-fade-out": "slide-right-fade-out 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-down-fade-in": "slide-down-fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-down-fade-out": "slide-down-fade-out 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-left-fade-in": "slide-left-fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-left-fade-out": "slide-left-fade-out 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				// Dialog
				"scale-fade-in": "scale-fade-in 0.2s ease-in-out",
				"scale-fade-out": "scale-fade-out 0.2s ease-in-out",
				// Collapsible
				"collapsible-in": "collapsible-in 0.2s ease",
				"collapsible-out": "collapsible-out 0.2s ease",
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
				// Faint = Moving to middle of palette, Bold = Moving to outer edge of palette
				type: {
					DEFAULT: alpha`color-type`
				},
				app: {
					DEFAULT: alpha`color-app`
				},
				primary: {
					bold: alpha`color-primary-bold`,
					DEFAULT: alpha`color-primary`,
					faint: alpha`color-primary-faint`
				},
				secondary: {
					DEFAULT: alpha`color-secondary`
				},
				highlight: {
					DEFAULT: alpha`color-highlight`
				},
				primitive: {
					bold: alpha`color-primitive-bold`,
					DEFAULT: alpha`color-primitive`,
					faint: alpha`color-primitive-faint`,
					edge: {
						bold: alpha`color-primitive-edge-bold`,
						DEFAULT: alpha`color-primitive-edge`,
						faint: alpha`color-primitive-edge-faint`,
						extra: {
							bold: alpha`color-primitive-edge-extra-bold`
						}
					},
					type: {
						bold: alpha`color-primitive-type-bold`,
						DEFAULT: alpha`color-primitive-type`,
						faint: alpha`color-primitive-type-faint`,
						extra: {
							faint: alpha`color-primitive-type-extra-faint`
						}
					}
				}
			},
			transitionProperty: {
				button: "box-shadow, background-color, opacity, border-radius",
				input: "box-shadow, background-color, opacity, border-radius",
				link: "box-shadow, background-color, opacity, border-radius"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms"), require("tailwindcss-radix")()]
};
