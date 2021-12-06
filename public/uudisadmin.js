
let uudised

async function loeUudised() {
    const vastus = await fetch('/api/uudis')
    const andmed = await vastus.json()
    console.log(andmed)
    uudised = andmed
    naitaUudisteMenyyd(andmed)
}

async function muudaUudiseKirjeldust(uudisIndeks) {
    const pealkiri = document.getElementById("uudis-pealkiri").value
    const uudispilt = document.getElementById("uudis-pilt").value
    const kokkuvote = document.getElementById("uudis-kokkuvote").value
    const uudistekst = document.getElementById("uudis-uudistekst").value
    const pohitekst = document.getElementById("uudis-pohitekst").value

    const vastus = await fetch(`/api/uudis/${uudisIndeks}/muuda?pealkiri=${pealkiri}&uudispilt=${uudispilt}&kokkuvote=${kokkuvote}&uudistekst=${uudistekst}&pohitekst=${pohitekst}`)
    const andmed = await vastus.json()
    console.log(andmed)
    uudised[uudisIndeks] = andmed
    naitaUudisteMenyyd(uudised)
}

function naitaUudisteMenyyd(uudised) {
    let vastus = ''
    for (let i in uudised) {
        const uudis = uudised[i]
        vastus += `
        <button class="btn btn-link" onclick="naitaUudist(${i})">
             ${uudis.pealkiri}
        </button>
        `
    }

    const menyyElement = document.getElementById("uudised-menyy")
    menyyElement.innerHTML = `
    <div>
        ${vastus}
    </div>
    `
}

function naitaUudist(uudisIndeks) {
    const uudis = uudised[uudisIndeks]
    for (let i in uudised) {
        const uudisAndmedElement = document.getElementById("uudis-andmed")
        uudisAndmedElement.innerHTML = `
        <h2>
             ${uudis.pealkiri}
        </h2>
        <p> Uudise pealkiri: </p>
        <input id="uudis-pealkiri" type="text" value="${uudis.pealkiri}" placeholder="pealkiri"/>
        <p> Uudise pilt: </p>
        <input id="uudis-pilt" type="text" value="${uudis.uudispilt}" placeholder="pilt"/>
        <p> Uudise lühikokkuvõte: </p>
        <textarea id="uudis-kokkuvote">${uudis.kokkuvote}</textarea>
        <p> Uudise sissejuhatus: </p>
        <textarea id="uudis-uudistekst">${uudis.uudistekst}</textarea>
        <p> Uudise põhitekst: </p>
        <textarea id="uudis-pohitekst">${uudis.pohitekst}</textarea>
        <div>
        <button class="btn btn-primary" onclick="muudaUudiseKirjeldust(${uudisIndeks})">
            Salvesta
        </button>
        <button class="btn btn-secondary" onclick="naitaUudist(${uudisIndeks})">
            Katkesta
        </button>
        </div>
        `
    }
}

loeUudised()