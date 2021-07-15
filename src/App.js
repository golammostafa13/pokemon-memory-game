import React from 'react';
import {useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Wrapper from './component.style';
import {firebaseConfig} from './Firebase/firebaseUtils';
import Button from './component/Button';

if (!firebase.apps.length){
	firebase.initializeApp(firebaseConfig);
	}
const App = () => {
	const [isSigned, setIsSigned] = useState(false);
	const [userName, setUserName] = useState('xxx');
	var provider = new firebase.auth.GoogleAuthProvider();
	 
	const handleButton = () => {
		firebase.auth()
		.signInWithPopup(provider)
		.then((result) => {
			// var credential = result.credential;

			// var token = credential.accessToken;
			var user = result.user;
			setUserName(user.displayName);
			setIsSigned(true);
		}).catch((error) => {
			// var errorCode = error.code;
			// var errorMessage = error.message;
			console.log(error.message);
		});
	}
	return (
		<Wrapper>
			{!isSigned && <Header/>}
			{
			isSigned ? 
				<Main name={userName}></Main> : 
				<Button handleButton={handleButton}></Button>
			}
			<Footer/>	
		</Wrapper>
	);
};

export default App;
