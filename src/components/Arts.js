'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import close from '@/assets/images/close.png';
import '../app/photos.css';

export default function Arts() {
	const [photos, setPhotos] = useState([]);
	const [thumbnailphotos, setThumbnailPhotos] = useState([]);
	const [smallphotos, setsmallPhotos] = useState([]);

	const originalURL =
		'https://res.cloudinary.com/dwyosqxlr/image/list/arts.json';

	const fetchData = () => {
		return axios.get(originalURL).then((response) => {
			let data = response.data.resources;

			data = data.sort(function (a, b) {
				return -(a.created_at - b.created_at);
			});

			let url = {};
			let loaderUrl = {};
			let thumbnailUrl = {};

			data.forEach((element) => {
				const key = element.public_id.slice(7);

				url[key] =
					'https://res.cloudinary.com/dwyosqxlr/image/upload/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;

				loaderUrl[key] =
					'https://res.cloudinary.com/dwyosqxlr/image/upload/c_thumb,w_10/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;

				thumbnailUrl[key] =
					'https://res.cloudinary.com/dwyosqxlr/image/upload/c_thumb,w_1024/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;
			});

			setPhotos(url);
			setThumbnailPhotos(thumbnailUrl);
			setsmallPhotos(loaderUrl);
		});
	};
	useEffect(() => {
		fetchData();
	}, []);

	const [model, setModel] = useState(false);
	const [tmpImgSrc, setTmpImgSrc] = useState('');

	const getImg = (img) => {
		setTmpImgSrc(img);
		setModel(true);
	};

	return (
		<div className="logoContainer ">
			<div className={model ? 'model imgViewer flex-center-full' : 'model'}>
				<img src={tmpImgSrc} />
				<Image
					onClick={() => {
						setModel(false);
					}}
					src={close}
					alt=""
				/>
			</div>
			<div className="arts">
				{Object.keys(smallphotos).map((key, index) => {
					return (
						<div
							className="artPics"
							style={{ backgroundImage: 'url(' + smallphotos[key] + ')' }}
							key={index}
							onClick={() => getImg(photos[key])}
						>
							<img src={thumbnailphotos[key]} alt="" loading="lazy" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
