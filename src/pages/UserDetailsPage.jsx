import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchOne } from "redux/users/operations";
import { selectCurrentUser } from "redux/users/selectors"

export const UserDetailsPage = () => {
    const userDetails = useSelector(selectCurrentUser);
    // console.log(userDetails)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchOne(id))
    }, [dispatch, id]);

    return (
        <>
        {userDetails && (
            <>
            <img src={userDetails.avatar} alt={userDetails.name} />
            <p>{userDetails.name}</p>
            <p>{userDetails.phone}</p>
            <p>{userDetails.email}</p>
            <p>{userDetails.address}</p>
            </>
        )
        }
        </>
    );

}