//private variables and acces them
const person = () => {
	let name = "Initial";
	return {
		getName: () => name,
		setName: (newName) => {
			name = newName;
		},
	};
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Daniel");
console.log(newPerson.getName());
