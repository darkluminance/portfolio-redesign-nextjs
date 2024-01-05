import { useState } from 'react';
import Image from 'next/image';
import downarrow from '@/assets/downarrow.svg';

function Dropdown({ setAction, options }) {
	const [isActive, setIsActive] = useState(false);
	let [selected, setSelected] = useState(options[1]);
	return (
		<div className="sorting-dropdown">
			<div
				className="sorting-dropdown-btn"
				onClick={(e) => setIsActive(!isActive)}
			>
				{selected}
				{/* <span className="fas fa-caret-down"></span> */}
				<Image src={downarrow} alt="down arrow"></Image>
			</div>
			{isActive && (
				<div className="sorting-dropdown-content">
					{options.map((option, index) => (
						<div
							onClick={(e) => {
								setSelected(option);
								setIsActive(false);
								setAction(index);
							}}
							className="sorting-dropdown-item"
							key={option}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
