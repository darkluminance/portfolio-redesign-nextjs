import Topnav from '@/components/Topnav';
import Gallery from '@/components/Gallery';
import '../../photos.css';

export default function Photography() {
	return (
		<>
			<Topnav></Topnav>
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
				{/* <div
					className="footer"
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					Go to top
				</div> */}
			</div>
		</>
	);
}
