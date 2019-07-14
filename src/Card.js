import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green pd3 ma2 dib grow br3 bw2 shadow-5'>
            <img alt="profile pic" src={'https://robohash.org/'+props.id+'?set=set4'} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;