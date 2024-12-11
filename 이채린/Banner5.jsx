import React from 'react';

function Banner5() {
    
    return (
        <div className='banner4' style={{backgroundImage : `url(${process.env.PUBLIC_URL}/img/maldives.jpg)`}}>
            <div className='bannerright'>
                <h2>마음마저 청량해지는</h2>
                <h1>몰디브 여행</h1>
                
            </div>
            
        </div>
    );
}

export default Banner5;