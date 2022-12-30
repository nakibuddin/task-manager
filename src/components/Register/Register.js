import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleGoogleLogIn = () => {
        // LogInWithGoogle()
        // .then(result => console.log(result.user))
        // .catch(error => console.error('my_google_login_error: ', error));
    }
	const handleGithubLogIn = () => {
        // LogInWithGithub()
        // .then(result => console.log(result.user))
        // .catch(error => console.error('my_github_login_error: ', error));
    }
	const handleRegister = event => {
        // event.preventDefault();
        // const form = event.target;
        // const name = form.name.value;
        // // const photoURL = form.photoURL.value;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(name, email, password);

        // createUser(email, password)
        // .then(result => {
        //     console.log(result.user);
        //     event.target.reset();
        //     navigate('/');
        //     setRegisterError(null);
        // })
        // .catch(error => {
        //     console.error('my_register_error: ', error);
        //     setRegisterError(error.message);
        // });
    }

    return (
		<div className="w-full block mx-auto max-w-md p-4 rounded-md shadow sm:p-8  bg-gray-900  text-gray-100">
			<h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
			<p className="text-sm text-center  text-gray-400">Already have an account?
                <Link to='/login' className="focus:underline hover:underline"> Login</Link>
			</p>
			<div className="my-6 space-y-4">
				<button onClick={handleGoogleLogIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  border-gray-400 focus:ring-violet-400">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
					<p>Continue with Google</p>
				</button>
				
			</div>
			<div className="flex items-center w-full my-4">
				<hr className="w-full  text-gray-400"/>
				<p className="px-3  text-gray-400">OR</p>
				<hr className="w-full  text-gray-400"/>
			</div>
			<form onSubmit={handleRegister} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
				
                <div className="space-y-4">

                    <div className="space-y-2">
						<label htmlFor="name" className="block text-sm">Full Name</label>
						<input type="text" name="name" id="name" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100 focus: border-violet-400" required/>
					</div>
					<div className="space-y-2">
						<label htmlFor="email" className="block text-sm">Email address</label>
						<input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100 focus: border-violet-400" required/>
					</div>
					<div className="space-y-2">
						<div className="flex justify-between">
							<label htmlFor="password" className="text-sm">Password</label>							
						</div>
						<input type="password" name="password" id="password" minLength="8" placeholder="Password" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100 focus: border-violet-400" required/>
					</div>
                   
					{/* {
						registerError &&
						<div>
							<p className='text-red-600'>{registerError}</p>
						</div>
					} */}
					
				</div>

				
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900">Create an account</button>
			</form>
		</div>
    );
};

export default Register;