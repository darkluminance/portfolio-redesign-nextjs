import Ryelogo from './Ryelogo';
import Link from 'next/link';
import '../app/topnav.css';

export default function Topnav() {
	return (
		<div className="topNav flex-center-ver">
			<div className="homeLink flex-row flex-center-ver">
				<div className="homeItem">
					<Link href="/">HOME</Link>
				</div>
				<div className="homeLine"></div>
			</div>
			<div className="logoRight">
				<div className="ryeLogo flex-center-ver">
					<Ryelogo></Ryelogo>
				</div>
			</div>
		</div>
	);
}
