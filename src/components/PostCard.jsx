/* eslint-disable react/prop-types */

// when we click on particular card / blog this is called postcard here

import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='card flex flex-col justify-between p-4 shadow-sm' style={{ boxShadow: '0 4px 8px rgba(30, 0, 0, 0.5)' }} >
            <div className='w-full mb-4'>
                <img 
                src={appwriteService.getFilePreview(featuredImage)} 
                alt={title}
                className='w-full h-40 object-cover rounded-xl' />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard