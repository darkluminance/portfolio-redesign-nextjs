import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { PROJECTS_API } from "@/utils/globalAPIs";

export default function Projects() {
	const [projects, setprojects] = useState([]);
	const [projectThumbnails, setprojectThumbnails] = useState([]);

	const thumbnailDataURL = process.env.NEXT_PUBLIC_THUMBNAIL_DATA_URL;

	const fetchImgData = async () => {
		return fetch(thumbnailDataURL).then(async (response) => {
			const res = await response.json();
			let data = res.resources;
			let thumbnailUrl = {};
			const deviceWidth = window.innerWidth;
			const projectThumbnailSize = Math.floor(deviceWidth / 2);

			data.forEach((element) => {
				const key = element.public_id.slice(9);

				thumbnailUrl[key] =
					"https://res.cloudinary.com/dwyosqxlr/image/upload/c_thumb,w_" +
					projectThumbnailSize +
					"/v" +
					element.version +
					"/" +
					element.public_id +
					"." +
					element.format;
			});

			setprojectThumbnails(thumbnailUrl);
		});
	};

	const fetchData = async () => {
		return fetch(PROJECTS_API).then(async (response) => {
			let res = await response.json();
			setprojects(res.data);
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
							key.thumbnailURL && (
								<Suspense>
									<Link href={`/work/${encodeURIComponent(key.thumbnailURL)}`}>
										<div className="pics" key={index} onClick={() => {}}>
											<img
												src={projectThumbnails[key.thumbnailURL]}
												alt=""
												loading="lazy"
											/>
											<div className="info" key={index}>
												<h2>{key.name}</h2>
												<p>
													- {key.category}, {key.year}
												</p>

												<div className="stacks flex-wrap">
													{key.stacks.map((element) => {
														return <span>{element.stack}</span>;
													})}
												</div>
											</div>
										</div>
									</Link>
								</Suspense>
							)
						);
					})}
			</div>
		</div>
	);
}
