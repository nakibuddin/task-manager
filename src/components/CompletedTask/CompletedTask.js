import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CompletedTask = () => {
    const tasks = useLoaderData();

    return (
        <div className='my-task md:mx-16'>
            {/* <h2 className='text-center text-2xl font-bold'>My Task</h2> */}
            {
                tasks.map(task => <div key={task._id} className='task-body flex justify-between'>
                    
                    <h2>{task.body}</h2>
                    <div className='mt-2 text-center flex items-start'>
                        <button className='border border-sky-500 rounded px-8 ml-3 hover:bg-sky-500 hover:text-white'>Edit</button>
                        <button className='border border-sky-500 rounded px-3 ml-3 hover:bg-sky-500 hover:text-white'>Mark Uncompleted</button>
                        <button className='border border-red-600 rounded px-5 ml-3 hover:bg-red-600 hover:text-white'>Delete</button>
                        {/* <button className='border border-red-600 rounded px-2 ml-3 hover:bg-red-600 hover:text-white'>star</button> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default CompletedTask;