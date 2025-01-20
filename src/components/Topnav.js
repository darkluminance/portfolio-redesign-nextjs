import Ryelogo from "./Ryelogo";
import Link from "next/link";
import { useState } from "react"; // Add this import
import SpinnerBackdrop from "./SpinnerBackdrop";

const Topnav = ({ routeLink, routeName }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
	};

	return (
		<div className="topNav flex-center-ver">
			{isClicked && <SpinnerBackdrop></SpinnerBackdrop>}
			<div className="homeLink flex-row flex-center-ver">
				<div className="homeItem">
					<Link href={routeLink} className="text-link" onClick={handleClick}>
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
	routeLink: "/",
	routeName: "HOME",
};

export default Topnav;
