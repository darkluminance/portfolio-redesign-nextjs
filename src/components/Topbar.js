import Link from "next/link";
import Ryelogo from "./Ryelogo";

export default function Topbar() {
	return (
		<nav className="topbar">
			<div className="ryeLogo flex-center-ver">
				<Ryelogo></Ryelogo>
			</div>
			<div className="navItems flex-center-hor flex-center-ver">
				<ul className="navList flex-row">
					<li className="navList-Item">
						<Link
							href="/about/cv"
							target="__blank"
							className="text-link italic"
						>
							CV
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/about" className="text-link italic">
							About
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/work" className="text-link italic">
							Projects
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/contact" className="text-link italic">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
