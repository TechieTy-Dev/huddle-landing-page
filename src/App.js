// CSS STYLES
import "./App.css";
// Imported Images
import {
	logo,
	email,
	phone,
	location,
	user,
	grow,
	mockup,
	convo,
} from "./images";
// Font Awesome Imports
import FooterLogo from "./FooterLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
	return (
		<div className="App bg-lightcyan h-[100vh]">
			{/* HEADER */}
			<header className="flex justify-between w-100 pt-8 mx-4 lg:items-center lg:align-middle lg:justify-between lg:mx-36 lg:pt-12 lg:w-[80%]">
				{/* LOGO */}
				<img src={logo} alt="Logo" className="w-[42%] h-8 lg:w-[15%]" />
				{/* HEADER CTA */}
				<button className="bg-white shadow-lg rounded-full p-1 w-[30%] text-darkcyan font-bold hover:cursor-pointer hover:text-gray lg:w-[20%]">
					Try it Free
				</button>
			</header>
			<main className="w-[100%] mt-24 relative">
				{/* Hero */}
				<section className="bg w-[80%] mx-auto lg:flex">
					<div className="lg:w-[80%] lg:flex lg:flex-col lg:text-left ">
						<h1 className="mt-12 text-3xl leading-10">
							{" "}
							Build The Community Your Fans Will Love
						</h1>
						<p className="leading-7 text-darkcyan tracking-wide mt-10 w-[90%] mx-auto lg:w-100 lg:mx-0">
							{" "}
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.{" "}
						</p>
						{/* HERO CTA */}
						<button className="bg-pink p-3 shadow-lg text-sm text-white font-semibold  mt-8 rounded-full w-[60%] hover:opacity-60 lg:w-[60%] lg:mt-10">
							Get Started For Free
						</button>
					</div>
					{/* Illustration */}
					<img
						src={mockup}
						alt="mockup"
						className="mt-20 w-[100%] mx-auto lg:w-[52%] lg:mx-0 lg:mt-0"
					/>
				</section>
				{/* BENEFIT #1 */}
				<section className="bg-white pt-20 pb-10 mt-10 lg:mt-20">
					<div className="bg-white shadow w-[90%] mx-auto p-10 lg:flex rounded-3xl lg:flex-row-reverse lg:justify-center lg:align-middle lg:items-center lg:text-left lg:mt-8 lg:w-[85%]">
						<img
							src={grow}
							alt="Together"
							className="w-[80%] mx-auto lg:w-[40%]"
						/>
						<div className="lg:ml-24">
							<h2 className="text-darkcyan text-2xl mt-12">Grow Together</h2>
							<p className="mt-6 text-gray leading-7 lg:w-[70%]">
								{" "}
								Generate meaningful discussions with your audience and build a
								strong, loyal community. Think of the insightful conversations
								you miss out on with a feedback form.{" "}
							</p>
						</div>
					</div>
					{/* BENEFIT #2 */}
					<div className="bg-white shadow w-[90%] mx-auto p-10 lg:flex rounded-3xl mb-12  lg:flex-row lg:justify-center lg:align-middle lg:items-center lg:text-left lg:mt-8 lg:w-[85%]">
						<img
							src={convo}
							alt="group of people"
							className="w-[80%] mx-auto lg:w-[40%]"
						/>
						<div className="lg:mx-24 lg:text-left">
							<h2 className="text-darkcyan text-2xl mt-12 ">
								Flowing Conversations
							</h2>
							<p className="mt-6 text-gray leading-7 tracking-wide w-[90%] mx-auto lg:mx-0">
								{" "}
								You wouldn't paginate a conversation in real life, so why do it
								online? Our threads have just-in-time loading for a more natural
								flow.
							</p>
						</div>
					</div>
					{/* BENEFIT #3 */}
					<div className="bg-white shadow w-[90%] mx-auto p-10 mb-28 lg:flex rounded-3xl lg:flex-row-reverse lg:justify-center lg:align-middle lg:items-center lg:text-left lg:mt-8 lg:w-[85%]">
						<img
							src={user}
							alt="Users"
							className="w-[80%] mx-auto lg:w-[40%]"
						/>
						<div className="lg:flex lg:flex-col lg:ml-24">
							<h2 className="text-darkcyan text-2xl mt-12">Your Users</h2>
							<p className="mt-6 text-gray leading-7 tracking-wide w-[88%] mx-auto lg:mx-0 lg:w-[74%]">
								It takes no time at all to integrate Huddle with your app's
								authentication solution. This means, once signed in to your app,
								your users can start chatting immediately.
							</p>
						</div>
					</div>
					{/* CTA SECTION */}
					<div className="bg-lightcyan shadow rounded-3xl w-[90%] px-4 py-16 mb-12 absolute left-[24px] lg:left-[300px] lg:w-[60%] lg:py-16">
						<h2 className="text-darkcyan text-xl mb-6 lg:tracking-wide lg:text-2xl ">
							Ready To Build Your Community?
						</h2>
						<button className="bg-pink p-3 shadow-lg text-sm text-white font-semibold rounded-full w-[60%] hover:opacity-60 lg:w-[40%] lg:p-4">
							Get Started For Free
						</button>
					</div>
				</section>
			</main>
			{/* FOOTER */}
			<footer className="bg-darkcyan lg:grid lg:grid-cols-4 pt-40 mt-32 lg:px-12 lg:py-24 ">
				{/* FOOTER LOGO */}
				<div className="ml-4 lg:flex lg:flex-col lg:items-start lg:align-middle lg:justify-center">
					<FooterLogo />

					{/* GRID COL 1 - CONTACT DETAILS */}
					{/* LOCATION DETAILS */}
					<div className="flex items-start mt-10">
						<img src={location} alt="location marker" className="mx-4" />
						<p className="text-left text-white tracking-wide w-[80%] leading-7 lg:w-[90%]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>

					{/* PHONE DETAILS */}
					<div className="flex items-start mt-8 ">
						<img src={phone} alt="phone icon" className="mx-4" />
						<p className="text-left text-white tracking-wide">
							+1-543-123-4567
						</p>
					</div>
					{/* EMAIL DETAILS */}
					<div className="flex items-start mt-8">
						<img src={email} alt="email icon" className="mx-4" />
						<p className="text-left text-white tracking-wide">
							example@huddle.com
						</p>
					</div>
				</div>
				{/* GRID COL 2 - NAV LINKS */}
				<div className="mt-20 text-left ml-8 text-white lg:mt-20 lg:flex lg:flex-col  lg:items-center ">
					<ul className="flex flex-col gap-4">
						<li className="hover:underline hover:cursor-pointer">About Us</li>
						<li className="hover:underline hover:cursor-pointer">What We Do</li>
						<li className="hover:underline hover:cursor-pointer">FAQ</li>
					</ul>
				</div>
				{/* GRID COL 3 - NAV LINKS */}
				<div className="mt-4 lg:mt-20 lg:flex lg:flex-col  lg:items-center text-left ml-8 text-white">
					<ul className="flex flex-col gap-4">
						<li className="hover:underline hover:cursor-pointer">Career</li>
						<li className="hover:underline hover:cursor-pointer">Blog</li>
						<li className="hover:underline hover:cursor-pointer">Contact Us</li>
					</ul>
				</div>
				{/* GRID COL 4 - SOCIAL ICONS */}
				<div className="mt-12 mb-4 lg:mb-0 lg:flex lg:flex-col  lg:items-start lg:mt-20 lg:justify-between">
					<ul className="flex justify-center gap-4 mb-6">
						<li className="border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white hover:border-pink hover:text-pink hover:cursor-pointer">
							<FontAwesomeIcon icon={faFacebookF} />
						</li>
						<li className="border-2 border-white rounded-full text-white h-10 w-10 flex items-center justify-center hover:border-pink hover:text-pink hover:cursor-pointer">
							<FontAwesomeIcon icon={faTwitter} />
						</li>
						<li className="border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white hover:border-pink hover:text-pink hover:cursor-pointer">
							<FontAwesomeIcon icon={faInstagram} />
						</li>
					</ul>
					{/* COPYRIGHT */}
					<span className="text-white text-xs">
						{" "}
						&copy; Copyright 2018 Huddle. All rights reserved.
					</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
