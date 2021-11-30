const { timingSafeEqual } = require('crypto')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 16000

matkad = [
    {
        id: 0,
        nimetus: "Hukkunud alpinisti radadel",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: `
        <p>Lorem ipsum dolor sit amet. Et omnis odio non consectetur iure aut molestiae assumenda quo velit aliquid est voluptatum unde eos consectetur provident et voluptatum aliquam. Aut sequi sint est quod quae in quia laborum ea porro tenetur et consequatur minima.
        </p> 
        <p>Et assumenda galisum est sapiente voluptates ut repudiandae voluptas qui aspernatur voluptatem et odio. Ab molestias quasi et delectus consectetur ea culpa dolor qui sunt omnis vel reprehenderit ullam eum expedita repellat ut iste veritatis. Eum magnam iure et facilis natus aut voluptas dolorum. Est quae internos est quia perspiciatis vel temporibus voluptas nam totam officiis ut reprehenderit aspernatur qui voluptas quaerat. 
        </p>
        <p>33 suscipit debitis ab voluptatum repudiandae est maxime aliquid! Aut cupiditate exercitationem in autem unde ut consequatur Quis ex debitis culpa aut mollitia fuga id accusamus placeat? Hic iusto modi est dicta dolorum 33 alias voluptatibus eos incidunt deserunt et sequi laborum et laboriosam aliquid et reprehenderit laudantium. 
        </p>
        <p>Et ipsam officia repudiandae architecto ab beatae impedit est aspernatur voluptates At consequatur repudiandae vel quis deleniti. Id alias neque et nesciunt autem eos quibusdam aperiam eos alias tenetur sed similique officia! Sit iusto molestias ut magnam totam non adipisci tenetur qui deleniti voluptate! Non quasi velit qui consequatur illum qui unde asperiores est necessitatibus tempora qui veniam officiis.
        </p>
        <p>Vel nulla deleniti aut totam dolorem ut dolorem optio. In inventore ullam id optio voluptatem qui harum nemo aut inventore obcaecati. Et facere natus aut eligendi aliquam ut deleniti atque est suscipit atque et blanditiis atque! Quo aspernatur quasi ut autem quos rem laudantium numquam non dolorum temporibus. Eum dignissimos voluptas et galisum delectus qui omnis incidunt et internos voluptate. Sit veritatis molestias id voluptatem sunt et minus voluptatem ut expedita dolorum vel quod galisum.
        </p>
        `,
        pildiUrl: "/assets/hukkunud_alpinisti_radadel.jpg",
        osalejad: [],
        kasNahtav: true,
        kasRegistreerumineAvatud: true
    },
    {
        id: 1,
        nimetus: "Uputatud linn Bulgaarias",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: `
        <p>Lorem ipsum dolor sit amet. Et omnis odio non consectetur iure aut molestiae assumenda quo velit aliquid est voluptatum unde eos consectetur provident et voluptatum aliquam. Aut sequi sint est quod quae in quia laborum ea porro tenetur et consequatur minima.
        </p> 
        <p>Et assumenda galisum est sapiente voluptates ut repudiandae voluptas qui aspernatur voluptatem et odio. Ab molestias quasi et delectus consectetur ea culpa dolor qui sunt omnis vel reprehenderit ullam eum expedita repellat ut iste veritatis. Eum magnam iure et facilis natus aut voluptas dolorum. Est quae internos est quia perspiciatis vel temporibus voluptas nam totam officiis ut reprehenderit aspernatur qui voluptas quaerat. 
        </p>
        <p>33 suscipit debitis ab voluptatum repudiandae est maxime aliquid! Aut cupiditate exercitationem in autem unde ut consequatur Quis ex debitis culpa aut mollitia fuga id accusamus placeat? Hic iusto modi est dicta dolorum 33 alias voluptatibus eos incidunt deserunt et sequi laborum et laboriosam aliquid et reprehenderit laudantium. 
        </p>
        <p>Et ipsam officia repudiandae architecto ab beatae impedit est aspernatur voluptates At consequatur repudiandae vel quis deleniti. Id alias neque et nesciunt autem eos quibusdam aperiam eos alias tenetur sed similique officia! Sit iusto molestias ut magnam totam non adipisci tenetur qui deleniti voluptate! Non quasi velit qui consequatur illum qui unde asperiores est necessitatibus tempora qui veniam officiis.
        </p>
        <p>Vel nulla deleniti aut totam dolorem ut dolorem optio. In inventore ullam id optio voluptatem qui harum nemo aut inventore obcaecati. Et facere natus aut eligendi aliquam ut deleniti atque est suscipit atque et blanditiis atque! Quo aspernatur quasi ut autem quos rem laudantium numquam non dolorum temporibus. Eum dignissimos voluptas et galisum delectus qui omnis incidunt et internos voluptate. Sit veritatis molestias id voluptatem sunt et minus voluptatem ut expedita dolorum vel quod galisum.
        </p>
        `,
        pildiUrl: "/assets/uputatud_linn_rumeenias.jpg",
        osalejad: [],
        kasNahtav: true,
        kasRegistreerumineAvatud: false
    },
    {
        id: 2,
        nimetus: "Talvematk: Religioosed ehitised Uue usu kloostris",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: `
        <p>Lorem ipsum dolor sit amet. Et omnis odio non consectetur iure aut molestiae assumenda quo velit aliquid est voluptatum unde eos consectetur provident et voluptatum aliquam. Aut sequi sint est quod quae in quia laborum ea porro tenetur et consequatur minima.
        </p> 
        <p>Et assumenda galisum est sapiente voluptates ut repudiandae voluptas qui aspernatur voluptatem et odio. Ab molestias quasi et delectus consectetur ea culpa dolor qui sunt omnis vel reprehenderit ullam eum expedita repellat ut iste veritatis. Eum magnam iure et facilis natus aut voluptas dolorum. Est quae internos est quia perspiciatis vel temporibus voluptas nam totam officiis ut reprehenderit aspernatur qui voluptas quaerat. 
        </p>
        <p>33 suscipit debitis ab voluptatum repudiandae est maxime aliquid! Aut cupiditate exercitationem in autem unde ut consequatur Quis ex debitis culpa aut mollitia fuga id accusamus placeat? Hic iusto modi est dicta dolorum 33 alias voluptatibus eos incidunt deserunt et sequi laborum et laboriosam aliquid et reprehenderit laudantium. 
        </p>
        <p>Et ipsam officia repudiandae architecto ab beatae impedit est aspernatur voluptates At consequatur repudiandae vel quis deleniti. Id alias neque et nesciunt autem eos quibusdam aperiam eos alias tenetur sed similique officia! Sit iusto molestias ut magnam totam non adipisci tenetur qui deleniti voluptate! Non quasi velit qui consequatur illum qui unde asperiores est necessitatibus tempora qui veniam officiis.
        </p>
        <p>Vel nulla deleniti aut totam dolorem ut dolorem optio. In inventore ullam id optio voluptatem qui harum nemo aut inventore obcaecati. Et facere natus aut eligendi aliquam ut deleniti atque est suscipit atque et blanditiis atque! Quo aspernatur quasi ut autem quos rem laudantium numquam non dolorum temporibus. Eum dignissimos voluptas et galisum delectus qui omnis incidunt et internos voluptate. Sit veritatis molestias id voluptatem sunt et minus voluptatem ut expedita dolorum vel quod galisum.
        </p>
        `,
        pildiUrl: "/assets/religioosed_ehitised_talvematk_Uueusu_kloostris.jpg",
        osalejad: [],
        kasNahtav: true,
        kasRegistreerumineAvatud: true
    }
]


