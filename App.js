import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Album from './pages/Album/Album';
import Posts from './Posts';
import { useEffect, useState } from 'react';
 import axios from 'axios';
import Pagination from './components/Pagination/Pagination';
function App() {
  const [posts, setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(6)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
  }  
  fetchPost()
  },[])
  //get current post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexOfFirstPost,indexOfLastPost)

  //changePage
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="App">
      <Link to='/'><Header/></Link>
      <Posts posts={currentPost} loading={loading}/>
      <Pagination
       paginate={paginate}
       postsPerPage={postPerPage} 
       totalPosts={posts.length}/>
      {/* <Album/> */}
      {/* <Photos/> */}
    </div>
  );
}

export default App;
