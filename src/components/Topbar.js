import Link from "next/link";
import menu from "@/assets/hamburger_menu.svg";
import { useState } from "react";
import Ryelogo from "./Ryelogo";
import Image from "next/image";
import SpinnerBackdrop from "./SpinnerBackdrop";

export default function Topbar() {
	const [navMenuOpen, setnavMenuOpen] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
	};

	return (
		<nav className="topbar">
			<div className="ryeLogo flex-center-ver">
				<Ryelogo></Ryelogo>
			</div>
			{isClicked && <SpinnerBackdrop></SpinnerBackdrop>}
			<div
				className={
					navMenuOpen
						? "navItems nav-active flex-center-hor flex-center-ver"
						: "navItems flex-center-hor flex-center-ver"
				}
			>
				<div className="navClose" onClick={() => setnavMenuOpen(false)}>
					Close
				</div>
				<ul className="navList flex-row">
					<li className="navList-Item">
						<Link
							href="/about/cv"
							className="text-link italic"
							onClick={handleClick}
						>
							CV
						</Link>
					</li>
					<li className="navList-Item">
						<Link
							href="/work"
							className="text-link italic"
							onClick={handleClick}
						>
							Works
						</Link>
					</li>
					<li className="navList-Item">
						<Link
							href="/about/photography"
							className="text-link italic"
							onClick={handleClick}
						>
							Gallery
						</Link>
					</li>
					<li className="navList-Item">
						<Link
							href="/blog"
							className="text-link italic"
							onClick={handleClick}
						>
							Blog
						</Link>
					</li>
					<li className="navList-Item">
						<Link
							href="/contact"
							className="text-link italic"
							onClick={handleClick}
						>
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
