document.querySelector("form").addEventListener("submit",todoFun)

function todoFun(event){
    event.preventDefault()
    let name = document.getElementById("task").value
    let id = document.getElementById("priority").value

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = name
    
    let td2 = document.createElement("td")
    td2.innerHTML = id
    if(id === "High"){
        td2.style.backgroundColor = "red"
        td2.style.color = "white"
    }
    if(id === "Low"){
        td2.style.backgroundColor = "green"
        td2.style.color = "white"
    }

    let td3 = document.createElement("td")
    td3.innerHTML = "DELETE"
    
    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr)
}