import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../style";
import axios from '../api/axios';


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL= '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() =>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        //prevent invalid entry
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg('Invalid Entry');
            return;
        }
        try {
            const response = await axios.post(
                REGISTER_URL, 
                JSON.stringify({user, pwd}), 
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            console.log(response.data);
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            }else if(err.response?.status === 409){
                setErrMsg('Username taken');
            }else{
                setErrMsg('Registration failed');
                console.log(err);
            }
            errRef.current.focus();
        }

    }

    return (
        <>
            {success ? (
                <section className='w-full overflow-hidden relative z-[1] text-white'>
                    <div className={` ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} `}>
                        <div className={`${styles.boxWidth}  register duration-75 ease-linear`}>
                            <h1 className=' text-[49px]'>Registrierung erfolgreich!</h1>
                            <p>
                                <a href="/login" className='underline'>Anmelden</a>
                            </p>
                        </div>
                    </div>
                </section>) : (

            <section className='w-full overflow-hidden relative z-[1] text-white'>
                <div className={` ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} `}>
                    <div className={`${styles.boxWidth}  register duration-75 ease-linear`}>
                        <p ref={errRef} className={ errMsg ? "text-red-500 bg-red-300 p-3 rounded-md" : "absolute -left-[9000rem]"} aria-live='assertive'>{errMsg}</p>
                        <h1 className=' text-[49px]'>Registrieren</h1>
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <label htmlFor="username">
                                Benutzername:
                                <span className={validName ? "text-lime-500 pl-2" : "hidden"}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <span className={validName || !user ? "hidden" : "text-red-500 pl-2"}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </span>
                            </label>
                            <input type="text" 
                                id='username' 
                                ref={userRef} 
                                autoComplete='off' 
                                onChange={(e) => setUser(e.target.value)} 
                                required 
                                aria-invalid={validName ? "false" : "true"} 
                                aria-describedby='uidnote' 
                                onFocus={() => setUserFocus(true)} 
                                onBlur={() => setUserFocus(false)}
                                className='text-black'
                            />
                            <p id='uidnote' className={userFocus && user && !validName ? "relative" : "absolute -left-[9000rem]"}>
                                <FontAwesomeIcon icon={faInfoCircle}/><br />
                                4 to 24 characters. <br />
                                Must begin with a letter. <br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>

                            <label htmlFor="password" className=''>
                                Passwort:
                                <span className={validPwd ? "text-lime-500 pl-2" : "hidden"}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <span className={validPwd || !pwd ? "hidden" : "text-red-500 pl-2"}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </span>
                            </label>
                            <input type="password" 
                                id='password'  
                                onChange={(e) => setPwd(e.target.value)} 
                                required 
                                aria-invalid={validPwd ? "false" : "true"} 
                                aria-describedby='pwdnote' 
                                onFocus={() => setPwdFocus(true)} 
                                onBlur={() => setPwdFocus(false)} 
                                className='text-black'
                            />
                            <p id='pwdnote' className={pwdFocus && !validPwd ? "relative" : "absolute -left-[9000rem]"}>
                                <FontAwesomeIcon icon={faInfoCircle}/><br />
                                8 to 24 characters. <br />
                                Must include uppercase and lowercase letters, a number and a special character. <br />
                                Allowed Special characters: <span aria-label='excalamtion mark'>!</span> 
                                <span aria-label='at symbol'>@</span> 
                                <span aria-label='hashtag'>#</span> 
                                <span aria-label='dollar sign'>$</span> 
                                <span aria-label='percent'>%</span>.
                            </p>

                            <label htmlFor="confirm_pwd">
                                Password Bestätigen:
                                <span className={validMatch && matchPwd ? "text-lime-500 pl-2" : "hidden"}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <span className={validMatch || !matchPwd ? "hidden" : "text-red-500 pl-2"}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </span>
                            </label>
                            <input type="password" 
                                id='confirm_pwd'  
                                onChange={(e) => setMatchPwd(e.target.value)} 
                                required 
                                aria-invalid={validMatch ? "false" : "true"} 
                                aria-describedby='confirmnote' 
                                onFocus={() => setMatchFocus(true)} 
                                onBlur={() => setMatchFocus(false)}
                                className='text-black'
                            />
                            <p id='confirmnote' className={matchFocus && !validMatch ? "relative" : "absolute -left-[9000rem]"}>
                                <FontAwesomeIcon icon={faInfoCircle}/><br />
                                Must match first password input field. <br />
                            </p>

                            <button disabled={!validName || !validPwd || !validMatch ? true : false} className='relative py-4 px-8 font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] bg-pink-gradient hover:rounded-3xl duration-75 ease-linear active:mt-[0.15rem] active:-mb-[0.15rem] active:box-shadow-2'>Registrieren</button>
                        </form>
                        <p>
                            Bereits registriert?<br />
                            <span className='line'>
                                <a href="/login" className=' underline '>Anmelden</a>
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        )}</>
    )
}

export default Register