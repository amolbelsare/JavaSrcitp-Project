let stringVar = "";
let buttons = document.querySelectorAll('.draggable-button');
Array.from(buttons).forEach((button)=>{
    button.setAttribute('draggable', true);
    button.addEventListener('dragstart', (e)=>{
        e.dataTransfer.setData('text/plain', e.target.innerText);    
        e.target.classList.add('dragging');
    });

    button.addEventListener('dragend', (e) =>{
        e.target.classList.remove('dragging');
        if(e.target.innerText  == '='){
            stringVar = eval(stringVar);
            document.querySelector('input').value = stringVar;
        }else if(e.target.innerText == 'C'){
            stringVar = "";
            document.querySelector('input').value = stringVar;
        }else{
            console.log(e.target.innerText);
            stringVar = stringVar + e.target.innerText;
            document.querySelector('input').value = stringVar;
        }
    });

    
    // button.addEventListener('drop', (e) =>{
    //     e.preventDefault();
    //     console.log(e.target.innerText);
    //     const data = e.dataTransfer.getData(e.target.innerText);
    //     document.querySelector('input').value = data;
    // })  
})

// buttons.forEach((button) => {
//     button.setAttribute('draggable', true);

//     // Add a dragstart event listener
//     button.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', e.target.innerText);
//         e.target.classList.add('dragging');
//     });

//     // Add a dragend event listener
//     button.addEventListener('dragend', (e) => {
//         e.target.classList.remove('dragging');
//     });
// });

// // Add a dragover event listener to the container
// const container = document.querySelector('.container');
// container.addEventListener('dragover', (e) => {
//     e.preventDefault();
// });

// // Add a drop event listener to the container
// container.addEventListener('drop', (e) => {
//     e.preventDefault();
//     const data = e.dataTransfer.getData('text/plain');
//     if (data) {
//         // Create a new button element with the dragged text
//         const newButton = document.createElement('button');
//         newButton.className = 'button draggable-button';
//         newButton.innerText = data;

//         // Add drag-and-drop functionality to the new button
//         newButton.setAttribute('draggable', true);
//         newButton.addEventListener('dragstart', (e) => {
//             e.dataTransfer.setData('text/plain', e.target.innerText);
//             e.target.classList.add('dragging');
//         });

//         newButton.addEventListener('dragend', (e) => {
//             e.target.classList.remove('dragging');
//         });

//         // Append the new button to the container
//         container.appendChild(newButton);
//     }
// });