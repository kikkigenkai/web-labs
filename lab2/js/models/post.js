import { cut } from '../utils/cutBody.js';

export class Post {
    constructor({id, postAuthor, postTitle, postBody}) {
        this.id = id;
        this.postAuthor = postAuthor;
        this.postTitle = postTitle;
        this.postBody = postBody;
    }

    render(postsBox) {
        const post = document.createElement('div');

        post.classList.add('card');
        post.classList.add('card-margin');

        post.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${this.postTitle}</h5>
                <p class="card-text">${cut(this.postBody)}</p>
                <div class="d-flex justify-content-between">
                    <div class="mr-auto p-2">
                        <button class="btn btn-dark getPost" data-id="${this.id}">Read</button>
                    </div>
                    <div class="p-2">
                        <button class="btn btn-dark delete" data-id="${this.id}">Delete</button>
                    </div>
                </div>
            </div>
        `;

        postsBox.append(post);
    }
}