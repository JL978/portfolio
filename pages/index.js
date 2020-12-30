export default function Home() {
	return (
		<>
			<div className="page">
				<div className="hero">
					<div className="content">
						<h1>Making web apps from nanoparticles</h1>
						<div className="cta">
							<button>How?</button>
							<button className="button-secondary">Contact me</button>
						</div>
					</div>
				</div>
			</div>
			<div className="page">
				<div className="about">
					<div className="info">
						<h3>about me</h3>
						<h2>Can I really make web apps out of nanoparticles?</h2>
						<p>Not really no, sorry for the clickbait title :)</p>
						<p>
							Although I did go to the University of Toronto for 5 years to be a
							materials engineer. That includes an year-long internship where I
							was making{" "}
							<b>nanoparticles that turn carbon dioxide into renewable fuels</b>
						</p>
						<p>
							That said, I discovered my love for programming during the very
							same internship by building <b>my first program</b> and I now
							dedicate my time self-learning and practicing all things web
							development
						</p>
						<p>
							I believe project-based learning is the fastest way to learn,
							therefore I have wasted no time building apps using techonolgies
							such as React, Node.js, Angular, Express.js, Socket.io, etc.
						</p>
						<a href="#projects">
							<b>Check out my projects</b>
						</a>
					</div>
					<div className="img"></div>
				</div>
			</div>

			<div className="page">
				<div className="contact">
					<div className="info">
						<h2>Contacts</h2>
						<p>
							I am open to opportunities right now. If you have a project you
							think I would be a good fit, please don't hesitate to contact me
							through any one of the following means
						</p>
						<h3>Phone</h3>
						<p>1 (647) 570-2405</p>
						<h3>Email</h3>
						<p>JimmyLam045@gmail.com</p>
					</div>
					<div className="or">Or</div>
					<div className="message">
						<form>
							<h2>Leave a message</h2>
							<input type="text" id="name" placeholder="Your name"></input>
							<input type="text" id="email" placeholder="Your email"></input>
							<textarea placeholder="Your message"></textarea>
							<input type="submit" value="send message"></input>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
