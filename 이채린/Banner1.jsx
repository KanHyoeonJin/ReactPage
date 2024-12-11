import React from 'react';

function Banner1() {
    
    return (
        
        <div className='banner' style={{backgroundImage : `url(${process.env.PUBLIC_URL}/img/spain.jpg)`}}>
            <div className='bannerright'>
                <p>대도시와 소도시의 <b>매력</b>이 공존하는</p>
                <h1>스페인 여행</h1>
                
            </div>

        </div>
    );
}

export default Banner1;