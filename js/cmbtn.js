const colors = ['violet', 'red', 'green', 'pink', 'yellow', 'orange'];
document.getElementById('bg-change-color').addEventListener('click', function makeColor(){
   
    const colorIndex= parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[colorIndex];
})

const buttons =document.getElementsByClassName('cm-btn');
const taskNum = document.getElementById('task-num').innerText;
const navNumber =document.getElementById('nav-num').innerText;
let convertTaskNum= parseInt(taskNum);
let convertNabNum =parseInt(navNumber);

for(const btn of buttons){
    btn.addEventListener('click', function(){
        alert('Board Update Successfully');
        
    })
}
for(const disables of buttons){
    disables.addEventListener('click', function(e){
        const title = this.closest('.rounded-xl').querySelector('.headin').textContent.trim();
        let time = new Date().toLocaleTimeString('en-US');
        let cardContainer = document.getElementById('card-container');
        let completeTask = document.createElement('div');
        completeTask.className = "m-5 p-3 rounded-lg bg-[#f4f7ff]";
        completeTask.innerHTML = `You have Completed The Task ${title} at ${time}`;
        cardContainer.appendChild(completeTask);
        disables.disabled = true;

    })
}
for(const taskNumbers of buttons){
    taskNumbers.addEventListener('click', function(){
        // const sum = convertTaskNum + btns;
        convertTaskNum--;
        document.getElementById('task-num').innerText = convertTaskNum;
        if(convertNabNum==0){
            alert('congratulations');
        }
   
    })
}
for(const taskNumber of buttons){
    taskNumber.addEventListener('click', function(){
        // const sum = convertTaskNum + btns;
        convertNabNum++;
        document.getElementById('nav-num').innerText = convertNabNum;
        
    })
}
const c = document.getElementById('card-container');
const clearBtn = document.getElementById('clearHistory').addEventListener('click', function(){
    c.innerText = '';
})
let formattedDate = new Date().toDateString('en-US');
document.getElementById('date').innerText=formattedDate;


document.getElementById('discover').addEventListener('click',function(){
    window.location.href='./index2.html';
})
