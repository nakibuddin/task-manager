import React from 'react';
import './AddTask.css'

const AddTask = () => {
    return (
        <div className='add-task md:mx-72'>
            <h2 className='text-center text-3xl font-bold mb-6'>Add Your Task</h2>
            
            <form  noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
				<div className="space-y-4">
					<div className="space-y-2">
						<label htmlFor="body" className="block text-sm">Task Description</label>
						<input type="text" name="body" id="body" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-white  text-black focus: border-violet-400" required/>
					</div>
					<div className="space-y-2">
						<div className="flex justify-between">
							<label htmlFor="url" className="text-sm">Photo URL</label>
							{/* <a href='/' rel="noopener noreferrer" className="text-xs hover:underline  text-gray-400">Forgot password?</a> */}
						</div>
						<input type="text" name="url" id="url" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-white   text-black focus: border-violet-400" required/>
					</div>
					<div>
						{/* <p className='text-red-600'>{loginError}</p> */}
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