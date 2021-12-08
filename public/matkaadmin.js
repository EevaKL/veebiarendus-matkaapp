
let matkad

async function loeMatkad() {
    const vastus = await fetch('/api/matk')
    const andmed = await vastus.json()
    console.log(andmed)
    matkad = andmed
    naitaMatkadeMenyyd(andmed)
}

async function muudaMatka(matkaId, kasAvatud) {
    const vastus = await fetch(`/api/matk/${matkaId}/muuda?avatud=${kasAvatud}`)
    const andmed = await vastus.json()
    console.log(andmed)
    matkad[matkaId] = andmed
    naitaMatkadeMenyyd(matkad)
    naitaOsalejaid(matkaId)
}

async function muudaMatkaKirjeldust(matkaId, kasAvatud) {
    const nimetus = document.getElementById("matk-nimetus").value
    const pildiUrl = document.getElementById("matk-pilt").value
    const kirjeldus = document.getElementById("matk-kirjeldus").value
    const pikkkirjeldus = document.getElementById("matk-pikkkirjeldus").value

    const vastus = await fetch(`/api/matk/${matkaId}/muuda?nimetus=${nimetus}&pildiUrl=${pildiUrl}&kirjeldus=${kirjeldus}&pikkkirjeldus=${pikkkirjeldus}`)
    const andmed = await vastus.json()
    console.log(andmed)
    matkad[matkaId] = andmed
    naitaMatkadeMenyyd(matkad)
    naitaOsalejaid(matkaId)
}

function naitaMatkadeMenyyd(matkad) {
    let vastus = ''
    for (let i in matkad) {
        const matk = matkad[i]
        vastus += `
        <button class="btn btn-link" onclick="naitaOsalejaid(${i})">
             ${matk.nimetus}
        </button>
        `
    }

    vastus += `        
    <button class="btn btn-link" onclick="naitaUudiseLisamist()">
        Lisa uudis
    </button>
    `

    vastus += `        
    <button class="btn btn-link" onclick="naitaMatkaLisamist()">
        Lisa matk
    </button>
    `

    const menyyElement = document.getElementById("matkad-menyy")
    menyyElement.innerHTML = `
    <div>
        ${vastus}
    </div>
    `
}

function naitaOsalejaid(matkaId) {
    const matk = matkad[matkaId]
    let vastus = ''
    for (let i in matk.osalejad) {
        const osaleja = matk.osalejad[i]
        vastus += `
        <div class="row">
            <div class="col-6">
                 ${osaleja.nimi}
            </div>
            <div class="col-6">
                 ${osaleja.email}
            </div>
        </div>
        `
    }

    let registreerumine = `
        <button
         class="btn btb-link" 
         onclick="muudaMatka(${matkaId}, 'true')"
         >
        Ava registreerumine
        </button>
    `

    if (matk.kasRegistreerumineAvatud) {
        registreerumine = `
        <button 
        class="btn btb-link" 
        onclick="muudaMatka(${matkaId}, 'false')"
        >
        Sulge registreerumine
        </button>
        `
    }

    const matkaAndmedElement = document.getElementById("matka-andmed")
    matkaAndmedElement.innerHTML = `
    <h2>
        ${matk.nimetus}
    </h2>
    ${registreerumine}
    <p>Matka nimetus:</p>
    <input id="matk-nimetus" type="text" value="${matk.nimetus}" placeholder="nimetus"/>
    <p>Matka pilt:</p>
    <input id="matk-pilt" type="text" value="${matk.pildiUrl}" placeholder="pilt"/>
    <p>Matka kirjeldus</p>
    <textarea id="matk-kirjeldus">${matk.kirjeldus}</textarea>
    <p>Matka pikk kirjeluds:</p>
    <textarea id="matk-pikkkirjeldus">${matk.pikkkirjeldus}</textarea>
    <div>
    <button class="btn btn-primary" onclick="muudaMatkaKirjeldust(${matkaId})">
        Salvesta
    </button>
    <button class="btn btn-secondary" onclick="naitaOsalejaid(${matkaId})">
        Katkesta
    </button>
    </div>
    <h2>
        Osalejad
    </h2>
    ${vastus}
    `
}

function naitaUudiseLisamist() {
    const uusUudisHtml = `
    <h1>Uus uudis</h1>
    <input type="text" placeholder="pealkiri" id="pealkiri"/>
    <input type="text" placeholder="uudispilt" id="uudispilt"/>
    <div>
    <label>Kokkuvõte</label><br>
    <textarea id="kokkuvote" cols="50" rows="2"></textarea>
    </div>
    <div>
    <label>Uudistekst</label><br>
    <textarea id="uudistekst" cols="50" rows="10"></textarea>
    </div>
    <label>Põhitekst</label><br>
    <textarea id="pohitekst" cols="50" rows="10"></textarea>
    </div>
    <div>
        <button class="btn btn-primary" onclick="lisaUudis()">
            Lisa
        </button>
    </div> 
    `
    document.getElementById("matka-andmed").innerHTML = uusUudisHtml
}



async function lisaUudis() {
    const pealkiri = document.getElementById("pealkiri").value
    const uudispilt = document.getElementById("uudispilt").value
    const kokkuvote = document.getElementById("kokkuvote").value
    const uudistekst = document.getElementById("uudistekst").value
    const pohitekst = document.getElementById("pohitekst").value
    const uudis = {
        pealkiri,
        uudispilt,
        kokkuvote,
        uudistekst,
        pohitekst
    }
    console.log(uudis)
    const vastus = await fetch('/api/uudis', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(uudis)
    })
    //const andmed = await vastus.json()
    //console.log(andmed)
    if (vastus.ok) {
        document.getElementById("matka-andmed").innerHTML = `
        <div>
            <h2>Uudis lisatud</h2>
        </div>
        `
    }
}

function naitaMatkaLisamist() {
    const uusUudisHtml = `
    <h1>Lisa matk</h1>
    <input type="text" placeholder="nimetus" id="nimetus"/>
    <input type="text" placeholder="pildiUrl" id="pildiUrl"/>
    <div>
    <label>Kirjeldus</label><br>
    <textarea id="kirjeldus" cols="50" rows="10"></textarea>
    </div>
    <div>
        <button class="btn btn-primary" onclick="lisaMatk()">
            Lisa
        </button>
    </div> 
    `
    document.getElementById("matka-andmed").innerHTML = uusUudisHtml
}

async function lisaMatk() {
    const nimetus = document.getElementById("nimetus").value
    const pildiUrl = document.getElementById("pildiUrl").value
    const kirjeldus = document.getElementById("kirjeldus").value
    const matk = {
        nimetus,
        pildiUrl,
        kirjeldus,
        kasNahtav: true,
        kasRegistreerumineAvatud: true

    }
    console.log(matk)
    const vastus = await fetch('/api/matk', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(matk)
    })

    if (vastus.ok) {
        document.getElementById("matka-andmed").innerHTML = `
        <div>
            <h2>Matk lisatud</h2>
        </div>
        `
    }
}

loeMatkad()

