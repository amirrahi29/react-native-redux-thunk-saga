import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import { useDispatch,useSelector } from 'react-redux';
import { loadPosts } from '../redux/action';

const AddPost = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
   
  },[]);

  const handleToast = () => {
    toast("Wow so easy!");
  }



  return (
    <>
      <Header />
      <div style={{ margin: 16 }}>
        <h1 onClick={handleToast}>Add Post</h1>
        <hr />
        <form style={{ width: 400, backgroundColor: 'pink', padding: 8, borderRadius: 8 }}>
          <input type='text' placeholder='Enter title' className='form-control' /><br />
          <input type='text' placeholder='Enter body' className='form-control' /><br />
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddPost