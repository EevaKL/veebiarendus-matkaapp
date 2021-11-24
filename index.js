const { timingSafeEqual } = require('crypto')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 16000

matkad = [
    {
        id: 0,
        nimetus: "Hukkunud alpinisti radadel",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pildiUrl: "/assets/hukkunud_alpinisti_radadel.jpg",
        osalejad: []
    },
    {
        id: 1,
        nimetus: "Uputatud linn Rumeenias",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pildiUrl: "/assets/uputatud_linn_rumeenias.jpg",
        osalejad: []
    },
    {
        id: 2,
        nimetus: "Talvematk: Religioosed ehitised Uue usu kloostris",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pildiUrl: "/assets/religioosed_ehitised_talvematk_Uueusu_kloostris.jpg",
        osalejad: []
    }
]


uudised = [
    {
        id: 0,
        pealkiri: "Logopudelid nüüd saadaval",
        kokkuvote: "Eligendi, quibusdam recusandae modi sunt dignissimos velit natus dolore nobis tenetur, quas sit laborum, a ad reprehenderit tempore eaque iure odit.",
        uudistekst: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat necessitatibus optio quia tenetur sapiente ex, placeat deserunt vel, asperiores aperiam ipsa assumenda non voluptate earum quas pariatur aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quibusdam recusandae modi sunt dignissimos velit natus dolore fuga nobis tenetur, quas sit laborum, a ad reprehenderit tempore eaque iure odit.",
        uudispilt: "/assets/moogamatkad_logopudel.jpeg"
    },
    {
        id: 1,
        pealkiri: "Machu Piccu rühmareis",
        kokkuvote: "Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt. Possimus cumque eveniet voluptas unde odit facilis nemo.",
        uudistekst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore, saepe ad obcaecati assumenda quia officiis amet. Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt. Veniam laboriosam, nostrum illum animi consequatur natus quo? Corporis officia laudantium illo quo ipsum nulla maiores iusto illum quos molestiae. Delectus, quam.  Ducimus quos similique illum volupt atibus saepe cupiditate delectus ratione, iure accusamus officia accusantium, eaque soluta quia non iste voluptates ex doloribus consequatur.",
        uudispilt: "/assets/machu_picchu_peru.jpg"
    },
    {
        id: 2,
        pealkiri: "Matkaspordi eripakkumine klubiliikmetele",
        kokkuvote: "Hammockid praegu eriti magusa hinnaga. Ducimus quos similique illum voluptatibus saepe cupiditate delectus ratione, iure accusamus officia accusantium.",
        uudistekst: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque eveniet voluptas unde odit facilis nemo. Eum distinctio neque velit maxime harum modi laborum vero numquam iste aliquid. Sed, velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veritatis, eaque mollitia maxime dolorum labore temporibus et expedita neque corrupti autem debitis commodi quis assumenda aliquid. Enim impedit alias tempore.",
        uudispilt: "/assets/hammock_lifestiyle.jpg"
    },
    {
        id: 3,
        pealkiri: "Sügismatk: Lõuna-Eesti põlismetsad ja müüdid",
        kokkuvote: "Quod perferendis voluptatum eius esse, veritatis enim fugiat ex rerum aliquid nam. Nobis modi eveniet, odio ipsa rem nihil et ea sed.",
        uudistekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sequi ut dolorem eveniet in dolor, esse aspernatur deserunt, sapiente, deleniti omnis optio delectus? Illo unde harum velit fuga magni voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque accusamus dolores qui laudantium cum sit. Quis, vitae tenetur maxime optio quo omnis! Animi numquam dolorem minima, ipsam earum amet consequuntur.",
        uudispilt: "/assets/sügismatk_lõuna_eesti_põlismetsad.jpg"
    },
    {
        id: 4,
        pealkiri: "Tšiili mägedes",
        kokkuvote: "Officia blanditiis eum cum vero quasi laudantium, consequatur labore voluptas. Quod, libero. Earum est, cumque enim voluptatem autem at quibusdam reiciendis repellat.",
        uudistekst: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro minus magnam excepturi doloremque, blanditiis laboriosam illum possimus, molestias animi vero voluptates quo et nam natus tempore hic ab esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam veritatis consequuntur aliquam nesciunt odio architecto saepe illo? Earum dolore repellat perferendis ullam numquam fugiat, eveniet cum natus beatae fugit.",
        uudispilt: "/assets/tšiili_mägedes.jpg"
    },
    {
        id: 5,
        pealkiri: "Avastame Gruusiat: Udziro (põhjatu) järv",
        kokkuvote: "Dolorem animi ipsam culpa iste asperiores molestias ab porro at itaque omnis? Expedita possimus itaque incidunt repudiandae quasi corrupti quam, et animi.",
        uudistekst: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias iusto, temporibus, laudantium quidem magnam maxime expedita tenetur, consequuntur est possimus totam repellendus culpa sapiente voluptatem aliquid nobis doloribus quis vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fuga id nostrum corporis natus nam ducimus, quis soluta. Similique ipsum maiores ad ea numquam porro accusantium saepe blanditiis ab odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque rerum nam magnam, mollitia assumenda blanditiis ipsum minima recusandae nobis voluptate voluptatibus nulla fuga natus magni similique, voluptas nisi ratione fugit!",
        uudispilt: "/assets/udziro_lake.jpg"
    }
]

function registreerumiseKinnitus(req, res) {
    console.log(req.query.nimi)
    if (!req.query.email) {
        res.end("Email puudub, registreerumine ebaõnnestus!")
        return false
    }
    const registreerumine = {
        nimi: req.query.nimi,
        email: req.query.email,
        teade: req.query.teade
    }

    const matk = matkad[req.params.matkaId]
    matk.osalejad.push(registreerumine)

    res.end(`Registreeruti matkale`)
}

function naitaUudist(req, res) {
    const uudisIndeks = req.params.uudisIndeks
    const uudis = uudised[uudisIndeks]
    res.render("pages/uudis", { uudis })
}


const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index', { matkad }))
app.get('/kontakt', (req, res) => res.render('pages/kontakt'))
app.get('/blogi', (req, res) => res.render('pages/blogi', { uudised }))
app.get('/registreerumine/:matkaId',
    (req, res) => res.render(
        'pages/registreerumine',
        { matk: matkad[req.params.matkaId] }
    )
)
app.get("/kinnitus/:matkaId", registreerumiseKinnitus)
app.get("/blogi/:uudisIndeks", naitaUudist)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
