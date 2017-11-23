import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// 这种既不是字符串又不是HTML的标签语法，就是JSX，一种JavaScript的语法扩展
// const element = <h1>Hello Luseike</h1>;

function formatName(user){
	return user.firstName + ' ' + user.lastName;
}
const user = {
	firstName: 'Harper',
	lastName: 'Perez'
}
// 在JSX代码外面扩上一个小括号，防止分号自动插入的bug
const nameEle = (
	<h2>
		{formatName(user)}
	</h2>
)

function getGreeting(user){
	if (user) {
		return (
			<h2>
				Hello {formatName(user)}
			</h2>
		)
	}
	return(
		<h2>
			Hello World
		</h2>
	)
}

ReactDOM.render(
	nameEle,
	document.getElementById('root')
);
registerServiceWorker();
