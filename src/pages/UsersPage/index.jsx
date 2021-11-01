import React from 'react';
import UsersList from '../../components/users-list';
import './index.scss';
function UsersPage(){
    return(
        <div className="page">
            <UsersList/>
        </div>
    )
}

export default UsersPage;