import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompletedTask = () => {

    const {data: tasks = [], refetch} = useQuery({
        queryKey: [],
        queryFn: async() => fetch('http://localhost:5000/complete')
        .then(res => res.json())
    });

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this Task ?`);
        if(agree){
            fetch(`http://localhost:5000/task/${id}`, {
                method: 'delete',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){                                       
                    toast('Task deleted', {position: toast.POSITION.TOP_CENTER});                                         
                    refetch();                                     
                }
            })
            .catch(error =>  console.error('my_fetch_delete_error: ', error) );
        }
    }


    return (
        <div className='my-task md:mx-16'>
            {/* <h2 className='text-center text-2xl font-bold'>My Task</h2> */}
            {
                tasks.map(task => <div key={task._id} className='task-body flex justify-between'>
                    
                    <h2>{task.body}</h2>
                    <div className='mt-2 text-center flex items-start'>
                        <button className='border border-sky-500 rounded px-8 ml-3 hover:bg-sky-500 hover:text-white'>Edit</button>
                        <button className='border border-sky-500 rounded px-3 ml-3 hover:bg-sky-500 hover:text-white'>Mark Uncompleted</button>
                        <button onClick={() => handleDelete(task?._id)} className='border border-red-600 rounded px-5 ml-3 hover:bg-red-600 hover:text-white'>Delete</button>
                        {/* <button className='border border-red-600 rounded px-2 ml-3 hover:bg-red-600 hover:text-white'>star</button> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default CompletedTask;