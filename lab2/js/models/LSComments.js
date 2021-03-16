class LSComments {
    constructor(comments) {
        this.comments = !comments ? [] : comments;
    }

    getComments(postId = 0) {
        return postId === 0 ? this.comments : this.comments.filter(item => +item.postId === +postId);
    }

    removeComment(id) {
        const idx = this.comments.findIndex(item => +item.id === +id);

        this.comments.splice(idx, 1);
        localStorage.setItem('comments', JSON.stringify(this.comments));
    }

    removeByPost(id) {
        this.comments = this.comments.filter(item => +item.postId !== +id);
        localStorage.setItem('comments', JSON.stringify(this.comments));
    }

    addComment(comment) {
        this.comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(this.comments));
    }
}

export default new LSComments(JSON.parse(localStorage.getItem('comments')));