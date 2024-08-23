document.addEventListener("DOMContentLoaded", () => {
    const books = [
        {
            coverImage: './assets/cover1.png',
            title: 'Pouring Dreams',
            author: 'Author Name 1'
        },
        {
            coverImage: './assets/cover2.png',
            title: 'Simple & Minimalist',
            author: 'Author Name 2'
        },
        {
            coverImage: './assets/cover3.png',
            title: 'Plant tree for the Future',
            author: 'Author Name 3'
        },
        {
            coverImage: './assets/cover4.png',
            title: 'Customize your Autumn',
            author: 'Author Name 4'
        },
        {
            coverImage: './assets/cover5.png',
            title: 'The Lord of The Kings',
            author: 'Sarah Geston'
        },
        {
            coverImage: './assets/cover6.png',
            title: 'Modern Abstract',
            author: 'Author Name 6'
        },
        {
            coverImage: './assets/cover7.png',
            title: 'Memories of the Sword',
            author: 'Author Name 7'
        },
        {
            coverImage: './assets/cover8.png',
            title: 'Ideal for Interior',
            author: 'Author Name 8'
        },
        {
            coverImage: './assets/cover9.png',
            title: 'Classic Blue',
            author: 'Author Name 9'
        },
        {
            coverImage: './assets/cover10.png',
            title: 'Celtic Tales',
            author: 'Author Name 10'
        }
    ];

    const gridContainer = document.querySelector('.grid-container');

    books.forEach(book => {
        // Card structure
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = book.coverImage;
        img.alt = `Cover of ${book.title}`;

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = book.author;

       
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(author);

        
        gridContainer.appendChild(card);
    });
});
