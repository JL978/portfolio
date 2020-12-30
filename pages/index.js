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
