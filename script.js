        function addBook() {
            var bookName = document.getElementById('bookName').value;
            var authorName = document.getElementById('authorName').value;

            if (bookName === "" || authorName === "") {
                alert("Please enter both book and author names.");
                return;
            }

            var bookList = document.getElementById('book-list');
            var li = document.createElement('li');
            li.className = 'book-item';
            li.innerHTML = `
                <span>${bookName} by ${authorName}</span>
                <button class="delete-btn" onclick="deleteBook(this)">Delete</button>
            `;

            bookList.appendChild(li);

            // Clear input fields
            document.getElementById('bookName').value = "";
            document.getElementById('authorName').value = "";
        }

        function deleteBook(btn) {
            var listItem = btn.parentNode;
            listItem.parentNode.removeChild(listItem);
        }
