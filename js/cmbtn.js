const colors = ['violet', 'red', 'green', 'pink', 'yellow', 'orange'];
document.getElementById('bg-change-color').addEventListener('click', function makeColor(){
   
    const colorIndex= parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[colorIndex];
})