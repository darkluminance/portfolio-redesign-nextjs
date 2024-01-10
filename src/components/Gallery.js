import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import close from '@/assets/images/close.png';

export default function Gallery() {
	const [photos, setPhotos] = useState([]);
	const [thumbnailphotos, setThumbnailPhotos] = useState([]);
	const [smallphotos, setsmallPhotos] = useState([]);

	const originalURL =
		'https://res.cloudinary.com/dwyosqxlr/image/list/gallery-xl.json';

	const fetchData = () => {
		return axios.get(originalURL).then((response) => {
			let data = response.data.resources;
			let url = {};
			let loaderUrl = {};
			let thumbnailUrl = {};
			const deviceWidth = window.innerWidth;
			const projectThumbnailSize =
				(deviceWidth / 2) * 1 < 420 ? 420 : Math.floor(deviceWidth / 2);

			data.forEach((element) => {
				const key = element.public_id.slice(11);

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
					'https://res.cloudinary.com/dwyosqxlr/image/upload/c_thumb,w_' +
					projectThumbnailSize +
					'/v' +
					element.version +
					'/' +
					element.public_id +
					'.' +
					element.format;
			});

			console.log(url, loaderUrl, thumbnailUrl);
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
				{Object.keys(smallphotos).map((key, index) => {
					return (
						<div
							className="pics"
							style={{ backgroundImage: 'url(' + smallphotos[key] + ')' }}
							key={key}
							onClick={() => getImg(photos[key])}
						>
							{/* {image} */}
							{/* <Image src={image} alt="" width={800} /> */}
							<img src={thumbnailphotos[key]} alt="" loading="lazy" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
