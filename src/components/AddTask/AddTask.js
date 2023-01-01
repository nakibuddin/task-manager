import React from 'react';
import { json, useNavigate } from 'react-router-dom';
import './AddTask.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
	const navigate = useNavigate();
	
	const handleSubmit = event => {
		event.preventDefault();
		const body = event.target.body.value;
		const url = event.target.url.value;
		const task = {body, url, status: 'incomplete', star: 'no'};
		
		fetch('http://localhost:5000/add-task',{
			method : 'POST',
			headers : {
				'content-type' : 'application/json'
			},
			body :  JSON.stringify(task)
		})
		.then(res => res.json())

		.then(data => {
			if(data.acknowledged === true){
				toast.success('Task added', { position: toast.POSITION.TOP_CENTER });
				navigate('/my-task');
			}
		})
		.catch(err => console.log(`my_fetch post error : ${err}`));
	}

	
    return (
        <div className='add-task md:mx-72'>
            <h2 className='text-center text-3xl font-bold mb-6'>Add Your Task</h2>
            
            <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
				<div className="space-y-4">
					<div className="space-y-2">
						<label htmlFor="body" className="block text-sm">Task Description</label>
						<textarea name="body" id="body" cols="80" rows="3"  placeholder='Task Description' className='w-full px-3 py-2 border rounded-md  border-gray-700  bg-white  text-black focus: border-violet-400' required></textarea>
					</div>

					<div className="space-y-2">
						<label htmlFor="url" className="text-sm">Photo URL</label>
						<input type="text" name="url" id="url" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-white   text-black focus: border-violet-400" required/>
					</div>
				</div>
				
                <div className='text-center'>
                    <button type="submit" className="w-3/12 px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900">Add Task</button>
                </div>
			</form>
        </div>
    );
};

export default AddTask;