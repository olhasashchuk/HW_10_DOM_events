// 1 Task
// 1 version
document.addEventListener('DOMContentLoaded', () => {
    const textColor = document.querySelector('.bg-text')
    const buttonChangeOfColor = document.querySelector('.js--button-color');

    buttonChangeOfColor.addEventListener('click', () => {
        textColor.classList.toggle('newbg-text')
    })
})

// 2 version
// function change() {
//     const textColor = document.querySelector('.bg-text');
//     const buttonChangeOfColor = document.querySelector('.js--button-color');
//
//     let isToggled = false;
//
//     buttonChangeOfColor.addEventListener('click', () => {
//         if (isToggled) {
//             textColor.classList.remove('newbg-text');
//         } else {
//             textColor.classList.add('newbg-text');
//         }
//
//         isToggled = !isToggled;
//     });
// }
//
// change();

// 2 Task
document.addEventListener('DOMContentLoaded', () => {
    (function createTable() {
        const container = document.querySelector('.container');
        const table = document.createElement('table');
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('tr');
            for (let j = 1; j<=10; j++) {
                const cell = document.createElement('td');
                cell.innerText = (i * j).toString();
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        container.appendChild(table);
    })()
})


// 3 Task
document.addEventListener ('DOMContentLoaded', ()=>{
    const image = document.querySelector("img");
    const button = document.querySelector(".random");
    button.addEventListener("click", getRandomImage);
    function getRandomImage(){
        for (let i = 1; i <= 9; i++) {
            let randomNum = Math.floor((Math.random() * `${i}`)+1);
            image.setAttribute("src", `images/${randomNum}.jpg`)
        }
    }
});

