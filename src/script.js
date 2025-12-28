const books = [
    {
        title: "JavaScript Basics",
        author: "John Doe",
        category: "Programming",
        price: "$25",
        image: "https://via.placeholder.com/200x150"
    },
    {
        title: "UI Design Principles",
        author: "Jane Smith",
        category: "Design",
        price: "$30",
        image: "https://via.placeholder.com/200x150"
    },
    {
        title: "Startup Fundamentals",
        author: "Mike Brown",
        category: "Business",
        price: "$28",
        image: "https://via.placeholder.com/200x150"
    }
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const emptyMessage = document.getElementById("emptyMessage");

function renderBooks() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    bookList.innerHTML = "";

    const filteredBooks = books.filter(book => {
        const matchesText =
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "all" || book.category === category;

        return matchesText && matchesCategory;
    });

    if (filteredBooks.length === 0) {
        emptyMessage.classList.remove("hidden");
        return;
    }

    emptyMessage.classList.add("hidden");

    filteredBooks.forEach(book => {
        const card = document.createElement("article");
        card.className = "book-card";

        card.innerHTML = `
            <img class="book-card__image" src="${book.image}" alt="${book.title}">
            <h3 class="book-card__title">${book.title}</h3>
            <p class="book-card__author">${book.author}</p>
            <span class="book-card__category">${book.category}</span>
            <div class="book-card__price">${book.price}</div>
        `;

        bookList.appendChild(card);
    });
}

searchInput.addEventListener("input", renderBooks);
categoryFilter.addEventListener("change", renderBooks);

renderBooks();
