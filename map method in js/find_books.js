const book = [{ title: 'BookOne', genere: 'Fiction', publish: 1999 },
{ title: 'BookTwo', genere: 'Non - Fiction', publish: 2004 },
{ title: 'BookThree', genere: 'Science', publish: 2006 },
{ title: 'BookFour', genere: 'History', publish: 2019 },
{ title: 'BookFive', genere: 'Fiction', publish: 1995 },
{ title: 'BookSix', genere: 'Non - Fiction', publish: 1987 },
{ title: 'BookSeven', genere: 'History', publish: 2009 },
{ title: 'BookEight', genere: 'History', publish: 2003 },
{ title: 'BookNine', genere: 'Fiction', publish: 2007 },
{ title: 'BookTen', genere: 'Non - Fiction', publish: 2003 },
]

const UserBook = book.filter((AllBooks) => {
    return AllBooks.genere === 'History' && AllBooks.publish > 2005
});

console.log(UserBook);
