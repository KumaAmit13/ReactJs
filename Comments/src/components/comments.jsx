import React from 'react'

function Comments() {
    return (
        <div className='p-4 w-full bg-red-700'>
            <div className='mb-4 border-b-1 w-full text-4xl bg-amber-500'>
                Comments
            </div>

            <div className='flex gap-2 items-start mb-6'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="User-img" className="w-12 h-auto rounded-full object-cover"/>
                <div className='flex flex-col '>
                    <p className='font-bold max-w-min'>Name</p>  
                    <span>Comments</span>
                    <button className='font-extralight hover:font-medium'>Reply</button>
                </div>
                <span className='font-light text-gray-500'>Today at 5:42pm</span>              
            </div>

            <div className='flex gap-2 items-start'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="User-img" className="w-12 h-auto rounded-full object-cover"/>
                <div className='flex flex-col '>
                    <p className='font-bold max-w-min'>Name</p>  
                    <span>Comments</span>
                    <button className='font-extralight hover:font-medium'>Reply</button>
                </div>
                <span className='font-light text-gray-500'>Today at 5:42pm</span>              
            </div>

            

        </div>
    )
}

export default Comments
