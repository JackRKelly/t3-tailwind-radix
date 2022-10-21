import { tw } from "../utils/tw";
import Link from "next/link";
import React from "react";

const LinkAttribute = tw.a`text-base text-footer-type cursor-pointer`;

const RightReserved = tw.p`text-center text-base text-footer-type-faint`;

export const Footer: React.FC = (props) => {
	return (
		<>
			<div className="w-full h-1 bg-gradient-to-r from-primary/60 to-secondary/60"></div>
			<footer className="bg-footer">
				<div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
					<nav className="-my-2 -mx-5 flex flex-wrap justify-center" aria-label="Footer">
						<div className="py-2 px-5">
							<Link href="/">
								<LinkAttribute href="/">Home</LinkAttribute>
							</Link>
						</div>

						<div className="py-2 px-5">
							<Link href="/careers">
								<LinkAttribute href="/careers">Careers</LinkAttribute>
							</Link>
						</div>

						<div className="py-2 px-5">
							<Link href="/careers">
								<LinkAttribute href="/careers">Careers</LinkAttribute>
							</Link>
						</div>

						<div className="py-2 px-5">
							<Link href="/careers">
								<LinkAttribute href="/careers">Careers</LinkAttribute>
							</Link>
						</div>
					</nav>

					<div className="my-5 flex items-center justify-center">
						<Link href="/components/pages" passHref>
							<a>
								<span className="flex flex-row items-center">
									<svg
										className="h-12 w-12 pr-3"
										viewBox="0 0 407 332"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M206.423 178.235C205.707 175.135 201.293 175.135 200.577 178.235L173.178 296.908C172.847 298.344 172.071 299.639 170.96 300.608L136.963 330.274C135.688 331.387 134.053 332 132.361 332H70.6662C64.481 332 61.3352 324.566 65.6419 320.126L158.452 224.454C160.297 222.551 158.949 219.365 156.298 219.365H103.996C102.622 219.365 101.279 219.769 100.133 220.527L28.9262 267.645C24.2728 270.724 18.0634 267.388 18.0634 261.808V211.822C18.0634 209.297 19.4235 206.967 21.6228 205.726L88.2147 168.142C89.2646 167.549 90.4497 167.238 91.6553 167.238H125.519C128.448 167.238 129.641 163.472 127.247 161.786L2.96805 74.2163C1.10707 72.905 0 70.7706 0 68.4941V7.29405C0 1.66039 6.31603 -1.66531 10.961 1.52253L167.298 108.816C170.324 110.893 174.441 110.28 176.731 107.41L198.028 80.714C200.83 77.2012 206.17 77.2012 208.972 80.714L230.305 107.455C232.579 110.306 236.662 110.933 239.687 108.896L396.09 3.56642C400.74 0.435128 407 3.76681 407 9.37253V68.4941C407 70.7706 405.893 72.905 404.032 74.2163L279.753 161.786C277.359 163.472 278.552 167.238 281.481 167.238H315.345C316.55 167.238 317.735 167.549 318.785 168.142L385.377 205.726C387.576 206.967 388.937 209.297 388.937 211.822V261.808C388.937 267.388 382.727 270.724 378.074 267.645L306.867 220.527C305.721 219.769 304.378 219.365 303.004 219.365H249.939C247.282 219.365 245.937 222.562 247.793 224.462L341.256 320.108C345.587 324.54 342.447 332 336.249 332H274.639C272.947 332 271.312 331.387 270.037 330.274L236.04 300.608C234.929 299.639 234.153 298.344 233.822 296.908L206.423 178.235Z"
											fill="url(#paint0_linear_9_503)"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_9_503"
												x1="0"
												y1="6.00001"
												x2="203"
												y2="332"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#FC9E97" />
												<stop offset="1" stopColor="#3B82F6" />
											</linearGradient>
										</defs>
									</svg>
									<strong
										className="font-display text-2xl font-bold tracking-tight"
										aria-label="evental homepage"
									>
										Evental
									</strong>
								</span>
							</a>
						</Link>
					</div>

					<RightReserved>
						&copy; {new Date().getFullYear()} Evental, Inc. All rights reserved.
					</RightReserved>
				</div>
			</footer>
		</>
	);
};
