import './App.css';
import LoginForm from './components/LoginForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';


const App = () => {
	// state
	const [listUser, setListUser] = useState([]);
	const [userLogin, setUserLogin] = useState(null);

	const [listTask, setListTask] = useState([]);


	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
			setListUser(response.data);
		});
	}, []);

	if (userLogin) {
		return (
			<div className="App">
				Welcome, {userLogin.name}
				<button onClick={() => { setUserLogin(null) }}>Logout</button>

				<Todo
					listTask={listTask}
					setListTask={setListTask}
					userLogin={userLogin}
				/>
			</div>
		)
	}
	return (
		<div className="App">
			<LoginForm
				listUser={listUser}
				setUserLogin={setUserLogin} />
		</div>
	);
} 

export default App;