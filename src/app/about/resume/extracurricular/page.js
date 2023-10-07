import Topnav from '@/components/Topnav';
import './extracurricular.css';

export default function Extracurricular() {
	return (
		<>
			<Topnav routeLink="./about/resume" routeName="RESUME"></Topnav>
			<div className="page flex-center-hor">
				<div className="container">
					<h1 className="pageHeader">Raiyan's Extra Curricular Activites</h1>

					<div className="Experiences">
						<div className="Experience">
							<div className="workTitle flex-center-ver">
								<h2 className="workPlace">MIST Computer Club</h2>
							</div>
							<ul className="workDescription">
								<li>
									Joined as an Executive member, Research and Development | 2021
								</li>
								<li>
									Mentored a group of Junior students in a Competitive
									Programming course. | 2020
								</li>
								<li>
									Mentored in a game development course using Unity. | 2020
								</li>
							</ul>
						</div>
						<div className="Experience">
							<div className="workTitle flex-center-ver">
								<h2 className="workPlace">Rajuk College Robotics Club</h2>
							</div>
							<ul className="workDescription">
								<li>
									Organized Eon Spectral Shift, a school-college-based Robotics
									Competition. | 2017
								</li>
								<li>
									Organized and Mentored in a Robotics workshop for school
									students. | 2016
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
