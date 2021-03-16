class LSPosts {
    constructor(posts) {
        this.posts = !posts ? [] : posts;
    }

    getPosts() {
        return this.posts;
    }

    getPost(id) {
        return this.posts[this.posts.findIndex(item => +item.id === +id)];
    }

    removePost(id) {
        const postIdx = this.posts.findIndex(item => +item.id === +id);

        this.posts.splice(postIdx, 1);
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }

    createPost(post) {
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }
}

export default new LSPosts(JSON.parse(localStorage.getItem('posts')));