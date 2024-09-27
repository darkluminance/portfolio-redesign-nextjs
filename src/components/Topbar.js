import Link from "next/link";
import menu from "@/assets/hamburger_menu.svg";
import { useState } from "react";
import Ryelogo from "./Ryelogo";
import Image from "next/image";
import closeButton from "@/assets/close.svg";

export default function Topbar() {
	const [navMenuOpen, setnavMenuOpen] = useState(false);

	return (
		<nav className="topbar">
			<div className="ryeLogo flex-center-ver">
				<Ryelogo></Ryelogo>
			</div>
			<div
				className={
					navMenuOpen
						? "navItems nav-active flex-center-hor flex-center-ver"
						: "navItems flex-center-hor flex-center-ver"
				}
			>
				{/* <div className="navItemsBackdrop"></div> */}
				<div className="navClose" onClick={() => setnavMenuOpen(false)}>
					<Image src={closeButton} alt="Close button"></Image>
				</div>
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
						<Link href="/about" target="__blank" className="text-link italic">
							About
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/work" className="text-link italic">
							Works
						</Link>
					</li>
					<li className="navList-Item">
						<Link href="/contact" className="text-link italic">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="hamburgerMenu" onClick={() => setnavMenuOpen(true)}>
				<Image src={menu} alt="Menu"></Image>
			</div>
		</nav>
	);
}
