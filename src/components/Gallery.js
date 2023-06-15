'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import close from '@/assets/images/close.png';

export default function Gallery() {
	const [photos, setPhotos] = useState([]);
	const [smallphotos, setsmallPhotos] = useState([]);
	const originalURL =
		'https://res.cloudinary.com/dwyosqxlr/image/list/gallery-xl.json';
	const smallURL =
		'https://res.cloudinary.com/dwyosqxlr/image/list/gallery-sm.json';

	const fetchData = () => {
		return axios.get(originalURL).then((response) => {
			let data = response.data.resources;
			// data = data.sort(function (a, b) {
			// 	return a.created_at - b.created_at;
			// });
			let url = {};

			data.forEach((element) => {
				const key = element.public_id.slice(11);
				// url.push({
				// 	key:
				// 		'https://res.cloudinary.com/dwyosqxlr/image/upload/v' +
				// 		element.version +
				// 		'/' +
				// 		element.public_id +
				// 		'.' +
				// 		element.format,
				// });
				url[key] =
					'https://res.cloudinary.com/dwyosqxlr/image/upload/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;
			});

			console.log(url);
			setPhotos(url);
		});
	};

	const fetchsmallData = () => {
		return axios.get(smallURL).then((response) => {
			let data = response.data.resources;
			// data = data.sort(function (a, b) {
			// 	return a.created_at - b.created_at;
			// });
			let url = [];

			data.forEach((element) => {
				// url.push(
				// 	'https://res.cloudinary.com/dwyosqxlr/image/upload/v' +
				// 		element.version +
				// 		'/' +
				// 		element.public_id +
				// 		'.' +
				// 		element.format
				// );
				const key = element.public_id.slice(11).replace('_small', '');
				// url.push({
				// 	key:
				// 		'https://res.cloudinary.com/dwyosqxlr/image/upload/v' +
				// 		element.version +
				// 		'/' +
				// 		element.public_id +
				// 		'.' +
				// 		element.format,
				// });
				url[key] =
					'https://res.cloudinary.com/dwyosqxlr/image/upload/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;
			});
			console.log(url);
			setsmallPhotos(url);
		});
	};

	useEffect(() => {
		fetchsmallData();
		fetchData();
	}, []);

	const [model, setModel] = useState(false);
	const [tmpImgSrc, setTmpImgSrc] = useState('');

	const getImg = (img) => {
		setTmpImgSrc(img);
		setModel(true);
	};

	return (
		<div className="galleryContainer ">
			<div className={model ? 'model imgViewer flex-center-full' : 'model'}>
				{/* <img src={tmpImgSrc} alt="" /> */}
				<img src={tmpImgSrc} />
				<Image
					onClick={() => {
						setModel(false);
					}}
					src={close}
					alt=""
				/>
			</div>
			<div className="gallery">
				{Object.keys(photos).map((key, index) => {
					return (
						<div
							className="pics"
							style={{ backgroundImage: 'url(' + smallphotos[key] + ')' }}
							key={key}
							onClick={() => getImg(photos[key])}
						>
							{/* {image} */}
							{/* <Image src={image} alt="" width={800} /> */}
							<img src={photos[key]} alt="" loading="lazy" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
