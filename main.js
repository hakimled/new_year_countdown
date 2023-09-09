const btnEl = document.querySelector('button');


btnEl.addEventListener('click', ()=>{
    changeColor()
})





function changeColor(){
   let colors = ['lightblue' , 'lightgreen' , 'dodgerblue' , 'tomato'];
    const randColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor =  `${colors[randColor]}`;
    document.body.style.transition =  '.2s ease-out';
    console.log(colors[randColor]);
};