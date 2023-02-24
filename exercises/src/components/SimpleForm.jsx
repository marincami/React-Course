import { useState } from 'react';

const SimpleForm = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState(0);

	const handleFirstNameChange = (event) => setName(event.target.value);

	const handleSubmitForm = (event) => {
		event.preventDefault();
		console.log('SENT.', name, lastName, age);
	};

  return (
		<form onSubmit={handleSubmitForm}>
			<label>
				Name(s)
				<input value={name} onChange={handleFirstNameChange}></input>
			</label>
			<label>
				LastName
				<input value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
			</label>
			<label>
				Age
				<input value={age} onChange={(event) => setAge(event.target.value)}></input>
			</label>
			<button type="submit">Send data</button>
		</form>
	);
}

export default SimpleForm;