import Ryelogo from './Ryelogo';
import Link from 'next/link';

const Topnav = ({ routeLink, routeName }) => {
	return (
		<div className="topNav flex-center-ver">
			<div className="homeLink flex-row flex-center-ver">
				<div className="homeItem">
					<Link href={routeLink} className="text-link">
						{routeName}
					</Link>
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
};

Topnav.defaultProps = {
	routeLink: '/',
	routeName: 'HOME',
};

export default Topnav;
