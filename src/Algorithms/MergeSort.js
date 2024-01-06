export const mergeSortAlgorithm = async (
	array,
	stateArray,
	setstateArray,
	setArray,
	showSorted,
	delay,
	sleepTime
) => {
	let arr = [...array];

	async function merge(arr, left, mid, right) {
		stateArray = [...stateArray];
		stateArray[left] = 2;
		stateArray[right] = 2;
		setstateArray(stateArray);
		await delay(sleepTime);

		let n1 = mid - left + 1;
		let n2 = right - mid;

		// Create temp arrays
		let L = new Array(n1);
		let R = new Array(n2);

		// Copy data to temp arrays L[] and R[]
		for (let i = 0; i < n1; i++) {
			L[i] = arr[left + i];
		}
		for (let j = 0; j < n2; j++) {
			R[j] = arr[mid + 1 + j];
		}

		//Merging begins
		let i = 0;
		let j = 0;
		let k = left;

		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			} else {
				arr[k] = R[j];
				j++;
			}
			if (k !== left && k !== right) {
				stateArray = [...stateArray];
				stateArray[k] = 5;
				setstateArray(stateArray);
				setArray([...arr]);
				await delay(sleepTime);
			}
			k++;
		}

		//Copy the rest
		while (i < n1) {
			arr[k] = L[i];
			if (k !== left && k !== right) {
				stateArray = [...stateArray];
				stateArray[k] = 5;
				setstateArray(stateArray);
				setArray([...arr]);
				await delay(sleepTime);
			}
			i++;
			k++;
		}
		while (j < n2) {
			arr[k] = R[j];
			if (k !== left && k !== right) {
				stateArray = [...stateArray];
				stateArray[k] = 5;
				setstateArray(stateArray);
				setArray([...arr]);
				await delay(sleepTime);
			}
			j++;
			k++;
		}
		stateArray = [...stateArray];
		stateArray[left] = 5;
		stateArray[right] = 5;
		setstateArray(stateArray);
		await delay(sleepTime);
	}

	async function mergeSort(arr, left, right) {
		stateArray = [...stateArray];
		stateArray[left] = 1;
		stateArray[right] = 1;
		setstateArray(stateArray);
		await delay(sleepTime);

		if (left >= right) {
			stateArray = [...stateArray];
			stateArray[left] = 2;
			stateArray[right] = 2;
			setstateArray(stateArray);
			await delay(sleepTime);

			stateArray = [...stateArray];
			stateArray[left] = 5;
			stateArray[right] = 5;
			setstateArray(stateArray);
			return;
		}
		let mid = left + parseInt((right - left) / 2);
		await mergeSort(arr, left, mid);
		await mergeSort(arr, mid + 1, right);
		await merge(arr, left, mid, right);
	}

	await mergeSort(arr, 0, arr.length - 1);
	setArray([...arr]);
	showSorted();
};
