import Topnav from '@/components/Topnav';
import Gallery from '@/components/Gallery';
import Page from '@/components/page';

export default function Photography() {
	return (
		<Page>
			<Topnav routeLink="/about" routeName="ABOUT"></Topnav>
			<div className="page photographyPage flex-center-hor">
				<div className="pageContent">
					<h1 className="pageHeader">My Photographs</h1>
					<div className="pageText">
						As a hobbyist, I have a passion for capturing moments through my
						lens. My gallery showcases a diverse range of subjects, including
						travels, street scenes, and breathtaking landscapes. I hope you
						enjoy viewing my shots.
					</div>
					<Gallery></Gallery>
				</div>
			</div>
		</Page>
	);
}
