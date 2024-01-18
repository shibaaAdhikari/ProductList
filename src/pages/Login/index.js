import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onEmailChange = (e) => {
        setUsername(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
        };

        try {
            const response = await axios.post('https://dummyjson.com/auth/login', user);
            const token = response.data.token;
            console.log('Login Successful. Token:', token);
            setUsername('');
            setPassword('');
            router.push('/')
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-slate-100 text-black'>
            <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
                <h1 className='font-semibold text-2xl'>Login</h1>
                <form onSubmit={onSubmit} className='space-y-12 w-full sm:w-[400px]'>
                    <div className='grid w-full items-center gap-1.5'>
                        <label htmlFor="username">Username</label>
                        <input
                            className="w-full border p-2"
                            required
                            id="text"
                            type="text"
                            value={username}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                        <label htmlFor="password">Password</label>
                        <input
                            className="w-full border p-2"
                            required
                            id="password"
                            type="password"
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className='w-full'>
                        <button className="w-full bg-customColor text-white py-2 px-4 rounded">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
