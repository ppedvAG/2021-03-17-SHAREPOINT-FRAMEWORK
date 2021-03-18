import React from 'react';

export const Rating = (properties: {starsAmount: number}) => {    
    return (
        <div>
            {'*'.repeat(properties.starsAmount)}
        </div>
    )
}