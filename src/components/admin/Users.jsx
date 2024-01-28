import { useState, useEffect } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../style";

const Users = () => {
    const [users, setUsers ] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
               console.log(response.data);
               isMounted && setUsers(response.data); 
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true});
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [])

    return (
        <article className="text-white">
            {
                users?.length
                    ?(  
                        <div>
                            <h1 className={`${styles.heading2}`}>Users</h1>
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left">
                                        <th>Username</th>
                                        <th>User Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, i) => <tr key={i}><td>{user?.username}</td><td>{user?.roles.User}</td></tr>)}
                                </tbody>
                            </table>
                        </div>
                    ) : <p>No users to display</p>
            }
        </article>
    )
}

export default Users