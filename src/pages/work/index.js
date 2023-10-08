import Topnav from '@/components/Topnav';
import Projects from '@/components/Projects';
import Design from '@/components/Design';
import Arts from '@/components/Arts';
import { useState } from 'react';
import Page from '@/components/page';

export default function Work() {
	let [activeCategory, setActiveCategory] = useState(0);

	return (
		<Page>
			<Topnav></Topnav>
			<div className="page flex-center-hor">
				<div className="container workContainer">
					<h1 className="pageHeader" style={{ width: '100%' }}>
						My Projects
					</h1>
					<ul
						className="skillCategories flex-center-hor"
						style={{ marginBlock: '1rem !important;' }}
					>
						<li
							className={
								activeCategory == 0
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(0)}
						>
							Software
						</li>
						<li
							className={
								activeCategory == 1
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(1)}
						>
							Design
						</li>
						<li
							className={
								activeCategory == 2
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(2)}
						>
							Digital Art
						</li>
					</ul>
					{activeCategory == 0 && <Projects></Projects>}
					{activeCategory == 1 && <Design></Design>}
					{activeCategory == 2 && <Arts></Arts>}
				</div>
			</div>
		</Page>
	);
}
