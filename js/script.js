const white = document.querySelector('.bigger'),
      m = document.querySelector('.mobile_part'),
      button = document.querySelectorAll('button');
    //   n= document.querySelector('.');
white.addEventListener('click', ()=>{
    m.classList.toggle('none');
})
// button.addEventListener('click' ,()=>{
//     console.log(button);
// })
button.forEach(e => {
   e.addEventListener('click' ,()=>{
    n.classList.toggle('none');

   }) 
});
// white.forEach(e => {
//     e.addEventListener('click' ,()=>{
//         m.classList.toggle('none');
//     }) 
//  });