import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/users';
import UserCard from '../user-card';
import './index.scss';

function UsersList() {
    const [users, setUsers] = useState();
    
    useEffect(() => {
        const setUsersState = async () => {
            setUsers(await getUsers());
        }
        setUsersState();
    }, [])

    if (users) {
        const usersEls = users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))
        return (
            <>
            <div className='list'>
                {usersEls}
            </div>
            <div className="shadow"/>
            </>
        )
    }
    return <div>...</div>
}

export default UsersList;