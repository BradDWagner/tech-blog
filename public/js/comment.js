const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    const post_id = window.location.href.toString().split('/post/')[1];
    console.log(post_id)

    if(content && post_id) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: {
                'Content-Type': 'applicaiton/json',
            },
        });

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Failed to create project');
          }
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);