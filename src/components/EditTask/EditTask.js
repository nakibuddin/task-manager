import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTask = () => {
	const defaultTask = useLoaderData();
	const navigate = useNavigate();

	const handleSubmit = event => {
        event.preventDefault();
		const body = event.target.body.value;
		const url = event.target.url.value;
		const updatedTask = {body,url};

        fetch(`http://localhost:5000/edit-task/${defaultTask._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())

        .then(data => {
			if(data.matchedCount === 1){
				toast.success('Task deleted', {position: toast.POSITION.TOP_CENTER});
				navigate('/my-task');
			}
        })
        .catch(error =>  console.error('my_fetch update error: ', error) );
    }

    return (
        <div className='add-task md:mx-72'>
            <h2 className='text-center text-3xl font-bold mb-6'>Update Your Task</h2>
            
            <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
				<div className="space-y-4">
					<div className="space-y-2">
						<label htmlFor="body" className="block text-sm">Task Description</label>
						<textarea name="body" id="body" cols="80" rows="3" defaultValue={defaultTask.body} placeholder='Task Description' className='w-full px-3 py-2 border rounded-md  border-gray-700  bg-white  text-black focus: border-violet-400' required></textarea>
					</div>

					<div className="space-y-2">
						<label htmlFor="url" className="text-sm">Photo URL</label>
						<input type="text" name="url" id="url" defaultValue={defaultTask.url} placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-white   text-black focus: border-violet-400" required/>
					</div>
				</div>
				
                <div className='text-center'>
                    <button type="submit" className="w-3/12 px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900">Update Task</button>
                </div>
			</form>
        </div>
    );
};

export default EditTask;