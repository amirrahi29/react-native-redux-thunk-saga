import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand">Welcome</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to={'/'} class="nav-link">All Posts</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/addPost'} class="nav-link">Add Post</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header