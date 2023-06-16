import { useEffect } from "react" 
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { fetchAll } from "redux/users/operations";
import { selectUsers } from "redux/users/selectors";


export const UsersPage = () => {
    const users = useSelector(selectUsers);
    // console.log(users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    return (
        <ul>
            {users.map(({ id,name }) => {
                return <li key={id}>
                    <Link to={id}>{name}</Link>
                </li>
            })}
        </ul>
    )
};