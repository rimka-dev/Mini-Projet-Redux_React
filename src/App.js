import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from './components/PostForm';
import User from './components/User';
import Post from './components/Post'
import { isEmpty } from './components/Utils';

const App = () => {
	const posts = useSelector((state) => state.postReducer); // use selector pour de react-redux pour acceder à notre store
	console.log(posts);
	return (
		<div>
			<h1>Extreme</h1>
			<PostForm />
			<div className="content">
				<div className="post-container">
					{!isEmpty(posts) && posts.map((post, index) => ( // proble car si les donner sont pas encore charger erreur d'affichage "donc sois on utilise un useEffect ou une fonction isEmpty() ici dans le fichier Utils.js"
          <Post post={post} key={index}/>
          ))}
				</div>
				<User />
			</div>
		</div>
	);
};

export default App;
