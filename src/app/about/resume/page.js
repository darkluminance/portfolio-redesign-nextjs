import Topnav from '@/components/Topnav';
import './resume.css';

export default function Resume() {
	return (
		<>
			<Topnav routeLink="/about" routeName="ABOUT"></Topnav>
			<div className="page flex-center-hor">
				<div className="resumeContainer">
					<h1 className="pageHeader">Raiyan's Resume</h1>
				</div>
			</div>
		</>
	);
}
