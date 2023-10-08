import Page from '@/components/page';
import Topnav from '@/components/Topnav';
export default function Experience() {
	return (
		<Page>
			<Topnav routeLink="/about/resume" routeName="RESUME"></Topnav>
			<div className="page flex-center-hor">
				<div className="container">
					{/* <h1 className="pageHeader">Raiyan's Work Experience</h1> */}

					<div className="workExperiences">
						<div className="workExperience">
							<div className="workTitle flex-center-ver">
								<h2 className="workPlace">RedDot Digital</h2>
							</div>
							<div className="workDescription">
								<div className="workDesignation">Software Developer</div>
								<div className="workPeriod">March 2023 - present</div>
								<ul className="workProject">
									<li>
										<h3>
											Mobile and Digital Financial System for First Security
											Islami Bank Ltd.
										</h3>
										<ul className="workProjectTasks">
											<li className="workProjectTask">
												Designing and developing a payment gateway page for the
												bank using <span>NuxtJS</span>.
											</li>
											<li className="workProjectTask">
												Connecting the system with the backend API.
											</li>
											<li className="workProjectTask">
												Designing the UI for the DFS Mobile App.
											</li>
											<li className="workProjectTask">
												Adding file download features in the Report Portal using{' '}
												<span>Jasper Reports</span> and <span>Spring Boot</span>
												.
											</li>
											<li className="workProjectTask">
												Furnishing the frontend of the Report Portal.
											</li>
											<li className="workProjectTask">
												Working with documentations.
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<div className="workExperience">
							<div className="workTitle flex-center-ver">
								<h2 className="workPlace">Freelancing</h2>
							</div>
							<div className="workDescription">
								<div className="workDesignation">Software Developer</div>
								<div className="workPeriod">July 2021 - April 2022</div>
								<ul className="workProject">
									<li className="workProjectTitle">
										<h3>Class Scheduler project</h3>
										<ul className="workProjectTasks">
											<li className="workProjectTask">
												Designed and implemented a website using{' '}
												<span>HTML and CSS</span> to input an excel file with a
												list of classes, courses and teachers and generate a
												class schedule from a choice of 6 different algorithms
												using <span>JavaScript</span>.
											</li>
											<li className="workProjectTask">
												Created a database using <span>MongoDB</span> to store
												the terms, levels, courses and teachers from user input.
											</li>
											<li className="workProjectTask">
												Developed an algorithm to generate a graph of a specific
												term considering courses and teachers as the nodes.
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
