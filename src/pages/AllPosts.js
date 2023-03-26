import React, { useEffect } from 'react'
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/action';

const AllPosts = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <>
      <Header />

      <div style={{ margin: 16 }}>
        <h1>All Posts</h1>
        <hr />
        <table className='table'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            { 
            posts.length==""?
            <h3>Please wait............</h3>:
            
            posts.map(( item, index ) => {
                return <>
                  <tr>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>X</td>
                  </tr>
                </>
              })
            }

          </tbody>
        </table>
      </div>

    </>
  )
}

export default AllPosts