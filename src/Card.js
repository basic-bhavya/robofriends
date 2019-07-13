import React from 'react';

const Card = () => {
    return (
        <div className='bg-red'>
            <img src="https://robohash.org/test" alt="profile pic"/>
            <div>
                <h2>Name here</h2>
                <p>email address of person</p>
            </div>
        </div>
    );
}

export default Card;