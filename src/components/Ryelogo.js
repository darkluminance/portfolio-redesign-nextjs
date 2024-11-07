import Image from "next/image";
import ryelogo from "../assets/images/signature.png";
import nightmode from "../assets/images/nightmode.svg";

export default function Ryelogo() {
	return (
		<div className="flex flex-row flex-gap-1">
			<Image src={ryelogo} alt="Rye Logo"></Image>
			{/* <div className="darkModeBtn">
				<Image src={nightmode} alt="Rye Logo"></Image>
			</div> */}
		</div>
	);
}
