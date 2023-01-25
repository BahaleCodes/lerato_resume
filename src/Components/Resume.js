import React, { Component } from "react";

class Resume extends Component {
	getRandomColor() {
		let letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	render() {
		if (!this.props.data) return null;

		const skillmessage = this.props.data.skillmessage;
		const education = () => {
			return (
				<div>
					<div>
						<h3>University of Johannesburg</h3>
						<li className="info">
							{"B Ed in Senior Phase & FET Teaching"}
							<br />
							<span>&bull;</span>
							<em className="date">Currently studying</em>
						</li>
					</div>

					<div >
						<h3>{"Ermelo Hoërskool"}</h3>
						<li className="info">
							{"Matriculation"}

							<br />
							<span>&bull;</span>
							<em className="date">{2018}</em>
						</li>
					</div>
				</div>
			);
		};

		// const certificates = this.props.data.certificates.map(function (certificates) {
		// 	return (
		// 		<div key={certificates.school}>
		// 			<h3>{certificates.school}</h3>

		// 			<li className='info'>
		// 				{certificates.name}
		// 			</li>
		// 		</div>
		// 	)
		// });

		const work = () => {
			return (
				<div>
					{/* <div key={work.company}>
						<h3>{work.company}</h3>
						<p className="info">
							{work.title}
							<span>&bull;</span> <em className="date">{work.years}</em>
						</p>
						<ul>{work.description.map((d, i) => (
							<h4 key={i}>{d}</h4>
						))}</ul>
					</div> */}
					<div>
						<h3>{"Bahale Codes Software"}</h3>
						<p className="info">
							{"Administrative officer and Business Analyst"}
							<span>&bull;</span> <em className="date">{"October 2020 - Present"}</em>
						</p>
						<ul>
							<h4>Maintaining relations with costumers on behalf of the company.</ h4>
							<h4>Following up on document processing between the company and the clients</ h4>
							<h4>Setting up meetings between clients and the company.</ h4>
							<h4>Following up on task completions with the development team.</ h4>
							<h4>Negotiating quotations to clients and setting up payment plans if needed.</ h4>
							<h4>Translating business requirements to software developers.</ h4>
							<h4>Testing and ensuring quality for the end user</ h4>
						</ul>
					</div>
					<br />
					<div>
						<h3>{"Erries (Ermelo Hoërskool temporary restaurant)"}</h3>
						<p className="info">
							{"Waitress"}
							<span>&bull;</span> <em className="date">{"March 2016 - March 2019"}</em>
						</p>
						{/* <ul>
							<h4>{"Identification, initiating and implementing projects to automate the support functions to create efficiencies in claims, policy servicing and underwriting processes. (Operational Efficiencies)"}</h4>
							<h4>{"Problem solving: Assisting stakeholders in resolving complex problems while ensuring adherence to standards. (Stakeholder Management)"}</h4>
							<h4>{"Implementation of system and business continuity controls (IT and Operational Governance)"}</h4>
						</ul> */}
						<br />
					</div>
				</div>
			);
		};

		// const projects = this.props.data.projects.map(function (projects) {
		// 	return (
		// 		<div key={projects.title}>
		// 			<h3>{projects.title}</h3>
		// 			<p className="info-p">
		// 				{projects.desc}
		// 				<br />
		// 				<span>&bull;</span> <em className="date">{projects.year}</em>
		// 			</p>
		// 		</div>
		// 	);
		// });

		const skills = this.props.data.skills.map(skills => {
			const backgroundColor = this.getRandomColor();
			const className = "bar-expand " + skills.name.toLowerCase();
			const width = skills.level;

			return (
				<React.Fragment>
					<li key={skills.name}>
						<span style={{ width, backgroundColor }} className={className}>
							<em>{skills.name}	Experience: {skills.xp}</em>
						</span>
					</li>
				</React.Fragment>
			);
		});

		return (
			<section id="resume">
				<div className="row education">
					<h1>
						<span>Education</span>
					</h1>
					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">{education()}</div>
						</div>
					</div>
				</div>

				{/* <div className='row certificates'>
					<h1>
						<span>Certificates</span>
					</h1>
					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">{certificates}</div>
						</div>
					</div>
				</div> */}


				<div className="row work">
					<h1>
						<span>Work</span>
					</h1>
					<div className="nine columns main-col">{work()}</div>
				</div>


				{/* <div className="row work">
					<h1>
						<span>Projects</span>
					</h1>
					<div className="nine columns main-col">{projects}</div>
				</div> */}

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<p>{skillmessage}</p>

						<div className="bars">
							<ul className="skills">{skills}</ul>
						</div>
					</div>
				</div>

			</section>
		);
	}
}

export default Resume;
