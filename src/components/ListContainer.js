import { useState, useEffect } from 'react';

function ListContainer() {
	let [today, setDate] = useState(new Date());
	let pastdate = today;

	useEffect(() => {
		let timer = setInterval(() => {
			let currdate = new Date();
			// console.log(currdate);
			if (
				pastdate.getDate() !== currdate.getDate() ||
				pastdate.getMonth() !== currdate.getMonth() ||
				pastdate.getFullYear() !== currdate.getFullYear()
			) {
				console.log('Changing items');
				items = [];
				setlist(items);
				localStorage.setItem('todolistitems', JSON.stringify(items));
				localStorage.setItem('creationdate', currdate.getDate());
				localStorage.setItem('creationmonth', currdate.getMonth());
				localStorage.setItem('creationyear', currdate.getFullYear());
				setDate(currdate);
				pastdate = today;
			}
		}, 69);

		return function cleanup() {
			clearInterval(timer);
		};
	});

	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let items = [];
	let browseritems = JSON.parse(localStorage.getItem('todolistitems'));
	let creationdate = localStorage.getItem('creationdate');
	let creationmonth = localStorage.getItem('creationmonth');
	let creationyear = localStorage.getItem('creationyear');

	console.log(creationdate, creationmonth, creationyear);
	console.log(pastdate.getDate(), pastdate.getMonth(), pastdate.getFullYear());

	if (!creationdate && !creationmonth && !creationyear) {
		localStorage.setItem('creationdate', pastdate.getDate().toString());
		localStorage.setItem('creationmonth', pastdate.getMonth().toString());
		localStorage.setItem('creationyear', pastdate.getFullYear().toString());
		creationdate = pastdate.getDate().toString();
		creationmonth = pastdate.getDate().toString();
		creationyear = pastdate.getDate().toString();
	}

	if (
		browseritems &&
		creationdate &&
		pastdate.getDate().toString() === creationdate &&
		pastdate.getMonth().toString() === creationmonth &&
		pastdate.getFullYear().toString() === creationyear
	)
		items = browseritems;

	let [todolist, setlist] = useState(items);

	useEffect(() => {
		console.log(todolist);
		localStorage.setItem('todolistitems', JSON.stringify(todolist));
	}, [todolist]);

	const addItem = (i) => {
		let name = prompt('Enter list item name');

		if (!name || name.trim() == '') return;

		items = [...todolist, { id: Date.now(), name: name, completed: false }];
		setlist(items);
		// localStorage.setItem('todolistitems', JSON.stringify(items));
	};

	const completeItem = (i) => {
		items = [...todolist];
		items[i].completed = !items[i].completed;
		setlist(items);
		// localStorage.setItem('todolistitems', JSON.stringify(items));
	};

	const removeItem = (index) => {
		items = todolist.filter((_, i) => i !== index);
		setlist(items);
		// localStorage.setItem('todolistitems', JSON.stringify(items));
	};

	const clearList = () => {
		items = [];
		setlist(items);
	};

	return (
		<div className="App">
			<div className="ListContainer">
				<div className="list-date">
					<div className="list-dateonly">
						<div className="list-date-value">{today.getDate()}</div>
						<div className="list-nondateonly">
							<div className="list-date-month">{months[today.getMonth()]}</div>
							<div className="list-date-year">{today.getFullYear()}</div>
						</div>
					</div>
					<div className="list-day">{days[today.getDay()]}</div>
				</div>
				<div className="list-item-container">
					<div className="list-items">
						{todolist.map((item, i) => (
							<div
								className={
									item.completed ? 'list-item list-name-done' : 'list-item'
								}
								key={item.id}
							>
								<span
									title="Click to remove this item"
									className="list-item-name"
									onClick={() => removeItem(i)}
								>
									{item.name}
								</span>
								<span
									className={
										item.completed
											? 'list-item-status list-item-done'
											: 'list-item-status list-item-undone'
									}
									onClick={() => {
										completeItem(i);
									}}
								></span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bottomBar">
				<div className="additembtn listbtn" onClick={addItem}>
					Add
				</div>
				<div className="clearbtn listbtn" onClick={clearList}>
					Clear
				</div>
			</div>
		</div>
	);
}

export default ListContainer;
