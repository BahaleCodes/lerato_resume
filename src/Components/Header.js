import React, { Component } from "react";

class Header extends Component {

	render(props) {
		if (!this.props.data) return null;

		// const name = this.props.data.name;
		const description = this.props.data.description;

		const networks = this.props.data.social.map(function (network) {
			return (
				<li key={network.name}>
					<a href={network.url}>
						<i className={network.className}></i>
					</a>
				</li>
			);
		});

		return (
			<header id='header'>
				<nav id="nav-wrap">
					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">
						Show navigation
					</a>
					<a className="mobile-btn" href="#home" title="Hide navigation">
						Hide navigation
					</a>

					<ul id="nav" className="nav">
						<li className="current">
							<a className="smoothscroll" href="#home">
								Home
							</a>
						</li>

						<li>
							<a className="smoothscroll" href="#about">
								About
							</a>
						</li>

						<li>
							<a className="smoothscroll" href="#resume">
								Resume
							</a>
						</li>

						<li>
							<a className="smoothscroll" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<div className='banner'>
					<div className="logo-sec">
						<ul className="social-links">{networks}</ul>
						<img className="header_img" src={'/images/name_logo2.png'} alt='Logo' loading='lazy' />
						<div className='logo-text'>
							{/* <h2>CEO at Digital Solution Foundry</h2>
							<h2>MBA</h2>
							<h2>Bachelor of Information Science</h2> */}
							<h3>{description}</h3>
						</div>
					</div>
					<div className="text-sec">
						{/* <div className='banner-text'>
							<h1>Digital Portfolio of </h1>
							<h1 className="responsive-headline">{name}</h1>
							<h2>CEO at Digital Solution Foundry</h2>
							<h2>MBA</h2>
							<h2>Bachelor of Information Science</h2>
							<h3>{description}</h3>
						</div> */}
					</div>
				</div>

			</header>
		);
	}
}

export default Header;
