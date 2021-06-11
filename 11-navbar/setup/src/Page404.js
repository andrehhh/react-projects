import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <Link className='btn' to='/'>Back to Home</Link>
        </div>
    )
}

export default Page404
