const commentReviewsFunc = () => {
    const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star");
    commentStarsDOM.forEach((item) => {
        commentStarsDOM.forEach((star) => star.classList.remove("active"));
        item.addEventListener("click", (e) => {
            e.preventDefault();
            item.classList.add("active");
        })
    })
}

const addNewCommentFunc = () => {
    let comments = [];
    let commentTextDOM = document.getElementById("comment-text");
    let commentNameDOM = document.getElementById("comment-name");
    let commentBtnDOM = document.querySelector(".form-submit input");
    let commentListDOM = document.querySelector(".comment-list");
    let commentText = "";
    let commentName = "";

    commentTextDOM.addEventListener("input", (e) => {
        commentText = e.target.value;
    })

    commentNameDOM.addEventListener("input", (e) => {
        commentName = e.target.value;
    })

    commentBtnDOM.addEventListener("click", addComment);
    function addComment(e) {
        e.preventDefault();
        comments.push({ text: commentText, author: commentName })
        let result = "";
        comments.forEach((item) => {
            result += `
            <li class="comment-list-item">
            <div class="comment-avatar">
                <img src="img/avatars/avatar2.jpg" alt="">
            </div>
            <div class="comment-text">
            <ul class="comment-star">
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-half"></i>
                </li>
            </ul>
                <div class="comment-meta">
                    <strong>${item.author}</strong>
                        -
                    <time>April 23,2023</time>
                </div>
                <div class="comment-desc">
                <p>
                    ${item.text}
                </p>
                </div>
            </div>
        </li>                       
        `})
        commentListDOM.innerHTML = result;
        commentTextDOM.value = "";
        commentNameDOM.value = "";
    }
    commentBtnDOM.addEventListener("click", addComment);
}

function commentFunc() {
    commentReviewsFunc();
    addNewCommentFunc();
}

export default commentFunc();