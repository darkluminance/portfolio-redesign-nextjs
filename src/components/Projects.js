import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useDataContext } from "@/context/DataContext";
import { fetchImgData } from "@/utils/globalFunctions";

export default function Projects() {
	const { projectData, thumbnailData, isDataLoaded } = useDataContext();
	const [projectThumbnails, setprojectThumbnails] = useState([]);

	const setImgData = async () => {
		const imgs = await fetchImgData(thumbnailData);
		setprojectThumbnails(imgs);
	};

	useEffect(() => {
		setImgData();
	}, [isDataLoaded]);

	return (
		<div className="projectContainer ">
			<div className="project">
				{isDataLoaded &&
					Object.values(projectData).map((key, index) => {
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
				{!isDataLoaded && (
					<div className="loadingContainer">
						<div className="loadingContent">Loading...</div>
					</div>
				)}
			</div>
		</div>
	);
}