uudised = [
    {
        id: 0,
        pealkiri: "Logopudelid nüüd saadaval",
        kokkuvote: "Eligendi, quibusdam recusandae modi sunt dignissimos velit natus dolore nobis tenetur, quas sit laborum, a ad reprehenderit tempore eaque iure odit.",
        uudistekst: `
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat necessitatibus optio quia tenetur sapiente ex, placeat deserunt vel, asperiores aperiam ipsa assumenda non voluptate earum quas pariatur aspernatur.
        </p> 
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quibusdam recusandae modi sunt dignissimos velit natus dolore fuga nobis tenetur, quas sit laborum, a ad reprehenderit tempore eaque iure odit.
        </p>
        `,
        pohitekst: "",
        uudispilt: "/assets/moogamatkad_logopudel.jpeg"
    },
    {
        id: 1,
        pealkiri: "Machu Piccu rühmareis",
        kokkuvote: "Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt. Possimus cumque eveniet voluptas unde odit facilis nemo.",
        uudistekst: `
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore, saepe ad obcaecati assumenda quia officiis amet. Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt.
        </p> 
        <p>Veniam laboriosam, nostrum illum animi consequatur natus quo? Corporis officia laudantium illo quo ipsum nulla maiores iusto illum quos molestiae. 
        </p>
        <p> Delectus, quam.  Ducimus quos similique illum volupt atibus saepe cupiditate delectus ratione, iure accusamus officia accusantium, eaque soluta quia non iste voluptates ex doloribus consequatur.
        </p>
        `,
        pohitekst: `
        <p> Lorem ipsum dolor sit amet. Et impedit voluptatem omnis reprehenderit nam facilis neque et cupiditate obcaecati aut fugiat exercitationem. Est vitae quisquam eos tenetur sint sed magnam debitis ea voluptatem explicabo. 
        </p>
        <p> Ut magnam nisi ex temporibus consequatur ut culpa atque non porro magni aut omnis nobis. 33 dolorem officiis est laboriosam dolores aut dolorem veniam aut officia ipsam. Id maxime saepe non maiores dicta ut sint maiores sit consequatur nemo. Rem dolorem ipsa qui itaque aspernatur eum dignissimos sequi.
        </p>
        <p> Non similique nulla et voluptas omnis aut alias modi. Et culpa asperiores et similique expedita et ducimus ipsa qui molestiae dignissimos non quos voluptas ut nihil quasi. Est sunt repellendus qui ducimus voluptatibus est nesciunt minus est asperiores natus in cumque eligendi? Et tenetur ratione et veniam molestiae vel eveniet consectetur. Qui autem laudantium et voluptatibus ullam ea aspernatur explicabo hic obcaecati odio. Qui dolor expedita qui delectus deleniti aut expedita aspernatur et eius velit. Et voluptatem fugit qui unde eligendi At distinctio pariatur 33 totam quam aut quia aperiam eos voluptatibus obcaecati ut nobis rerum. 
        </p>
        <p> Et molestiae maxime ut reprehenderit quas est laudantium quam et nesciunt deleniti hic totam voluptatem! Ut quam itaque et similique cupiditate ex Quis corrupti aut praesentium quia 33 distinctio facilis. Sed voluptatibus sapiente ea accusamus fugit ea quos molestiae est saepe maiores. Hic laborum voluptate aut minima voluptas et ipsam provident id galisum excepturi. Nam modi corrupti qui voluptas molestiae ut molestias molestiae ut eaque eius non debitis tempore et modi odit cum sint neque. Et facilis veritatis aut voluptatibus sint aut iste quibusdam eos maxime dolor est fugit consequatur 33 accusantium voluptas. Non vero quisquam quo similique totam aut culpa accusantium sit error modi! Et blanditiis nesciunt ut accusantium deserunt vel officiis modi. Vel molestiae enim et aliquam quasi vel deserunt sapiente ut deleniti sequi et minus ipsa.
        </p> 
        <p> Eos quasi illo et nisi architecto est saepe impedit aut natus aperiam. In error quis aut voluptatibus modi aut ullam pariatur et minima maiores. 33 omnis atque ab explicabo nihil nam nesciunt temporibus ut quas molestias aut sint quos.
        </p>
        `,
        uudispilt: "/assets/machu_picchu_peru.jpg"
    },
    {
        id: 2,
        pealkiri: "Matkaspordi eripakkumine klubiliikmetele",
        kokkuvote: "Hammockid praegu eriti magusa hinnaga. Ducimus quos similique illum voluptatibus saepe cupiditate delectus ratione, iure accusamus officia accusantium.",
        uudistekst: `
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat necessitatibus optio quia tenetur sapiente ex, placeat deserunt vel, asperiores aperiam ipsa assumenda non voluptate earum quas pariatur aspernatur.
        </p> 
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quibusdam recusandae modi sunt dignissimos velit natus dolore fuga nobis tenetur, quas sit laborum, a ad reprehenderit tempore eaque iure odit.
        </p>
        `,
        pohitekst: "",
        uudispilt: "/assets/hammock_lifestiyle.jpg"
    },
    {
        id: 3,
        pealkiri: "Sügismatk: Lõuna-Eesti põlismetsad ja müüdid",
        kokkuvote: "Quod perferendis voluptatum eius esse, veritatis enim fugiat ex rerum aliquid nam. Nobis modi eveniet, odio ipsa rem nihil et ea sed.",
        uudistekst: `
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore, saepe ad obcaecati assumenda quia officiis amet. Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt.
        </p> 
        <p>Veniam laboriosam, nostrum illum animi consequatur natus quo? Corporis officia laudantium illo quo ipsum nulla maiores iusto illum quos molestiae. 
        </p>
        <p> Delectus, quam.  Ducimus quos similique illum volupt atibus saepe cupiditate delectus ratione, iure accusamus officia accusantium, eaque soluta quia non iste voluptates ex doloribus consequatur.
        </p>
        `,
        pohitekst: `
        <p> Lorem ipsum dolor sit amet. Et impedit voluptatem omnis reprehenderit nam facilis neque et cupiditate obcaecati aut fugiat exercitationem. Est vitae quisquam eos tenetur sint sed magnam debitis ea voluptatem explicabo. 
        </p>
        <p> Ut magnam nisi ex temporibus consequatur ut culpa atque non porro magni aut omnis nobis. 33 dolorem officiis est laboriosam dolores aut dolorem veniam aut officia ipsam. Id maxime saepe non maiores dicta ut sint maiores sit consequatur nemo. Rem dolorem ipsa qui itaque aspernatur eum dignissimos sequi.
        </p>
        <p> Non similique nulla et voluptas omnis aut alias modi. Et culpa asperiores et similique expedita et ducimus ipsa qui molestiae dignissimos non quos voluptas ut nihil quasi. Est sunt repellendus qui ducimus voluptatibus est nesciunt minus est asperiores natus in cumque eligendi? Et tenetur ratione et veniam molestiae vel eveniet consectetur. Qui autem laudantium et voluptatibus ullam ea aspernatur explicabo hic obcaecati odio. Qui dolor expedita qui delectus deleniti aut expedita aspernatur et eius velit. Et voluptatem fugit qui unde eligendi At distinctio pariatur 33 totam quam aut quia aperiam eos voluptatibus obcaecati ut nobis rerum. 
        </p>
        <p> Et molestiae maxime ut reprehenderit quas est laudantium quam et nesciunt deleniti hic totam voluptatem! Ut quam itaque et similique cupiditate ex Quis corrupti aut praesentium quia 33 distinctio facilis. Sed voluptatibus sapiente ea accusamus fugit ea quos molestiae est saepe maiores. Hic laborum voluptate aut minima voluptas et ipsam provident id galisum excepturi. Nam modi corrupti qui voluptas molestiae ut molestias molestiae ut eaque eius non debitis tempore et modi odit cum sint neque. Et facilis veritatis aut voluptatibus sint aut iste quibusdam eos maxime dolor est fugit consequatur 33 accusantium voluptas. Non vero quisquam quo similique totam aut culpa accusantium sit error modi! Et blanditiis nesciunt ut accusantium deserunt vel officiis modi. Vel molestiae enim et aliquam quasi vel deserunt sapiente ut deleniti sequi et minus ipsa.
        </p> 
        <p> Eos quasi illo et nisi architecto est saepe impedit aut natus aperiam. In error quis aut voluptatibus modi aut ullam pariatur et minima maiores. 33 omnis atque ab explicabo nihil nam nesciunt temporibus ut quas molestias aut sint quos.
        </p>
        `,
        uudispilt: "/assets/sügismatk_lõuna_eesti_põlismetsad.jpg"
    },
    {
        id: 4,
        pealkiri: "Tšiili mägedes",
        kokkuvote: "Officia blanditiis eum cum vero quasi laudantium, consequatur labore voluptas. Quod, libero. Earum est, cumque enim voluptatem autem at quibusdam reiciendis repellat.",
        uudistekst: `
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore, saepe ad obcaecati assumenda quia officiis amet. Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt.
        </p> 
        <p>Veniam laboriosam, nostrum illum animi consequatur natus quo? Corporis officia laudantium illo quo ipsum nulla maiores iusto illum quos molestiae. 
        </p>
        <p> Delectus, quam.  Ducimus quos similique illum volupt atibus saepe cupiditate delectus ratione, iure accusamus officia accusantium, eaque soluta quia non iste voluptates ex doloribus consequatur.
        </p>
        `,
        pohitekst: `
        <p> Lorem ipsum dolor sit amet. Et impedit voluptatem omnis reprehenderit nam facilis neque et cupiditate obcaecati aut fugiat exercitationem. Est vitae quisquam eos tenetur sint sed magnam debitis ea voluptatem explicabo. 
        </p>
        <p> Ut magnam nisi ex temporibus consequatur ut culpa atque non porro magni aut omnis nobis. 33 dolorem officiis est laboriosam dolores aut dolorem veniam aut officia ipsam. Id maxime saepe non maiores dicta ut sint maiores sit consequatur nemo. Rem dolorem ipsa qui itaque aspernatur eum dignissimos sequi.
        </p>
        <p> Non similique nulla et voluptas omnis aut alias modi. Et culpa asperiores et similique expedita et ducimus ipsa qui molestiae dignissimos non quos voluptas ut nihil quasi. Est sunt repellendus qui ducimus voluptatibus est nesciunt minus est asperiores natus in cumque eligendi? Et tenetur ratione et veniam molestiae vel eveniet consectetur. Qui autem laudantium et voluptatibus ullam ea aspernatur explicabo hic obcaecati odio. Qui dolor expedita qui delectus deleniti aut expedita aspernatur et eius velit. Et voluptatem fugit qui unde eligendi At distinctio pariatur 33 totam quam aut quia aperiam eos voluptatibus obcaecati ut nobis rerum. 
        </p>
        <p> Et molestiae maxime ut reprehenderit quas est laudantium quam et nesciunt deleniti hic totam voluptatem! Ut quam itaque et similique cupiditate ex Quis corrupti aut praesentium quia 33 distinctio facilis. Sed voluptatibus sapiente ea accusamus fugit ea quos molestiae est saepe maiores. Hic laborum voluptate aut minima voluptas et ipsam provident id galisum excepturi. Nam modi corrupti qui voluptas molestiae ut molestias molestiae ut eaque eius non debitis tempore et modi odit cum sint neque. Et facilis veritatis aut voluptatibus sint aut iste quibusdam eos maxime dolor est fugit consequatur 33 accusantium voluptas. Non vero quisquam quo similique totam aut culpa accusantium sit error modi! Et blanditiis nesciunt ut accusantium deserunt vel officiis modi. Vel molestiae enim et aliquam quasi vel deserunt sapiente ut deleniti sequi et minus ipsa.
        </p> 
        <p> Eos quasi illo et nisi architecto est saepe impedit aut natus aperiam. In error quis aut voluptatibus modi aut ullam pariatur et minima maiores. 33 omnis atque ab explicabo nihil nam nesciunt temporibus ut quas molestias aut sint quos.
        </p>
        `,
        uudispilt: "/assets/tšiili_mägedes.jpg"
    },
    {
        id: 5,
        pealkiri: "Avastame Gruusiat: Udziro (põhjatu) järv",
        kokkuvote: "Dolorem animi ipsam culpa iste asperiores molestias ab porro at itaque omnis? Expedita possimus itaque incidunt repudiandae quasi corrupti quam, et animi.",
        uudistekst: `
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore, saepe ad obcaecati assumenda quia officiis amet. Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt.
        </p> 
        <p>Veniam laboriosam, nostrum illum animi consequatur natus quo? Corporis officia laudantium illo quo ipsum nulla maiores iusto illum quos molestiae. 
        </p>
        <p> Delectus, quam.  Ducimus quos similique illum volupt atibus saepe cupiditate delectus ratione, iure accusamus officia accusantium, eaque soluta quia non iste voluptates ex doloribus consequatur.
        </p>
        `,
        pohitekst: `
        <p> Lorem ipsum dolor sit amet. Et impedit voluptatem omnis reprehenderit nam facilis neque et cupiditate obcaecati aut fugiat exercitationem. Est vitae quisquam eos tenetur sint sed magnam debitis ea voluptatem explicabo. 
        </p>
        <p> Ut magnam nisi ex temporibus consequatur ut culpa atque non porro magni aut omnis nobis. 33 dolorem officiis est laboriosam dolores aut dolorem veniam aut officia ipsam. Id maxime saepe non maiores dicta ut sint maiores sit consequatur nemo. Rem dolorem ipsa qui itaque aspernatur eum dignissimos sequi.
        </p>
        <p> Non similique nulla et voluptas omnis aut alias modi. Et culpa asperiores et similique expedita et ducimus ipsa qui molestiae dignissimos non quos voluptas ut nihil quasi. Est sunt repellendus qui ducimus voluptatibus est nesciunt minus est asperiores natus in cumque eligendi? Et tenetur ratione et veniam molestiae vel eveniet consectetur. Qui autem laudantium et voluptatibus ullam ea aspernatur explicabo hic obcaecati odio. Qui dolor expedita qui delectus deleniti aut expedita aspernatur et eius velit. Et voluptatem fugit qui unde eligendi At distinctio pariatur 33 totam quam aut quia aperiam eos voluptatibus obcaecati ut nobis rerum. 
        </p>
        <p> Et molestiae maxime ut reprehenderit quas est laudantium quam et nesciunt deleniti hic totam voluptatem! Ut quam itaque et similique cupiditate ex Quis corrupti aut praesentium quia 33 distinctio facilis. Sed voluptatibus sapiente ea accusamus fugit ea quos molestiae est saepe maiores. Hic laborum voluptate aut minima voluptas et ipsam provident id galisum excepturi. Nam modi corrupti qui voluptas molestiae ut molestias molestiae ut eaque eius non debitis tempore et modi odit cum sint neque. Et facilis veritatis aut voluptatibus sint aut iste quibusdam eos maxime dolor est fugit consequatur 33 accusantium voluptas. Non vero quisquam quo similique totam aut culpa accusantium sit error modi! Et blanditiis nesciunt ut accusantium deserunt vel officiis modi. Vel molestiae enim et aliquam quasi vel deserunt sapiente ut deleniti sequi et minus ipsa.
        </p> 
        <p> Eos quasi illo et nisi architecto est saepe impedit aut natus aperiam. In error quis aut voluptatibus modi aut ullam pariatur et minima maiores. 33 omnis atque ab explicabo nihil nam nesciunt temporibus ut quas molestias aut sint quos.
        </p>
        `,
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

function kuvaMatk(req, res) {
    const matkaId = req.params.matkaId
    const matk = matkad[matkaId]
    res.render("pages/matk", { matk })
}

function matkNahtav(matk) {
    return matk.kasNahtav
}

function naitaMatkad(req, res) {
    const nahtavadMatkad = matkad.filter(matkNahtav)
    res.render('pages/index', { matkad: nahtavadMatkad })
}

function tagastaMatkad(req, res) {
    res.send(matkad)
}

function tagastaUudised(req, res) {
    res.send(uudised)
}

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get("/", naitaMatkad)
app.get('/matk', (req, res) => res.render('pages/matk', { matkad }))
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
app.get("/matk/:matkaId", kuvaMatk)
app.get("/api/matk", tagastaMatkad)
app.get("/api/uudis", tagastaUudised)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
