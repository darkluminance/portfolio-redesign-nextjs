import Page from '@/components/page';
import Topnav from '@/components/Topnav';
import Link from 'next/link';

export default function Hobbies() {
	return (
		<Page>
			<Topnav routeLink="/about/resume" routeName="RESUME"></Topnav>
			<div className="page flex-center-hor">
				<div className="hobbyContainer">
					<h1 className="pageHeader">What I like to do</h1>
					<ul className="hobbyItems">
						<li className="hobbyItem">Travelling</li>
						<li className="hobbyItem">Photography</li>
						<li className="hobbyItem">Videography</li>
						<li className="hobbyItem">Anime</li>
						<li className="hobbyItem">Programming</li>
						<li className="hobbyItem">Making New Things</li>
					</ul>
				</div>
			</div>
		</Page>
	);
}
