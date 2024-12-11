import React from 'react';

function Banner4() {
    
    return (
        <div className='banner4' style={{backgroundImage : `url(${process.env.PUBLIC_URL}/img/platter.jpg)`}}>
            <div className='bannerright'>
                <h2>여행? 먹으러 가는거지!</h2>
                <h1>식도락 여행</h1>
                
            </div>
            
        </div>
    );
}

export default Banner4;