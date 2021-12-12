//Example no closure
const noClosure = (coins) => {
	let saveCoins = 0;
	saveCoins += coins;
	console.log(saveCoins);
};

noClosure(5);
noClosure(4);

//Example closure
const closure = () => {
	let saveCoins = 0;
	const countCoints = (coins) => {
		saveCoins += coins;
		console.log(saveCoins);
	};
	return countCoints;
};

let newValue = closure();

newValue(5); //5
newValue(10); //15
newValue(15); //30
