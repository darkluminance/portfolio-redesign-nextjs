import Image from 'next/image';
import ryelogo from '../assets/images/rye_logo.svg';

export default function Ryelogo() {
	return (
		<>
			<Image src={ryelogo} alt="Rye Logo"></Image>
		</>
	);
}
