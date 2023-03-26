import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPost from './pages/AllPosts';
import AddPost from './pages/AddPost';
import AllComments from './pages/AllPostComments';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={AllPost} />
        <Route path='/addPost' Component={AddPost} />
        <Route path='/allComments/:postId' Component={AllComments} />
      </Routes>
    </BrowserRouter>
  )
}

export default App