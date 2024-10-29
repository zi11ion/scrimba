import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://scrimbaleadstrackerapp-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

// let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// const tabBtn = document.getElementById("tab-btn")

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    // localStorage.clear()
    // myLeads = []
    // render(myLeads)
})

inputBtn.addEventListener("click", function() {
    console.log(inputEl.value)
    inputEl.value = ""
    // localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // render(myLeads)
})