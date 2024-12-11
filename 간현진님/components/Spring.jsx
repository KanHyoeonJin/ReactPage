import './Tema.css';
import React,{useState,useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Spring(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('springComments');
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
        localStorage.setItem('springComments',JSON.stringify(comments));
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            <img src={`${process.env.PUBLIC_URL}/Kyoto2.jpg`} className='img' alt='kyoto' />
            <div className='mainpage' data-aos="fade-up">
                <h2>봄철 여행지 추천: 교토, 일본</h2>
                봄이면 일본 교토는 마치 색채로 살아 움직이는 수채화 같습니다.
                 벚꽃이 만개하는 이 시기에 교토는 전 세계에서 온 여행자들로 북적이며, 그들 모두를 환상적인 꽃의 향연으로 맞이합니다. 
                교토의 매력은 그윽한 사찰과 정원, 고즈넉한 전통 가옥 사이사이로 펼쳐지는 벚꽃입니다. <p />

                기온의 벚꽃 터널, 히가시야마의 언덕길, 그리고 아라시야마의 토게츠교는 벚꽃이 풍성하게 핀 대표적인 장소로,
                 이곳에서는 절정에 달한 벚꽃을 배경으로 한 평화로운 산책을 즐길 수 있습니다. 
                 사찰로는 금각사와 기요미즈데라가 봄날의 벚꽃과 함께 방문하기 좋은 곳으로,
                 전통적인 일본 건축의 아름다움과 자연이 어우러진 풍경을 감상할 수 있습니다. <p />

                 야간에는 벚꽃 명소들이 환상적인 조명으로 빛나며, 이때 교토의 벚꽃은 낮과는 또 다른 매력을 발산합니다.
                  마루야마 공원에서는 봄밤의 촛불 아래에서 벚꽃을 보며 일본 전통 차와 간식을 즐길 수 있는 기회도 제공됩니다.<p />

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
export default Spring;