import './Tema.css';
import React,{useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Epicurism(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('epicurismComments');
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
        localStorage.setItem('epicurismComments',JSON.stringify(comments))
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            
            <img src={`${process.env.PUBLIC_URL}/Food.jpg`} className='img'  alt='Thailand'/>
            <div className='mainpage' data-aos="fade-up">
                <h1>식도락 여행지 추천:방콕, 태국</h1> 
                
                태국의 수도 방콕은 세계적으로 유명한 식도락 도시입니다. 
                이곳은 전통 태국 요리뿐만 아니라, 독특한 거리 음식과 현대적인 국제 요리가 어우러진 곳으로, 
                미식가들에게 다양한 맛의 경험을 제공합니다.<p />

                <div className='highlight'>짜뚜짝 시장</div> 
                방콕에서 가장 크고 유명한 시장인 짜뚜짝 시장은 방문객들에게 다양한 먹을거리를 제공합니다. 
                여기에서는 신선한 과일, 현지 스트리트 푸드, 다양한 태국 요리를 맛볼 수 있습니다. 
                또한, 기념품, 옷, 공예품 등도 함께 구매할 수 있어 쇼핑과 식도락을 동시에 즐길 수 있습니다.
                <p />

                <div className='highlight'>차이나타운 야오와랏 로드</div>
                야오와랏로드에 있는 차이나타운에 가면 수제 딤섬과 오이스터 오믈렛 등 여러 먹을거리가 풍부합니다.. 
                내로라하는 태국 현지 음식들로 가득한 이곳에서 중국 음식이라니 약간 의아하게 느껴질 수도 있지만, 
                관광 필수 코스로 자리 잡았을 만큼 방콕 차이나타운의 중국 음식은 맛이 뛰어나기로 유명합니다.
                <p />
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


export default Epicurism;