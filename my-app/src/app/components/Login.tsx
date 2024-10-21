"use client";

import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../utils/api';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleLogin = async () => {
        try {
            const data = await loginUser(email, password);
            if (!data.error) {
                console.log('Login successful:', data);
                router.push('/resourcePlanner');
            }
            else{
                alert(data.message);
            }

        } catch (error) {
            alert(error);
        }
    };

    return (
        <main className="h-screen flex items-center justify-center flex-col zIndex-1 relative">
            <div className={styles.loginContainer}>
                <div className={styles.logoContainer}>ClearTime®</div>
                <div className={styles.inputBox}>
                    <input id="usernameInput" type='username' placeholder="Enter Username" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={styles.inputBox}>
                    <input id="passwordInput" type='password' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <p className="text-[#6F73F6] text-center text-[17.168px] font-medium leading-[137%] underline cursor-pointer">Reset Password</p>
                <button onClick={() => handleLogin()} className={styles.loginBtn}> Login </button>
            </div>
        </main>
    )
}

export default Login;