import React from 'react';
import { ReactComponent as Remove } from '../../assets/svg/remove.svg';
import { ReactComponent as Dropdown } from '../../assets/svg/dropdown.svg';
import './index.scss';

function UserModal({ user, close }) {
    return (
        <div className='background'>
            <div className='modal'>
                <div className='title'>
                    <h1 className='title-text'>{`${user.fname} ${user.name}`}</h1>
                    <Remove className='remove-icon' onClick={close} />
                </div>
                <div className='content'>
                    <div className='user-info'>
                        <h3 className='user-info-text'>{`${user.fname}`}</h3>
                    </div>
                    <div className='user-info'>
                        <h3 className='user-info-text'>{`${user.name}`}</h3>
                    </div>
                    <div className='user-info'>
                        <h3 className='user-info-text'>{`${user.mname}`}</h3>
                    </div>
                    <div className='user-info'>
                        {
                            (user.status === 0 && <h3 className='user-info-text'>Подписка активна</h3>)
                            || (user.status === 1 && <h3 className='user-info-text'>Приостановлена</h3>)
                            || (user.status === 2 && <h3 className='user-info-text'>Заблокирован</h3>)
                        }
                        <Dropdown className='dropdown' />
                    </div>
                </div>
                <button className='btn' onClick={close}>
                    <h3 className='btn-text'>Сохранить</h3>
                </button>
            </div>
        </div>
    )
}

export default UserModal;