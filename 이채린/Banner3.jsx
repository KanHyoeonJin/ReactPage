import React from 'react';

function Banner3() {
    
    return (
        <div className='banner3' style={{backgroundImage : `url(${process.env.PUBLIC_URL}/img/tongyeong.jpg)`}}>
            <div className='bannerright'>
                <h2>잠깐 쉬었다 갈 타이밍,</h2>
                <h1>힐링 여행</h1>
                
            </div>
            
        </div>
    );
}

export default Banner3;