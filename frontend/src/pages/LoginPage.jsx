import React, { useState} from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import Inputs from '../components/Inputs';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
	await login(email, password);
  }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-xs sm:max-w-sm md:max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
    >

        <div className='p-8'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-sky-600 text-transparent bg-clip-text'>
				Welcome Back!
			</h2>

            <form 
                onSubmit={handleLogin}
                className='mt-5'>
				<Inputs
					icon={Mail}
					type='email'
					placeholder='Email Address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Inputs
					icon={Lock}
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className='flex items-center mb-6'>
					<Link to='/forgot-password' className='text-sm text-cyan-400 hover:underline'>
						Forgot password?
					</Link>
				</div>

				{error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}

                <motion.button
					className='mt-2 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white 
					font-bold rounded-lg shadow-lg hover:from-blue-600
				  hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
				  focus:ring-offset-gray-900 transition duration-200'
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					type='submit'
                    disabled={isLoading}
				>   
					{isLoading ? <Loader className='w-6 h-6 animate-spin mx-auto' /> : 'Login'}
				</motion.button>
            </form>
        </div>

        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
			<p className='text-sm text-gray-400'>
				Don't have an account?{" "}
				<Link to={"/signup"} className='text-blue-400 hover:underline'>
					Sign Up
				</Link>
			</p>
	    </div>
      
    </motion.div>
  )
}

export default LoginPage