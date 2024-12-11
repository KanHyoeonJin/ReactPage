import './Tema.css';
import React,{useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Winter(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('winterComments');
        return savedComments ? JSON.parse(savedComments):[];
    });
    const [commentInput,setCommentInput]=useState('');

    const addComment=()=>{
        if(commentInput){
            setComments(prevComments=>[...prevComments,commentInput])
            setCommentInput('')
        }
    }
    useEffect(()=>{
        localStorage.setItem('winterComments',JSON.stringify(comments));
        AOS.init({
            duration:1200,
            once:true,
        });
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            <img src={`${process.env.PUBLIC_URL}/Winter2.jpg`} className='img' alt='Swiss' />
            <div className='mainpage' data-aos="fade-up">
                <h2>겨울철 여행지 추천: 루세른, 스위스</h2>
                
                겨울의 마법이 살아 숨 쉬는 곳, 루세른에서 스위스의 진정한 겨울을 경험하세요. 
                루세른은 스위스 중부에 위치한 매혹적인 도시로, 그림같은 풍경과 역사적인 명소들로 가득합니다. 
                겨울철에 루세른을 방문한다면, 눈 덮인 알프스의 장엄한 전망과 함께 전통적인 스위스의 겨울 문화를 만끽할 수 있습니다.<p />

                겨울이면 도시 곳곳에서 크리스마스 마켓이 열립니다. 
                루세른의 크리스마스 마켓은 따뜻한 빈 와인, 수제 초콜릿, 그리고 다양한 크리스마스 장식품들로 가득합니다. 
                불빛으로 환하게 빛나는 부스에서 로컬 상인들의 수공예품을 구경하고, 겨울의 추위를 녹일 수 있는 로컬 음식을 맛보세요.<p />

                루세른에서 차로 단 시간 거리에 있는 티틀리스, 필라투스, 리기 등의 산들은 겨울 스포츠 애호가들을 위한 완벽한 장소입니다. 
                스키, 스노보드, 스노슈잉과 같은 겨울 스포츠를 즐길 수 있으며, 산악 케이블카를 타고 알프스의 눈 덮인 정상까지 올라가 보세요. 
                그곳에서는 눈부신 겨울 풍경과 함께 스위스 알프스의 숨막히는 아름다움을 감상할 수 있습니다.<p />
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
export default Winter;