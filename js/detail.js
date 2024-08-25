const bookSection = document.querySelector('.book');

const bookHTML = `
    <button class="close-button"><i class="fa-solid fa-x"></i></button>
    <img src="../assets/book-cover-details.jpg" alt="Harry Potter And The Order Of The Phoenix" class="book-cover">
    <div class="book-details">
        <h2>Harry Potter And The Order Of The Phoenix</h2>
        <p class="author">J.K. ROWLING</p>
        <p class="genre">Fantasy, Drama, Mystery Thriller</p>
        <p class="description">In his fifth year at Hogwarts, Harry faces challenges at every turn, from the dark threat of He-Who-Must-Not-Be-Named and the unreliability of the government of the magical world to the rise of Ron Weasley as the keeper of the Gryffindor Quidditch Team.</p>
        <div class="rating">
            <span class="rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span>128,873</span>
        </div>
        <button class="buy-button">BUY $6.22</button>
        <span class="bookmarks">
            <i class="fa-regular fa-bookmark"></i>
        </span>
    </div>
`;

bookSection.innerHTML = bookHTML;

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    bookSection.style.display = 'none';
});