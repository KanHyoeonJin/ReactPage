
import React,{useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Commentm(){
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
                <div className='comment'>
                    <h2>댓글</h2>
                        <input type='text' value={commentInput} onChange={(event)=>{setCommentInput(event.target.value)}}
                    placeholder='여기에 댓글을 입력해주세요'
                    className='commentInput'
                    />
                    <button onClick={addComment} className='buttonForInput'>등록</button> 
                    <ul className='commentul'>
                        {comments.map((comment,index)=>
                    <li className='commentli' key={index} data-aos="fade-up">
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


export default Commentm;