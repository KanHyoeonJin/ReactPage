
import './Tema.css';
import React,{useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Tourism(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('tourismComments');
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
        localStorage.setItem('tourismComments',JSON.stringify(comments))
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            
            <img src={`${process.env.PUBLIC_URL}/EffleTower.jpg`} className='img'  alt='ToursimParis'/>
            <div className='mainpage' data-aos="fade-up">
                <h1>관광을 위한 여행지 추천: 파리, 프랑스</h1>
                관광의 도시라고 불리는 파리는 세계에서 가장 많이 찾는 여행지 중 하나입니다. 
                이 도시의 매력은 끝이 없으며, 역사, 문화, 예술, 패션 그리고 미식에 이르기까지 모든 것을 갖추고 있습니다. 
                파리는 그 자체로 하나의 거대한 박물관과 같아, 거리의 모든 풍경이 예술작품입니다.<p />

                <div className='highlight'>에펠탑</div> 파리의 상징이자 필수 방문지인 에펠탑은 여행의 시작점으로 완벽합니다. 
                1889년에 건설된 이 탑은 전 세계에서 가장 인식되는 기념물 중 하나입니다.
                탑의 정상에 올라 파리 시내의 아름다운 전경을 한눈에 볼 수 있습니다.<p />

                <div className='highlight'>루브르 박물관</div>
                파리 방문의 하이라이트 중 하나는 세계 최대의 미술 박물관인 루브르 박물관을 탐방하는 것입니다. 
                ‘모나리자’와 ‘비너스 드 밀로’ 같은 세계적으로 유명한 작품들을 포함하여 35,000점이 넘는 작품들을 감상할 수 있습니다.<p />
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
                <li key={index}>
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

    );
}


export default Tourism;