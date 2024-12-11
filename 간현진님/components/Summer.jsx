import './Tema.css';
import React,{useState,useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Summer(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('summerComments');
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
        localStorage.setItem('summerComments',JSON.stringify(comments));
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            <img src={`${process.env.PUBLIC_URL}/Summer.jpg`} className='img' alt='italia' />
            <div className='mainpage' data-aos="fade-up">
                <h2>여름철 여행지 추천: 아말피 해안, 이탈리아</h2>
                여름이면 생각나는 그곳, 바로 이탈리아의 아말피 해안입니다. 
                지중해의 진주로 불리는 이곳은 이탈리아 남부의 소렌토 반도에 위치하며, 
                그림같은 풍경, 역사적인 마을, 그리고 탁 트인 바다 전망으로 유명합니다. 아말피 해안은 빼어난 자연 경관과 매력적인 해변, 
                그리고 풍부한 문화적 유산으로 여름철 방문객들에게 잊을 수 없는 경험을 선사합니다. <p />
                포지타노와 라벨로, 아말피는 이 해안의 가장 유명한 세 도시로, 각각 독특한 매력을 자랑합니다. 
                포지타노는 가파른 언덕에 자리 잡고 있으며, 컬러풀한 건물들이 바다를 향해 계단식으로 이어져 있습니다. 
                이곳의 좁은 길을 따라 걷다 보면, 숨겨진 부티크 상점이나 카페를 발견하는 즐거움이 있습니다. 
                라벨로에서는 빌라 루폴로에서 열리는 유명한 여름 음악 페스티벌에 참여해보세요. 
                클래식 음악이 중세 시대의 빌라에서 울려 퍼지는 것을 경험하는 것은 매혹적입니다. 
                아말피는 활기찬 해변가와 사랑스러운 광장, 그리고 중세 교회가 방문객들을 기다립니다. <p />

                여름에 아말피 해안을 방문한다면, 햇빛이 내리쬐는 황홀한 해변에서 여유로운 시간을 보내거나,
                 작은 어촌 마을에서 현지 문화를 체험하며 여름을 만끽할 수 있습니다. 
                 아말피 해안은 그 자체로 한 폭의 그림과 같아, 매년 수많은 사람들이 그 매력에 빠져들고 있습니다. 
                 여름을 더욱 특별하게 만들고 싶다면, 
                아말피 해안으로의 여행을 계획해보세요. 여기는 단순한 휴가지가 아닌, 
                생생한 여름의 추억을 만들 수 있는 곳입니다.<p />

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
export default Summer;