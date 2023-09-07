import React from 'react'
import { Link} from "react-router-dom";

function NotFound() {
  return (
    <div>
        <h1>The page you are looking is not found</h1>
        <Link to={'/'}>Go Back to home</Link>
    </div>
  )
}

export default NotFound