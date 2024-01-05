export const quickSortAlgorithm = async (
	array,
	stateArray,
	setstateArray,
	setArray,
	showSorted,
	delay,
	sleepTime
) => {
	let arr = [...array];

	// Function to partition the array and return the partition index
	async function partition(arr, low, high) {
		// console.log('Partitioning ' + low + ' ' + high);
		// Choosing the pivot
		let pivotIndex = high;
		let pivot = arr[pivotIndex];
		stateArray = [...stateArray];
		stateArray[pivotIndex] = 3;
		setstateArray(stateArray);
		await delay(sleepTime);
		await delay(sleepTime);
		// console.log('Pivot set to ' + high);

		stateArray = [...stateArray];
		stateArray[low] = 2;
		stateArray[high] = 2;
		setstateArray(stateArray);
		await delay(sleepTime);
		await delay(sleepTime);

		// Index of smaller element and indicates the right position of pivot found so far
		let i = low - 1;

		for (let j = low; j <= high - 1; j++) {
			stateArray = [...stateArray];
			stateArray[i] = 1;
			stateArray[j] = 1;
			setstateArray(stateArray);
			await delay(sleepTime);
			// If current element is smaller than the pivot
			if (arr[j] < pivot) {
				// Increment index of smaller element
				stateArray = [...stateArray];
				stateArray[i] = 0;
				setstateArray(stateArray);
				await delay(sleepTime);

				i++;
				[arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
				stateArray = [...stateArray];
				stateArray[low] = 2;
				stateArray[high] = 2;
				setstateArray(stateArray);
				setArray([...arr]);
				await delay(sleepTime);
			}
			stateArray = [...stateArray];
			stateArray[i] = 0;
			stateArray[j] = 0;
			stateArray[low] = 2;
			stateArray[high] = 2;
			setstateArray(stateArray);
			await delay(sleepTime);
		}

		[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
		stateArray = [...stateArray];
		stateArray[low] = 2;
		stateArray[high] = 2;
		setstateArray(stateArray);
		setArray([...arr]);

		stateArray = [...stateArray];
		stateArray[low] = 0;
		stateArray[high] = 0;
		setstateArray(stateArray);
		await delay(sleepTime);
		return i + 1; // Return the partition index
	}

	// The main function that implements QuickSort
	async function quickSort(arr, low, high) {
		if (low < high) {
			// pi is the partitioning index, arr[pi] is now at the right place
			let pi = await partition(arr, low, high);

			// Separately sort elements before partition and after partition
			await quickSort(arr, low, pi - 1);
			await quickSort(arr, pi + 1, high);
		}
	}

	// first call to quick sort
	await quickSort(arr, 0, arr.length - 1);
	setArray([...arr]);
	showSorted();
};
