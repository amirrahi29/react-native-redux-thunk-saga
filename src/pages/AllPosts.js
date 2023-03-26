import React from 'react'
import Header from '../components/Header';

const AllPosts = () => {
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
            <tr>
              <td>1</td>
              <td>title1</td>
              <td>body1</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default AllPosts