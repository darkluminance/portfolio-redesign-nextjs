import Image from 'next/image';
import ryelogo from '../assets/images/signature.png';

export default function Ryelogo() {
	return (
		<>
			<Image src={ryelogo} alt="Rye Logo"></Image>
		</>
	);
}
