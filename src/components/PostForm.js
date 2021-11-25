import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const user = useSelector((state)=> state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e)=>{ // async et await pour attendre et charger à nouveau la bdd
    e.preventDefault();
    if (title && content) {
      const data = {
        title, // equivalent de => title: title
        content,
        author: user[0].pseudo,
        likes:0
      };
      await dispatch(addPosts(data));
      setTitle(''); // pour vider le formulaire une fois soumis
      setContent('');// pour vider le formulaire une fois soumis
      dispatch(getPosts()); // pour regler le probleme des _id génerer pour chaque nouvel article

    }
  }

  return (
    <div className="form-container">
      <form onSubmit={(e)=> handleForm(e)}>
        <input type="text" placeholder="Titre du poste" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Postez vos pensées..." value={content} onChange={e => setContent(e.target.value)}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
