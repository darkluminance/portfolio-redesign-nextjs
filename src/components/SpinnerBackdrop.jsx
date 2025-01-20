import React from "react";

function SpinnerBackdrop() {
	return (
		<div className="spinnerBackdrop flex-center-ver flex-center-hor">
			<svg
				width="100"
				height="100"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect class="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10" />
				<rect
					class="spinner_9y7u spinner_DF2s"
					x="1"
					y="1"
					rx="1"
					width="10"
					height="10"
				/>
				<rect
					class="spinner_9y7u spinner_q27e"
					x="1"
					y="1"
					rx="1"
					width="10"
					height="10"
				/>
			</svg>
		</div>
	);
}

export default SpinnerBackdrop;
