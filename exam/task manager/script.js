
let mainTaskDiv = document.getElementById("taskMainDiv")

let taskDiv = document.createElement("div")
taskDiv.className = "taskDiv"

let text1 = document.createElement("p")
text1.innerHTML = "Enter Task :"

let input1 = document.createElement("input")
input1.className = "input1"

let text2 = document.createElement("p")
text2.innerHTML = "<br> Enter Task Image src(Link) :"

let input2 = document.createElement("input")
input2.className = "input1"

let text3 = document.createElement("p")
text3.innerHTML = "<br> Enter Task Priority: High , Medium or Low"

let input3 = document.createElement("input")
input3.className = "input1"


let a = document.createElement("a")
a.href = '#storeData';

let addButton = document.createElement("button")
addButton.innerHTML = "Add Data"
addButton.className = "addButton"

a.append(addButton)

taskDiv.append(text1, input1, text2, input2, text3, input3, a)
mainTaskDiv.append(taskDiv)

addButton.addEventListener("click", function () {

    let storeData = document.getElementById("storeData")
    let storeDiv = document.createElement("div")
    storeDiv.className = "storeDiv"

    let text4 = document.createElement("p")
    text4.innerHTML = "Task : " + input1.value
    text4.className = "text4"

    let image1 = document.createElement("img")
    image1.className = "image1"
    image1.setAttribute("src", input2.value)

    let text5 = document.createElement("p")
    text5.innerHTML = "Priority : " + input3.value
    text5.className = "text4"

    let edit_input1 = document.createElement("input")
    edit_input1.className = "edit_input1"
    edit_input1.style.border = "1px solid black"

    let edit_input2 = document.createElement("input")
    edit_input2.className = "edit_input1"
    edit_input2.style.border = "1px solid black"

    let edit_input3 = document.createElement("input")
    edit_input3.className = "edit_input1"
    edit_input3.style.border = "1px solid black"

    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.className = "editButton"

    const updateButton = document.createElement("button")
    updateButton.innerText = "Update"
    updateButton.className = "updateButton"
    updateButton.disabled = true;

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.className = "deleteButton"

    storeDiv.append(text4, image1, text5, edit_input1, edit_input2, edit_input3, editButton, updateButton, deleteButton)
    storeData.append(storeDiv)

    editButton.addEventListener("click", function () {
        edit_input1.value = input1.value
        edit_input2.value = image1.src
        edit_input3.value = input3.value
        updateButton.disabled = false;

        edit_input1.style.display = "block"
        edit_input2.style.display = "block"
        edit_input3.style.display = "block"
    })

    updateButton.addEventListener("click", function () {
        if (!updateButton.disabled) {
            text4.innerHTML = "Task : " + edit_input1.value
            image1.src = edit_input2.value
            text5.innerHTML = "Priority : " + edit_input3.value
        }
    })

    deleteButton.addEventListener("click", function () {
        storeDiv.remove()
    })

})

let tasakDataValue = []

function getDatsFromLS() {
    return JSON.parse(localStorage.getItem("taskData")) || [];
}
tasakDataValue = getDatsFromLS()

let Data = input1.value
let Data1 = input3.value

tasakDataValue.push("Task:" + Data, "Priority:" + Data1)
addDataToLS(tasakDataValue)

function addDataToLS(Data, Data1) {
    return localStorage.setItem("taskData", JSON.stringify(Data, Data1));
}
