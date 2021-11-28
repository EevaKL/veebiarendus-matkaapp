const { timingSafeEqual } = require('crypto')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 16000

matkad = [
    {
        id: 0,
        nimetus: "Hukkunud alpinisti radadel",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: "Lorem ipsum dolor sit amet. Et omnis odio non consectetur iure aut molestiae assumenda quo velit aliquid est voluptatum unde eos consectetur provident et voluptatum aliquam. Aut sequi sint est quod quae in quia laborum ea porro tenetur et consequatur minima. Et assumenda galisum est sapiente voluptates ut repudiandae voluptas qui aspernatur voluptatem et odio. Ab molestias quasi et delectus consectetur ea culpa dolor qui sunt omnis vel reprehenderit ullam eum expedita repellat ut iste veritatis. Eum magnam iure et facilis natus aut voluptas dolorum. Est quae internos est quia perspiciatis vel temporibus voluptas nam totam officiis ut reprehenderit aspernatur qui voluptas quaerat. 33 suscipit debitis ab voluptatum repudiandae est maxime aliquid! Aut cupiditate exercitationem in autem unde ut consequatur Quis ex debitis culpa aut mollitia fuga id accusamus placeat? Hic iusto modi est dicta dolorum 33 alias voluptatibus eos incidunt deserunt et sequi laborum et laboriosam aliquid et reprehenderit laudantium. Et ipsam officia repudiandae architecto ab beatae impedit est aspernatur voluptates At consequatur repudiandae vel quis deleniti. Id alias neque et nesciunt autem eos quibusdam aperiam eos alias tenetur sed similique officia! Sit iusto molestias ut magnam totam non adipisci tenetur qui deleniti voluptate! Non quasi velit qui consequatur illum qui unde asperiores est necessitatibus tempora qui veniam officiis. Vel nulla deleniti aut totam dolorem ut dolorem optio. In inventore ullam id optio voluptatem qui harum nemo aut inventore obcaecati. Et facere natus aut eligendi aliquam ut deleniti atque est suscipit atque et blanditiis atque! Quo aspernatur quasi ut autem quos rem laudantium numquam non dolorum temporibus. Eum dignissimos voluptas et galisum delectus qui omnis incidunt et internos voluptate. Sit veritatis molestias id voluptatem sunt et minus voluptatem ut expedita dolorum vel quod galisum.",
        pildiUrl: "/assets/hukkunud_alpinisti_radadel.jpg",
        osalejad: [],
        kasNahtav: true,
        kasRegistreerumineAvatud: true
    },
    {
        id: 1,
        nimetus: "Uputatud linn Bulgaarias",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: "Lorem ipsum dolor sit amet. Et sequi consectetur in molestias velit in quia dolore sed aperiam voluptas sed quam totam. Qui porro voluptas eos adipisci totam id molestiae expedita qui praesentium laboriosam nam voluptatem animi ut possimus accusamus. Sit rerum beatae et velit iste sit fugiat pariatur. Vel quia autem ut blanditiis galisum sit consequatur odio nihil illum aut fuga voluptas. Ea dolor dolores eveniet ipsum sed earum quae. Sit iure tenetur est veniam atque et eveniet deleniti. In omnis illo sit odio neque cum dolorum quia est deleniti laborum est facilis voluptatem. Eos voluptatibus velit ut maxime atque est quia eveniet ab nihil Quis qui tenetur minus! Et voluptas velit est voluptatum enim est adipisci quasi eum magni odit est quidem animi cum eius temporibus. Eum quas voluptas in blanditiis modi rem nobis reiciendis et voluptatum culpa nam nulla necessitatibus aut velit molestiae sed aspernatur illo. Vel animi nisi a velit unde hic sequi perferendis. Est odit sequi rem cumque amet cum suscipit veritatis aut labore dolor non voluptatem nihil eum amet perspiciatis ea exercitationem voluptatem. Cum officia repellendus qui nihil laborum sed facilis aliquam ad voluptas labore. Non rerum ducimus quo rerum dignissimos non sint tempore aut porro neque est ipsa cumque. Aut nisi magni eum repellendus et quis itaque recusandae delectus. Sit galisum rerum rem distinctio tempore in necessitatibus incidunt sit perspiciatis voluptates aut internos labore et officiis ipsum et itaque quam. Et nihil ullam sit nobis nobis eum dolorem doloribus non quis sunt non dolore vitae ut commodi magnam! Nam officiis explicabo At excepturi libero sit autem dicta cum pariatur quas aut dolor accusantium qui asperiores praesentium. Aut corporis voluptatem et doloribus exercitationem qui nobis quia et porro internos ad voluptate quod et nisi quod. Est rerum sint sit accusamus sunt sit natus rerum rem eveniet quos? Ut veritatis quasi et recusandae voluptas aut dolorum voluptates est nemo incidunt sed veniam doloremque! 33 laudantium aliquam quo obcaecati praesentium aut molestiae fugit rem velit saepe et nihil optio et iure animi. Qui illum magni qui cupiditate eligendi vel nihil nihil. Sit totam explicabo cum voluptatem voluptas sed ratione nesciunt aut reprehenderit molestiae et quod reiciendis? Et recusandae repellendus ut maxime officia ea libero rerum.",
        pildiUrl: "/assets/uputatud_linn_rumeenias.jpg",
        osalejad: [],
        kasNahtav: true,
        kasRegistreerumineAvatud: false
    },
    {
        id: 2,
        nimetus: "Talvematk: Religioosed ehitised Uue usu kloostris",
        kirjeldus: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, nemo eanulla illumeaque officia quisquam tempora quo veniam quos suscipit optio recusandae totamlaborum corpori rerum iste obcaecati.",
        pikkkirjeldus: "Lorem ipsum dolor sit amet. Et consequatur necessitatibus sit aperiam quia sed blanditiis beatae est maxime rerum? Ut atque eligendi in dolores accusantium ex quia omnis quo enim molestias sit totam quod in placeat numquam in autem quia! Hic repudiandae quia id similique harum ad excepturi nihil non possimus aspernatur in cumque eligendi non rerum ullam. Sit quas veniam non ipsum unde id architecto necessitatibus. Et minus nesciunt in animi dolorum ut ducimus totam At perferendis velit est unde temporibus ad sunt ipsa sed quod delectus. Est minima laborum cum totam enim est enim vitae. In dolores aperiam vel esse eaque et voluptas saepe est rerum autem et soluta adipisci qui enim ullam! Ut beatae quidem eum quia natus ea maiores suscipit quo omnis minima sit recusandae corporis est quis nostrum! Qui enim velit sit quia quos in mollitia ducimus aut omnis quam et aliquam iure et cupiditate perferendis. Aut error et optio voluptas ea excepturi ratione a maiores animi aut sint pariatur ut suscipit maiores. Sed temporibus libero et vitae impedit sed culpa totam qui deleniti nisi est nobis perferendis. Aut consequatur assumenda ea mollitia quod cum tenetur nemo et quibusdam ullam hic quos nihil non ipsum autem non quisquam odit! Et ipsam consequatur ea accusamus consequatur aut dolorem natus blanditiis possimus et adipisci nemo. Est omnis alias est corrupti galisum et quas consequuntur. Ut accusantium sunt aut internos mollitia aut quidem velit et laboriosam molestiae. Aut veritatis veritatis ut omnis deleniti et voluptatum dolorem est autem blanditiis. Facilis quae et repellat dolor est voluptas culpa. Ut iure quaerat est sunt nobis vel aliquam velit eum rerum dignissimos eum magni voluptatem. Quo obcaecati nihil qui eligendi illum ut incidunt illo eos fugiat tempora sed cupiditate iste et omnis.",
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
        uudistekst: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat necessitatibus optio quia tenetur sapiente ex, placeat deserunt vel, asperiores aperiam ipsa assumenda non voluptate earum quas pariatur aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quibusdam recusandae modi sunt dignissimos velit natus dolore fuga nobis tenetur, quas sit laborum, a ad reprehenderit tempore eaque iure odit.",
        pohitekst: "Lorem ipsum dolor sit amet. Hic internos optio aut dignissimos nulla est exercitationem nisi non commodi officiis qui ducimus recusandae. Et dicta veniam qui accusamus sint ut sequi cupiditate et internos dolores qui dolor voluptates ab cupiditate voluptates. Ad sint soluta rem excepturi ipsam quo molestiae praesentium ad eaque assumenda qui ipsam iure! Et omnis nesciunt et eligendi repellat et rerum fuga ut obcaecati aspernatur? Ex voluptatem quia et galisum dolorum sit sint voluptatibus ut ipsum neque et harum ipsum sit maxime dolore. Hic voluptatem nobis ab saepe temporibus rem asperiores sint ut cupiditate voluptatem sit neque modi quo exercitationem sunt et earum totam. Qui doloremque commodi id vitae saepe eum magnam eaque. Et dolore eius et quia omnis sed tempora necessitatibus aut exercitationem cumque aut totam obcaecati ab cupiditate animi qui neque praesentium. Et ullam distinctio rem error mollitia qui ducimus doloremque. In placeat dolore est dolor nobis est quibusdam tenetur et repellat nemo sit doloremque quibusdam. Cum eligendi dignissimos et sapiente dignissimos et sint dolores eos facere dolor qui iure nisi qui nesciunt aperiam non odit ipsam. Est accusantium iure qui deleniti deleniti qui voluptas asperiores et facilis maxime et ratione provident aut nemo nostrum. Aut sunt quia non porro sint At dolorem animi aut cumque accusantium eos voluptate dolores aut neque earum. Ut magnam amet et culpa temporibus ex beatae exercitationem hic deleniti nobis. Non quas quia et libero consectetur qui provident iusto ut nobis nemo ut laudantium quod non pariatur dolore. Aut deserunt delectus ut placeat laboriosam rem minus mollitia aut voluptate recusandae ut amet saepe ut libero debitis est quos quibusdam. Aut quae quia aut numquam aut quae aliquam aut veritatis commodi et natus nihil! Aut atque veniam est suscipit facilis est deserunt eius a doloremque itaque. Sit Quis facere sit suscipit modi sed dignissimos dignissimos aut sint fuga aut expedita rerum non voluptatum vitae. Qui numquam sunt sit quasi accusantium ut porro libero sit quia voluptate qui eius cupiditate a magni officia et sequi alias? Sit quaerat nisi qui quam exercitationem non necessitatibus labore nam nihil odio et eveniet doloremque cum expedita aliquam. Et consequatur temporibus ut harum id dolor dolor aut rerum suscipit et architecto quae quo temporibus distinctio. Ut quia repellat sed ipsam eligendi sed molestiae.",
        uudispilt: "/assets/moogamatkad_logopudel.jpeg"
    },
    {
        id: 1,
        pealkiri: "Machu Piccu rühmareis",
        kokkuvote: "Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt. Possimus cumque eveniet voluptas unde odit facilis nemo.",
        uudistekst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tempore, saepe ad obcaecati assumenda quia officiis amet. Quidem impedit ab, molestias at itaque fugit amet quas quis eum necessitatibus incidunt. Veniam laboriosam, nostrum illum animi consequatur natus quo? Corporis officia laudantium illo quo ipsum nulla maiores iusto illum quos molestiae. Delectus, quam.  Ducimus quos similique illum volupt atibus saepe cupiditate delectus ratione, iure accusamus officia accusantium, eaque soluta quia non iste voluptates ex doloribus consequatur.",
        pohitekst: "Lorem ipsum dolor sit amet. Et impedit voluptatem omnis reprehenderit nam facilis neque et cupiditate obcaecati aut fugiat exercitationem. Est vitae quisquam eos tenetur sint sed magnam debitis ea voluptatem explicabo. Ut magnam nisi ex temporibus consequatur ut culpa atque non porro magni aut omnis nobis. 33 dolorem officiis est laboriosam dolores aut dolorem veniam aut officia ipsam. Id maxime saepe non maiores dicta ut sint maiores sit consequatur nemo. Rem dolorem ipsa qui itaque aspernatur eum dignissimos sequi. Non similique nulla et voluptas omnis aut alias modi. Et culpa asperiores et similique expedita et ducimus ipsa qui molestiae dignissimos non quos voluptas ut nihil quasi. Est sunt repellendus qui ducimus voluptatibus est nesciunt minus est asperiores natus in cumque eligendi? Et tenetur ratione et veniam molestiae vel eveniet consectetur. Qui autem laudantium et voluptatibus ullam ea aspernatur explicabo hic obcaecati odio. Qui dolor expedita qui delectus deleniti aut expedita aspernatur et eius velit. Et voluptatem fugit qui unde eligendi At distinctio pariatur 33 totam quam aut quia aperiam eos voluptatibus obcaecati ut nobis rerum. Et molestiae maxime ut reprehenderit quas est laudantium quam et nesciunt deleniti hic totam voluptatem! Ut quam itaque et similique cupiditate ex Quis corrupti aut praesentium quia 33 distinctio facilis. Sed voluptatibus sapiente ea accusamus fugit ea quos molestiae est saepe maiores. Hic laborum voluptate aut minima voluptas et ipsam provident id galisum excepturi. Nam modi corrupti qui voluptas molestiae ut molestias molestiae ut eaque eius non debitis tempore et modi odit cum sint neque. Et facilis veritatis aut voluptatibus sint aut iste quibusdam eos maxime dolor est fugit consequatur 33 accusantium voluptas. Non vero quisquam quo similique totam aut culpa accusantium sit error modi! Et blanditiis nesciunt ut accusantium deserunt vel officiis modi. Vel molestiae enim et aliquam quasi vel deserunt sapiente ut deleniti sequi et minus ipsa. Eos quasi illo et nisi architecto est saepe impedit aut natus aperiam. In error quis aut voluptatibus modi aut ullam pariatur et minima maiores. 33 omnis atque ab explicabo nihil nam nesciunt temporibus ut quas molestias aut sint quos.",
        uudispilt: "/assets/machu_picchu_peru.jpg"
    },
    {
        id: 2,
        pealkiri: "Matkaspordi eripakkumine klubiliikmetele",
        kokkuvote: "Hammockid praegu eriti magusa hinnaga. Ducimus quos similique illum voluptatibus saepe cupiditate delectus ratione, iure accusamus officia accusantium.",
        uudistekst: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque eveniet voluptas unde odit facilis nemo. Eum distinctio neque velit maxime harum modi laborum vero numquam iste aliquid. Sed, velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veritatis, eaque mollitia maxime dolorum labore temporibus et expedita neque corrupti autem debitis commodi quis assumenda aliquid. Enim impedit alias tempore.",
        pohitekst: "Lorem ipsum dolor sit amet. Nam sint eveniet cum tempora officia sed accusantium magnam est quia architecto eos fugit voluptatem. Ut cumque galisum et aperiam internos nam mollitia quia est voluptates asperiores nam repellat reiciendis nam impedit quam. Qui rerum culpa et odio obcaecati qui consequatur quia et doloribus dolorum et quidem quod qui praesentium corporis. Qui tenetur ullam sed adipisci expedita aut magni. Ut quisquam debitis qui aliquam debitis aut laudantium placeat qui minima blanditiis 33 nihil facere. Sit optio velit qui quia velit ea autem quia non necessitatibus maxime ex odio minima! Et quia optio vel facilis quasi eum deserunt praesentium id eveniet omnis et quas quod qui omnis enim ut exercitationem temporibus. Aut corrupti dolor dolorem inventore et necessitatibus labore et obcaecati culpa. Vel assumenda facilis quo porro necessitatibus aut ullam maiores sed quia nisi non quidem enim. Eum quisquam numquam ut impedit commodi et quae praesentium. Et sapiente voluptatibus sit nisi quos ut eaque unde. Eos mollitia earum sed tempore pariatur et obcaecati voluptatem. Et molestiae autem et corporis expedita ab tempora voluptate hic culpa quae et nihil consequuntur non omnis illo! Non incidunt voluptatem sit illo iste vel quia deserunt? Et atque amet non cupiditate deserunt in officia quas? Id obcaecati earum et error enim ea commodi sint hic exercitationem dicta. Ut dignissimos quia est Quis totam id molestiae eligendi eos consequuntur cupiditate eum rerum illum. Et ipsum eius sit soluta enim hic mollitia fugit est eveniet eius id fuga molestiae. Qui quidem ipsam et autem quia sit iusto eius qui quia sint ea accusantium omnis est omnis rerum? Et nulla consequatur ut sint reiciendis est dolorum nobis. Ea perspiciatis expedita aut inventore iste 33 modi enim ea provident mollitia! Id provident unde aut nihil voluptatibus qui amet modi vel natus internos id dolore asperiores sit dolorem nulla et soluta voluptas? Aut natus quidem rem tempore aliquam non dolores minus. Eum soluta ipsam et alias voluptatem ea facilis ipsa vel iste omnis sed quae quas hic adipisci enim. At officia cupiditate aut natus ab amet fugit aut sint rerum rem voluptatem recusandae ex perferendis earum?",
        uudispilt: "/assets/hammock_lifestiyle.jpg"
    },
    {
        id: 3,
        pealkiri: "Sügismatk: Lõuna-Eesti põlismetsad ja müüdid",
        kokkuvote: "Quod perferendis voluptatum eius esse, veritatis enim fugiat ex rerum aliquid nam. Nobis modi eveniet, odio ipsa rem nihil et ea sed.",
        uudistekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sequi ut dolorem eveniet in dolor, esse aspernatur deserunt, sapiente, deleniti omnis optio delectus? Illo unde harum velit fuga magni voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque accusamus dolores qui laudantium cum sit. Quis, vitae tenetur maxime optio quo omnis! Animi numquam dolorem minima, ipsam earum amet consequuntur.",
        pohitekst: "Lorem ipsum dolor sit amet. Hic internos optio aut dignissimos nulla est exercitationem nisi non commodi officiis qui ducimus recusandae. Et dicta veniam qui accusamus sint ut sequi cupiditate et internos dolores qui dolor voluptates ab cupiditate voluptates. Ad sint soluta rem excepturi ipsam quo molestiae praesentium ad eaque assumenda qui ipsam iure! Et omnis nesciunt et eligendi repellat et rerum fuga ut obcaecati aspernatur? Ex voluptatem quia et galisum dolorum sit sint voluptatibus ut ipsum neque et harum ipsum sit maxime dolore. Hic voluptatem nobis ab saepe temporibus rem asperiores sint ut cupiditate voluptatem sit neque modi quo exercitationem sunt et earum totam. Qui doloremque commodi id vitae saepe eum magnam eaque. Et dolore eius et quia omnis sed tempora necessitatibus aut exercitationem cumque aut totam obcaecati ab cupiditate animi qui neque praesentium. Et ullam distinctio rem error mollitia qui ducimus doloremque. In placeat dolore est dolor nobis est quibusdam tenetur et repellat nemo sit doloremque quibusdam. Cum eligendi dignissimos et sapiente dignissimos et sint dolores eos facere dolor qui iure nisi qui nesciunt aperiam non odit ipsam. Est accusantium iure qui deleniti deleniti qui voluptas asperiores et facilis maxime et ratione provident aut nemo nostrum. Aut sunt quia non porro sint At dolorem animi aut cumque accusantium eos voluptate dolores aut neque earum. Ut magnam amet et culpa temporibus ex beatae exercitationem hic deleniti nobis. Non quas quia et libero consectetur qui provident iusto ut nobis nemo ut laudantium quod non pariatur dolore. Aut deserunt delectus ut placeat laboriosam rem minus mollitia aut voluptate recusandae ut amet saepe ut libero debitis est quos quibusdam. Aut quae quia aut numquam aut quae aliquam aut veritatis commodi et natus nihil! Aut atque veniam est suscipit facilis est deserunt eius a doloremque itaque. Sit Quis facere sit suscipit modi sed dignissimos dignissimos aut sint fuga aut expedita rerum non voluptatum vitae. Qui numquam sunt sit quasi accusantium ut porro libero sit quia voluptate qui eius cupiditate a magni officia et sequi alias? Sit quaerat nisi qui quam exercitationem non necessitatibus labore nam nihil odio et eveniet doloremque cum expedita aliquam. Et consequatur temporibus ut harum id dolor dolor aut rerum suscipit et architecto quae quo temporibus distinctio. Ut quia repellat sed ipsam eligendi sed molestiae.",
        uudispilt: "/assets/sügismatk_lõuna_eesti_põlismetsad.jpg"
    },
    {
        id: 4,
        pealkiri: "Tšiili mägedes",
        kokkuvote: "Officia blanditiis eum cum vero quasi laudantium, consequatur labore voluptas. Quod, libero. Earum est, cumque enim voluptatem autem at quibusdam reiciendis repellat.",
        uudistekst: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro minus magnam excepturi doloremque, blanditiis laboriosam illum possimus, molestias animi vero voluptates quo et nam natus tempore hic ab esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam veritatis consequuntur aliquam nesciunt odio architecto saepe illo? Earum dolore repellat perferendis ullam numquam fugiat, eveniet cum natus beatae fugit.",
        pohitekst: "Lorem ipsum dolor sit amet. Et impedit voluptatem omnis reprehenderit nam facilis neque et cupiditate obcaecati aut fugiat exercitationem. Est vitae quisquam eos tenetur sint sed magnam debitis ea voluptatem explicabo. Ut magnam nisi ex temporibus consequatur ut culpa atque non porro magni aut omnis nobis. 33 dolorem officiis est laboriosam dolores aut dolorem veniam aut officia ipsam. Id maxime saepe non maiores dicta ut sint maiores sit consequatur nemo. Rem dolorem ipsa qui itaque aspernatur eum dignissimos sequi. Non similique nulla et voluptas omnis aut alias modi. Et culpa asperiores et similique expedita et ducimus ipsa qui molestiae dignissimos non quos voluptas ut nihil quasi. Est sunt repellendus qui ducimus voluptatibus est nesciunt minus est asperiores natus in cumque eligendi? Et tenetur ratione et veniam molestiae vel eveniet consectetur. Qui autem laudantium et voluptatibus ullam ea aspernatur explicabo hic obcaecati odio. Qui dolor expedita qui delectus deleniti aut expedita aspernatur et eius velit. Et voluptatem fugit qui unde eligendi At distinctio pariatur 33 totam quam aut quia aperiam eos voluptatibus obcaecati ut nobis rerum. Et molestiae maxime ut reprehenderit quas est laudantium quam et nesciunt deleniti hic totam voluptatem! Ut quam itaque et similique cupiditate ex Quis corrupti aut praesentium quia 33 distinctio facilis. Sed voluptatibus sapiente ea accusamus fugit ea quos molestiae est saepe maiores. Hic laborum voluptate aut minima voluptas et ipsam provident id galisum excepturi. Nam modi corrupti qui voluptas molestiae ut molestias molestiae ut eaque eius non debitis tempore et modi odit cum sint neque. Et facilis veritatis aut voluptatibus sint aut iste quibusdam eos maxime dolor est fugit consequatur 33 accusantium voluptas. Non vero quisquam quo similique totam aut culpa accusantium sit error modi! Et blanditiis nesciunt ut accusantium deserunt vel officiis modi. Vel molestiae enim et aliquam quasi vel deserunt sapiente ut deleniti sequi et minus ipsa. Eos quasi illo et nisi architecto est saepe impedit aut natus aperiam. In error quis aut voluptatibus modi aut ullam pariatur et minima maiores. 33 omnis atque ab explicabo nihil nam nesciunt temporibus ut quas molestias aut sint quos.",
        uudispilt: "/assets/tšiili_mägedes.jpg"
    },
    {
        id: 5,
        pealkiri: "Avastame Gruusiat: Udziro (põhjatu) järv",
        kokkuvote: "Dolorem animi ipsam culpa iste asperiores molestias ab porro at itaque omnis? Expedita possimus itaque incidunt repudiandae quasi corrupti quam, et animi.",
        uudistekst: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias iusto, temporibus, laudantium quidem magnam maxime expedita tenetur, consequuntur est possimus totam repellendus culpa sapiente voluptatem aliquid nobis doloribus quis vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fuga id nostrum corporis natus nam ducimus, quis soluta. Similique ipsum maiores ad ea numquam porro accusantium saepe blanditiis ab odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque rerum nam magnam, mollitia assumenda blanditiis ipsum minima recusandae nobis voluptate voluptatibus nulla fuga natus magni similique, voluptas nisi ratione fugit!",
        pohitekst: "Lorem ipsum dolor sit amet. Nam sint eveniet cum tempora officia sed accusantium magnam est quia architecto eos fugit voluptatem. Ut cumque galisum et aperiam internos nam mollitia quia est voluptates asperiores nam repellat reiciendis nam impedit quam. Qui rerum culpa et odio obcaecati qui consequatur quia et doloribus dolorum et quidem quod qui praesentium corporis. Qui tenetur ullam sed adipisci expedita aut magni. Ut quisquam debitis qui aliquam debitis aut laudantium placeat qui minima blanditiis 33 nihil facere. Sit optio velit qui quia velit ea autem quia non necessitatibus maxime ex odio minima! Et quia optio vel facilis quasi eum deserunt praesentium id eveniet omnis et quas quod qui omnis enim ut exercitationem temporibus. Aut corrupti dolor dolorem inventore et necessitatibus labore et obcaecati culpa. Vel assumenda facilis quo porro necessitatibus aut ullam maiores sed quia nisi non quidem enim. Eum quisquam numquam ut impedit commodi et quae praesentium. Et sapiente voluptatibus sit nisi quos ut eaque unde. Eos mollitia earum sed tempore pariatur et obcaecati voluptatem. Et molestiae autem et corporis expedita ab tempora voluptate hic culpa quae et nihil consequuntur non omnis illo! Non incidunt voluptatem sit illo iste vel quia deserunt? Et atque amet non cupiditate deserunt in officia quas? Id obcaecati earum et error enim ea commodi sint hic exercitationem dicta. Ut dignissimos quia est Quis totam id molestiae eligendi eos consequuntur cupiditate eum rerum illum. Et ipsum eius sit soluta enim hic mollitia fugit est eveniet eius id fuga molestiae. Qui quidem ipsam et autem quia sit iusto eius qui quia sint ea accusantium omnis est omnis rerum? Et nulla consequatur ut sint reiciendis est dolorum nobis. Ea perspiciatis expedita aut inventore iste 33 modi enim ea provident mollitia! Id provident unde aut nihil voluptatibus qui amet modi vel natus internos id dolore asperiores sit dolorem nulla et soluta voluptas? Aut natus quidem rem tempore aliquam non dolores minus. Eum soluta ipsam et alias voluptatem ea facilis ipsa vel iste omnis sed quae quas hic adipisci enim. At officia cupiditate aut natus ab amet fugit aut sint rerum rem voluptatem recusandae ex perferendis earum?",
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

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
