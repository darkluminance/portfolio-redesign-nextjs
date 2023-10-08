import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Projects() {
	const [projects, setprojects] = useState([]);
	const [projectThumbnails, setprojectThumbnails] = useState([]);

	const thumbnailURL =
		'https://res.cloudinary.com/dwyosqxlr/image/list/projects.json';
	const projectDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json';

	const fetchImgData = () => {
		return axios.get(thumbnailURL).then((response) => {
			let data = response.data.resources;
			let thumbnailUrl = {};

			data.forEach((element) => {
				const key = element.public_id.slice(9);

				thumbnailUrl[key] =
					'https://res.cloudinary.com/dwyosqxlr/image/upload/c_thumb,w_1024/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;
			});

			setprojectThumbnails(thumbnailUrl);
		});
	};

	const fetchData = () => {
		return axios.get(projectDataURL).then((response) => {
			let data = response.data.slice(1);
			setprojects(data);
		});
	};

	useEffect(() => {
		fetchData();
		fetchImgData();
	}, []);

	return (
		<div className="projectContainer ">
			<div className="project">
				{projects &&
					Object.values(projects).map((key, index) => {
						return (
							key.thumbnail && (
								<Link
									href={`/work/${encodeURIComponent(index + 1)}`}
									className="text-link"
									style={{ textDecoration: 'underline' }}
								>
									<div
										className="pics flex-center-full"
										key={index}
										onClick={() => {}}
									>
										<img
											src={projectThumbnails[key.thumbnail]}
											alt=""
											loading="lazy"
										/>
										<div className="info flex-center-full flex-col" key={index}>
											<h1>{key.title}</h1>
											<p>{key.type}</p>

											<div className="stacks flex-row">
												{key.stack.map((element) => {
													return <span>{element}</span>;
												})}
											</div>

											<h3>{key.year}</h3>
										</div>
									</div>
								</Link>
							)
						);
					})}
			</div>
		</div>
	);
}
