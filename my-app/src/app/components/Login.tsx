"use client";

import styles from '../styles/Login.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    return (
        <main className="h-screen flex items-center justify-center flex-col zIndex-1 relative">
            <div className={ styles.loginContainer }>
                <div className={ styles.logoContainer }>ClearTime</div>
                <div className={ styles.inputBox }>
                    <input id="usernameInput" type='username' placeholder="Enter Username"></input>
                </div>
                <div className={ styles.inputBox }>
                    <input id="passwordInput" type='password' placeholder="Enter Password"></input>
                </div>
                <p className="text-[#6F73F6] text-center text-[17.168px] not-italic font-medium leading-[137%] underline">Reset Password</p>
                <button onClick={() => router.push('/resourcePlanner')} className= {styles.loginBtn}> Login </button>
            </div>
        </main>
    )
}

export default Login;