import Page from '@/components/page';
import Topnav from '@/components/Topnav';
import Link from 'next/link';

export default function Achievements() {
	return (
		<Page>
			<Topnav routeLink={'/about/resume'} routeName="RESUME"></Topnav>
			<div className="page flex-center-hor">
				<div className="container">
					<h1 className="pageHeader">Competitions and Achievements</h1>

					<div className="Experiences">
						<div className="Experience">
							<ul className="workDescription">
								<li>
									<span>15th place:</span> Code Samurai Hackathon Preliminary,
									out of 500+ teams. | 2022
								</li>
								<li>
									<span>2nd place:</span> MIST ICT Innovation Fest Hackathon. |
									2021
								</li>
								<li>
									<span>127th place:</span> National Collegiate Programming
									Contest, MIST. | 2020
								</li>
								<li>
									Solved <span>500+</span> problems in Codeforces{' '}
									<Link
										className="text-link underlined"
										href="https://codeforces.com/profile/__DeStinyBond__"
										target="_blank"
										rel="noreferrer"
									>
										1,
									</Link>{' '}
									<Link
										className="text-link underlined"
										href="https://codeforces.com/profile/darkluminance"
										target="_blank"
										rel="noreferrer"
									>
										{' '}
										2
									</Link>
									, UVA, vjudge and other online judges.
								</li>
								<li>
									Solved <span>60+</span> problems in{' '}
									<Link
										className="text-link underlined slide-link"
										href="https://leetcode.com/rye013/"
										target="_blank"
										rel="noreferrer"
									>
										Leetcode
									</Link>
									.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
