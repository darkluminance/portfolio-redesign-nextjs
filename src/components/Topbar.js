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
						<Link href="/about" className="text-link">
							About
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/work" className="text-link">
							Projects
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/contact" className="text-link">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
