import { useRef, useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import styles from "../style";
import axios from '../api/axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LOGIN_URL = '/auth'

const Login = () => {
    const { setAuth, persist, setPersist } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL, 
                JSON.stringify({user, pwd}), 
                {
                    headers: {'Content-Type': 'application/JSON'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const username = response?.data?.username;

            setAuth({user, pwd, roles, accessToken, username});
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("username", username);
            setUser('');
            setPwd('');
            navigate(from, { replace: true });

        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            }else if(err.response?.status === 400){
                setErrMsg('Missing Username or Password');
            }else if(err.response?.status === 401){
                setErrMsg('Kein Konto mit diesem Benutzernamen gefunden');
            }else{
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }

    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <section className='w-full overflow-hidden relative z-[1] text-white'>
            <div className={` ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} `}>
                <div className={`${styles.boxWidth}  register duration-75 ease-linear`}>
                    <p ref={errRef} className={ errMsg ? "text-red-500 bg-red-300 p-3 rounded-md" : "absolute -left-[9000rem]"} aria-live='assertive'>{errMsg}</p>
                    <h1 className=' text-[49px]'>Anmelden</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Benutzername:
                        </label>
                        <input 
                            type="text" 
                            id='username' 
                            ref={userRef} 
                            autoComplete='off' 
                            onChange={(e) => setUser(e.target.value)}
                            value={user} 
                            required
                            className='text-black'
                        />

                        <label htmlFor="password" className=''>
                            Passwort:
                        </label>
                        <input 
                            type="password" 
                            id='password'  
                            onChange={(e) => setPwd(e.target.value)} 
                            value={pwd}
                            required 
                            className='text-black'
                        />

                        <button className='relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] bg-pink-gradient hover:rounded-3xl duration-75 ease-linear active:mt-[0.15rem] active:-mb-[0.15rem] active:box-shadow-2'>Anmelden</button>
                        <div className=''>
                            <input 
                                type="checkbox"
                                id='persist'
                                onChange={togglePersist}
                                checked={persist}
                            />
                            <label htmlFor="persist"> Angemeldet bleiben</label>
                        </div>
                    </form>
                    <p>
                        Noch kein Konto?<br />
                        <span className='line'>
                            <a href="/register" className=' underline '>Registrieren</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Login