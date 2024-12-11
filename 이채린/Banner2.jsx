import React from 'react';

function Banner2() {
    
    return (
        <div className='banner2' style={{backgroundImage : `url(${process.env.PUBLIC_URL}/img/cherryblossom2.jpg)`}}>
            <div className='bannerright'>
                <p>이 <b>봄</b>이 다 가기 전에 떠나자!</p>
                <h1>2024 봄</h1>
                <h1>여행지 추천</h1>
                
            </div>
            
        </div>
    );
}

export default Banner2;