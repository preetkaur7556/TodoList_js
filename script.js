//       <div class="tasks">
// <!-- the div containing the title and description -->
// <div class="content">
//     <div class="title">Lorem ipsum dolor sit amet.`</div>
//     <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fugit, fuga quisquam earum voluptates totam. Iusto eveniet sequi commodi modi tenetur esse quibusdam deleniti fugit quam mollitia? Corporis quibusdam at recusandae cupiditate consequatur voluptatibus.description </div>
// </div>
// <button class="dltbtn">-</button>
// </div>
// generate tasks div
// /geberate content div
// genertae title and descrition
// add the content from form in title and description'
// create button with the specified classname and then input the text into it and apply the logic
const input = document.getElementById('title')
const textarea = document.getElementById("desc")
const bottom = document.querySelector(".bottom-container")
let arrayofTasks = []
const addBtn = document.querySelector(".btn")
const form = document.querySelector("form")

// addBtn.addEventListener("click",()=>{createTasks();})
 function createTasks(){
    let tasksDiv = document.createElement('div')
    // add classname to this div
    tasksDiv.classList = "tasks";
    let contentDiv = document.createElement('div')
    contentDiv.classList = "content"
    let titleDiv = document.createElement("div")
    titleDiv.classList  = "title"
    let descriptionDiv = document.createElement("div")
    descriptionDiv.classList  = "description"
    titleDiv.innerText = input.value;
    descriptionDiv.innerText = textarea.value;
    const btn = document.createElement('button')
    btn.classList = "dltbtn"
    btn.innerText = '-'
    // console.log(titleDiv ," ", descriptionDiv)
    contentDiv.appendChild(titleDiv)
    contentDiv.appendChild(descriptionDiv)
    tasksDiv.appendChild(contentDiv)
    tasksDiv.appendChild(btn)
   
    bottom.append(tasksDiv)
    return tasksDiv

}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    createTasks()
   
    
})
// createTasks();

// arrayofTasks.forEach((val , idx)=>{
//     createTasks()
// })