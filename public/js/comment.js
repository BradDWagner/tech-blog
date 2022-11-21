const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    const post_id = window.location.href.toString().split('/post/')[1];

    if(content && post_id) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Failed to create comment');
          }
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);