import { useEffect, useState } from 'react';
import UserListItem from './UserListItem';
// import users from '../data/users.json'; // only to use with the local json


// render a list with a local Json
/**
const UserListItem = (user) => ( // component to reusable
	<div>
		Name: <span>{user.name}</span>
		Gender: <span>{user.phone}</span>
	</div>
);

const List = () => {
	return (
		<div>
			<h1>List</h1>
			{users.map((user) =>
				<UserListItem key={`user-list-item-${user.name}`} {...user}/>
			)}			
		</div>
	)
};

 */


// render a list with API

const List = () => {
	const [users, setUsers] = useState([]); // set the state, (user:getter setUsers:setter)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/users');
				const result = await response.json();
				setUsers(result);
			} catch (error) {
				console.error(error);
			}
		};

		fetchUsers();		
	}, []);

	return (
		<div>
			<h1>List</h1>
			{users.map((user) => <UserListItem key={`user-list-item-${user.name}`} {...user}/>)}
		</div>

	)
}

export default List;
