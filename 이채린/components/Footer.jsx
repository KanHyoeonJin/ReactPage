import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="foot">
                <div className='footer-right'>
                    <div className='footer-right-list'>
                        <ul>
                            <li><img src={`${process.env.PUBLIC_URL}/img/footerlogo.png`}></img></li>
                            <li><b>| 개발자</b></li>
                            <li><b>| 개인정보처리방침</b></li>
                            <li><b>| 이용약관</b></li>
                        </ul>
                    </div>
                    <div className='footer-right-list'>
                        <ul>
                            <li>고객센터: 충남 천안시 58-10</li>
                            <li>| 전화번호: 010-1111-2222</li>
                            <li>| 이메일: dlcofls21@naver.com</li>
                        </ul>
                    </div>
                    <div className='footer-right-list' style={{marginTop: '2px'}}>
                        <ul>
                            <li>@TrevelMate. ALL RIGHTS RESERVED</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-left' style={{marginRight: '50px'}}>
                    <img src={`${process.env.PUBLIC_URL}/img/facebook_black.png`}></img>
                    <img src={`${process.env.PUBLIC_URL}/img/twit_black.png`}></img>
                    <img src={`${process.env.PUBLIC_URL}/img/instagram_black.png`}></img>
                    <img src={`${process.env.PUBLIC_URL}/img/kakao_black.png`}></img>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
