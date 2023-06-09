import Link from 'next/link';
import Ryelogo from './Ryelogo';
import '../app/topbar.css';

export default function Topbar() {
	return (
		<nav className="topbar">
			<div className="ryeLogo flex-center-ver">
				<Ryelogo></Ryelogo>
			</div>
			<div className="navItems flex-center-hor flex-center-ver">
				<ul className="navList flex-row">
					<li className="navList-Item">
						<Link href="/about">About</Link>
					</li>
					<li className="navList-Item">
						<Link href="/work">Projects</Link>
					</li>
					<li className="navList-Item">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
