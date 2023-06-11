'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import close from '@/assets/images/close.png';

export default function Gallery() {
	const [photos, setPhotos] = useState([]);

	const fetchData = () => {
		return axios
			.get('https://res.cloudinary.com/dwyosqxlr/image/list/gallery.json')
			.then((response) => {
				let data = response.data.resources;
				// data = data.sort(function (a, b) {
				// 	return a.created_at - b.created_at;
				// });
				let url = [];

				data.forEach((element) => {
					url.push(
						'https://res.cloudinary.com/dwyosqxlr/image/upload/v1680369628/' +
							element.public_id +
							'.' +
							element.format
					);
				});

				setPhotos(url);
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
		<div className="galleryContainer ">
			{/* <div className={model ? 'model imgViewer' : 'model'}>
				<img src={tmpImgSrc} alt="" />
				<LazyLoadImage width={800} src={tmpImgSrc} />
				<Image
					onClick={() => {
						setModel(false);
					}}
					src={close}
					alt=""
				/>
			</div> */}
			<div className="gallery">
				{photos.map((image, index) => {
					return (
						<div className="pics" key={index} onClick={() => getImg(image)}>
							{/* {image} */}
							{/* <Image src={image} alt="" width={800} /> */}
							<img src={image} alt="" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
