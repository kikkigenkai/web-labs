export class Comment {
    constructor({id, postId, author, text}) {
        this.id = id;
        this.postId = postId;
        this.author = author;
        this.text = text;
    }

    render(commentBox) {
        const comment = document.createElement('div');

        comment.classList.add('comment');
        comment.classList.add('mb-2');
        comment.innerHTML = `
            <div class="row border border-secondary border-2 rounded">
                <h5 class="card-title">${this.author}</h5>
                <hr>
                <p class="card-text">${this.text}</p>
                <button class="btn btn-secondary my-1 mx-1 col-1 del" data-id="${this.id}">Delete</button>
            </div>
        `;

        commentBox.append(comment);
    }
}