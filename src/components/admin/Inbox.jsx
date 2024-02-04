import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../style";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;

        const getUsers = async () => {
            try {
                await getDocs(collection(db, "users")).then((querySnapshot)=>{               
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(), id:doc.id 
                }));
                setUsers(newData);                
                console.log(users);
                })

            }catch (err) {
                console.error(err);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
        }

    }, []);

    if (!true) {
        return <h1>Loading</h1>;
    }

    return (
        <article className="text-white">
            {users
                    ? (  
                        <div>
                            <h1 className={`${styles.heading2}`}>Posteingang</h1>
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left">
                                        <th>Username</th>
                                        <th>User Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map((user, i) => 
                                        <tr key={i} className="border-b-[1px] border-gray-600">
                                            <td className="py-4">{user.userName}</td>
                                            <td>{user.userRole}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : <p>No users to display</p>
            }
        </article>
    )
}

export default Users