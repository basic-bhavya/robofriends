import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((bot, i) => { 
                    return (
                    <Card id={robots[i].id}
                    key= {robots[i].id}  
                    name={robots[i].name} 
                    email={robots[i].email}/>
                    );

                    })
                 
            }
        </div>
    );
}

export default CardList;