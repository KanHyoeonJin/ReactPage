import React from 'react';

function Korea() {
  const handleClick = () => {
    const width = 500;
    const height = 500;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const newWindow = window.open(
      '',
      '_blank',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>New Window</title>
          <style>
            @font-face {
              font-family: 'ChosunGs';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff')
              format('woff');
              font-weight: normal;
              font-style: normal;
            }

            h1 { font-family: 'ChosunGs'; }
            p { font-family: 'ChosunGs'; }
            img { width: 100%; max-width: 300px; height: auto; margin-top: 20px; }

            #comment-section {
              margin-top: 20px;
              padding: 20px;
              background: #f8f8f8;
              border: 1px solid #ddd;
              border-radius: 4px;
            }
            #commentInput {
              width: calc(100% - 90px);
              padding: 8px;
              margin-right: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            button {
              padding: 10px 15px;
              background-color: #007BFF;
              border: none;
              color: white;
              font-size: 14px;
              cursor: pointer;
              border-radius: 4px;
            }
            button:hover {
              background-color: #0056b3;
            }
            ul {
              list-style-type: none;
              padding: 0;
            }
            li {
              padding: 8px;
              border-bottom: 1px solid #eee;
            }
            li:last-child {
              border-bottom: none;
            }
          </style>
        </head>
        <body>
          <h1>경복궁</h1>
          <img src="${process.env.PUBLIC_URL}/Korea.jpg" alt="Description for Korea">
          <p>경복궁 설명...</p>
          <div id="comment-section">
            <h2>댓글</h2>
            <input type="text" id="commentInput" placeholder="댓글을 입력하세요" />
            <button onclick="addComment()">댓글 등록</button>
            <ul id="commentList"></ul>
          </div>
          <script>
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            const commentList = document.getElementById('commentList');
            const commentInput = document.getElementById('commentInput');

            function addComment() {
              const comment = commentInput.value;
              if (comment) {
                comments.push(comment);
                localStorage.setItem('comments', JSON.stringify(comments));
                displayComments();
                commentInput.value = ''; 
              }
            }

            function displayComments() {
              commentList.innerHTML = '';
              comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment;
                commentList.appendChild(li);
              });
            }

            displayComments();
          </script>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <div className="image-item Korea" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Korea.jpg`}
        alt="Korea"
        className="special-effect"
      />
    </div>
  );
}

export default Korea;
