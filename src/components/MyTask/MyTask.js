import React from 'react';
import './MyTask.css'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StarIcon } from '@heroicons/react/24/solid'

const MyTask = () => {
    const {data: tasks, isLoading, refetch} = useQuery({
        queryKey: ['incomplete'],
        queryFn: async() => fetch('http://localhost:5000/incomplete')
            .then(res => res.json())
            .catch(error =>  console.error('my_fetch get error: ', error) )
    });

    if(isLoading){
        return <div className='flex justify-center items-center mt-16'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>;
    }

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this Task ?`);
        if(agree){
            fetch(`http://localhost:5000/delete-task/${id}`, {
                method: 'delete',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){                                       
                    toast.success('Task deleted', {position: toast.POSITION.TOP_CENTER});
                    refetch();                                     
                }
            })
            .catch(error =>  console.error('my_fetch delete error: ', error) );
        }
    }

    const handleComplete = id => {
        fetch(`http://localhost:5000/complete-task/${id}`, {
			method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount === 1){
                toast.success('Task completed', {position: toast.POSITION.TOP_CENTER});
                refetch();
            }
        })
        .catch(error =>  console.error('my_fetch update error: ', error) );
    }
    
    const handleStar = (id, defaultStar) => {
        let updatedStar = null;
        if(defaultStar === 'yes'){
            updatedStar = {star: 'no'};
        }
        else {
            updatedStar = {star: 'yes'};
        }
        
        fetch(`http://localhost:5000/edit-star/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedStar)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount === 1){
                refetch();
            }
        })
        .catch(error =>  console.error('my_fetch update error: ', error) );
    }
    
    
    
    return (
        <div className='my-task md:mx-16'>
            {/* <h2 className='text-center text-2xl font-bold'>My Task</h2> */}
            {
                tasks.map(task => <div key={task._id} className='task-body flex justify-between'>

                    <h2>{task.body}</h2>
                    <div className='mt-2 text-center flex items-start'>
                        <StarIcon onClick={() => handleStar(task?._id, task?.star)} className={`h-6 w-6 cursor-pointer ${task.star==='yes' ? "text-amber-400" : "text-gray-300" }`}/>
                        <button onClick={() => handleComplete(task?._id)} className='border border-sky-500 rounded px-3 ml-3 hover:bg-sky-500 hover:text-white'>Complete</button>
                        <Link to={`/edit-task/${task._id}`}>
                            <button className='border border-sky-500 rounded px-8 ml-3 hover:bg-sky-500 hover:text-white'>Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(task?._id)} className='border border-red-600 rounded px-5 ml-3 hover:bg-red-600 hover:text-white'>Delete</button>
                        {/* <button className='border border-red-600 rounded px-2 ml-3 hover:bg-red-600 hover:text-white'>star</button> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyTask;