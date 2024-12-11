import './Tema.css';
import React,{useEffect, useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Recreation(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('recreationComments');
        return savedComments ? JSON.parse(savedComments):[]
    });
    const [commentInput,setCommentInput]=useState('');

    const addComment=()=>{
        if(commentInput){
            setComments(prevComments=>[...prevComments,commentInput])
            setCommentInput('')
        }
    }
    useEffect(()=>{
        localStorage.setItem('recreationComments',JSON.stringify(comments));
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])

    
    return(
        <div className='allAlign' data-aos="fade-up">
            
            <img src={`${process.env.PUBLIC_URL}/Maldive.jpg`} className='img' alt='Maldive' />
            <div className='mainpage' data-aos="fade-up">
                <h1>휴양 여행지 추천: 몰디브</h1>
                몰디브는 투명한 에메랄드빛 바다와 새하얀 모래사장, 그리고 사치스러운 리조트로 유명한 궁극의 휴양지입니다.
                 이 아름다운 섬나라는 인도양에 위치해 있으며, 평화롭고 고요한 휴가를 원하는 여행자들에게 완벽한 선택지를 제공합니다.<p />
                 <div className='highlight'>수상 비행기 경험</div>
                 몰디브에 도착하면 수상 비행기로 리조트로 이동하는 것부터가 모험이자 휴양의 시작입니다.
                  하늘에서 내려다보는 몰디브의 섬들은 마치 보석처럼 빛나며, 이 독특한 여행은 몰디브만의 특별한 경험을 선사합니다.<p />
                
                <div className='highlight'>사립 비치에서의 휴식</div>대부분의 리조트에는 사립 비치가 마련되어 있어, 
                관광객들로 붐비는 공공 해변과 달리 조용하고 개인적인 공간에서 휴식을 취할 수 있습니다. 모래사장에 누워 일광욕을 즐기거나, 
                책을 읽으며 시간을 보내는 것만으로도 완벽한 휴가가 됩니다.<p />
            <p />
            <hr />
            <p />
            </div>
            <div className='comment'>
                <h2>댓글</h2>
                <input type='text' value={commentInput} onChange={(event)=>{setCommentInput(event.target.value)}}
                placeholder='여기에 댓글을 입력해주세요'
                className='commentInput'
                />
                <button onClick={addComment} className='buttonForInput'>등록</button> 
                <ul>
                    {comments.map((comment,index)=>
                <li key={index} data-aos="fade-up">
                    {comment}
                    <button onClick={()=>{
                        setComments(comments.filter((_,i)=>i!==index));}}
                        className='buttonForDel'
                        >
                        제거
                    </button>
                    
                </li>)}
                </ul>
                


            </div>
     
        </div>

    )
}







export default Recreation;