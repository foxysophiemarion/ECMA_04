// Задание 1 "Получение данных о пользователе"
async function getUserData(ID) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`);
		if (!response.ok) {
			throw new Error(`User with ID ${ID} not found. Status: ${response.status}`);
		}
		const userData = await response.json();
		return userData;
	} catch (error) {
		return Promise.reject(error);
	}
}

// Пример использования
getUserData(10)
	.then(userData => console.log(userData))
	.catch(error => console.error(error.message));

getUserData(25)
	.then(userData => console.log(userData))
	.catch(error => console.error(error.message));

// Задание 2 "Отправка данных на сервер"
async function saveUserData(user) {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
		if (!response.ok) {
			throw new Error(`Failed to save user data. Status: ${response.status}`);
		}
		return;
	} catch (error) {
		return Promise.reject(error);
	}
}

// Пример использования
/*const user = {
name: 'John Smith',
age: 30,
email: 'john@example.com'
};

saveUserData(user)
.then(() => {
	console.log('User data saved successfully');
})
.catch(error => {
	console.error(error.message);
});
*/
// Задание 3 "Изменение стиля элемента через заданное время"
function changeStyleDelayed(elementId, delay) {
	const element = document.getElementById(elementId);
	if (!element) {
		console.error(`Element with ID ${elementId} not found`);
		return;
	}

	setTimeout(() => {
		element.style.backgroundColor = 'black'; // Пример изменения стиля
	}, delay);
}

// Пример использования
/*changeStyleDelayed('myElement', 3000); // Через 3 секунды изменяет стиль элемента с id 'myElement'
*/
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
	changeStyleDelayed('myElement', 3000);
});