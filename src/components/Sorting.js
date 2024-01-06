/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Dropdown from '@/components/Dropdown/Dropdown';
import { bubbleSortAlgorithm } from '@/Algorithms/BubbleSort.js';
import { quickSortAlgorithm } from '@/Algorithms/QuickSort.js';
import { mergeSortAlgorithm } from '@/Algorithms/MergeSort.js';

function Sorting() {
	let theArray = [];
	let stateArray = [];
	let colors = [
		'#00b894',
		'#0984e3',
		'#fd79a8',
		'#00e8e2',
		'#fdcb6e',
		'#6c5ce7',
		'#e17055',
	];
	let [array, setArray] = useState(theArray);
	let [statearray, setstateArray] = useState(stateArray);
	let [ARRAYSIZE, setArraySize] = useState(10);
	let [barWidth, setBarWidth] = useState(10);
	let totalTimeFast = 20;
	let totalTimeSlow = 45;
	let sleepTime = (totalTimeFast * 1000) / (ARRAYSIZE * ARRAYSIZE);

	let [sorting, setSorting] = useState(0);

	let [sortingAlgorithm, setSortingAlgorithm] = useState(1);
	let [animationSpeed, setAnimationSpeed] = useState(1);

	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	const setSortAlgo = (algo) => {
		setSortingAlgorithm(algo);
	};

	const setAnimSpeed = (speed) => {
		setAnimationSpeed(speed);
	};

	const createArray = (size) => {
		setSorting(0);
		setArraySize(size);
		theArray = [];
		stateArray = [];
		for (let index = 0; index < size; index++) {
			theArray.push(Math.floor(Math.random() * 90 + 10));
			stateArray.push(0);
		}
		// console.log(a);
		setArray(theArray);
		setstateArray(stateArray);
		setBarWidth(Math.floor((window.innerWidth - 100) / (size * 2)));
		sleepTime =
			animationSpeed === 2
				? (totalTimeSlow * 1000) / (size * size)
				: (totalTimeFast * 1000) / (size * size);
	};

	function handleChange(evt) {
		setArraySize(evt.target.value);
		createArray(evt.target.value);
	}

	function decideSorting() {
		const isSorting = sorting;
		if (!isSorting) startSorting();
		else stopSorting();
	}

	function startSorting() {
		if (animationSpeed === 0) {
			alert('Invalid input');
			return;
		}
		sleepTime =
			animationSpeed === 2
				? (totalTimeSlow * 1000) / (ARRAYSIZE * ARRAYSIZE)
				: (totalTimeFast * 1000) / (ARRAYSIZE * ARRAYSIZE);
		setSorting(1);

		switch (sortingAlgorithm) {
			case 0:
				alert('Invalid input');
				setSorting(0);
				break;
			case 1:
				bubbleSortAlgorithm(
					array,
					theArray,
					stateArray,
					setstateArray,
					setArray,
					showSorted,
					delay,
					sleepTime,
					ARRAYSIZE
				);
				break;
			case 2:
				quickSortAlgorithm(
					array,
					stateArray,
					setstateArray,
					setArray,
					showSorted,
					delay,
					sleepTime
				);
				break;
			case 3:
				mergeSortAlgorithm(
					array,
					stateArray,
					setstateArray,
					setArray,
					showSorted,
					delay,
					sleepTime
				);
				break;

			default:
				break;
		}
	}

	function stopSorting() {
		// sorting = false;
		setSorting(0);
	}

	async function showSorted() {
		for (let index = 0; index < ARRAYSIZE; index++) {
			stateArray = [...stateArray];
			stateArray[index] = 4;
			setstateArray(stateArray);
			await delay(sleepTime / 10);
		}
		// sorting = false;
		setSorting(0);
	}

	useEffect(() => {
		createArray(ARRAYSIZE);
	}, []);

	return (
		<div className="sorting">
			<div
				className={
					sorting
						? 'sorting-toolbar sorting-toolbar-disabled'
						: 'sorting-toolbar'
				}
			>
				<div
					className="sorting-toolbar-button sorting-toolbar-generate"
					onClick={() => createArray(ARRAYSIZE)}
				>
					Generate New Array
				</div>
				<div className="sorting-toolbar-slider">
					<div className="sorting-toolbar-slider-text">
						Array size : {ARRAYSIZE}
					</div>
					<input
						id="changeSize"
						className="sorting-toolbar-slider-slider"
						type="range"
						min="5"
						max="300"
						defaultValue={ARRAYSIZE}
						// style={{background: color, cursor: cursor}}
						// disabled={isRunning ? "disabled" : null}
						onChange={handleChange}
					/>
				</div>
				<Dropdown
					setAction={setSortAlgo}
					options={[
						'-- Select sorting algorithm --',
						'Bubble Sort',
						'Quick Sort',
						'Merge Sort',
						// 'Selection Sort',
						// 'Heap Sort',
						// 'Bucket Sort',
					]}
				></Dropdown>
				<Dropdown
					setAction={setAnimSpeed}
					options={['-- Select animation speed --', 'Fast', 'Slow']}
				></Dropdown>

				<div
					className="sorting-toolbar-button sorting-toolbar-sort"
					onClick={decideSorting}
				>
					<div>Start Sorting</div>
				</div>
			</div>
			<div className="sorting-array-bars">
				{array.map((item, i) => (
					<div
						key={i}
						className="sorting-array-item"
						style={{
							height: `${7 * item}px`,
							width: `${barWidth}px`,
							background: `${colors[statearray[i]]}`,
						}}
					></div>
				))}
			</div>
		</div>
	);
}

export default Sorting;
