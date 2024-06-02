// const BB = document.querySelector('.buttomBox h4')
// console.log(BB)

// const books = document.querySelectorAll('.tasksList h4');
// Array.from(books).forEach(function(book){
//     console.log(book.textContent);
//     book.textContent += ' (book name)';
// });

// const UpperBox = document.querySelector('.upperBox');
// console.log(UpperBox.innerHTML);
// UpperBox.innerHTML +='<p>... how are you boy? </p>';

// const TL = document.querySelector('.tasksList');
// TL.innerHTML ='<p>... how are you boy? </p>';

// console.log('upperBox node type is: ', UpperBox.nodeType);
// console.log('upperBox node name is: ', UpperBox.nodeName);
// console.log('upperBox has child nodes: ', UpperBox.hasChildNodes());

// const cloneUpperBox = UpperBox.cloneNode(true);
// console.log(cloneUpperBox);

// console.log('the parents node of upperBox is ', UpperBox.parentNode);
// console.log('the parents Element of upperBox is ', UpperBox.parentElement);


// const MainBody =  document.querySelector('.mainBody');
// console.log(MainBody.hasChildNodes());
// console.log(MainBody.children);

// const ButtomBox = document.querySelector(,'.buttomBox');
// // console.log(ButtomBox);
// console.log('this is the next sebling: ', ButtomBox.nextSibling);
// console.log('this is the next Element Sebling: ', ButtomBox.nextElementSibling);

// console.log('this is the previous Sebling: ', ButtomBox.previousSibling);
// console.log('this is the previous Element Sebling: ', ButtomBox.previousElementSibling);

// ButtomBox.previousElementSibling.querySelector('h1').innerHTML +='<br/> Too much to help ';

var btns = document.querySelectorAll('.buttomBox .delete');

Array.from(btns).forEach(function(deleteLi){
    deleteLi.addEventListener('click' ,function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});



