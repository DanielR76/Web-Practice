const buildCount = (i) => {
	let count = i;
	console.log(`Aqui primero ${count}`);
	const displayCount = () => {
		console.log(`aqui segundo ${count++}`);
	};
	return displayCount;
};

const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11
