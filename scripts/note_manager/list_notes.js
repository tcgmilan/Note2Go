

export default function ListNotes(){
    const notes = [
        {
            title : "test",
            description : "rdsadasdsa"
        },
        {
            title : "test2",
            description : "dsadsadasdas"
        }
    ]

    const div = document.getElementById("note_table")

    for(let i = 0; i < notes.length; i++){
        const table = document.createElement("table")
        const tr1 = document.createElement("tr")
        const tr2 = document.createElement("tr")
        const th = document.createElement("th")
        const thd = document.createElement("thead")
        const td = document.createElement("td")
        const tbd = document.createElement("tbody")
        table.id = `table#${i}`
        thd.id = `#${i}`
        th.innerText = notes[i].title
        td.innerText = notes[i].description
        
        tr1.appendChild(th)
        tr2.appendChild(td)
        thd.appendChild(tr1)
        tbd.appendChild(tr2)
        table.appendChild(thd)
        table.appendChild(tbd)
        div.appendChild(table)

    }
    
}