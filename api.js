// BASE DE DATOS INTEGRADA - DRAGON BALL CENTRAL
var PERSONAJES_DATA = [
    {
        "id": "goku_clasico",
        "Personaje": "Goku (Cl\u00E1sico)",
        "Raza": "Saiyan",
        "serie": "db-classic",
        "Planeta de origen": "Vegeta",
        "Universo": "7",
        "afiliaciones": "Escuela Tortuga",
        "estado": "Vivo",
        "edad": "12",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Son Goku fue enviado a la Tierra siendo un beb\u00E9 desde el planeta Vegeta. Al golpearse la cabeza perdi\u00F3 su prop\u00F3sito original de conquista y se convirti\u00F3 en el defensor del planeta. Entren\u00F3 bajo la tutela de Kame Sen'nin (Maestro Roshi) junto a Krilin, aprendiendo las t\u00E9cnicas fundamentales de la Escuela Tortuga. Particip\u00F3 en los Torneos de Artes Marciales, derrot\u00F3 al Ej\u00E9rcito de la Patrulla Roja y venci\u00F3 a Piccolo Daima\u014D, demostrando ser un guerrero excepcional.",
        "descripcion": "El joven Saiyan criado en la Tierra. Su cola de mono, su apetito insaciable y su esp\u00EDritu de superaci\u00F3n lo hacen \u00FAnico.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1fmS6UdG5a0RrJsGgT3r1GfzN363PpjUg",
            "https://lh3.googleusercontent.com/d/1CmRy3y3z-BZyDEKos28ZRxKpE7hYNw1Y",
            "https://lh3.googleusercontent.com/d/1tGpt9ZiV1aM65t8oW5IGRlGVjOPyGMfL",
            "https://lh3.googleusercontent.com/d/1THRGhOlAyy6nNRy1i3et6aSw2c5MbJuV",
            "https://lh3.googleusercontent.com/d/1l5XG_3P9nFRUtxUFF8ndiPnHk2Yks4vF",
            "https://lh3.googleusercontent.com/d/1EP6iIMLAinAvOsVFxa-6zs-62km07e6Y"
        ],
        "stats": { "fuerza": 30, "velocidad": 45, "ki": 20, "tecnica": 25 },
        "transformaciones": [
            { "id": "goku_clasico_base", "orden": 1, "nombre": "Base", "imagen": "https://lh3.googleusercontent.com/d/1fmS6UdG5a0RrJsGgT3r1GfzN363PpjUg", "descripcion": "Estado base de Goku en su infancia.", "saga": "Dragon Ball Cl\u00E1sico" },
            { "id": "goku_clasico_ozzaru", "orden": 2, "nombre": "Ozzaru", "imagen": "https://lh3.googleusercontent.com/d/1l5XG_3P9nFRUtxUFF8ndiPnHk2Yks4vF", "descripcion": "Transformaci\u00F3n en mono gigante al mirar la luna llena.", "saga": "Dragon Ball Cl\u00E1sico" }
        ],
        "tecnicas": ["Kamehameha", "Nube Kinto", "Bast\u00F3n M\u00E1gico", "Zank\u016B F\u016Bken", "T\u00E9cnica del Kiai"]
    },
    {
        "id": "bulma_clasica",
        "Personaje": "Bulma (Cl\u00E1sica)",
        "Raza": "Humana",
        "serie": "db-classic",
        "Planeta de origen": "Tierra",
        "Universo": "7",
        "afiliaciones": "Equipo de b\u00FAsqueda de las Esferas del Drag\u00F3n",
        "estado": "Viva",
        "edad": "16",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Bulma Brief, la brillante hija del Dr. Brief, conoci\u00F3 a Goku mientras buscaba las Esferas del Drag\u00F3n. Aunque al principio solo le interesaban los deseos, su amistad con Goku la llev\u00F3 a vivir innumerables aventuras. Es la creadora del Radar del Drag\u00F3n y una de las mentes m\u00E1s brillantes de la Tierra. Su ingenio y determinaci\u00F3n fueron clave para superar los desaf\u00EDos del Ej\u00E9rcito de la Patrulla Roja y la amenaza de Piccolo Daima\u014D.",
        "descripcion": "Genio cient\u00EDfica y aventurera. Creadora del Radar del Drag\u00F3n y compa\u00F1era inseparable de Goku en su primera gran aventura.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Xggc8_Qm00NMD3FaVuKErPCidzkqW_gK",
            "https://lh3.googleusercontent.com/d/1RGpik2t1Ntas1E1M2MaYGJ9Yi6DK0IHn",
            "https://lh3.googleusercontent.com/d/1iOiKuWkyZvLijPVe7uayrAMOSlQ1FsN2"
        ],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 2, "tecnica": 100 },
        "transformaciones": [],
        "tecnicas": ["Radar del Drag\u00F3n", "Inventos tecnol\u00F3gicos", "Conducci\u00F3n de veh\u00EDculos"]
    }
];
var MEDIA_DATA = {
    "series": [
        {
            "titulo": "Dragon Ball",
            "descripcion": "La aventura original de Goku buscando las Esferas del Drag├│n.",
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
            "info": "153 Episodios",
            "capitulos": 153,
            "inicio": "26/02/1986",
            "fin": "19/04/1989",
            "alias": ["DB", "Dragon Ball Cl├ísico"]
        },
        {
            "titulo": "Dragon Ball Z",
            "descripcion": "La etapa de las batallas espaciales, Saiyans, Freezer, Cell y Buu.",
            "imagen": "https://lh3.googleusercontent.com/d/1sk_RHuD7tLc0junztslnag4CgCisW0hy",
            "info": "291 Episodios",
            "capitulos": 291,
            "inicio": "26/04/1989",
            "fin": "31/01/1996",
            "alias": ["DBZ", "Z"]
        },
        {
            "titulo": "Dragon Ball GT",
            "descripcion": "Secuela alternativa donde Goku vuelve a ser ni├▒o.",
            "imagen": "https://lh3.googleusercontent.com/d/1hEN8OUh65JHzYgOO67te3YL7x1TJ2z91",
            "info": "64 Episodios",
            "capitulos": 64,
            "inicio": "07/02/1996",
            "fin": "19/11/1997",
            "alias": ["DBGT", "GT"]
        },
        {
            "titulo": "Dragon Ball Z Kai",
            "descripcion": "Remasterizaci├│n de DBZ fiel al manga y sin relleno.",
            "imagen": "https://lh3.googleusercontent.com/d/1MrKM3d6CccP1Io_PeMK5tJSHAqelg0_Y",
            "info": "167 Episodios",
            "capitulos": 167,
            "inicio": "05/04/2009",
            "fin": "28/08/2011",
            "alias": ["Kai", "DBZ Kai"]
        },
        {
            "titulo": "Dragon Ball Super",
            "descripcion": "Continuaci├│n oficial tras la derrota de Majin Buu.",
            "imagen": "https://lh3.googleusercontent.com/d/1LU6auOSGf5z2bzTEOS-O4d0gsc8AV3Ux",
            "info": "131 Episodios",
            "capitulos": 131,
            "inicio": "05/07/2015",
            "fin": "25/03/2018",
            "alias": ["DBS", "Super"]
        },
        {
            "titulo": "Dragon Ball Daima",
            "descripcion": "Nueva serie donde los protagonistas se encogen.",
            "imagen": "https://lh3.googleusercontent.com/d/1etdNiG1mN5VsA4FEnnaIIHKind9joCWs",
            "info": "2024",
            "capitulos": 20,
            "inicio": "11/10/2024",
            "fin": "En emisi├│n",
            "alias": ["Daima", "DB Daima"]
        },
        {
            "titulo": "Super DB Heroes",
            "descripcion": "Serie promocional con batallas de dimensiones alternativas.",
            "imagen": "https://lh3.googleusercontent.com/d/1FCfXjTmrBZ6RaVa2x80C81aA_lOUjwLD",
            "info": "Spin-off",
            "capitulos": 56,
            "inicio": "01/07/2018",
            "fin": "31/08/2022",
            "alias": ["DBH", "Heroes"]
        },
        {
            "titulo": "Dragon Ball AF",
            "descripcion": "La legendaria historia fanmade de los a├▒os 2000.",
            "imagen": "https://lh3.googleusercontent.com/d/1qHsFQJOTLlQKxoaBHyoOB2tWWye_qFN0",
            "info": "Fanmade",
            "capitulos": 0,
            "inicio": "ÔÇö",
            "fin": "ÔÇö",
            "alias": ["DBAF", "AF"]
        }
    ],
    "mangas": [
        { "titulo": "DB X SAITAMA", "descripcion": "Crossover fan", "imagen": "https://lh3.googleusercontent.com/d/1vIZ2kGV1XdULy2bbfwotFTAMQWCR-w7u", "tipo": "fan" },
        { "titulo": "DBAF", "descripcion": "Fan manga AF", "imagen": "https://lh3.googleusercontent.com/d/1_QJe6RcQKceqBkqUQz9-S6xr9AH8bePq", "tipo": "fan" },
        { "titulo": "DRAGON BALL", "descripcion": "Manga original de Akira Toriyama", "imagen": "https://lh3.googleusercontent.com/d/1Vsy7Y1QCKC458m6B4Lcq_f0J5dN4j6kx", "tipo": "oficial" },
        { "titulo": "DRAGON BALL: Aquella vez que me reencarn├® en Yamcha", "descripcion": "Spin-off oficial", "imagen": "https://lh3.googleusercontent.com/d/1Ucj90qCRunNLccmBamHd-3maGQP2GA9x", "tipo": "oficial" },
        { "titulo": "DB MULTIVERSE", "descripcion": "Fan manga multiverso", "imagen": "https://lh3.googleusercontent.com/d/1SJjeWUjlFR7L9-xgexaKE3VNwJfAVOTl", "tipo": "fan" },
        { "titulo": "DRAGON BALL SUPER", "descripcion": "Continuaci├│n oficial del manga", "imagen": "https://lh3.googleusercontent.com/d/1Mbnn5SXWKHSUmbWx_6NOF-q63QVXLDal", "tipo": "oficial" },
        { "titulo": "DRAGON BALL KAKUMEI", "descripcion": "Fan manga alternativo", "imagen": "https://lh3.googleusercontent.com/d/15AwAhSl2_pgFB7qJ5iLfQd6cJQ6fwzaF", "tipo": "fan" }
    ],
    "peliculas": [
        { "titulo": "La leyenda de Shenlong / El camino hacia el m├ís fuerte (Latam)", "descripcion": "Dragon Ball", "info": "Diciembre 1986", "imagen": "https://lh3.googleusercontent.com/d/1MeskJh-7K8Q8UfAK1pT-1f3cBehBdwLa" },
        { "titulo": "La bella durmiente en el castillo del mal / La princesa durmiente en el castillo del diablo", "descripcion": "Dragon Ball", "info": "Julio 1987", "imagen": "https://lh3.googleusercontent.com/d/1Yhtd75UnoUgdHxeJJS8IeDnAS20X5u7O" },
        { "titulo": "Aventura m├¡stica / Gran aventura m├¡stica", "descripcion": "Dragon Ball", "info": "Julio 1988", "imagen": "https://lh3.googleusercontent.com/d/1vdukB3FoFKOewaWd4za-1Qe793mmRCuO" },
        { "titulo": "Garlic Junior Inmortal / ┬íDevu├®lvanme a mi Gohan!", "descripcion": "Dragon Ball Z", "info": "Julio 1989", "imagen": "https://lh3.googleusercontent.com/d/1msJ6i3_F-OaBOWQVRG4fvKtFjkF6jfZg" },
        { "titulo": "El m├ís fuerte del mundo", "descripcion": "Dragon Ball Z", "info": "Marzo 1990", "imagen": "https://lh3.googleusercontent.com/d/1aUuKp0ekK4q9qykIA-ov3QuovAyd-TXh" },
        { "titulo": "La superbatalla decisiva por la Tierra / La batalla m├ís grande de este mundo por la Tierra", "descripcion": "Dragon Ball Z", "info": "Julio 1990", "imagen": "https://lh3.googleusercontent.com/d/1kLDjDs91N0qm85BoLVbH3Al09v4LN_pa" },
        { "titulo": "El superguerrero Son Goku / Goku es un Super Saiyajin", "descripcion": "Dragon Ball Z", "info": "Marzo 1991", "imagen": "https://lh3.googleusercontent.com/d/1R9BYS8ZqtUZ2C0Nu36zVGOf4pPdMreWU" },
        { "titulo": "Los mejores rivales / Los rivales m├ís poderosos", "descripcion": "Dragon Ball Z", "info": "Julio 1991", "imagen": "https://lh3.googleusercontent.com/d/1WBJj1qH5gtPbyfyWMoDcMY2F0ySpyHj0" },
        { "titulo": "Guerreros de fuerza ilimitada / Los guerreros m├ís poderosos", "descripcion": "Dragon Ball Z", "info": "Marzo 1992", "imagen": "https://lh3.googleusercontent.com/d/1Yct44chN74cdxfZ9bNYF1ivkY8GyhuLY" },
        { "titulo": "Los tres grandes Super Saiyans / La pelea de los tres Saiyajins", "descripcion": "Dragon Ball Z", "info": "Julio 1992", "imagen": "https://lh3.googleusercontent.com/d/1C_ot9R07D6yvo2AXiAw7uztJaZk8zhk_" },
        { "titulo": "Estalla el duelo / El poder invencible", "descripcion": "Dragon Ball Z", "info": "Marzo 1993", "imagen": "https://lh3.googleusercontent.com/d/1s9xEKPOGc-1nulMQG0Cuef_bzGSBBw_U" },
        { "titulo": "Los guerreros de plata / La galaxia corre peligro", "descripcion": "Dragon Ball Z", "info": "Julio 1993", "imagen": "https://lh3.googleusercontent.com/d/1PYOnYKFLEcU-pXcVFhVwL_1GJF8CoejI" },
        { "titulo": "El regreso de Broly / El regreso del guerrero legendario", "descripcion": "Dragon Ball Z", "info": "Marzo 1994", "imagen": "https://lh3.googleusercontent.com/d/1c0gsVhK-24jp79MqRrZkZZV33yqBTCHF" },
        { "titulo": "El combate definitivo / El combate final", "descripcion": "Dragon Ball Z", "info": "Julio 1994", "imagen": "https://lh3.googleusercontent.com/d/1zhU7lVBjEiiViivwCBjRw_rxvS6FuIMI" },
        { "titulo": "┬íEl renacer de la fusi├│n! / La fusi├│n de Goku y Vegeta", "descripcion": "Dragon Ball Z", "info": "Marzo 1995", "imagen": "https://lh3.googleusercontent.com/d/10g1s8cP-wgrt3x4P-EQKQQdNj87GBXqM" },
        { "titulo": "El ataque del drag├│n / El ataque del drag├│n", "descripcion": "Dragon Ball Z", "info": "Julio 1995", "imagen": "https://lh3.googleusercontent.com/d/1YzWZBnF5SVHQ76ZtHzGo_d9--o8AvU3S" },
        { "titulo": "El camino hacia el m├ís fuerte / El camino hacia el poder", "descripcion": "Dragon Ball (Especial 10┬║ Aniv.)", "info": "Marzo 1996", "imagen": "https://lh3.googleusercontent.com/d/1kv0-M5kuwkQKEV8zMuH0Fmc4q-Ku0ujK" },
        { "titulo": "La batalla de los dioses", "descripcion": "Dragon Ball Super", "info": "Marzo 2013", "imagen": "https://lh3.googleusercontent.com/d/1BXVTWTH1_wW205QretsCiGiwLq5fTxPH" },
        { "titulo": "La resurrecci├│n de Freezer / La resurrecci├│n de 'F'", "descripcion": "Dragon Ball Super", "info": "Abril 2015", "imagen": "https://lh3.googleusercontent.com/d/132tuEe-NXEG0zbYYZb307YFL433YTok9" },
        { "titulo": "Dragon Ball Super: Broly", "descripcion": "Dragon Ball Super", "info": "Diciembre 2018", "imagen": "https://lh3.googleusercontent.com/d/13bM-a9y8l72FiBD0-ZY5qr1HqOQV9Qck" },
        { "titulo": "Dragon Ball Super: Super Hero", "descripcion": "Dragon Ball Super", "info": "Junio 2022", "imagen": "https://lh3.googleusercontent.com/d/1--0Hiil4UtBmw8ktiXNCla9m1edyCby2" }
    ],
    "videojuegos": [
        { "titulo": "Dragon Ball Sparking! ZERO", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/115sLGIdzioiaRAsxG4ATFfliXWObYpQF" },
        { "titulo": "Dragon Ball Z: Sagas", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/12jXt_CnKRxXIQD_MTGYg79BPLaij85R3" },
        { "titulo": "Dragon Ball Z: Buu's Fury", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15F8kUwNevGxeU3hBfRksKLZdu6gG_n8Z" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15SZUX8XyEOFjHgV9J8mUFKLLRCrNxEaH" },
        { "titulo": "Dragon Ball: The Breakers", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15n9jmkwKd64AyrYaG1Q3Mo_LTw5LhI4X" },
        { "titulo": "Dragon Ball Raging Blast", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1CDaqeXIbeSDIL-cB8Nm72SojEbGHYKGv" },
        { "titulo": "Dragon Ball Z: Budokai", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1GR5bWqLoO7eGdz-yeKOnyJqmqoDsd7JE" },
        { "titulo": "Dragon Ball Z: El Legado de Goku", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1KYbxQgzTN4Rxnn314-uUSZY4AkqPNd_X" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 3", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1LJjapTQJ28k_6Pt1_vZxFMqBi2wmWx6_" },
        { "titulo": "Dragon Ball Legends", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1OTxA0GWun1qk-8bOyLrNqwuyDHn6Dtro" },
        { "titulo": "Dragon Ball Raging Blast 2", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1PpxQ0fS7kzhmG1gg0TlQqfc-QldSZwzM" },
        { "titulo": "Dragon Ball Z: Kakarot", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Q2frh1C-i8lHs2kSVs4nmSuVaqPVBn7m" },
        { "titulo": "Dragon Ball Z: Shin Budokai", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1QSfUMU0HG63XqUElUscGbN1c--BmQpTm" },
        { "titulo": "Dragon Ball Z: Shin Budokai - Another Road", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1SquR3MJrgxrgRYXCWEfD-fkeuGRgi9Ed" },
        { "titulo": "Dragon Ball: Advanced Adventure", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Tsj4ICOMHfisXKItRYObeu608txA71Vz" },
        { "titulo": "Dragon Ball Z: Budokai 3", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1UcPPHRupw_7Cg0bcceCMZux00fbWcLyA" },
        { "titulo": "Dragon Ball Z: Budokai 2", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1VpnGeNTwnoCeF1OIgONFwFXrSiQBCZtY" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 2", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aBMBzvH8LUqDZoxDfdTzednCwXTiahY1" },
        { "titulo": "Dragon Ball Z: The Legacy of Goku II", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aCDo3I04ud5PcA1l2Z7JGvowVUYCsa3K" },
        { "titulo": "Dragon Ball FighterZ", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1emM49Xbed6wuzu6W5FP7DXiC2uGydUwM" },
        { "titulo": "Dragon Ball Z: Dokkan Battle", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1nM6Wc-shh6lH8TRVS0NRhhA23Mc638qW" },
        { "titulo": "Dragon Ball Xenoverse 2", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1opHnByooG3XhwoOGb129gvTHK2zemLQz" },
        { "titulo": "Super Dragon Ball Heroes: World Mission", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1qY1OnwfhIGcE2fNxGPPytaxjn5HpSo8r" },
        { "titulo": "Dragon Ball Fusions", "descripcion": "Informaci├│n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1x6y8WCWJA-7eH_aRckj_Bp0YKRv92lmk" }
    ],
    "videos": [
        { "titulo": "Dragon Ball Cl├ísico - Opening (Makafushigi Adventure)", "descripcion": "El opening original que inici├│ la leyenda de Dragon Ball.", "imagen": "https://img.youtube.com/vi/JSb7p0SIc1w/mqdefault.jpg", "youtubeId": "JSb7p0SIc1w", "categoria": "Openings" },
        { "titulo": "Goku se Transforma en Super Saiyajin 3 por Primera Vez", "descripcion": "La impactante transformaci├│n de Goku SSJ3 frente a Majin Buu.", "imagen": "https://img.youtube.com/vi/Ut8wlVuT3pc/mqdefault.jpg", "youtubeId": "Ut8wlVuT3pc", "categoria": "Transformaciones" },
        { "titulo": "Goku Despierta el Ultra Instinto por Primera Vez", "descripcion": "Goku alcanza el Ultra Instinto por primera vez en el Torneo del Poder.", "imagen": "https://img.youtube.com/vi/6CF29TtxU2c/mqdefault.jpg", "youtubeId": "6CF29TtxU2c", "categoria": "Transformaciones" },
        { "titulo": "Gogeta vs Broly - Batalla ├ëpica Completa", "descripcion": "La fusi├│n definitiva de Gogeta vs Broly en 4K.", "imagen": "https://img.youtube.com/vi/BYt9F2vCfqU/mqdefault.jpg", "youtubeId": "BYt9F2vCfqU", "categoria": "Batallas" },
        { "titulo": "Vegito vs Majin Buu - Combate Legendario", "descripcion": "Vegito hace su debut aplastando a Buuhan en una batalla ├®pica.", "imagen": "https://img.youtube.com/vi/pmB5p1ZIWQw/mqdefault.jpg", "youtubeId": "pmB5p1ZIWQw", "categoria": "Batallas" },
        { "titulo": "Goku vs Majin Vegeta - La Rivalidad Saiyajin", "descripcion": "La pelea m├ís intensa entre Goku y Vegeta bajo el control de Babidi.", "imagen": "https://img.youtube.com/vi/89fzXpb9rCU/mqdefault.jpg", "youtubeId": "89fzXpb9rCU", "categoria": "Batallas" },
        { "titulo": "Dragon Ball Super: SUPER HERO - Tr├íiler Oficial", "descripcion": "El tr├íiler oficial de la pel├¡cula Super Hero con Gohan y Piccolo.", "imagen": "https://img.youtube.com/vi/t5CIs0jDqC8/mqdefault.jpg", "youtubeId": "t5CIs0jDqC8", "categoria": "Trailers" },
        { "titulo": "Dragon Ball Z Kakarot DLC 6 - Goku vs Vegeta 4K (Goku's Next Journey)", "descripcion": "La batalla final entre Goku y Vegeta en el DLC 6 de Dragon Ball Z Kakarot en 4K 60FPS.", "imagen": "https://img.youtube.com/vi/p3CDfDwwb6Q/mqdefault.jpg", "youtubeId": "p3CDfDwwb6Q", "categoria": "Batallas" }
    ],
    "fanAnimations": [
        {
            "titulo": "Dragon Ball Deliverance",
            "creador": "FRAME ONE",
            "url": "https://www.youtube.com/@frameone1",
            "descripcion": "A├▒os despu├®s de Dragon Ball GT, los Z Fighters se enfrentan a una poderosa amenaza que causa caos en Namek. Serie fan-made con animaci├│n de alta calidad y modelados 3D.",
            "imagen": "https://img.youtube.com/vi/xRXn538AJIw/mqdefault.jpg",
            "capitulos": [
                { "titulo": "Episodio 1 - Emergency", "youtubeId": "xRXn538AJIw" },
                { "titulo": "Episodio 2 - Scattered", "youtubeId": "Y0Z2Rbxg2Lk" },
                { "titulo": "Episodio 3 - Acquired", "youtubeId": "cM3iF32reeE" },
                { "titulo": "Episodio 4 - Legacies", "youtubeId": "Hoc0j1k3Wvc" }
            ]
        },
        {
            "titulo": "Future Gohan's Last Stand",
            "creador": "WD Animation",
            "url": "https://www.youtube.com/@WD.animate",
            "descripcion": "La batalla final de Gohan del futuro contra los androides, recreada con una impresionante animaci├│n fan que captura la esencia del guerrero m├ís tr├ígico.",
            "imagen": "https://img.youtube.com/vi/rQ_eqJHw4tE/mqdefault.jpg",
            "capitulos": [
                { "titulo": "Partes 1 + 2", "youtubeId": "rQ_eqJHw4tE" }
            ]
        },
        {
            "titulo": "Dragon Ball MAGIC",
            "creador": "Totally Not Mark",
            "url": "https://www.youtube.com/@TotallyNotMark",
            "descripcion": "Una parodia animada en colaboraci├│n con TeamFourStar que reimagina el universo Dragon Ball con un toque de humor y creatividad.",
            "imagen": "https://img.youtube.com/vi/-3J0ovtt278/mqdefault.jpg",
            "capitulos": [
                { "titulo": "Parte 1", "youtubeId": "-3J0ovtt278" }
            ]
        }
    ]
};

var WORLD_DATA = {
    "sagas": [
        {
            "id": "clasico",
            "nombre": "Dragon Ball Cl├ísico",
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
            "sagas": [
                { "titulo": "Saga de Pilaf", "imagen": "https://lh3.googleusercontent.com/d/1gJ9FBJKuQ8p-KItR1D6tnAkzgYkYkgfv" },
                { "titulo": "Saga del 21┬░ Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1fyWjTkx8cRMp65swf1U1JZtREmi0ylCq" },
                { "titulo": "Saga del Ej├®rcito de la Patrulla Roja (Red Ribbon)", "imagen": "https://lh3.googleusercontent.com/d/14XvgWlBw9b4sZ5Qk58WA1qG6kX8Y6Ibo" },
                { "titulo": "Saga de Uranai Baba", "imagen": "https://lh3.googleusercontent.com/d/1PkQrcpTKiQ103YTouhggGkJKxtVYAcnW" },
                { "titulo": "Saga del 22┬░ Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1EAk58Ae4gpHYbUkY5L0KqvpMopAM_CdG" },
                { "titulo": "Saga de Piccolo Daima┼ì", "imagen": "https://lh3.googleusercontent.com/d/1uJzWMgU1NFj3-_N6MvhyuRy7A6Qgwy5S" },
                { "titulo": "Saga del 23┬░ Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1AKxAfo8pmqIKqkR81rVvAmV5zCTSOD6u" }
            ]
        },
        {
            "id": "z",
            "nombre": "Dragon Ball Z",
            "imagen": "https://lh3.googleusercontent.com/d/1sk_RHuD7tLc0junztslnag4CgCisW0hy",
            "sagas": [
                { "titulo": "Saga de los Saiyans", "imagen": "https://lh3.googleusercontent.com/d/1z5y9DH4Sy2otlIxdefkgjgU7O5J_GwlP" },
                { "titulo": "Saga de Freezer (o de Namek)", "imagen": "https://lh3.googleusercontent.com/d/1nILQPkXAL8W7oUFgs7ezjsHTBV8KdHKM" },
                { "titulo": "Saga de los Androides y Cell", "imagen": "https://lh3.googleusercontent.com/d/1wkKl7HzUzb5rzSKwhyFZ3PdVudCoMjXe" },
                { "titulo": "Saga de Majin Buu", "imagen": "https://lh3.googleusercontent.com/d/1Wyi-5oZ4eoyv1PRSmi6_zSyCGZg0KRpZ" }
            ]
        },
        {
            "id": "gt",
            "nombre": "Dragon Ball GT",
            "imagen": "https://lh3.googleusercontent.com/d/1hEN8OUh65JHzYgOO67te3YL7x1TJ2z91",
            "sagas": [
                { "titulo": "Saga de las Esferas del Drag├│n de la Estrella Negra", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Estrellas+Negras" },
                { "titulo": "Saga de Baby", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Baby" },
                { "titulo": "Saga de Super Android 17", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+17" },
                { "titulo": "Saga de los Dragones Oscuros", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Dragones+Oscuros" }
            ]
        },
        {
            "id": "super",
            "nombre": "Dragon Ball Super",
            "imagen": "https://lh3.googleusercontent.com/d/1LU6auOSGf5z2bzTEOS-O4d0gsc8AV3Ux",
            "sagas": [
                { "titulo": "Saga de la Batalla de los Dioses", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Batalla+de+Dioses" },
                { "titulo": "Saga de la Resurrecci├│n de ÔÇ£FÔÇØ", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Resurreccion+de+F" },
                { "titulo": "Saga del Torneo del Universo 6", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Torneo+Universo+6" },
                { "titulo": "Saga de Goku Black (o de Trunks del Futuro)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Goku+Black" },
                { "titulo": "Saga del Torneo del Poder (o de la Supervivencia Universal)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Torneo+del+Poder" },
                { "titulo": "Pel├¡cula Dragon Ball Super: Broly", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+Broly" },
                { "titulo": "Saga de Moro (o del Prisionero de la Patrulla Gal├íctica)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Moro" },
                { "titulo": "Saga de Granolah el Superviviente", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Granolah" },
                { "titulo": "Pel├¡cula / Saga de Super Hero", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+Hero" }
            ]
        },
        {
            "id": "daima",
            "nombre": "Dragon Ball Daima",
            "imagen": "https://lh3.googleusercontent.com/d/1etdNiG1mN5VsA4FEnnaIIHKind9joCWs",
            "sagas": [
                { "titulo": "Saga del Reino de los Demonios (Granbaza)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Reino+Demonio" }
            ]
        }
    ],
    "esferas": {
        "cristalesEspeciales": [
            { "nombre": "Cristal de la Omnipotencia", "dragon": "ÔÇö", "color": "info", "descripcion": "Artefacto ├║nico capaz de otorgar poder absoluto sin l├¡mites conocidos.", "imagen": "https://lh3.googleusercontent.com/d/1kwllvhGWA2-9KxqwPStyca9v6mUKTMWc" }
        ],
        "principales": [
            { "nombre": "Esferas del Drag├│n", "dragon": "Shenlong", "color": "warning", "descripcion": "Las siete esferas de la Tierra. Conceden un deseo al reunirlas.", "imagen": "https://lh3.googleusercontent.com/d/1_bCHC8MeGlixl6yqSuso8G5V9uhn8AmM" },
            { "nombre": "Esferas del Drag├│n de Namek", "dragon": "Porunga", "color": "success", "descripcion": "Mucho m├ís grandes; conceden tres deseos en idioma Namek.", "imagen": "https://lh3.googleusercontent.com/d/1powONUqd6btTR4GheQvAyc990HKHTBDA" },
            { "nombre": "Super Esferas del Drag├│n", "dragon": "Super Shenlong", "color": "info", "descripcion": "Del tama├▒o de planetas. Sin l├¡mites de poder.", "imagen": "https://lh3.googleusercontent.com/d/14MPoXE9vqzqPwwP5Bg-Yt6jJ_whWYG4h" }
        ],
        "variantes": [
            { "nombre": "Esferas del Drag├│n de Cereal", "dragon": "Toronbo", "color": "success", "descripcion": "Esferas del planeta Cereal, hogar de Granolah.", "imagen": "https://lh3.googleusercontent.com/d/1dMQfaDo2tfXNmb954-T34DwuEQamJc5W" },
            { "nombre": "Esferas del Drag├│n Oscuras", "dragon": "Drag├│n Oscuro", "color": "dark", "descripcion": "Esferas de color oscuro vinculadas a energ├¡as corruptas y dragones oscuros.", "imagen": "https://lh3.googleusercontent.com/d/13tgVnKRZ6GhYFAJUP1AMHWn-CQAk2a7R" },
            { "nombre": "Esferas del Drag├│n Especiales", "dragon": "Shenlong", "color": "primary", "descripcion": "Ediciones limitadas y variantes especiales del multiverso.", "imagen": "https://lh3.googleusercontent.com/d/1fRtltVnEL1Vb3hGGUxRVvxALscKHcNPF" },
            { "nombre": "Esferas del Drag├│n de Energ├¡a Negativa", "dragon": "ÔÇö", "color": "danger", "descripcion": "Esferas cargadas con energ├¡a negativa que distorsionan los deseos.", "imagen": "https://lh3.googleusercontent.com/d/13whURNtmtBWqfJStYOvzesGhikpxCnC7" },
            { "nombre": "Esferas del Drag├│n del Reino Demon├¡aco", "dragon": "Tamagami", "color": "secondary", "descripcion": "Artefactos del Reino Demon├¡aco introducidos en Dragon Ball Daima.", "imagen": "https://lh3.googleusercontent.com/d/19PLsHz2B_w4Gz1z6D4h5shGj4cxgMYxN" }
        ]
    },
    "universos": [
        { "id": 1, "dios": "Iwan", "angel": "Awamo", "imagen": "https://lh3.googleusercontent.com/d/18dAswrvAP5YvngQ3gRvlpwSO3czV8qE_", "highlight": false, "descripcion": "El universo con el nivel mortal m├ís alto del multiverso, regido por la sabidur├¡a y el orden absoluto.", "diosInfo": { "nombre": "Iwan", "imagen": "https://lh3.googleusercontent.com/d/1hqOJQrZ60Mp5tO1jlGPKeKMDHzjaLoND", "descripcion": "Un Dios de la Destrucci├│n de aspecto anciano, conocido por su actitud seria y su apego a las reglas.", "habilidades": "Poder de destrucci├│n canalizado a trav├®s de su bast├│n. Su experiencia milenaria lo convierte en un estratega letal." }, "angelInfo": { "nombre": "Awamo", "imagen": "https://lh3.googleusercontent.com/d/1uTZx3iCdjYCuFsHpH3ylzgRsaJWe7UYs", "descripcion": "├üngel de modales impecables y porte distinguido.", "funcion": "Supervisar y entrenar al Dios de la Destrucci├│n Iwan, adem├ís de mantener el equilibrio del universo." }, "kaioshin": [ { "nombre": "Anciano Kaioshin del Universo 1", "imagen": "https://lh3.googleusercontent.com/d/1-INbrWfU4APaz7G55l4HwVsaLY3mj2zP", "descripcion": "El Supremo Kaioshin m├ís antiguo del universo 1.", "rol": "Guiar la creaci├│n y el desarrollo de la vida en el universo." } ] },
        { "id": 2, "dios": "Heles", "angel": "Sour", "imagen": "https://lh3.googleusercontent.com/d/1Lc2qFDNAO_wNpT9A-SUN0VOuqE7QOtBM", "highlight": false, "descripcion": "El universo del amor y la belleza, donde los guerreros luchan con elegancia y pasi├│n.", "diosInfo": { "nombre": "Heles", "imagen": "https://lh3.googleusercontent.com/d/1s9pKbzkPmAF0DrHvjqGfFzTE1pZW_F55", "descripcion": "Una Diosa de la Destrucci├│n femenina que valora la est├®tica y el amor en todas sus formas.", "habilidades": "Destrucci├│n estilizada con movimientos gr├íciles pero mortales. Puede canalizar la energ├¡a del amor en poder destructivo." }, "angelInfo": { "nombre": "Sour", "imagen": "https://lh3.googleusercontent.com/d/1ncHtTHvYBu_o6JHOArYuUWgGbyKb64AT", "descripcion": "├üngel de apariencia andr├│gina y personalidad burbujeante.", "funcion": "Asistir a Heles y mantener el orden divino en el universo del amor." }, "kaioshin": [ { "nombre": "Pell", "imagen": "https://lh3.googleusercontent.com/d/1dVasadfFLsvNzxwKo10h-RkEIlSXOHSI", "descripcion": "Supremo Kaioshin del Universo 2, elegante y apasionado.", "rol": "Fomentar la creaci├│n de vida con amor y armon├¡a." } ] },
        { "id": 3, "dios": "Mule", "angel": "Camparri", "imagen": "https://lh3.googleusercontent.com/d/1tVRNEvMnT0nVShSv-QrPxHMkOx6H7nBo", "highlight": false, "descripcion": "El universo de la inteligencia y la sabidur├¡a, habitado por seres l├│gicos y estrat├®gicos.", "diosInfo": { "nombre": "Mule", "imagen": "https://lh3.googleusercontent.com/d/12D1XlzrgYfp2hGwWWCUSX5N5bguXbMXX", "descripcion": "Un Dios de la Destrucci├│n de complexi├│n robusta, impulsivo pero con un gran coraz├│n.", "habilidades": "Fuerza bruta combinada con ataques de destrucci├│n masiva. Su resistencia es legendaria." }, "angelInfo": { "nombre": "Camparri", "imagen": "https://lh3.googleusercontent.com/d/1ds2ekAXr1omi5xszfbweAKvOTSnuWvTv", "descripcion": "├üngel sereno y calculador, siempre un paso adelante.", "funcion": "Guiar a Mule en sus decisiones destructivas y velar por el equilibrio universal." }, "kaioshin": [ { "nombre": "Ea", "imagen": "https://lh3.googleusercontent.com/d/1Hp7dJp580nXRNgUz8vl8DXgqLMIWk6yw", "descripcion": "Supremo Kaioshin del Universo 3, de complexi├│n delgada y gran intelecto.", "rol": "Supervisar la creaci├│n tecnol├│gica y biol├│gica del universo." } ] },
        { "id": 4, "dios": "Quitela", "angel": "Cognac", "imagen": "https://lh3.googleusercontent.com/d/1Mx28PSYFEy0xKtPefGhr7nRO6XxNjsrc", "highlight": false, "descripcion": "Un universo astuto y tramposo, donde la picard├¡a y el enga├▒o son moneda corriente.", "diosInfo": { "nombre": "Quitela", "imagen": "https://lh3.googleusercontent.com/d/1Q7YYEga0XPzrtLDE5CoXd8VMqojklp8_", "descripcion": "Un Dios de la Destrucci├│n peque├▒o pero letal, conocido por su risa burlona y su astucia.", "habilidades": "Agilidad sobrehumana y ataques de destrucci├│n quir├║rgicos. Experto en explotar debilidades ajenas." }, "angelInfo": { "nombre": "Cognac", "imagen": "https://lh3.googleusercontent.com/d/16UXe9tFsyC_hswuCP5uzSt9ymB4AYeup", "descripcion": "├üngel de aspecto joven y actitud juguetona.", "funcion": "Asistir a Quitela y mantener registros precisos del equilibrio universal." }, "kaioshin": [ { "nombre": "Kuru", "imagen": "https://lh3.googleusercontent.com/d/14tDD3ZhLSWDy_GaHMBRg8aa919I1-nnt", "descripcion": "Supremo Kaioshin del Universo 4, menudo y de movimientos r├ípidos.", "rol": "Crear y supervisar las formas de vida ingeniosas del universo." } ] },
        { "id": 5, "dios": "Arack", "angel": "Cukatail", "imagen": "https://lh3.googleusercontent.com/d/1-_MbEVE8-a6kuueqetRtroefDZJsAHe1", "highlight": false, "descripcion": "Un universo equilibrado donde la fuerza y la sabidur├¡a coexisten en armon├¡a.", "diosInfo": { "nombre": "Arack", "imagen": "https://lh3.googleusercontent.com/d/1NB1iQBi6PkBdFa_O0LTRxp79wJJXxDLk", "descripcion": "Un Dios de la Destrucci├│n de gran tama├▒o y fuerza colosal, de car├ícter tranquilo pero implacable.", "habilidades": "Poder destructivo masivo con capacidad de afectar ├íreas extensas. Su presencia impone respeto." }, "angelInfo": { "nombre": "Cukatail", "imagen": "https://lh3.googleusercontent.com/d/125EzCjv11UH9rZppGpwXKSqkk7rzaRLu", "descripcion": "├üngel de personalidad en├®rgica y entusiasta.", "funcion": "Entrenar a Arack y asegurar que la destrucci├│n se realice con precisi├│n milim├®trica." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 5", "imagen": "https://lh3.googleusercontent.com/d/1egvDEW-FSGAcbBdRj-nMs_v-RAi5u8fe", "descripcion": "Supremo Kaioshin de sabidur├¡a profunda.", "rol": "Mantener la creaci├│n y el desarrollo evolutivo del universo." } ] },
        { "id": 6, "dios": "Champa", "angel": "Vados", "imagen": "https://lh3.googleusercontent.com/d/1lqhTIUnlMIZjDivbNi9YsloEvUVOdb-x", "highlight": false, "descripcion": "Universo gemelo del 7, regido por el Dios de la Destrucci├│n Champa, rival de Beerus.", "diosInfo": { "nombre": "Champa", "imagen": "https://lh3.googleusercontent.com/d/1YWVReR-B0_KqDN2XUM5g-5rZOooZQuEY", "descripcion": "Hermano gemelo de Beerus, igual de poderoso pero m├ís glot├│n y perezoso. Su rivalidad con Beerus es legendaria.", "habilidades": "Poder de destrucci├│n equiparable a Beerus. Hakai avanzado y combate cuerpo a cuerpo devastador." }, "angelInfo": { "nombre": "Vados", "imagen": "https://lh3.googleusercontent.com/d/1d5W0pzIpOKXWUDN1r11JDRbM8FeNtHln", "descripcion": "├üngel del Universo 6 y hermana mayor de Whis. La m├ís poderosa entre los ├íngeles conocidos.", "funcion": "Entrenar a Champa y supervisar el equilibrio del Universo 6. Es la consejera principal del Dios de la Destrucci├│n." }, "kaioshin": [ { "nombre": "Fuwa", "imagen": "https://lh3.googleusercontent.com/d/15O4J042dgWEru0pa9gB4Xr7fa0almkt0", "descripcion": "Anciano Supremo Kaioshin del Universo 6, de complexi├│n grande y car├ícter afable.", "rol": "Supervisar la creaci├│n divina en el universo gemelo." } ] },
        { "id": 7, "dios": "Beerus", "angel": "Whis", "imagen": "https://lh3.googleusercontent.com/d/19HNd0a-KPgrjzWKovmRsxJf8wlZUtnIQ", "highlight": true, "descripcion": "El universo principal de la serie, hogar de Goku y los Guerreros Z. El m├ís relevante del multiverso.", "diosInfo": { "nombre": "Beerus", "imagen": "https://lh3.googleusercontent.com/d/1_sboPUI8XqpZFzjoWX2qoPeloe7piH_M", "descripcion": "El Dios de la Destrucci├│n del Universo 7. Temido por todos, despierta cada milenios para destruir civilizaciones. Su poder es casi absoluto.", "habilidades": "Hakai (destrucci├│n divina), combate cuerpo a cuerpo supremo, resistencia sobrehumana, capacidad de destruir planetas enteros con un dedo." }, "angelInfo": { "nombre": "Whis", "imagen": "https://lh3.googleusercontent.com/d/1mttxv2hfSK4bojUS10g9So5i-6JD84vI", "descripcion": "├üngel del Universo 7 e instructor de Beerus. Es el ser m├ís poderoso del universo, capaz de manipular el tiempo.", "funcion": "Entrenar a Beerus y a los guerreros del Universo 7. Tambi├®n es el maestro de Goku y Vegeta en las t├®cnicas divinas." }, "kaioshin": [ { "nombre": "Shin (Kaioshin del Este)", "imagen": "https://lh3.googleusercontent.com/d/102ZwV5gyTk9LJOlCB3FdaFzXXpa0J1Lu", "descripcion": "El Supremo Kaioshin actual del Universo 7. Originalmente era el Kaioshin del Este antes de la muerte de sus compa├▒eros.", "rol": "Supervisar la creaci├│n de vida y el desarrollo de los planetas del universo." }, { "nombre": "Kibito", "imagen": "", "descripcion": "Asistente y guardaespaldas del Supremo Kaioshin Shin.", "rol": "Proteger al Kaioshin y asistir en sus labores divinas." }, { "nombre": "Anciano Kaioshin (Old Kai)", "imagen": "https://lh3.googleusercontent.com/d/11FZGuXeWJYpkujg4sx5cjjuRc1k7LBpt", "descripcion": "El Supremo Kaioshin anterior, liberado por Gohan de la Espada Z. Posee conocimiento milenario.", "rol": "Consejero divino con habilidades m├¡sticas como despertar el potencial oculto." } ] },
        { "id": 8, "dios": "Liquiir", "angel": "Korn", "imagen": "https://lh3.googleusercontent.com/d/12-NT_WEHchwAAT8ib2_UB-IvqgcMQ4F6", "highlight": false, "descripcion": "Un universo pac├¡fico y tranquilo, donde los mortales viven en armon├¡a sin grandes conflictos.", "diosInfo": { "nombre": "Liquiir", "imagen": "https://lh3.googleusercontent.com/d/1TkftUIpnJCf2fG3Urtct2MHuyGRLeGbJ", "descripcion": "Un Dios de la Destrucci├│n de aspecto amigable y relajado, poco dado a la destrucci├│n innecesaria.", "habilidades": "Destrucci├│n precisa y controlada. Prefiere la negociaci├│n sobre la aniquilaci├│n." }, "angelInfo": { "nombre": "Korn", "imagen": "https://lh3.googleusercontent.com/d/1hyn6ZAFcjQ0TilxQwYvFi0uDZuIMV3y9", "descripcion": "├üngel de personalidad tranquila y serena.", "funcion": "Asistir a Liquiir y mantener el equilibrio en el universo m├ís pac├¡fico." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 8", "imagen": "https://lh3.googleusercontent.com/d/1fE695ikOOCLeDifY8bYhvvVAaZ_A4BBT", "descripcion": "Supremo Kaioshin de car├ícter sereno.", "rol": "Guiar el desarrollo espiritual y creativo del universo." } ] },
        { "id": 9, "dios": "Sidra", "angel": "Mohito", "imagen": "https://lh3.googleusercontent.com/d/1HhuXuyWfXkNnkNPXgzdxStlhVOHh8T6C", "highlight": false, "descripcion": "Un universo de seres cobardes y d├®biles, donde la fuerza bruta brilla por su ausencia.", "diosInfo": { "nombre": "Sidra", "imagen": "https://lh3.googleusercontent.com/d/1DNxjNwuk4DpHlvaU2G-JH1vZqX-GJuq4", "descripcion": "Un Dios de la Destrucci├│n indeciso y temeroso, que duda antes de destruir. F├ícil de intimidar.", "habilidades": "Su Hakai es inestable y lento. Depende en gran medida de su ├íngel para tomar decisiones." }, "angelInfo": { "nombre": "Mohito", "imagen": "https://lh3.googleusercontent.com/d/1wVeo_49E4vQiINypUDeWtkXa-FvT-mtQ", "descripcion": "├üngel de personalidad burlona y sarc├ística, siempre con una sonrisa.", "funcion": "Compensar la debilidad de Sidra con su astucia y conocimientos divinos." }, "kaioshin": [ { "nombre": "Roh", "imagen": "https://lh3.googleusercontent.com/d/1lkmDHh05i_o4Ok4rUphDcF6dZkAZdDvK", "descripcion": "Supremo Kaioshin del Universo 9, de aspecto anciano y voz temblorosa.", "rol": "Intentar mantener el orden en un universo ca├│tico y desorganizado." } ] },
        { "id": 10, "dios": "Rumsshi", "angel": "Kusu", "imagen": "https://lh3.googleusercontent.com/d/1gMgYYYuBATbgtKuWggJdkyaAP9ns-8Di", "highlight": false, "descripcion": "Un universo alegre y juguet├│n, donde los mortales disfrutan de la vida sin preocupaciones.", "diosInfo": { "nombre": "Rumsshi", "imagen": "https://lh3.googleusercontent.com/d/1RuChn5ivHhZ1aaEeFd8Jg_KXD5heWgha", "descripcion": "Un Dios de la Destrucci├│n exc├®ntrico y bullicioso, que r├¡e y juega mientras destruye.", "habilidades": "Destrucci├│n ca├│tica e impredecible. Su estilo de lucha es tan err├ítico como efectivo." }, "angelInfo": { "nombre": "Kusu", "imagen": "https://lh3.googleusercontent.com/d/13N5yQbKaUBOgKGH7FNMsRvAgIgtmA3eF", "descripcion": "├üngel de aspecto joven y actitud vivaz.", "funcion": "Canalizar la energ├¡a ca├│tica de Rumsshi y mantener un m├¡nimo de orden divino." }, "kaioshin": [ { "nombre": "Gowasu", "imagen": "https://lh3.googleusercontent.com/d/1diP_-h4lPkwih3s7w6_QGiKkHspjSAiw", "descripcion": "Supremo Kaioshin del Universo 10, de aspecto calvo y car├ícter doctrinal.", "rol": "Supervisar la creaci├│n y ense├▒ar los valores divinos a los mortales." }, { "nombre": "Zamasu", "imagen": "", "descripcion": "Kaioshin aprendiz del Universo 10, alumno de Gowasu. M├ís tarde se convertir├¡a en una amenaza multiversal.", "rol": "Aprendiz de Kaioshin, destinado a convertirse en Supremo Kaioshin." } ] },
        { "id": 11, "dios": "Belmod", "angel": "Marcarita", "imagen": "https://lh3.googleusercontent.com/d/1rACaukY7B-9BSbczOCoYtRiR-Q_ZlQ29", "highlight": false, "descripcion": "El universo de la justicia y los h├®roes, hogar del glorioso Ej├®rcito de la Justicia.", "diosInfo": { "nombre": "Belmod", "imagen": "https://lh3.googleusercontent.com/d/1EyJBTOcA8ZWqLlaInzOS7-thAwCsc1N4", "descripcion": "Un Dios de la Destrucci├│n payasesco pero letal, rival de Beerus. Oculto tras su apariencia c├│mica hay un poder inmenso.", "habilidades": "Agilidad sobrehumana, capacidad de estirar su cuerpo y ataques de destrucci├│n impredecibles." }, "angelInfo": { "nombre": "Marcarita", "imagen": "https://lh3.googleusercontent.com/d/1lMWLiq07mKSd6gj9zDnjKC0buzMvxntc", "descripcion": "├üngel del Universo 11, maternal y elegante.", "funcion": "Guiar a Belmod y supervisar al Ej├®rcito de la Justicia, especialmente a Jiren." }, "kaioshin": [ { "nombre": "Khai", "imagen": "https://lh3.googleusercontent.com/d/1IVwJkUSwbE23VCIs4FvpgPwEw_yhu6RG", "descripcion": "Supremo Kaioshin del Universo 11, devoto de la justicia y la moral.", "rol": "Crear h├®roes y guiar espiritualmente a los guerreros de la justicia." } ] },
        { "id": 12, "dios": "Giin", "angel": "Martinu", "imagen": "https://lh3.googleusercontent.com/d/11fisFAdPQDvDl3kOldRr9wGB7Xqdvkof", "highlight": false, "descripcion": "El universo m├ís perfecto del multiverso, con el nivel mortal m├ís alto junto al Universo 1.", "diosInfo": { "nombre": "Giin", "imagen": "https://lh3.googleusercontent.com/d/1tzm1trweWEMzTEw0DfQOGQlqGUq7gnRP", "descripcion": "Un Dios de la Destrucci├│n de aspecto felino, orgulloso de la perfecci├│n de su universo.", "habilidades": "Destrucci├│n calculada y milim├®trica. Su precisi├│n es considerada la mejor entre los dioses." }, "angelInfo": { "nombre": "Martinu", "imagen": "https://lh3.googleusercontent.com/d/127gejS-9GrLQT2aY4HftcgvOG7E97WGk", "descripcion": "├üngel de modales refinados y aspecto elegante.", "funcion": "Mantener el est├índar de perfecci├│n del universo y asistir a Giin en sus deberes destructivos." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 12", "imagen": "https://lh3.googleusercontent.com/d/1StOdkm_J_Du4qsyvs1omX_fyxdNkokoQ", "descripcion": "Supremo Kaioshin de sabidur├¡a inigualable.", "rol": "Mantener la creaci├│n perfecta y el equilibrio supremo del universo." } ] }
    ],
    "biomas": [
        { "nombre": "Corporaci├│n C├ípsula", "clima": "Urbano", "descripcion": "Centro tecnol├│gico de West City." },
        { "nombre": "Monta├▒a Paozu", "clima": "Monta├▒oso", "descripcion": "Hogar de la infancia de Goku." },
        { "nombre": "Planeta de Beerus", "clima": "Divino", "descripcion": "Lugar de entrenamiento de Goku y Vegeta." }
    ]
};

var MUSIC_DATA = [
    {
        "id": 1,
        "titulo": "Cha-La Head-Cha-La",
        "artista": "Ricardo Silva",
        "categoria": "Opening",
        "cover": "https://img.youtube.com/vi/sfKi8c-UoP0/mqdefault.jpg",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        "id": 2,
        "titulo": "Mi Coraz├│n Encantado",
        "artista": "Aar├│n Montalvo",
        "categoria": "Opening",
        "cover": "https://img.youtube.com/vi/k5n1d88Cq1w/mqdefault.jpg",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        "id": 3,
        "titulo": "Limit Break x Survivor",
        "artista": "Adri├ín Barba",
        "categoria": "Opening",
        "cover": "https://img.youtube.com/vi/3147Q9S-l08/mqdefault.jpg",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        "id": 4,
        "titulo": "Romance te Puedo Dar",
        "artista": "Marisa De Lille",
        "categoria": "Ending",
        "cover": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        "id": 5,
        "titulo": "├üngeles Fuimos",
        "artista": "Adri├ín Barba",
        "categoria": "Ending",
        "cover": "https://lh3.googleusercontent.com/d/1sk_RHuD7tLc0junztslnag4CgCisW0hy",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
        "id": 6,
        "titulo": "Goku Black Theme (Orchestral)",
        "artista": "Norihito Sumitomo",
        "categoria": "OST",
        "cover": "https://via.placeholder.com/200x200/111/ff5e00?text=OST",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        "id": 7,
        "titulo": "Ultimate Battle (Goku vs Jiren)",
        "artista": "Akira Kushida",
        "categoria": "Batallas",
        "cover": "https://img.youtube.com/vi/sF7z27Jz5hQ/mqdefault.jpg",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        "id": 8,
        "titulo": "Super Saiyan 3 Theme",
        "artista": "Bruce Faulconer",
        "categoria": "Transformaciones",
        "cover": "https://via.placeholder.com/200x200/111/ff5e00?text=SSJ3+Theme",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    }
];

const api = {
    getCharacters: () => Promise.resolve(window.PERSONAJES_DATA),
    getMedia: () => Promise.resolve(window.MEDIA_DATA),
    getWorld: () => Promise.resolve(window.WORLD_DATA),
    getMusic: () => Promise.resolve(window.MUSIC_DATA)
};

window.api = api;
