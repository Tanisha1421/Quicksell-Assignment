import React from 'react';
import './card.css'
import UserIcon from '../UserIcon';
import dots from '../../assets/3 dot menu.svg';
import { getStatusIcon } from '../../utils';

import nopriority from '../../assets/No-priority.svg';
import urgent from '../../assets/Urgent Priority grey.svg';
import low from '../../assets/Low Priority.svg';
import medium from '../../assets/Medium Priority.svg';
import high from '../../assets/High Priority.svg';

const getPriorityIcon = (priority) => {
    switch (priority) {
        case 0: return <img src={nopriority} />
        case 1: return <img src={low} />
        case 2: return <img src={medium} />
        case 4: return <img src={urgent} />
        case 3: return <img src={high} />
        default: return <img src={urgent} />
    }
}

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }) {
    return (
        <div className='card'>
            <div className='top-box'>
                <div className='ticket-id'>{ticket.id}</div>
                {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
            </div>
            <div className='middle-box'>
                {hideStatusIcon ? null : getStatusIcon(ticket.status)}
                <div className='title'>{ticket.title}</div>
            </div>
            <div className='bottom-box'>
                {hidePriorityIcon ? null : <div className='more-icon-box'>{getPriorityIcon(ticket.priority)}</div>}

                {ticket.tag.map((t) => (
                    <div key={t} className='tag-box'>
                        <div className='tag-icon'></div>
                        <div className='tag-text'>{t}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
