//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const images = ['./assets/the_design_of_everyday_things.jpg', './assets/the_most_human_human.jpg','./assets/the_pragmatic_programmer.jpg'];
  const ulElement = document.createElement('ul');
  ulElement.style.listStyle = 'none';
  ulElement.style.display = 'flex';
  ulElement.style.flexWrap = 'wrap';
  ulElement.style.padding = '20px';
  ulElement.style.width = 'calc( 100% - 41px)';
  books.forEach((item,index) => {
    const liElement = document.createElement('li');
    liElement.style.width = 'calc(25% - 51px)';
    liElement.style.margin = '15px';
    liElement.style.padding ='10px';
    liElement.style.minWidth = '350px';
    liElement.style.display = 'list-item';
    liElement.style.textAlign = '-webkit-match-parent';
    const titleAndAuthor = document.createElement('p');
    titleAndAuthor.textContent = `${item.title} - ${item.author}`;
    const img = document.createElement('img');
    img.style.maxWidth = '225px';
    img.src = images[index];
    item.alreadyRead ? liElement.style.backgroundColor = 'green' :  liElement.style.backgroundColor = 'red';
    liElement.appendChild(titleAndAuthor);
    liElement.appendChild(img)
    ulElement.appendChild(liElement)
  });
  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
