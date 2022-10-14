import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header/Header'
import AlbumPost from './pages/Album/AlbumPost'

const Layout = () => {
  return (
    <div>
      <Link to='/'>
        <Header/>
      </Link>
      <AlbumPost/>
    </div>
  )
}

export default Layout
