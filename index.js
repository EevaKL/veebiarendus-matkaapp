const { timingSafeEqual } = require('crypto')
const express = require('express')
const { MongoClient } = require('mongodb')
const path = require('path')
const PORT = process.env.PORT || 16000

const andmebaas = "matkaApp"
const salasona = "MatkaAppEeva123"
const mongoUrl = `mongodb+srv://matka--app:${salasona}@cluster0.unqn6.mongodb.net/${andmebaas}?retryWrites=true&w=majority`

const client = new MongoClient(mongoUrl)

matkad = [
    {
        id: 0,
        nimetus: "Hukkunud alpinisti radadel",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: `
        Lorem Lorem ipsum dolor sit amet. Aut mollitia ipsa non dolores molestias ut aliquid voluptas aut nihil illo. Et nulla neque ut mollitia iste cum impedit facilis. Hic libero expedita est ipsam ipsum eum reiciendis internos. Et doloribus tenetur ut placeat saepe sed nemo delectus. Et incidunt officiis 33 sequi reiciendis ex sunt nobis est enim assumenda et necessitatibus earum. Eos quos delectus et sequi cumque et vitae rerum aut autem iste et Quis vitae id modi culpa. Aut quis obcaecati sed omnis corrupti Nam galisum rem odio officia? Et voluptatem voluptatem ea omnis sint ea fugit adipisci et exercitationem sequi. Ut quisquam similique et velit dolorem aut velit incidunt aut assumenda illo. In ullam autem Est rerum qui laboriosam tempora qui doloremque earum. Et enim vero aut voluptatibus dolore aut voluptatem excepturi. 33 galisum fuga ab perspiciatis dolores nam cumque minus et dicta atque. In excepturi aperiamvel voluptates et laudantium culpa. Hic enim eligendi et asperiores explicabo non fuga eveniet qui ratione maxime. Ea quasi consequuntur rem deleniti nobis ut dolor debitis et explicabo suscipit in quia odit natus numquam. Est quos quisquam aut quia doloremque non nemo possimus in eligendi galisum rem veniam similique. Ut molestias enim ea molestias delectus qui eius totam cum magnam maxime. Qui illum expedita et eligendi veniam eos enim voluptas quo sapiente asperiores sit excepturi molestiae eos dolore tempore rem amet unde. Et eaque veritatis Est voluptatem sed repellendus minima et facilis voluptatem 33 optio perferendis. Sit porro explicabo non praesentium quia cum veritatis atque vel temporibus asperiores et asperiores vitae aut mollitia voluptas. Vel eius facere et modi reiciendis ut incidunt eaque. In vitae alias et corporis necessitatibus est fugit dicta! Eos molestiae quasi sit pariatur repellat et eligendi dolorem At consequatur illum a reiciendis porro. Qui iusto possimus et beatae Ut aliquid! Sed dolor dolore id rerum itaque aut consectetur itaque ut tempora iure et sunt laudantium. Ut atque ipsum non amet voluptatem aut itaque dolores aut aperiam consequuntur eum architecto galisum qui voluptatum nihil sed libero sunt. dolor sit amet. Et omnis odio non consectetur iure aut molestiae assumenda quo velit aliquid est voluptatum unde eos consectetur provident et voluptatum aliquam. Aut sequi sint est quod quae in quia laborum ea porro tenetur et consequatur minima.
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
        Lorem ipsum dolor sit amet. Aut mollitia ipsa non dolores molestias ut aliquid voluptas aut nihil illo. Et nulla neque ut mollitia iste cum impedit facilis. Hic libero expedita est ipsam ipsum eum reiciendis internos. Et doloribus tenetur ut placeat saepe sed nemo delectus. Et incidunt officiis 33 sequi reiciendis ex sunt nobis est enim assumenda et necessitatibus earum. Eos quos delectus et sequi cumque et vitae rerum aut autem iste et Quis vitae id modi culpa. Aut quis obcaecati sed omnis corrupti Nam galisum rem odio officia? Et voluptatem voluptatem ea omnis sint ea fugit adipisci et exercitationem sequi. Ut quisquam similique et velit dolorem aut velit incidunt aut assumenda illo. In ullam autem Est rerum qui laboriosam tempora qui doloremque earum. Et enim vero aut voluptatibus dolore aut voluptatem excepturi. 33 galisum fuga ab perspiciatis dolores nam cumque minus et dicta atque. In excepturi aperiamvel voluptates et laudantium culpa. Hic enim eligendi et asperiores explicabo non fuga eveniet qui ratione maxime. Ea quasi consequuntur rem deleniti nobis ut dolor debitis et explicabo suscipit in quia odit natus numquam. Est quos quisquam aut quia doloremque non nemo possimus in eligendi galisum rem veniam similique. Ut molestias enim ea molestias delectus qui eius totam cum magnam maxime. Qui illum expedita et eligendi veniam eos enim voluptas quo sapiente asperiores sit excepturi molestiae eos dolore tempore rem amet unde. Et eaque veritatis Est voluptatem sed repellendus minima et facilis voluptatem 33 optio perferendis. Sit porro explicabo non praesentium quia cum veritatis atque vel temporibus asperiores et asperiores vitae aut mollitia voluptas. Vel eius facere et modi reiciendis ut incidunt eaque. In vitae alias et corporis necessitatibus est fugit dicta! Eos molestiae quasi sit pariatur repellat et eligendi dolorem At consequatur illum a reiciendis porro. Qui iusto possimus et beatae Ut aliquid! Sed dolor dolore id rerum itaque aut consectetur itaque ut tempora iure et sunt laudantium. Ut atque ipsum non amet voluptatem aut itaque dolores aut aperiam consequuntur eum architecto galisum qui voluptatum nihil sed libero sunt.
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
        Lorem ipsum dolor sit amet. Aut mollitia ipsa non dolores molestias ut aliquid voluptas aut nihil illo. Et nulla neque ut mollitia iste cum impedit facilis. Hic libero expedita est ipsam ipsum eum reiciendis internos. Et doloribus tenetur ut placeat saepe sed nemo delectus. Et incidunt officiis 33 sequi reiciendis ex sunt nobis est enim assumenda et necessitatibus earum. Eos quos delectus et sequi cumque et vitae rerum aut autem iste et Quis vitae id modi culpa. Aut quis obcaecati sed omnis corrupti Nam galisum rem odio officia? Et voluptatem voluptatem ea omnis sint ea fugit adipisci et exercitationem sequi. Ut quisquam similique et velit dolorem aut velit incidunt aut assumenda illo. In ullam autem Est rerum qui laboriosam tempora qui doloremque earum. Et enim vero aut voluptatibus dolore aut voluptatem excepturi. 33 galisum fuga ab perspiciatis dolores nam cumque minus et dicta atque. In excepturi aperiamvel voluptates et laudantium culpa. Hic enim eligendi et asperiores explicabo non fuga eveniet qui ratione maxime. Ea quasi consequuntur rem deleniti nobis ut dolor debitis et explicabo suscipit in quia odit natus numquam. Est quos quisquam aut quia doloremque non nemo possimus in eligendi galisum rem veniam similique. Ut molestias enim ea molestias delectus qui eius totam cum magnam maxime. Qui illum expedita et eligendi veniam eos enim voluptas quo sapiente asperiores sit excepturi molestiae eos dolore tempore rem amet unde. Et eaque veritatis Est voluptatem sed repellendus minima et facilis voluptatem 33 optio perferendis. Sit porro explicabo non praesentium quia cum veritatis atque vel temporibus asperiores et asperiores vitae aut mollitia voluptas. Vel eius facere et modi reiciendis ut incidunt eaque. In vitae alias et corporis necessitatibus est fugit dicta! Eos molestiae quasi sit pariatur repellat et eligendi dolorem At consequatur illum a reiciendis porro. Qui iusto possimus et beatae Ut aliquid! Sed dolor dolore id rerum itaque aut consectetur itaque ut tempora iure et sunt laudantium. Ut atque ipsum non amet voluptatem aut itaque dolores aut aperiam consequuntur eum architecto galisum qui voluptatum nihil sed libero sunt.
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

async function registreerumiseKinnitus(req, res) {
    console.log(req.query.nimi)
    if (!req.query.email) {
        res.end("Email puudub, registreerumine ebaõnnestus!")
        return false
    }

    const matk = matkad[req.params.matkaId]

    const registreerumine = {
        matkId: matk.id,
        nimi: req.query.nimi,
        email: req.query.email,
        teade: req.query.teade
    }

    matk.osalejad.push(registreerumine)

    await client.connect()
    const database = client.db(andmebaas)
    const registreerumised = database.collection("registreerumised")
    const tulemus = await registreerumised.insertOne(registreerumine)
    console.log(`Lisati registreerumine idd-ga: ${tulemus.insertedId}`)
    res.end(`Registreeruti matkale`)
}

async function lisaUudis(req, res) {
    const uusUudis = {
        pealkiri: req.body.pealkiri,
        kokkuvote: req.body.kokkuvote,
        uudistekst: req.body.uudistekst,
        pohitekst: req.body.pohitekst,
        pildiUrl: req.body.pildiUrl
    }

    await client.connect()
    const database = client.db(andmebaas)
    const uudisedCollection = database.collection("uudis")
    const tulemus = await uudisedCollection.insertOne(uusUudis)
    uusUudis.id = tulemus.insertedId
    uudised.push(uusUudis)
    res.send(uusUudis)
}

async function lisaMatk(req, res) {
    const uusMatk = {
        nimetus: req.body.nimetus,
        kirjeldus: req.body.kirjeldus,
        pildiUrl: req.body.pildiUrl,
        osalejad: [],
        kasNahtav: req.body.kasNahtav,
        kasRegistreerumineAvatud: req.body.kasRegistreerumineAvatud
    }

    await client.connect()
    const database = client.db(andmebaas)
    const matkadCollection = database.collection("matk")
    const tulemus = await matkadCollection.insertOne(uusMatk)
    uusMatk.id = matkad.length
    matkad.push(uusMatk)
    res.send(uusMatk)
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

async function loeUudised() {
    await client.connect()
    const database = client.db(andmebaas)
    const uudisedCollection = database.collection("uudis")
    const andmed = await uudisedCollection.find().toArray()
    for (i in andmed) {
        const uudis = andmed[i]
        uudis.id = uudised.length
        uudised.push(uudis)
    }
    console.log("Uudised loetud")
}

async function loeMatkad() {
    await client.connect()
    const database = client.db(andmebaas)
    const matkCollection = database.collection("matk")
    const andmed = await matkCollection.find().toArray()
    for (i in andmed) {
        const matk = andmed[i]
        matk.id = matkad.length
        matkad.push(matk)
    }
    console.log("Matkad loetud")
}

function tagastaUudised(req, res) {
    res.send(uudised)
}

function muudaMatka(req, res) {
    const matk = matkad[req.params.matkaId]
    if (req.query.avatud != undefined) {
        matk.kasRegistreerumineAvatud = (req.query.avatud === 'true')
    }

    if (req.query.nahtav != undefined) {
        matk.kasNahtav = (req.query.nahtav === 'true')
    }

    if (req.query.nimetus != undefined) {
        matk.nimetus = req.query.nimetus
    }

    if (req.query.pildiUrl != undefined) {
        matk.piltUrl = req.query.pildiUrl
    }

    if (req.query.pikkkirjeldus != undefined) {
        matk.pikkkirjeldus = req.query.pikkkirjeldus
    }

    if (req.query.kirjeldus != undefined) {
        matk.kirjeldus = req.query.kirjeldus
    }

    console.log(matk)
    res.send(matk)
}

function muudaUudist(req, res) {
    const uudis = uudised[req.params.uudisIndeks]
    if (req.query.pealkiri != undefined) {
        uudis.pealkiri = req.query.pealkiri
    }

    if (req.query.kokkuvote != undefined) {
        uudis.kokkuvote = req.query.kokkuvote
    }

    if (req.query.uudistekst != undefined) {
        uudis.uudistekst = req.query.uudistekst
    }

    if (req.query.pohitekst != undefined) {
        uudis.pohitekst = req.query.pohitekst
    }

    if (req.query.uudispilt != undefined) {
        uudis.uudispilt = req.query.uudispilt
    }

    console.log(uudis)
    res.send(uudis)
}

async function loeRegistreerumised(matkId) {
    await client.connect()
    const database = client.db(andmebaas)
    const registreerumised = database.collection("registreerumised")

    let filter = {}

    if (matkId !== undefined) {
        filter = { matkId: parseInt(matkId) }
    }

    console.log(filter)

    const tulemus = await registreerumised.find(filter).toArray()
    //client.close()
    return tulemus
}

async function tagastaRegistreerumised(req, res) {
    const andmed = await loeRegistreerumised(req.params.matkId)
    res.send(andmed)
}

async function lisaOsalejadMatkadele() {
    for (matkId in matkad) {
        const matk = matkad[matkId]
        const osalejad = await loeRegistreerumised(matk.id)
        matk.osalejad = osalejad
    }
}

const app = express()
lisaOsalejadMatkadele()
loeUudised()
loeMatkad()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
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
app.post("/api/matk", lisaMatk)
app.get("/api/uudis", tagastaUudised)
app.post("/api/uudis", lisaUudis)
app.get("/api/matk/:matkaId/muuda", muudaMatka)
app.get("/api/uudis/:uudisIndeks/muuda", muudaUudist)
app.get("/api/registreerumised", tagastaRegistreerumised)
app.get("/api/registreerumised/:matkId", tagastaRegistreerumised)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
