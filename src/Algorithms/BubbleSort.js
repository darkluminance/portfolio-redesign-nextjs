export const bubbleSortAlgorithm = async (
	array,
	theArray,
	stateArray,
	setstateArray,
	setArray,
	showSorted,
	delay,
	sleepTime,
	ARRAYSIZE
) => {
	let ara = [...array];
	theArray = [...array];

	for (let i = 0; i < ara.length - 1; i++) {
		for (let j = 0; j < ara.length - i - 1; j++) {
			stateArray = [...stateArray];
			stateArray[j] = 1;
			stateArray[j + 1] = 1;
			setstateArray(stateArray);
			await delay(sleepTime);
			if (ara[j] > ara[j + 1]) {
				stateArray = [...stateArray];
				stateArray[j] = 2;
				stateArray[j + 1] = 2;
				setstateArray(stateArray);
				await delay(sleepTime);
				// setArray(ara);
				let temp = ara[j];
				ara[j] = ara[j + 1];
				ara[j + 1] = temp;
				theArray = [...ara];

				setArray(theArray);
				await delay(sleepTime);
			}
			stateArray = [...stateArray];
			stateArray[j] = 0;
			stateArray[j + 1] = 0;
			setstateArray(stateArray);
		}
		await delay(sleepTime);
		stateArray = [...stateArray];
		stateArray[ARRAYSIZE - i - 1] = 3;
		setstateArray(stateArray);
		// await delay(10);
		setArray(ara);
	}
	theArray = ara;
	setArray(theArray);
	showSorted();
	//return ara;
};
