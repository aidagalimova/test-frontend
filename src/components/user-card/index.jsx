import React, { useState } from 'react';
import UserModal from '../user-modal';
import { ReactComponent as Dropdown } from '../../assets/svg/dropdown.svg'
import avatar from '../../assets/img/avatar.png';
import './index.scss';

const dates = {
    1: ['секунду', 'минуту', 'час', 'день'],
    2: ['секунды', 'минуты', 'часа', 'дня'],
    3: ['секунды', 'минуты', 'часа', 'дня'],
    4: ['секунды', 'минуты', 'часа', 'дня'],
    11: ['секунд', 'минут', 'часов', 'дней'],
    12: ['секунд', 'минут', 'часов', 'дней'],
    13: ['секунд', 'минут', 'часов', 'дней'],
    14: ['секунд', 'минут', 'часов', 'дней']
}

function UserCard({ user }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(prev => !prev);
    }

    function getHumanReadableDate(unit, index) {
        if (dates[unit % 10] && !dates[Math.floor(unit / 10) % 10]) {
            return `${unit} ${dates[unit % 10][index]} назад`;
        }
        return `${unit} ${dates[11][index]} назад`
    }

    function getDate() {
        const now = new Date(Date.now());
        const update = new Date(user.lastUpdatedAt);
        const seconds = (Math.abs(now - update) / 1000).toFixed();
        if (seconds === 0) return 'сейчас';
        if (seconds < 60)
            return getHumanReadableDate(seconds, 0);
        if (seconds < 3600)
            return getHumanReadableDate(Math.floor(seconds / 60), 1);
        if (seconds < 86400)
            return getHumanReadableDate(Math.floor(seconds / 60 / 60), 2);
        if (seconds < 2592000)
            return getHumanReadableDate(Math.floor(seconds / 60 / 60 / 24), 3);
        return update.toLocaleString("ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    return (
        <>
            {isModalOpen && <UserModal user={user} close={() => setIsModalOpen(false)} />}
            <div className='card' onClick={openModal}>
                <div className='user-info'>
                    <img src={avatar} alt='avatar' className='avatar' />
                    <h3 className='text name-text'>{`${user.fname} ${user.name.charAt()}. ${user.mname.charAt()}.`}</h3>

                    <h3 className='text'>{`Баланс: ${Math.floor(user.balance * 100) / 100}`}</h3>
                </div>
                <div>
                    <h3 className='text update-text'>{`Последнее изменение: ${getDate()}`}</h3>

                    {
                        (user.status === 0 && <h3 className='text status-text'>Подписка активна</h3>)
                        || (user.status === 1 && <h3 className='text status-text'>Приостановлена</h3>)
                        || (user.status === 2 && <h3 className='text status-text'>Заблокирован</h3>)
                    }
                    <Dropdown className='dropdown' />
                </div>
            </div>
        </>
    )
}

export default UserCard;