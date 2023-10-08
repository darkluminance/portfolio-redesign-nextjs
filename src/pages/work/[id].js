import axios from 'axios';

import Topnav from '@/components/Topnav';
import Page from '@/components/page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Paage() {
	const router = useRouter();
	const [project, setproject] = useState([]);

	const projectDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/projects/';

	const fetchData = () => {
		return axios
			.get(projectDataURL + router.query.id + '.json')
			.then((response) => {
				setproject(response.data);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Page>
			<Topnav routeLink="/work" routeName="WORK"></Topnav>
			<div className="page flex-center-hor">
				<div className="container flex-center-hor">
					{project.stack && (
						<div className="projectItemContainer">
							<div className="projectTitle flex-center-full">
								<span>{project.title}</span>
							</div>
							<div className="projectContent">
								<div className="projectDescription">
									"{project.description}"
								</div>

								<div className="projectInfos">
									<div>
										<div className="projectYearTitle">Year:</div>{' '}
										<span className="projectYear">{project.year}</span>
									</div>
									<div>
										<div className="projectYearTitle">Stack:</div>{' '}
										<span className="projectStack">
											{project.stack.map((item, index) => (
												<span key={index}>
													{item}
													{index !== project.stack.length - 1 ? ', ' : ''}
												</span>
											))}
										</span>
									</div>
									<div>
										<div className="projectYearTitle">Github:</div>{' '}
										{project.url && (
											<span className="projectYear">
												<a
													href={project.url}
													target="_blank"
													rel="noreferrer"
													className="text-link"
												>
													{project.url}
												</a>
											</span>
										)}
										{!project.url && <span>N/A</span>}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Page>
	);
}
