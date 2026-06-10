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
    },
    {
        "id": "krillin_clasico",
        "Personaje": "Krillin (Cl\u00E1sico)",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela Tortuga",
        "estado": "Vivo",
        "edad": "13",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 14, "titulo": "El rival de Goku: Krilin" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 25, "titulo": "Los rivales del Torneo" },
        "historia": "Krillin lleg\u00F3 al Templo de Kame Sen'nin para convertirse en disc\u00EDpulo del Maestro Roshi. Aunque al principio era un rival para Goku, pronto se convirti\u00F3 en su mejor amigo. Entren\u00F3 intensamente y particip\u00F3 en varios Torneos de Artes Marciales, demostrando un gran valor a pesar de su baja estatura. Su amistad con Goku es una de las m\u00E1s s\u00F3lidas de la serie.",
        "descripcion": "El mejor amigo de Goku y compa\u00F1ero de entrenamiento. Un guerrero valiente y leal de baja estatura pero gran coraz\u00F3n.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Dac2MY9i0YoCJRdYmgiA2WYxowgNEaty"
        ],
        "stats": { "fuerza": 20, "velocidad": 35, "ki": 15, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "roshi_clasico",
        "Personaje": "Roshi (Cl\u00E1sico)",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela Tortuga",
        "estado": "Vivo",
        "edad": "300+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 3, "titulo": "Kame Sen'nin, el Maestro Tortuga" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 3, "titulo": "Kame Sen'nin" },
        "historia": "El legendario Maestro Roshi, tambi\u00E9n conocido como Kame Sen'nin, es el creador de la t\u00E9cnica Kamehameha. A pesar de su avanzada edad y sus costumbres pervertidas, es uno de los artistas marciales m\u00E1s poderosos de la Tierra. Entren\u00F3 a Goku y Krillin, as\u00ED como a muchos otros disc\u00EDpulos a lo largo de su larga vida. Particip\u00F3 en varios Torneos de Artes Marciales bajo el disfraz de Jackie Chun.",
        "descripcion": "El Sabio Tortuga, maestro de artes marciales y creador de la Kamehameha. Un anciano pervertido pero incre\u00EDblemente sabio y poderoso.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1RaeCfol0HmZ_MisrTy-E6nLuWKnvc2Df",
            "https://lh3.googleusercontent.com/d/1eV4i05-63NEvke-gpKc7jnY1pEUM-bzS",
            "https://lh3.googleusercontent.com/d/1AkdJATfrGVAHlf7NnHhAX26BB_iQDK3y",
            "https://lh3.googleusercontent.com/d/1FBkWD8Es7H0jzQbYxYjJwTUEddc6Zl_3"
        ],
        "stats": { "fuerza": 40, "velocidad": 30, "ki": 50, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "yamcha_clasico",
        "Personaje": "Yamcha (Cl\u00E1sico)",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela Tortuga",
        "estado": "Vivo",
        "edad": "16",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 4, "titulo": "El desertor Yamcha" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 7, "titulo": "Yamcha y Puar" },
        "historia": "Yamcha comenz\u00F3 como un bandido del desierto que asaltaba a los viajeros. Despu\u00E9s de conocer a Goku y Bulma, cambi\u00F3 su camino y se convirti\u00F3 en un guerrero disciplinado. Entren\u00F3 bajo la tutela del Maestro Roshi y particip\u00F3 en varios Torneos de Artes Marciales. Aunque su miedo a las mujeres le caus\u00F3 problemas al principio, desarroll\u00F3 un gran v\u00EDnculo con todo el grupo.",
        "descripcion": "Ex-bandido del desierto convertido en guerrero. Leal compa\u00F1ero de Goku y experto en la t\u00E9cnica R\u00F3 Ah Ken.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1azwhOWMK2eiiyU4PBHtLz4hZfLU01jFI",
            "https://lh3.googleusercontent.com/d/1yUK_OQbDL-jjM9wN6rFLlgB4m0OIq1gO"
        ],
        "stats": { "fuerza": 22, "velocidad": 30, "ki": 15, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "tien_clasico",
        "Personaje": "Tien Shinhan (Cl\u00E1sico)",
        "Raza": "Humano (descendiente de los Tres Ojos)",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela del Cuervo / Guerrero Z",
        "estado": "Vivo",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El disc\u00EDpulo del Maestro Shen" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "El hombre de tres ojos" },
        "historia": "Tien Shinhan fue entrenado por el Maestro Shen en la Escuela del Cuervo, rival de la Escuela Tortuga. Inicialmente un antagonista, se redimi\u00F3 despu\u00E9s de su derrota en el 22\u00BA Torneo de Artes Marciales. Es un guerrero extremadamente disciplinado y uno de los humanos m\u00E1s poderosos, capaz de usar el Cuarto Ojo y la T\u00E9cnica del Taiyoken.",
        "descripcion": "El guerrero de tres ojos. Originalmente rival de Goku, luego se convierte en un aliado leal y uno de los humanos m\u00E1s fuertes.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1h3WtpdJ7UXzNq1PgWHdfCfiZ0_uZTEYC"
        ],
        "stats": { "fuerza": 30, "velocidad": 40, "ki": 25, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "chiaotzu_clasico",
        "Personaje": "Chiaotzu (Cl\u00E1sico)",
        "Raza": "Humano (Mutante)",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela del Cuervo",
        "estado": "Vivo",
        "edad": "17",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El disc\u00EDpulo del Maestro Shen" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "El hombre de tres ojos" },
        "historia": "Chiaotzu es un joven de apariencia similar a un payaso, compa\u00F1ero inseparable de Tien Shinhan. Ambos fueron disc\u00EDpulos del Maestro Shen. A pesar de su aspecto d\u00E9bil, posee poderes ps\u00EDquicos como la telequinesis y la capacidad de volar. Su lealtad a Tien es inquebrantable, y siempre lo sigue a cualquier lugar.",
        "descripcion": "El compa\u00F1ero de Tien Shinhan. Un joven con poderes ps\u00EDquicos y una lealtad inquebrantable hacia su amigo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ttAdtS6BNS6WnURTNuhj3ESTq-aoZFQ-"
        ],
        "stats": { "fuerza": 10, "velocidad": 25, "ki": 20, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "piccolo_clasico",
        "Personaje": "Piccolo (Cl\u00E1sico)",
        "Raza": "Namekiano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra (hijo de Piccolo Daima\u014D)",
        "universo": "7",
        "afiliaciones": "Ninguna / Guerrero Z",
        "estado": "Vivo",
        "edad": "3",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 123, "titulo": "El hijo de Piccolo Daima\u014D" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 161, "titulo": "El hijo de Piccolo" },
        "historia": "Piccolo es el hijo y renacimiento de Piccolo Daima\u014D, creado para vengar la derrota de su padre a manos de Goku. Inicialmente su enemigo mortal, particip\u00F3 en el 23\u00BA Torneo de Artes Marciales donde luch\u00F3 contra Goku. Con el tiempo, y ante amenazas mayores como los Saiyans, Piccolo dej\u00F3 atr\u00E1s su odio y se convirti\u00F3 en uno de los guerreros m\u00E1s importantes de la Tierra.",
        "descripcion": "El hijo de Piccolo Daima\u014D, creado para vengar a su padre. De enemigo a aliado, es uno de los Namekianos m\u00E1s poderosos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1HVe-_KQwc5QljHiv4vPmWkRjlGsfilRc",
            "https://lh3.googleusercontent.com/d/1hpbehTnFklllucoWlCep496ZO667jxrl",
            "https://lh3.googleusercontent.com/d/16nPo4kN94w1FCUZhHMh21GeHv3RmUxzV",
            "https://lh3.googleusercontent.com/d/1Cnx3AXgtnWgFVdhjJYugYKh-iEVbeQMk"
        ],
        "stats": { "fuerza": 45, "velocidad": 40, "ki": 50, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "chichi_clasica",
        "Personaje": "Chi-Chi (Cl\u00E1sica)",
        "Raza": "Humana",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Son",
        "estado": "Viva",
        "edad": "12",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 7, "titulo": "Chi-Chi, la chica del monte" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 11, "titulo": "Chi-Chi" },
        "historia": "Chi-Chi es la hija del Rey Ox-King. Conoci\u00F3 a Goku cuando ambos eran ni\u00F1os y le prometi\u00F3 matrimonio. A\u00F1os despu\u00E9s, lo busc\u00F3 y se cas\u00F3 con \u00E9l despu\u00E9s del 23\u00BA Torneo de Artes Marciales. Es una madre estricta pero amorosa, y una esposa dedicada. Aunque desaprueba las peleas de su familia, ha demostrado ser una mujer fuerte y decidida.",
        "descripcion": "La esposa de Goku y madre de Gohan y Goten. Una mujer fuerte y decidida que mantiene el orden en la familia Son.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1adjo6LZa2uARIW7vbpfP9dgpyK4R5tMS",
            "https://lh3.googleusercontent.com/d/19VvhvxldlMtVsCoupuRroI9MiS7xBYGJ"
        ],
        "stats": { "fuerza": 15, "velocidad": 18, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "king_piccolo",
        "Personaje": "King Piccolo",
        "Raza": "Namekiano (Demonio)",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Muerto",
        "edad": "300+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 102, "titulo": "La amenaza de Piccolo Daima\u014D" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 137, "titulo": "Piccolo Daima\u014D" },
        "historia": "Piccolo Daima\u014D, tambi\u00E9n conocido como King Piccolo, fue la contraparte maligna del Namekiano Kami. Tras ser sellado por el Maestro Mutaito hace 300 a\u00F1os, escap\u00F3 y sembr\u00F3 el caos en la Tierra. Su objetivo era conquistar el mundo y eliminar a todos los artistas marciales. Goku finalmente lo derrot\u00F3 con un poderoso ataque traspasando su cuerpo.",
        "descripcion": "El terror demon\u00EDaco que aterroriz\u00F3 la Tierra. La contraparte maligna de Kami y creador de los Namekianos demon\u00EDacos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1YHkL9cx_mnNoGWEpm2XUTGFrQXrzfVkH",
            "https://lh3.googleusercontent.com/d/1nQCLVfA8LiR8d7JY52iA5Wv10FNAAS3w"
        ],
        "stats": { "fuerza": 55, "velocidad": 35, "ki": 60, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "tao_pai_pai",
        "Personaje": "Tao Pai Pai (Cl\u00E1sico)",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Vivo (cyborg)",
        "edad": "50+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 58, "titulo": "El asesino Tao Pai Pai" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 85, "titulo": "Tao Pai Pai" },
        "historia": "Tao Pai Pai era un asesino profesional y uno de los guerreros m\u00E1s peligrosos del mundo. Fue contratado por el Ej\u00E9rcito de la Patrulla Roja para eliminar a Goku y a quienes interfirieran con sus planes. Su habilidad para lanzar pilares de piedra y viajar sobre ellos lo hicieron legendario. Tras ser derrotado por Goku, sobrevivi\u00F3 y se convirti\u00F3 en un cyborg, buscando venganza.",
        "descripcion": "El asesino profesional del Ej\u00E9rcito de la Patrulla Roja. Un guerrero letal que lanza pilares de piedra como medio de transporte.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/13NscFBZ6OCk-WvRxybNaJwgmwJcglyy5",
            "https://lh3.googleusercontent.com/d/1ck9cwq-c21v0XpGB3CzPDZj6kj53IVRZ"
        ],
        "stats": { "fuerza": 35, "velocidad": 50, "ki": 20, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "pilaf_shu_mai",
        "Personaje": "Pilaf, Shu y Mai",
        "Raza": "Demonio (Pilaf) / Humanos (Shu y Mai)",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Equipo Pilaf",
        "estado": "Vivos",
        "edad": "Variable",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 2, "titulo": "Las Esferas del Drag\u00F3n" },
        "historia": "El Emperador Pilaf es un peque\u00F1o ser de tez azul que sue\u00F1a con conquistar el mundo. Sus leales seguidores, Shu (un ninja) y Mai (una bella mujer), lo ayudan en sus planes. Aunque siempre fracasan en sus intentos por apoderarse de las Esferas del Drag\u00F3n, reaparecen en m\u00FAltiples ocasiones, demostrando una perseverancia c\u00F3mica pero inquebrantable.",
        "descripcion": "El tr\u00EDo c\u00F3mico que siempre intenta conquistar el mundo. A pesar de sus constantes fracasos, nunca se rinden.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1h5Q4FxkI3y3DkqIMdlcVupsBi3qdUXL5"
        ],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 5, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "shenron_clasico",
        "Personaje": "Shenron (Cl\u00E1sico)",
        "Raza": "Drag\u00F3n M\u00E1gico",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Esferas del Drag\u00F3n",
        "estado": "Activo",
        "edad": "Inmortal",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 2, "titulo": "Shenlong aparece" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 3, "titulo": "Shenlong" },
        "historia": "Shenron es el drag\u00F3n m\u00E1gico que aparece al reunir las siete Esferas del Drag\u00F3n de la Tierra. Fue creado por Kami hace siglos. Concede un deseo a quien lo invoca, pero no puede matar a alguien m\u00E1s poderoso que su creador. Es una de las figuras m\u00E1s ic\u00F3nicas de la serie, apareciendo en m\u00FAltiples momentos cruciales de la historia.",
        "descripcion": "El drag\u00F3n m\u00E1gico que concede deseos al reunir las siete Esferas del Drag\u00F3n. Creado por Kami, guardi\u00E1n de la Tierra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1JHaljQCZzlT81PfX9QIq8cQZhQo1PMee"
        ],
        "stats": { "fuerza": 80, "velocidad": 10, "ki": 100, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "kami_clasico",
        "Personaje": "Kami (Cl\u00E1sico)",
        "Raza": "Namekiano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dios de la Tierra",
        "estado": "Fusionado con Piccolo",
        "edad": "300+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 123, "titulo": "El Dios de la Tierra" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 161, "titulo": "Kami" },
        "historia": "Kami es el Dios de la Tierra, un Namekiano que lleg\u00F3 al planeta hace siglos. Originalmente era un ser maligno, pero expuls\u00F3 esa maldad de su cuerpo, creando sin querer a Piccolo Daima\u014D. Como deidad, cre\u00F3 las Esferas del Drag\u00F3n y observ\u00F3 a la humanidad desde su palacio en las nubes. Entren\u00F3 a Mr. Popo y supervis\u00F3 a los eventos del mundo.",
        "descripcion": "El Dios de la Tierra, creador de las Esferas del Drag\u00F3n. Un Namekiano sabio que vela por el destino del planeta.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/19j86pGjw2QimIJswFGI30OUYTqILQ1w1"
        ],
        "stats": { "fuerza": 30, "velocidad": 20, "ki": 80, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "mr_popo_clasico",
        "Personaje": "Mr. Popo (Cl\u00E1sico)",
        "Raza": "Genio",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guardi\u00E1n del Palacio de Kami",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 123, "titulo": "El Dios de la Tierra" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 161, "titulo": "Kami" },
        "historia": "Mr. Popo es el leal asistente de Kami, encargado del mantenimiento del Palacio de Kami y de la Habitaci\u00F3n del Tiempo. Es un ser de apariencia amable pero de un poder inmenso. Durante siglos ha servido fielmente al Dios de la Tierra y ha ayudado a entrenar a varios guerreros, incluyendo a Goku y a sus amigos.",
        "descripcion": "El leal asistente de Kami. Un ser aparentemente amable pero de un poder insospechado.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1odjss7Ru5NH96Aj0vuKL0sPzaR-tuHX0"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 60, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "korin_clasico",
        "Personaje": "Korin (Cl\u00E1sico)",
        "Raza": "Gato parlante",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guardi\u00E1n de la Torre de Korin",
        "estado": "Vivo",
        "edad": "800+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 50, "titulo": "La Torre de Korin" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 69, "titulo": "La Torre de Korin" },
        "historia": "Korin es un gato blanco parlante que vive en lo alto de la Torre Sagrada que lleva su nombre. Fue el maestro del Maestro Roshi y m\u00E1s tarde entren\u00F3 a Goku. Es conocido por su sabidur\u00EDa y por tener las legendarias Semillas Senzu, que restauran la energ\u00EDa y curan heridas. Ha sido un aliado invaluable para los Guerreros Z durante generaciones.",
        "descripcion": "El sabio gato guardi\u00E1n de la Torre Sagrada. Posee las milagrosas Semillas Senzu y es mentor de generaciones de guerreros.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1iR7pDP7sVjlYib9hvqJ3ISVw3f3TTJL0"
        ],
        "stats": { "fuerza": 15, "velocidad": 25, "ki": 30, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "master_mutaito",
        "Personaje": "Master Mutaito",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela Tortuga (fundador)",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 134, "titulo": "El pasado de Roshi" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 140, "titulo": "El Maestro Mutaito" },
        "historia": "Maestro Mutaito fue el legendario maestro que entren\u00F3 al Maestro Roshi y al Maestro Shen. Hace 300 a\u00F1os, logr\u00F3 sellar a Piccolo Daima\u014D utilizando el Maf\u016Bba, una t\u00E9cnica de sacrificio que atrapa al enemigo en un recipiente. Dio su vida para salvar a la humanidad de la amenaza del Namekiano demon\u00EDaco.",
        "descripcion": "El legendario maestro de artes marciales que sell\u00F3 a Piccolo Daima\u014D con la t\u00E9cnica Maf\u016Bba.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1SbHy8o5cnbPiDo4Vz-rlfYfyWF34TiM7"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 40, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "master_shen",
        "Personaje": "Master Shen",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela del Cuervo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El disc\u00EDpulo del Maestro Shen" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "El hombre de tres ojos" },
        "historia": "Maestro Shen, tambi\u00E9n conocido como el Maestro del Cuervo, fue el fundador de la Escuela del Cuervo y rival del Maestro Roshi. Entren\u00F3 a Tien Shinhan y Chiaotzu, inculc\u00E1ndoles una filosof\u00EDa marcial agresiva y sin escr\u00FApulos. A diferencia de Roshi, Shen valoraba la victoria por encima de todo, incluso si significaba recurrir a m\u00E9todos deshonestos.",
        "descripcion": "El fundador de la Escuela del Cuervo y rival del Maestro Roshi. Un maestro severo que prioriza la victoria sobre la honorabilidad.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ntv032NR8B1QhMCjiiYgmNSZt1L61MTH"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 35, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "commander_red",
        "Personaje": "Commander Red",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerto",
        "edad": "60+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 56, "titulo": "El Cuartel General de la Patrulla Roja" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 82, "titulo": "El Cuartel General" },
        "historia": "Comandante Red era el l\u00EDder del Ej\u00E9rcito de la Patrulla Roja, una organizaci\u00F3n militar que buscaba las Esferas del Drag\u00F3n para dominar el mundo. A pesar de su apariencia imponente, era un hombre de baja estatura que usaba un casco para aparentar ser m\u00E1s alto. Su obsesi\u00F3n por las Esferas lo llev\u00F3 a enfrentarse a Goku, quien eventualmente destruy\u00F3 su base.",
        "descripcion": "El l\u00EDder del Ej\u00E9rcito de la Patrulla Roja. Un hombre obsesionado con el poder y la altura.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1LmkJfami8iNfll2jvlOY1HRB3GZoo71z"
        ],
        "stats": { "fuerza": 10, "velocidad": 5, "ki": 2, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "general_black",
        "Personaje": "General Black",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerto",
        "edad": "40+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 56, "titulo": "El Cuartel General de la Patrulla Roja" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 82, "titulo": "El Cuartel General" },
        "historia": "El General Black era el segundo al mando del Ej\u00E9rcito de la Patrulla Roja y el estratega principal de la organizaci\u00F3n. Era un hombre cruel y despiadado que no dudaba en eliminar a sus subordinados si fallaban. Tras la muerte del Comandante Red, intent\u00F3 tomar el control del ej\u00E9rcito, pero fue derrotado por Goku.",
        "descripcion": "El despiadado segundo al mando del Ej\u00E9rcito de la Patrulla Roja. Un estratega cruel y ambicioso.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1GCA4HH8DvjCf8skSffdy7-kvs91_rE1e"
        ],
        "stats": { "fuerza": 18, "velocidad": 15, "ki": 10, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "general_blue",
        "Personaje": "General Blue",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerto",
        "edad": "35+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 65, "titulo": "El General Blue" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 88, "titulo": "El General Blue" },
        "historia": "El General Blue era un oficial de alto rango del Ej\u00E9rcito de la Patrulla Roja, conocido por su belleza y su poder ps\u00EDquico. Pose\u00EDa la habilidad de paralizar a sus oponentes con su mirada. Fue enviado a recuperar las Esferas del Drag\u00F3n, enfrent\u00E1ndose a Goku y Krillin en m\u00FAltiples ocasiones. Su vanidad y arrogancia fueron su perdici\u00F3n.",
        "descripcion": "Oficial de la Patrulla Roja con poderes ps\u00EDquicos. Capaz de paralizar a sus enemigos con la mirada.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1SexTGnUCnIdj5P8TNB85kzeQD8NlwAQf",
            "https://lh3.googleusercontent.com/d/1cMkKPuOtIo3eM3eDGIdqrzaRe575J1Pu"
        ],
        "stats": { "fuerza": 22, "velocidad": 25, "ki": 30, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "android_8_clasico",
        "Personaje": "Android 8 (Cl\u00E1sico)",
        "Raza": "Androide",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja (ex)",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 60, "titulo": "El Androide 8" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 86, "titulo": "El Androide 8" },
        "historia": "El Androide 8, tambi\u00E9n conocido como Eighter o Hachibei, fue creado por el Dr. Gero del Ej\u00E9rcito de la Patrulla Roja. A diferencia de otros androides, pose\u00EDa una personalidad amable y pac\u00EDfica, neg\u00E1ndose a luchar. Se hizo amigo de Goku cuando este invadi\u00F3 la base de la Patrulla Roja y lo ayud\u00F3 a escapar. Es conocido por su enorme fuerza f\u00EDsica y su coraz\u00F3n bondadoso.",
        "descripcion": "El androide pacifista de la Patrulla Roja. Un ser de enorme fuerza pero coraz\u00F3n bondadoso que se hizo amigo de Goku.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mWMPSPLogtHlRYuFdu62z4HdJFgUtxzM",
            "https://lh3.googleusercontent.com/d/1pmNlIAdS0udwvmNbXuggaXBApjvMYnBr"
        ],
        "stats": { "fuerza": 50, "velocidad": 10, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "grandpa_gohan",
        "Personaje": "Grandpa Gohan",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Son",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "El abuelo adoptivo de Goku, un anciano artista marcial que encontr\u00F3 al beb\u00E9 Saiyan en el bosque y lo cri\u00F3 como su nieto. Le ense\u00F1\u00F3 sus primeras t\u00E9cnicas marciales y le inculc\u00F3 valores como la bondad y el respeto. Falleci\u00F3 accidentalmente cuando Goku, transformado en Ozzaru, lo pis\u00F3 sin querer al ver la luna llena. Su esp\u00EDritu aparece ocasionalmente para guiar a Goku.",
        "descripcion": "El abuelo adoptivo de Goku. Un sabio anciano que encontr\u00F3 y cri\u00F3 al beb\u00E9 Saiyan, ense\u00F1\u00E1ndole el camino del guerrero.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/120XjQgKHn9_Tvlq6yTEguP7vKvhswcO_",
            "https://lh3.googleusercontent.com/d/11IfX-nUknQjbaIY8Skl4pkzV_DyaqxVb"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 10, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "launch",
        "Personaje": "Launch",
        "Raza": "Humana",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela Tortuga",
        "estado": "Viva",
        "edad": "20",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 10, "titulo": "La chica de los dos caracteres" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 17, "titulo": "Lunch" },
        "historia": "Launch es una mujer con un extra\u00F1o trastorno de personalidad dividida: cuando estornuda, cambia entre una chica dulce y amable de cabello azul y una violenta delincuente de cabello rubio. Ambas personalidades se enamoraron del Maestro Roshi y vivieron en la Escuela Tortuga por un tiempo. Es un personaje peculiar que desaparece gradualmente de la serie.",
        "descripcion": "La mujer de dos personalidades. Al estornudar cambia de dulce ama de casa a violenta pistolera.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1h-A3NbNI0MwFYHp_fqYJnB02JxbU_h0L",
            "https://lh3.googleusercontent.com/d/1iOgOh1eZnEl6w3TgKko4w6PDvJ8JRMbo"
        ],
        "stats": { "fuerza": 10, "velocidad": 15, "ki": 2, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "man_wolf",
        "Personaje": "Man-Wolf",
        "Raza": "Humano lic\u00E1ntropo",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 27, "titulo": "El hombre lobo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 42, "titulo": "El Hombre Lobo" },
        "historia": "Man-Wolf es un hombre maldito que se transforma en una criatura lobuna. Fue uno de los participantes en el 21\u00BA Torneo de Artes Marciales. Aunque su forma de lobo le otorgaba una fuerza y ferocidad notables, fue derrotado por Goku en el torneo. Es un personaje menor pero memorable del arco del Torneo.",
        "descripcion": "Un luchador maldito que se transforma en hombre lobo. Particip\u00F3 en el 21\u00BA Torneo de Artes Marciales.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Ku90IqTJ8yqdpCbWFqXs76VSojigbL9e",
            "https://lh3.googleusercontent.com/d/1sTPZccX5_rXr8xITFJsBLhcLgf8ndk-X"
        ],
        "stats": { "fuerza": 18, "velocidad": 20, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "general_white",
        "Personaje": "General White",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerto",
        "edad": "50+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 58, "titulo": "El asesino Tao Pai Pai" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 84, "titulo": "La base del norte" },
        "historia": "El General White era el comandante de la Base del Norte del Ej\u00E9rcito de la Patrulla Roja. Era un hombre corpulento y de mal genio que supervisaba la b\u00FAsqueda de las Esferas del Drag\u00F3n en el \u00E1rea. Fue derrotado por Goku cuando este infiltr\u00F3 la base, demostrando que su fuerza no estaba a la altura de su arrogancia.",
        "descripcion": "Comandante de la Base Norte de la Patrulla Roja. Un oficial corpulento y arrogante.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1rxqmmZubHF5qS5rLjQ7BnqJLOmtBPUK5"
        ],
        "stats": { "fuerza": 15, "velocidad": 10, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "colonel_silver",
        "Personaje": "Colonel Silver",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerto",
        "edad": "40+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 59, "titulo": "La base del norte" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 84, "titulo": "La base del norte" },
        "historia": "El Coronel Silver era un oficial del Ej\u00E9rcito de la Patrulla Roja que custodiaba la entrada de la Base del Norte. Se enfrent\u00F3 a Goku cuando este intent\u00F3 infiltrarse, pero fue derrotado r\u00E1pidamente. Su papel en la organizaci\u00F3n era menor, siendo uno de los muchos oficiales que subestimaron el poder de Goku.",
        "descripcion": "Oficial de la Patrulla Roja encargado de la seguridad de la Base del Norte. Derrotado por Goku.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tNq77EOvkehwZ3dLyrSWyazng8C6y8rU"
        ],
        "stats": { "fuerza": 12, "velocidad": 12, "ki": 3, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "colonel_violet",
        "Personaje": "Colonel Violet",
        "Raza": "Humana",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerta",
        "edad": "30+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 59, "titulo": "La base del norte" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 84, "titulo": "La base del norte" },
        "historia": "La Coronel Violet era una oficial femenina del Ej\u00E9rcito de la Patrulla Roja. Inteligente y astuta, manejaba a los soldados de la Base del Norte con mano firme. Aunque no era una luchadora destacada, su capacidad estrat\u00E9gica la convert\u00EDa en un miembro valioso de la organizaci\u00F3n.",
        "descripcion": "Oficial femenina de la Patrulla Roja. Astuta estratega de la Base del Norte.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/199u_6O5nkgO4oSXovWbAcIeIJWuwT9Wc"
        ],
        "stats": { "fuerza": 8, "velocidad": 12, "ki": 3, "tecnica": 18 },
        "transformaciones": []
    },
    {
        "id": "ninja_murasaki",
        "Personaje": "Ninja Murasaki",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Muerto",
        "edad": "35+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 59, "titulo": "La base del norte" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 84, "titulo": "La base del norte" },
        "historia": "Ninja Murasaki era un experto ninja contratado por el Ej\u00E9rcito de la Patrulla Roja para detener a Goku. Utilizaba t\u00E9cnicas ninja tradicionales como clones, shurikens y sigilo. A pesar de su habilidad, fue derrotado por Goku gracias a su astucia y rapidez. Su nombre significa 'P\u00FArpura' en japon\u00E9s, color de su vestimenta.",
        "descripcion": "Ninja experto contratado por la Patrulla Roja. Maestro de clones y t\u00E9cnicas de sigilo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1rdwmiuQ1JRB8WShFaVblH8QWyjuoga6X"
        ],
        "stats": { "fuerza": 15, "velocidad": 30, "ki": 8, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "major_metallitron",
        "Personaje": "Major Metallitron",
        "Raza": "Robot",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 60, "titulo": "El Androide 8" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 86, "titulo": "El Androide 8" },
        "historia": "Major Metallitron era un robot gigante de combate dise\u00F1ado por el Ej\u00E9rcito de la Patrulla Roja. Equipado con m\u00FAltiples armas y una armadura resistente, fue enviado para eliminar a Goku. A pesar de su apariencia imponente y su arsenal, fue destruido por Goku con ayuda del Androide 8.",
        "descripcion": "Robot gigante de combate de la Patrulla Roja. Un arsenal andante de destrucci\u00F3n mec\u00E1nica.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1XvAET8hO1sQM9Rvkl9sdUuvfSzYBuLde"
        ],
        "stats": { "fuerza": 40, "velocidad": 5, "ki": 0, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "buyon",
        "Personaje": "Buyon",
        "Raza": "Monstruo",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ej\u00E9rcito de la Patrulla Roja",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 62, "titulo": "El monstruo de la isla" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 87, "titulo": "Buyon" },
        "historia": "Buyon era un monstruo de aspecto gelatinoso utilizado por el Ej\u00E9rcito de la Patrulla Roja como guardian de su base en la isla. Era un ser blando y el\u00E1stico que pod\u00EDa absorber ataques f\u00EDsicos y regenerarse. Goku tuvo que usar su astucia para derrotarlo, ya que los golpes directos no funcionaban contra su cuerpo maleable.",
        "descripcion": "Monstruo gelatinoso guardi\u00E1n de la Patrulla Roja. Su cuerpo el\u00E1stico absorbe ataques f\u00EDsicos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1wMb1zj9lNmMGKzKTLyMZ8hYQQhuFv0IH"
        ],
        "stats": { "fuerza": 35, "velocidad": 5, "ki": 10, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "captain_dark",
        "Personaje": "Capit\u00E1n Dark",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Piratas",
        "estado": "Muerto",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 37, "titulo": "El barco pirata" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 53, "titulo": "El barco pirata" },
        "historia": "El Capit\u00E1n Dark era el l\u00EDder de un grupo de piratas que encontraron un mapa del tesoro de una antigua civilizaci\u00F3n. Su tripulaci\u00F3n se enfrent\u00F3 a Goku y sus amigos cuando tambi\u00E9n buscaban el tesoro. Era un hombre cruel y despiadado que no dudaba en usar cualquier medio para conseguir su objetivo.",
        "descripcion": "L\u00EDder pirata que buscaba un tesoro antiguo. Rival de Goku en la b\u00FAsqueda del tesoro submarino.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Wc1uNjXs2llvanqXCCGafs7duxpNdO57"
        ],
        "stats": { "fuerza": 14, "velocidad": 10, "ki": 2, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "captain_yellow",
        "Personaje": "Capit\u00E1n Yellow",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Piratas",
        "estado": "Muerto",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 37, "titulo": "El barco pirata" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 53, "titulo": "El barco pirata" },
        "historia": "El Capit\u00E1n Yellow era un miembro de la banda pirata del Capit\u00E1n Dark. Ayud\u00F3 en la b\u00FAsqueda del tesoro pirata, enfrent\u00E1ndose a Goku y sus compa\u00F1eros. Era un hombre astuto que prefer\u00EDa usar trampas y estrategias antes que el combate directo.",
        "descripcion": "Pirata miembro de la banda del Capit\u00E1n Dark. Astuto y tramposo en la b\u00FAsqueda del tesoro.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1MXElpUrPezonWtjDFrCRWu0fsjNFX59M"
        ],
        "stats": { "fuerza": 10, "velocidad": 12, "ki": 2, "tecnica": 12 },
        "transformaciones": []
    },
    {
        "id": "pirate_robot",
        "Personaje": "Robot Pirata",
        "Raza": "Robot",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guardian del tesoro",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 37, "titulo": "El barco pirata" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 53, "titulo": "El barco pirata" },
        "historia": "El Robot Pirata era un guardi\u00E1n mec\u00E1nico dise\u00F1ado para proteger un tesoro pirata en el fondo del mar. Equipado con ca\u00F1ones y brazos mec\u00E1nicos, atacaba a cualquier intruso que se acercara al tesoro. Fue destruido por Goku durante su b\u00FAsqueda de las Esferas del Drag\u00F3n.",
        "descripcion": "Guardi\u00E1n rob\u00F3tico de un tesoro pirata submarino. Equipado con armas y brazos mec\u00E1nicos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1EnuDfIcwIHUoF7i4abbvoJJDhnboE5DL"
        ],
        "stats": { "fuerza": 30, "velocidad": 5, "ki": 0, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "fortuneteller_baba",
        "Personaje": "Fortuneteller Baba",
        "Raza": "Humana",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Vidente independiente",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 78, "titulo": "La adivina Uranai Baba" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 106, "titulo": "Uranai Baba" },
        "historia": "Uranai Baba es una poderosa adivina hermana del Maestro Roshi. Puede localizar cualquier objeto o persona y tiene la habilidad de convocar almas del otro mundo por un d\u00EDa. Goku recurri\u00F3 a ella para encontrar la \u00FAltima Esfera del Drag\u00F3n, teniendo que enfrentarse a sus cinco guerreros misteriosos en un torneo para ganar sus servicios.",
        "descripcion": "Poderosa adivina hermana de Roshi. Capaz de localizar objetos y convocar almas del m\u00E1s all\u00E1.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1-APEZFGLUQI22kGNYsLCqgVT0NwX2ClY"
        ],
        "stats": { "fuerza": 5, "velocidad": 3, "ki": 60, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "devil_man",
        "Personaje": "Devil Man",
        "Raza": "Demonio",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerrero de Uranai Baba",
        "estado": "Desconocido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 79, "titulo": "El hombre demonio" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 108, "titulo": "Devil Man" },
        "historia": "Devil Man era el primer guerrero que Goku enfrent\u00F3 en el torneo de Uranai Baba. Pose\u00EDa un ataque especial llamado 'Lanza del Rayo del Mal' o 'Devil Beam', que multiplicaba el poder destructivo seg\u00FAn la maldad en el coraz\u00F3n del oponente. Como Goku no ten\u00EDa maldad en su coraz\u00F3n, el ataque no le hizo efecto.",
        "descripcion": "Guerrero demon\u00EDaco de Uranai Baba. Su ataque especial se fortalece con la maldad del oponente.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1KR_zMYOujGnUCnOdc_4vA-fgpz7j0C3w"
        ],
        "stats": { "fuerza": 20, "velocidad": 25, "ki": 30, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "bandages_mummy",
        "Personaje": "Bandages the Mummy",
        "Raza": "No-muerto",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerrero de Uranai Baba",
        "estado": "Desconocido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 79, "titulo": "El hombre demonio" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 108, "titulo": "Devil Man" },
        "historia": "Bandages the Mummy era un guerrero momia que luch\u00F3 en el torneo de Uranai Baba. Su cuerpo estaba completamente vendado y pose\u00EDa una resistencia sobrenatural. Enfrent\u00F3 a Krillin, quien logr\u00F3 derrotarlo a pesar de su apariencia intimidante y su capacidad para regenerarse.",
        "descripcion": "Guerrero momia al servicio de Uranai Baba. Posee resistencia y regeneraci\u00F3n sobrenatural.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1oYeWOPx5hePEYmBkQ6dewNmHSoMJHy3U"
        ],
        "stats": { "fuerza": 18, "velocidad": 10, "ki": 5, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "fangs_vampire",
        "Personaje": "Fangs the Vampire",
        "Raza": "Vampiro",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerrero de Uranai Baba",
        "estado": "Desconocido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 79, "titulo": "El hombre demonio" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 108, "titulo": "Devil Man" },
        "historia": "Fangs the Vampire era un guerrero vampiro que particip\u00F3 en el torneo de Uranai Baba. Con su apariencia de murci\u00E9lago y sus colmillos afilados, intent\u00F3 derrotar a Goku utilizando ataques a\u00E9reos y su velocidad. Sin embargo, Goku lo super\u00F3 con su agilidad caracter\u00EDstica y su bast\u00F3n m\u00E1gico.",
        "descripcion": "Guerrero vampiro de Uranai Baba. R\u00E1pido y a\u00E9reo, con ataques de colmillos y garras.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1kXQqGR_k4FlAcZhnHNCES-VuoMRCv1Xr"
        ],
        "stats": { "fuerza": 16, "velocidad": 30, "ki": 8, "tecnica": 12 },
        "transformaciones": []
    },
    {
        "id": "invisible_man",
        "Personaje": "Invisible Man",
        "Raza": "Humano (invisible)",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerrero de Uranai Baba",
        "estado": "Desconocido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 79, "titulo": "El hombre demonio" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 108, "titulo": "Devil Man" },
        "historia": "Invisible Man era un luchador completamente invisible que particip\u00F3 en el torneo de Uranai Baba. Su habilidad para volverse invisible lo convert\u00EDa en un oponente extremadamente peligroso, ya que sus ataques eran imposibles de ver. Goku lo derrot\u00F3 utilizando su bast\u00F3n m\u00E1gico para cubrir el \u00E1rea con polvo, revelando su silueta.",
        "descripcion": "Luchador invisible de Uranai Baba. Sus ataques son imposibles de ver hasta que Goku usa polvo para revelarlo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tc6CcO7-LbKhF0oNGWWYoPcurCQhpvBP"
        ],
        "stats": { "fuerza": 12, "velocidad": 20, "ki": 15, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "ghost_usher",
        "Personaje": "Ghost Usher",
        "Raza": "Fantasma",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerrero de Uranai Baba",
        "estado": "Desconocido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 79, "titulo": "El hombre demonio" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 108, "titulo": "Devil Man" },
        "historia": "Ghost Usher era el \u00FAltimo guerrero de Uranai Baba, un ser fantasmal que flotaba y atacaba con energ\u00EDa espiritual. A pesar de ser el guardi\u00E1n final, tambi\u00E9n fue derrotado por Goku, quien demostr\u00F3 su crecimiento como guerrero al superar todas las pruebas del torneo de la adivina.",
        "descripcion": "\u00DAltimo guerrero fantasmal de Uranai Baba. Guardi\u00E1n final del torneo de la adivina.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1vn17lj7ObJXjnkR5c95l7L8Dn6d1TY5E"
        ],
        "stats": { "fuerza": 15, "velocidad": 18, "ki": 25, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "drum",
        "Personaje": "Drum",
        "Raza": "Namekiano demon\u00EDaco",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Hijo de King Piccolo",
        "estado": "Muerto",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 113, "titulo": "El ej\u00E9rcito de Piccolo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 150, "titulo": "Drum" },
        "historia": "Drum era uno de los hijos de Piccolo Daima\u014D, creado para eliminar a los guerreros que se opon\u00EDan a su padre. Era un guerrero extremadamente poderoso y brutal, conocido por su gran fuerza f\u00EDsica. Se enfrent\u00F3 a Krillin y lo derrot\u00F3 f\u00E1cilmente, pero luego fue eliminado por Tien Shinhan en un acto de venganza.",
        "descripcion": "Hijo de King Piccolo. Guerrero brutal de gran fuerza que derrot\u00F3 a Krillin antes de caer ante Tien.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mipz_lfOgv_L2D4uLbg-3btCj7Qzj5fX"
        ],
        "stats": { "fuerza": 35, "velocidad": 20, "ki": 15, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "cymbal",
        "Personaje": "Cymbal",
        "Raza": "Namekiano demon\u00EDaco",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Hijo de King Piccolo",
        "estado": "Muerto",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 113, "titulo": "El ej\u00E9rcito de Piccolo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 150, "titulo": "Drum" },
        "historia": "Cymbal era otro de los hijos de Piccolo Daima\u014D, un Namekiano demon\u00EDaco con habilidades de vuelo. Fue enviado por su padre para recuperar las Esferas del Drag\u00F3n que hab\u00EDan sido robadas. Durante su misi\u00F3n, se encontr\u00F3 con el Maestro Roshi, quien lo derrot\u00F3 utilizando la t\u00E9cnica Kamehameha.",
        "descripcion": "Hijo volador de King Piccolo. Enviado a recuperar las Esferas del Drag\u00F3n, derrotado por Roshi.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1WcukYFK6sozDjRmRmpthdEe4e7pzMwzX"
        ],
        "stats": { "fuerza": 20, "velocidad": 30, "ki": 18, "tecnica": 12 },
        "transformaciones": []
    },
    {
        "id": "piano",
        "Personaje": "Piano",
        "Raza": "Namekiano demon\u00EDaco",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Hijo de King Piccolo",
        "estado": "Muerto",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 102, "titulo": "La amenaza de Piccolo Daima\u014D" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 137, "titulo": "Piccolo Daima\u014D" },
        "historia": "Piano era el hijo m\u00E1s leal de Piccolo Daima\u014D, actuando como su consejero y mano derecha. A diferencia de sus hermanos, Piano era de menor estatura pero extremadamente astuto. Fue quien sugiri\u00F3 a King Piccolo utilizar las Esferas del Drag\u00F3n para restaurar su juventud. Muri\u00F3 cuando Piccolo lo aplast\u00F3 con su pie al estar molesto.",
        "descripcion": "Hijo consejero de King Piccolo. Astuto estratega que sugiri\u00F3 usar las Esferas del Drag\u00F3n para rejuvenecer a su padre.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Xt8G674ojZLkAdbLJrmwIKfX_-FBLYPQ"
        ],
        "stats": { "fuerza": 12, "velocidad": 15, "ki": 15, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "nam",
        "Personaje": "Nam",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Aldea del sur",
        "estado": "Vivo",
        "edad": "20",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 21, "titulo": "El 21\u00BA Torneo de Artes Marciales" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 36, "titulo": "El Torneo" },
        "historia": "Nam era un joven guerrero que particip\u00F3 en el 21\u00BA Torneo de Artes Marciales. Su motivaci\u00F3n era ganar el premio para comprar agua para su aldea, que sufr\u00EDa una terrible sequ\u00EDa. En el torneo, se enfrent\u00F3 a Goku en una emotiva batalla. Aunque perdi\u00F3, Goku, conmovido por su causa, comparti\u00F3 el premio con \u00E9l.",
        "descripcion": "Guerrero del sur que particip\u00F3 en el 21\u00BA Torneo para salvar a su aldea de la sequ\u00EDa. Derrotado por Goku.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1N3cy_s8PD0AEbZfLjD4YARNiIxWFyeuL"
        ],
        "stats": { "fuerza": 18, "velocidad": 22, "ki": 10, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "giran",
        "Personaje": "Giran",
        "Raza": "Monstruo",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 22, "titulo": "La lucha del torneo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 38, "titulo": "Giran" },
        "historia": "Giran era un monstruo alado de color verde que particip\u00F3 en el 21\u00BA Torneo de Artes Marciales. Pose\u00EDa una gran fuerza y la capacidad de volar gracias a sus alas. Se enfrent\u00F3 a Krillin en el torneo, pero fue derrotado a pesar de su ventaja a\u00E9rea. Es uno de los personajes m\u00E1s recordados del primer torneo.",
        "descripcion": "Monstruo alado verde del 21\u00BA Torneo. Derrotado por Krillin en las preliminares.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ejDe3NUy1fxhxVNYBDqGycAsoc2FVV8F"
        ],
        "stats": { "fuerza": 20, "velocidad": 18, "ki": 8, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "ranfan",
        "Personaje": "Ranfan",
        "Raza": "Humana",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Viva",
        "edad": "22",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 23, "titulo": "La luchadora seductora" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 39, "titulo": "Ranfan" },
        "historia": "Ranfan era una luchadora del 21\u00BA Torneo de Artes Marciales que usaba t\u00E1cticas de seducci\u00F3n para distraer a sus oponentes. Se enfrent\u00F3 al Maestro Roshi (disfrazado como Jackie Chun), quien fingi\u00F3 sucumbir a sus encantos para luego derrotarla r\u00E1pidamente. Su estilo de lucha era m\u00E1sShowman que efectivo.",
        "descripcion": "Luchadora del 21\u00BA Torneo que usaba la seducci\u00F3n como estrategia de combate. Derrotada por Jackie Chun.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1eE1KiXa5XmEOSBUjJltZOIR4AJgsw-W5"
        ],
        "stats": { "fuerza": 8, "velocidad": 18, "ki": 3, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "pamput",
        "Personaje": "Pamput",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "25",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 23, "titulo": "La luchadora seductora" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 39, "titulo": "Ranfan" },
        "historia": "Pamput era un luchador del 21\u00BA Torneo de Artes Marciales, un hombre de complexi\u00F3n delgada y cabello largo. Se enfrent\u00F3 a Yamcha en las primeras rondas del torneo. Aunque no era particularmente poderoso, particip\u00F3 con la esperanza de ganar el torneo y demostrar su val\u00EDa como artista marcial.",
        "descripcion": "Luchador del 21\u00BA Torneo de Artes Marciales. Enfrent\u00F3 a Yamcha en las primeras rondas.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1RBxY2jSs_S_VILvrPo5mC0S3AZEmESob"
        ],
        "stats": { "fuerza": 12, "velocidad": 14, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "bacterian",
        "Personaje": "Bacterian",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "30",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 21, "titulo": "El 21\u00BA Torneo de Artes Marciales" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 37, "titulo": "Bacterian" },
        "historia": "Bacterian era un luchador del 21\u00BA Torneo de Artes Marciales conocido por su extrema falta de higiene. No se ba\u00F1aba ni se lavaba los dientes, lo que creaba un hedor tan insoportable que sus oponentes no pod\u00EDan acercarse. Se enfrent\u00F3 a Krillin, quien lo derrot\u00F3 r\u00E1pidamente tap\u00E1ndose la nariz y usando un ataque r\u00E1pido.",
        "descripcion": "El luchador m\u00E1s apestoso del 21\u00BA Torneo. Su falta de higiene era su principal arma. Derrotado por Krillin.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1neKACnszDbA1E29pXOkzJ606TVp_1ZV2"
        ],
        "stats": { "fuerza": 15, "velocidad": 8, "ki": 2, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "shen",
        "Personaje": "Shen",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "35",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 21, "titulo": "El 21\u00BA Torneo de Artes Marciales" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 37, "titulo": "Bacterian" },
        "historia": "Shen era un luchador del 21\u00BA Torneo de Artes Marciales, conocido por su gran tama\u00F1o y fuerza. Se enfrent\u00F3 a Goku en la primera ronda del torneo. A pesar de su imponente presencia, fue derrotado r\u00E1pidamente por Goku, quien ya era mucho m\u00E1s fuerte que un luchador promedio.",
        "descripcion": "Luchador corpulento del 21\u00BA Torneo. Derrotado por Goku en la primera ronda.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/10XAa4UZCmHN_LNH72jY3_Syu75O_9XQF"
        ],
        "stats": { "fuerza": 16, "velocidad": 8, "ki": 3, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "ox_king",
        "Personaje": "Ox-King",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Son",
        "estado": "Vivo",
        "edad": "40+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 7, "titulo": "Chi-Chi, la chica del monte" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 11, "titulo": "Chi-Chi" },
        "historia": "El Rey Ox era un antiguo disc\u00EDpulo del Maestro Roshi y el padre de Chi-Chi. Despu\u00E9s de la muerte de su esposa, se dedic\u00F3 a criar a su hija en el Monte F\u00FAgfu. Aunque tiene una apariencia imponente y suele llevar una armadura, es un hombre amable y protector. Ayud\u00F3 a Goku en su viaje y m\u00E1s tarde se convirti\u00F3 en su suegro.",
        "descripcion": "El padre de Chi-Chi y antiguo disc\u00EDpulo de Roshi. Un hombre imponente pero de buen coraz\u00F3n.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1cuaQWyVTczbS6FtqyXH5Pp_H7hgl9Big"
        ],
        "stats": { "fuerza": 20, "velocidad": 12, "ki": 8, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "oolong",
        "Personaje": "Oolong",
        "Raza": "Cerdo parlante",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Equipo de b\u00FAsqueda de las Esferas del Drag\u00F3n",
        "estado": "Vivo",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 3, "titulo": "Kame Sen'nin, el Maestro Tortuga" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 5, "titulo": "Oolong" },
        "historia": "Oolong es un cerdo parlante con la habilidad de transformarse en cualquier cosa durante cinco minutos. Originalmente un villano que aterrorizaba un pueblo, se uni\u00F3 al grupo de Goku y Bulma despu\u00E9s de ser derrotado. A pesar de su cobard\u00EDa y su actitud perezosa, ha demostrado ser \u00FAtil en varias ocasiones gracias a su habilidad de transformaci\u00F3n.",
        "descripcion": "Un cerdo parlante que puede transformarse. Comenz\u00F3 como villano y luego se uni\u00F3 al grupo de Goku.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1jK0BwaUO7s1_r4gXoeyaD_sFg22C80-4"
        ],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 5, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "puar",
        "Personaje": "Puar",
        "Raza": "Gato parlante",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Equipo Yamcha",
        "estado": "Vivo",
        "edad": "16",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 4, "titulo": "El desertor Yamcha" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 7, "titulo": "Yamcha y Puar" },
        "historia": "Puar es un gato parlante de color azul que puede transformarse en cualquier objeto o criatura, similar a Oolong. Es el compa\u00F1ero inseparable de Yamcha desde su infancia. Ambos eran bandidos del desierto antes de conocer a Goku y Bulma. A diferencia de Oolong, Puar es m\u00E1s leal y confiable, ayudando siempre a su amigo Yamcha.",
        "descripcion": "El gato parlante compa\u00F1ero de Yamcha. Puede transformarse en cualquier cosa, igual que Oolong.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1gyJ3xKm4h6UnjmNqW-4KBQdDCwCSNPGO"
        ],
        "stats": { "fuerza": 4, "velocidad": 12, "ki": 5, "tecnica": 18 },
        "transformaciones": []
    },
    {
        "id": "bora",
        "Personaje": "Bora",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guardi\u00E1n del pilar sagrado",
        "estado": "Vivo",
        "edad": "40+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 58, "titulo": "El asesino Tao Pai Pai" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 84, "titulo": "La base del norte" },
        "historia": "Bora era el guardi\u00E1n del Pilar Sagrado, una torre que conectaba la tierra con el cielo. \u00C9l y su hijo Upa proteg\u00EDan este lugar sagrado de intrusos. Cuando Tao Pai Pai asesin\u00F3 a Bora, Goku decidi\u00F3 vengarlo, viajando a la Torre de Korin para entrenar y hacerse m\u00E1s fuerte. Bora fue resucitado por las Esferas del Drag\u00F3n al final de la saga.",
        "descripcion": "Guardi\u00E1n del Pilar Sagrado. Asesinado por Tao Pai Pai y luego resucitado con las Esferas del Drag\u00F3n.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/15yhg7_SwQRtvuYods4Lics6-7GAYhmL2"
        ],
        "stats": { "fuerza": 18, "velocidad": 15, "ki": 5, "tecnica": 12 },
        "transformaciones": []
    },
    {
        "id": "upa",
        "Personaje": "Upa",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Hijo de Bora",
        "estado": "Vivo",
        "edad": "10",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 58, "titulo": "El asesino Tao Pai Pai" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 84, "titulo": "La base del norte" },
        "historia": "Upa es el hijo de Bora, un joven valiente que presenci\u00F3 la muerte de su padre a manos de Tao Pai Pai. Despu\u00E9s de la resurrecci\u00F3n de su padre, Upa y Bora vivieron en paz en el Pilar Sagrado. Upa se convirti\u00F3 en un amigo leal de Goku y siempre record\u00F3 su promesa de vengar a su padre.",
        "descripcion": "El joven hijo de Bora. Fue testigo de la muerte de su padre y luego lo recuper\u00F3 gracias a las Esferas del Drag\u00F3n.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1crx01DnQjFGIytGO83szZUVhy4vXdX9s"
        ],
        "stats": { "fuerza": 6, "velocidad": 12, "ki": 3, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "dr_brief",
        "Personaje": "Dr. Brief",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Corporaci\u00F3n C\u00E1psula",
        "estado": "Vivo",
        "edad": "50+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 10, "titulo": "La chica de los dos caracteres" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 17, "titulo": "Lunch" },
        "historia": "El Dr. Brief es el fundador y presidente de la Corporaci\u00F3n C\u00E1psula, la empresa tecnol\u00F3gica m\u00E1s importante del mundo. Es el padre de Bulma y un genio inventor, creador de las c\u00E1psulas de almacenamiento y el Radar del Drag\u00F3n. Es un anciano amable y distra\u00EDdo que siempre apoya a su hija y a sus amigos en sus aventuras.",
        "descripcion": "El genio inventor fundador de la Corporaci\u00F3n C\u00E1psula y padre de Bulma. Creador del Radar del Drag\u00F3n.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1WQeTEy0_e_IewpAnlshISQIcmrDJ-utE"
        ],
        "stats": { "fuerza": 3, "velocidad": 5, "ki": 2, "tecnica": 100 },
        "transformaciones": []
    },
    {
        "id": "panchy",
        "Personaje": "Panchy",
        "Raza": "Humana",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Brief",
        "estado": "Viva",
        "edad": "45+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 10, "titulo": "La chica de los dos caracteres" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 17, "titulo": "Lunch" },
        "historia": "Panchy es la esposa del Dr. Brief y la madre de Bulma. Es una mujer amable y cari\u00F1osa que siempre recibe con los brazos abiertos a los amigos de su hija. Aunque no participa en las aventuras, su hogar en West City es un refugio para el grupo. Es conocida por su paciencia con las ocurrencias de su esposo.",
        "descripcion": "La madre de Bulma y esposa del Dr. Brief. Una mujer amable que siempre acoge a los amigos de su hija.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1qmoowKx3XIrOVP5iT69vkK9ZEO6lAoA7"
        ],
        "stats": { "fuerza": 2, "velocidad": 5, "ki": 1, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "tortuga_mar",
        "Personaje": "Tortuga Mar",
        "Raza": "Tortuga marina parlante",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ayudante de Roshi",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 3, "titulo": "Kame Sen'nin, el Maestro Tortuga" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 3, "titulo": "Kame Sen'nin" },
        "historia": "Tortuga Mar es la tortuga parlante que ayuda al Maestro Roshi en sus tareas diarias. Fue quien gui\u00F3 a Goku y Krillin hasta la isla del Maestro Roshi cuando estos buscaban un maestro. Es un personaje amable y servicial que ha vivido junto a Roshi durante muchos a\u00F1os, siendo su fiel compa\u00F1ero.",
        "descripcion": "La tortuga parlante ayudante del Maestro Roshi. Gui\u00F3 a Goku y Krillin hasta la Escuela Tortuga.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ygAtW1p2uadmzgo21rRI3lRaBBATHHmi"
        ],
        "stats": { "fuerza": 3, "velocidad": 3, "ki": 1, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "scratch",
        "Personaje": "Scratch",
        "Raza": "Humano",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Aprendiz de Roshi",
        "estado": "Vivo",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 14, "titulo": "El rival de Goku: Krilin" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 25, "titulo": "Los rivales del Torneo" },
        "historia": "Scratch era un joven que intent\u00F3 convertirse en disc\u00EDpulo del Maestro Roshi al mismo tiempo que Goku y Krillin. Sin embargo, no logr\u00F3 superar las pruebas de admisi\u00F3n de Roshi. A diferencia de Goku y Krillin, Scratch no ten\u00EDa la determinaci\u00F3n necesaria para soportar los rigurosos entrenamientos del maestro.",
        "descripcion": "Aspirante a disc\u00EDpulo de Roshi. No logr\u00F3 superar las pruebas de admisi\u00F3n del Maestro Tortuga.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1vmrsWc_rTBJ4j-dSZFu9I7xW4_HsU6RA"
        ],
        "stats": { "fuerza": 8, "velocidad": 10, "ki": 2, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "arale",
        "Personaje": "Arale",
        "Raza": "Androide",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Villa Ping\u00FCino",
        "estado": "Activa",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 29, "titulo": "El robot m\u00E1s fuerte del mundo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 44, "titulo": "Arale" },
        "historia": "Arale es una androide creada por el Dr. Senbei Norimaki en la Villa Ping\u00FCino. Es un crossover del manga Dr. Slump de Akira Toriyama. Aparece en Dragon Ball cuando Goku y sus amigos la visitan. A pesar de su apariencia infantil, posee una fuerza incre\u00EDble que supera incluso a la de Goku en ese momento. Su inocencia y su obsesi\u00F3n por las bragas la hacen \u00FAnica.",
        "descripcion": "La androide de Dr. Slump con fuerza descomunal. Cruz\u00F3 al mundo de Dragon Ball desde la Villa Ping\u00FCino.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1NMHiogDY_GsAEcU37Vjx5WoDwfFzyC2T"
        ],
        "stats": { "fuerza": 60, "velocidad": 30, "ki": 10, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "annin",
        "Personaje": "Annin",
        "Raza": "Diosa",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guardi\u00E1na del horno sagrado",
        "estado": "Activa",
        "edad": "Inmortal",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 45, "titulo": "El horno sagrado de Annin" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 62, "titulo": "Annin" },
        "historia": "Annin es una diosa que protege un horno sagrado, apareciendo en un arco de la serie donde Goku y sus amigos la visitan. Es similar a Kami, pero en una escala menor. Posee una gran sabidur\u00EDa y poder, y se encarga de mantener el equilibrio en su dominio. Es un personaje exclusivo del anime de Dragon Ball.",
        "descripcion": "Diosa guardiana del horno sagrado. Personaje exclusivo del anime de Dragon Ball.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/176gSPv48rGZum0wkFCLbX4Bd_QWWV8oa"
        ],
        "stats": { "fuerza": 25, "velocidad": 20, "ki": 50, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "lucifer",
        "Personaje": "Lucifer",
        "Raza": "Demonio",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 45, "titulo": "El horno sagrado de Annin" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 62, "titulo": "Annin" },
        "historia": "Lucifer es un demonio que intent\u00F3 apoderarse del horno sagrado de Annin. Fue el principal antagonista del arco del horno sagrado. Pose\u00EDa habilidades demon\u00EDacas y un ej\u00E9rcito de criaturas oscuras. Goku y sus amigos tuvieron que enfrentarlo para restaurar el equilibrio del lugar. Es otro personaje exclusivo del anime.",
        "descripcion": "Demonio antagonista del arco del horno sagrado. Exclusivo del anime de Dragon Ball.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1HvGwSvY3mtXRUebuIiZ2-vz2s6eXlzej"
        ],
        "stats": { "fuerza": 28, "velocidad": 22, "ki": 25, "tecnica": 18 },
        "transformaciones": []
    },
    {
        "id": "ghastel",
        "Personaje": "Ghastel",
        "Raza": "Monstruo",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 45, "titulo": "El horno sagrado de Annin" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 62, "titulo": "Annin" },
        "historia": "Ghastel es un monstruo que sirve a Lucifer en el arco del horno sagrado. Es una criatura de gran tama\u00F1o y fuerza, utilizada como guardi\u00E1n de las puertas del infierno. Goku y sus amigos tuvieron que enfrentarlo para llegar hasta Lucifer. Es otro de los personajes exclusivos del anime.",
        "descripcion": "Monstruo guardi\u00E1n al servicio de Lucifer. Exclusivo del anime de Dragon Ball.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1yK_vL0Tq58mBc1Q1rKURARNSRy_FHrj2"
        ],
        "stats": { "fuerza": 22, "velocidad": 10, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "bear_thief",
        "Personaje": "Bear Thief",
        "Raza": "Oso parlante",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Bear Thief fue un oso antropom\u00F3rfico que atac\u00F3 a Goku al principio de la serie, intentando robarle su esfera del drag\u00F3n. Fue derrotado f\u00E1cilmente por Goku, demostrando desde el principio la fuerza del joven Saiyan. Es uno de los primeros enemigos que Goku enfrenta en su aventura.",
        "descripcion": "Oso ladr\u00F3n que intent\u00F3 robar la esfera de Goku. Uno de los primeros enemigos de la serie.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/18WwrUgzgWlsRe0ScprJYvPb7tRd15n3X"
        ],
        "stats": { "fuerza": 8, "velocidad": 7, "ki": 1, "tecnica": 3 },
        "transformaciones": []
    },
    {
        "id": "baby_gamera",
        "Personaje": "Baby Gamera",
        "Raza": "Tortuga gigante",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 12, "titulo": "La tortuga gigante" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 21, "titulo": "Gamera" },
        "historia": "Baby Gamera es una tortuga gigante que apareci\u00F3 durante una de las aventuras de Goku y sus amigos. A pesar de su nombre, no tiene relaci\u00F3n con el kaiju Gamera. Fue un obst\u00E1culo en el camino del grupo mientras buscaban las Esferas del Drag\u00F3n. Es una de las muchas criaturas extra\u00F1as que pueblan el mundo de Dragon Ball.",
        "descripcion": "Tortuga gigante que apareci\u00F3 durante la b\u00FAsqueda de las Esferas del Drag\u00F3n.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1yFjemS56MlJ6hTSy7F4LqhtYFZjh1ZrE"
        ],
        "stats": { "fuerza": 15, "velocidad": 3, "ki": 2, "tecnica": 3 },
        "transformaciones": []
    },
    {
        "id": "toribot",
        "Personaje": "Toribot",
        "Raza": "Robot",
        "serie": "db-classic",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Inactivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Toribot es un peque\u00F1o robot de aspecto similar a un Yeti, creado por Akira Toriyama como una de sus primeras creaciones. Aparece en Dragon Ball como cameo, siendo uno de los muchos personajes que pueblan el mundo. Es un homenaje a los primeros trabajos de Toriyama y un gui\u00F1o a sus fans m\u00E1s ac\u00E9rrimos.",
        "descripcion": "Peque\u00F1o robot cameo creado por Akira Toriyama. Un gui\u00F1o a los primeros trabajos del autor.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1uW1MiRrWflm-zY4m0f6IzbNXaBCjD34I"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 2, "tecnica": 5 },
        "transformaciones": []
    }
,

    // --- Dragon Ball Z Characters ---
    {
        "id": "goku-z",
        "Personaje": "Goku-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Goku continuó su entrenamiento en Dragon Ball Z, enfrentando amenazas cada vez mayores. Desde la llegada de su hermano Raditz hasta la derrota de Majin Buu, Goku demostró ser el guerrero más fuerte del universo, alcanzando transformaciones legendarias como Super Saiyan y Super Saiyan 3.",
        "descripcion": "El Saiyan criado en la Tierra. Protector del planeta y el guerrero más fuerte del universo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/18O0Tnn1bzcLuvYsfiIC18qKpD6ZU8erc",
            "https://lh3.googleusercontent.com/d/1umqVsKBOde-wZ39RGBJa-nW6UFZWsjt0",
            "https://lh3.googleusercontent.com/d/1MEQKvMLc-da0b8BVppEaXxP8l--1sEHd",
            "https://lh3.googleusercontent.com/d/1i3aqIwmvV_FMtkY2LbxoLBdVPffSI-ol",
            "https://lh3.googleusercontent.com/d/1RHEkRztrNUS32dDitZ5WAffYrSpBKkHA",
            "https://lh3.googleusercontent.com/d/1N1MzuArSDvMEcTfavIrNfyu3VvwO8AYj",
            "https://lh3.googleusercontent.com/d/1l109pFmkbei1Liq6EiXBVy4-mqCCnVye",
            "https://lh3.googleusercontent.com/d/1jXbvcSLzoegHXCsrVCMIepjDek-An9Qo",
            "https://lh3.googleusercontent.com/d/1OyzTxb9YSBmqEOt43xUGIz4_VmY5M4wd",
            "https://lh3.googleusercontent.com/d/1s_EIiNRTrJFevPTQNnsjQuAGEsHJbyqs",
            "https://lh3.googleusercontent.com/d/1YIca-0GI3GZ5KiuqPtB1DYsfu4zTZ6k0"
        ],
        "stats": { "fuerza": 85, "velocidad": 90, "ki": 80, "tecnica": 85 },
        "transformaciones": []
    },
    {
        "id": "vegeta-z",
        "Personaje": "Vegeta-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Vegeta llegó a la Tierra como enemigo jurado de Goku. Con el tiempo, su orgullo Saiyan y su amor por Bulma y sus hijos lo transformaron en un aliado indispensable. Superó sus límites una y otra vez, alcanzando la forma de Super Saiyan y más allá.",
        "descripcion": "El príncipe Saiyan. Orgulloso guerrero que pasó de enemigo a aliado de los Guerreros Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1lB5_krZ2dNK0nWgKnPl-yPtFmlozrOJX",
            "https://lh3.googleusercontent.com/d/1hTKR1xh1aZPWJtjUVb65wLyECDBH8CoR",
            "https://lh3.googleusercontent.com/d/1A12PKuZVpPnrxpVvCQqqUNdXGfw2E8qu",
            "https://lh3.googleusercontent.com/d/1-I4KzO0E6DBl4iEFEKsl2C22f8B-oSem",
            "https://lh3.googleusercontent.com/d/1XdB340tj-5kewVia7AG6S9BAL-lBT3HL",
            "https://lh3.googleusercontent.com/d/1Gufuo1eReX24dof0f8FH3xdNANV4th1g",
            "https://lh3.googleusercontent.com/d/188OrfYIssjYTmxThLh5uCeYJR_QVr_a-",
            "https://lh3.googleusercontent.com/d/16XxmKA3d0hpAnVncKXtKsLIf013FmFP2",
            "https://lh3.googleusercontent.com/d/1RTBjI9EADLmJ2Wi1gjx0WXwiSSSMinqu",
            "https://lh3.googleusercontent.com/d/1IFWfaC5x1htDCorT-92TTDRdoJApHycm"
        ],
        "stats": { "fuerza": 85, "velocidad": 85, "ki": 80, "tecnica": 80 },
        "transformaciones": []
    },
    {
        "id": "gohan-z",
        "Personaje": "Gohan-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Gohan mostró un potencial inmenso desde niño. Durante la saga de Cell, desató su furia y alcanzó Super Saiyan 2, derrotando a Cell. Más tarde, durante la saga de Buu, el Anciano Kaioshin despertó su poder oculto.",
        "descripcion": "El hijo primogénito de Goku. Posee un potencial latente que supera incluso al de su padre.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1imMpD2wbnDGALVPEluQCeSFEGp857-4a",
            "https://lh3.googleusercontent.com/d/1hjXYan-NRHVoC8KjcZXJgTFvz-FomrXe",
            "https://lh3.googleusercontent.com/d/1VlQ-EnaKUQw2McU1r6RY4DMsVWJ_HVjR",
            "https://lh3.googleusercontent.com/d/1jPRhOkZjsQlsD5jcMG4ri_6e1qd2GS-x",
            "https://lh3.googleusercontent.com/d/11coISNqqVwUhSyego4OnjAU9Mm7iRExs",
            "https://lh3.googleusercontent.com/d/1emDFRHN4CDZTydEkMi6mcM_o7M1hdujk",
            "https://lh3.googleusercontent.com/d/1GXFskZ51NnejdBrcBBB_VpOFt0X_Ni60",
            "https://lh3.googleusercontent.com/d/1ba11ZTylOMUJYbMPVrOkzORGjl3jUPM3",
            "https://lh3.googleusercontent.com/d/19zlmaUy_9FrTVMLgxUxmz4dk3biBfLgw",
            "https://lh3.googleusercontent.com/d/1G6cR1skpgcVGT_QzU4BzbzYSIVdhHn2X",
            "https://lh3.googleusercontent.com/d/1WwIbJsx7xKsJA2rXayWJwvWigOw7QhPK",
            "https://lh3.googleusercontent.com/d/17d2z1RayKi2XMhVx11xPAAe41OtQaOZp",
            "https://lh3.googleusercontent.com/d/1C7EjPVTFkGGnLOay18QHKsEZV15JQe86"
        ],
        "stats": { "fuerza": 80, "velocidad": 75, "ki": 70, "tecnica": 65 },
        "transformaciones": []
    },
    {
        "id": "trunks-futuro-z",
        "Personaje": "Trunks del Futuro-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra (Futuro)",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Trunks del Futuro viajó en el tiempo para advertir a los Guerreros Z sobre la amenaza de los Androides. Creció en un mundo devastado donde fue entrenado por su madre Bulma y el Gohan de su línea temporal.",
        "descripcion": "El guerrero del futuro. Viajó al pasado para salvar a la Tierra de los Androides.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1lIVE2sUl2tSr76_TtdT9NvbK8bpxjyo_",
            "https://lh3.googleusercontent.com/d/1fgGqu35zJ212Ix6punpNyNi51dL44JF9",
            "https://lh3.googleusercontent.com/d/1euOftxVVHoI4JbXVyPpvSmCMFT6XZUZe",
            "https://lh3.googleusercontent.com/d/1qPTL_z_-u0KJ3wc63mgEY0crnPV92V6o"
        ],
        "stats": { "fuerza": 75, "velocidad": 80, "ki": 65, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "piccolo-z",
        "Personaje": "Piccolo-Z",
        "Raza": "Namekiano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Piccolo se convirtió en el mentor de Gohan tras sacrificarse para salvar a Goku de Nappa. Se fusionó con Kami durante la saga Cell, recuperando su poder original y convirtiéndose en un Namekiano completo.",
        "descripcion": "El Namekiano sabio. Hijo de Piccolo Daimaō, pasó de enemigo a mentor y aliado de Gohan.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1pPdUV5FBrexzGP34MA6XaLtIWEDMol_O",
            "https://lh3.googleusercontent.com/d/1GTEMiSHDh7dIb3XtnqqLey6c9nroK68f",
            "https://lh3.googleusercontent.com/d/1Tu6LNj69mggrB6roKmBcQ-W2I_pIKon9"
        ],
        "stats": { "fuerza": 75, "velocidad": 70, "ki": 65, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "krillin-z",
        "Personaje": "Krillin-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Krillin luchó contra los Saiyans, Freezer, Cell y Buu. Fue asesinado por Freezer en Namek, lo que desató la furia de Goku. Más tarde se casó con Androide 18 y tuvieron una hija, Marron.",
        "descripcion": "El mejor amigo de Goku. Guerrero Humano más fuerte, esposo de Androide 18 y padre de Marron.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1fyiU3lClQcmpMv8s4ic1TyGP48fRTaAD",
            "https://lh3.googleusercontent.com/d/18kAU0rAe_9ek53Ad7oM_mlq0r8cd0fGY",
            "https://lh3.googleusercontent.com/d/1MsWulnn7Tnt1tFjXIr_Tb82Yqb2-AlAX",
            "https://lh3.googleusercontent.com/d/1XWkloA29YQ55nIM0i6o3AGl_VtubWj8w"
        ],
        "stats": { "fuerza": 55, "velocidad": 60, "ki": 50, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "bulma-z",
        "Personaje": "Bulma-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Bulma continuó siendo la mente brillante detrás de los Guerreros Z. Creó la Sala de Gravedad para Vegeta, ayudó a reconstruir el Radar del Dragón y fue clave en la derrota de múltiples amenazas.",
        "descripcion": "La genio creadora del Radar del Dragón. Madre de Trunks y Bra, esposa de Vegeta.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ASFl_ztoi8fsucwvuXPfTnCCD1SGhGWn",
            "https://lh3.googleusercontent.com/d/1tiEC580JCJezah6BFw_wNVSE7ndiNQjg",
            "https://lh3.googleusercontent.com/d/1AmpFCtZuTdB-2f307_Vayb7BWlAV_w8v",
            "https://lh3.googleusercontent.com/d/1MHA9KNeloxiViYBYu2S0O8zrHVt8q1e7"
        ],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 5, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "freezer",
        "Personaje": "Freezer",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Ejército de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Emperador del Universo. Tirano galáctico que destruyó el Planeta Vegeta.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1JToej9UGfrEaej6OREmmO0hcQ1Ga4DlX",
            "https://lh3.googleusercontent.com/d/1aCchXoEfJTcFI2sh42ht3WnPOiMa-Ajm",
            "https://lh3.googleusercontent.com/d/1etR3wvzikL4Alf0N-yo0XIcaIXYa20c3",
            "https://lh3.googleusercontent.com/d/1Ag5ZdaUlX8vCZt7oyLRfxMYwh7IX6TDb",
            "https://lh3.googleusercontent.com/d/1sqP2fr9sjvTSTJ5Ng1l9EAF4nbJ7-mQj",
            "https://lh3.googleusercontent.com/d/1Rbv43FvBWnlRhgfxXnKKDlETJ5VIJKkT"
        ],
        "stats": { "fuerza": 90, "velocidad": 85, "ki": 85, "tecnica": 80 },
        "transformaciones": []
    },
    {
        "id": "cell",
        "Personaje": "Cell",
        "Raza": "Bio-Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Bio-Androide perfecto. Creación del Dr. Gero que absorbió a Androides 17 y 18.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1XBEBXV24LfZXzTd2SGXhMJp18xQSo4c5",
            "https://lh3.googleusercontent.com/d/1414ecfwRe054bbRZFmq37QGwuPffR7mB",
            "https://lh3.googleusercontent.com/d/1oQGMyf0oNB6Sav-ADNHBiitvwCwoLemJ",
            "https://lh3.googleusercontent.com/d/1s0KuN6KfA2XrxJLc6U-pxkhZpf3eRxZ8",
            "https://lh3.googleusercontent.com/d/19drpUV3s6KXhCNetDKqvNY-b9fm0j5eE"
        ],
        "stats": { "fuerza": 90, "velocidad": 85, "ki": 85, "tecnica": 85 },
        "transformaciones": []
    },
    {
        "id": "buu",
        "Personaje": "Buu",
        "Raza": "Majin",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La criatura mágica más peligrosa. Creado por Bibidi, pasó de destructor a aliado.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/17MT7o7o8CC4zPR7u22GCOv2OTD-3ouw-",
            "https://lh3.googleusercontent.com/d/1WOgJ4n0ZndTsTasZGsL8zV1icze4QPOt",
            "https://lh3.googleusercontent.com/d/1i0Jz_wz8esjExpyKUFWbF61OjpsulaZd",
            "https://lh3.googleusercontent.com/d/1cLPaAda4uC7PJ_FbVWvemv3Rf39CijIO",
            "https://lh3.googleusercontent.com/d/1qV-EJL_GSAVP8A6h7ntDdMBJvmZm9X-7",
            "https://lh3.googleusercontent.com/d/19NSxjU-dOWp10UrsN-mqKXE6oHAJbFbJ",
            "https://lh3.googleusercontent.com/d/1mvV6P4prF9JmN7sbHzk5hsVAm07gpRHO",
            "https://lh3.googleusercontent.com/d/1qbNyDXORpnIaVx2XVe7WnoJkkSJHxU7g"
        ],
        "stats": { "fuerza": 95, "velocidad": 85, "ki": 90, "tecnica": 80 },
        "transformaciones": []
    },
    {
        "id": "broly-z",
        "Personaje": "Broly-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Saiyan Legendario. Posee un poder inmenso y una sed de venganza contra Goku.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1KBcytn7rOztquyfbyyvEj3qxA1194o0g",
            "https://lh3.googleusercontent.com/d/1mKcL5HN8a_svboK-oYyYR_t5_HDdPjTb",
            "https://lh3.googleusercontent.com/d/1gDkW2foLD6UK-ImXiq2RFXGP0c_yk0jU"
        ],
        "stats": { "fuerza": 95, "velocidad": 85, "ki": 80, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "gogeta-z",
        "Personaje": "Gogeta-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La fusión de Goku y Vegeta mediante la Danza de la Fusión. Poder sin igual.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/19o-4pE7TuWOxPMVB-Zlm-mz_rZMhYUXn"
        ],
        "stats": { "fuerza": 98, "velocidad": 95, "ki": 95, "tecnica": 92 },
        "transformaciones": []
    },
    {
        "id": "vegito-z",
        "Personaje": "Vegito-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La fusión de Goku y Vegeta mediante los Pendientes Pothala. El guerrero más poderoso.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1PHurESBfLUBZPhywpwtBgf24UN8aQSVd",
            "https://lh3.googleusercontent.com/d/1gIpxenSTkfOAUIwa4VVwW6aTEz2xdLY2"
        ],
        "stats": { "fuerza": 99, "velocidad": 96, "ki": 97, "tecnica": 95 },
        "transformaciones": []
    },
    {
        "id": "gotenks-z",
        "Personaje": "Gotenks-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La fusión de Goten y Trunks. Dos niños Saiyan convertidos en un guerrero increíble.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/12xc-rsJFwztBF_L3pUvGyyi45pZ3QV1p",
            "https://lh3.googleusercontent.com/d/1eW8hiincozGFySzTSi6ln1duCvQbClfO",
            "https://lh3.googleusercontent.com/d/1CWOvkx5BG7_o0ZsnB-CeMsW30cAIkPW6",
            "https://lh3.googleusercontent.com/d/1VtgPm3261C5yuzh6PfLl1NZkW9tmWQ9a",
            "https://lh3.googleusercontent.com/d/17euhMOE_iY5n-4GkC0Ur5hRyjN3LU_-J"
        ],
        "stats": { "fuerza": 75, "velocidad": 80, "ki": 70, "tecnica": 75 },
        "transformaciones": []
    },
    {
        "id": "raditz",
        "Personaje": "Raditz",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Ejército de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El hermano mayor de Goku. Saiyan que reveló a Goku su verdadero origen.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1eebQk3hhZh_1E_Y_zec_xY9n1QYql-lG",
            "https://lh3.googleusercontent.com/d/1capm9POC0x0d8xr0gflScCP-MCyxX46F"
        ],
        "stats": { "fuerza": 45, "velocidad": 40, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "nappa",
        "Personaje": "Nappa",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Ejército de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El guerrero Saiyan de élite. Acompañó a Vegeta en la invasión a la Tierra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1WdmTf9SKsAkbWPCQG64sK9U7u6HhTE0V",
            "https://lh3.googleusercontent.com/d/1--7Qbie4H_9wfnysksnaAq4JjTEl-6r3"
        ],
        "stats": { "fuerza": 50, "velocidad": 35, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "babidi",
        "Personaje": "Babidi",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El mago intergaláctico. Buscaba liberar a Majin Buu para dominar el universo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1EX-j-qWi8wwO_LCI2DANvNzYcyypQxW6"
        ],
        "stats": { "fuerza": 10, "velocidad": 15, "ki": 60, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "dabura",
        "Personaje": "Dabura",
        "Raza": "Demonio",
        "serie": "db-z",
        "planetaOrigen": "Reino Demoníaco",
        "universo": "7",
        "afiliaciones": "Babidi",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Rey del Reino Demoníaco. Sirviente de Babidi con poderes demoníacos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1miRLswS-pJCIXT63GtONHa4Mk95BrsbC"
        ],
        "stats": { "fuerza": 70, "velocidad": 65, "ki": 60, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "gohan-futuro",
        "Personaje": "Gohan del Futuro",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra (Futuro)",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Gohan de la línea temporal futura. Último guerrero Z vivo contra los Androides.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1PmxHtNOqTNSOICag0zLqh9MLl8EapNl0",
            "https://lh3.googleusercontent.com/d/1OVRLGnXXwrV5oEDNMfPPzjj2KYGjGkMi"
        ],
        "stats": { "fuerza": 65, "velocidad": 60, "ki": 55, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "trunks-z",
        "Personaje": "Trunks-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El hijo de Vegeta y Bulma. Joven Saiyan lleno de energía y valentía.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/12y-ZxNw4FLYndWEVGC0lk0eNgisp88ya",
            "https://lh3.googleusercontent.com/d/1EoqeZaeXXcjUNxeWxzbLop93oxlPUn9V",
            "https://lh3.googleusercontent.com/d/1MOb6LS5lF8gy5EeMQGOl0BvgHTaByYJ5"
        ],
        "stats": { "fuerza": 60, "velocidad": 65, "ki": 55, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "goten-z",
        "Personaje": "Goten-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El hijo menor de Goku. Joven prodigio que aprendió a volar sin entrenamiento.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1OieConoP_LcYZ-buHFAFbxfeDI57VvCr",
            "https://lh3.googleusercontent.com/d/1u-rjTOH1K4I0TMDtwlgNZsGVtrRqwcPv",
            "https://lh3.googleusercontent.com/d/1QrzuoQLQYWsTkLt7-VFjafLp5ku7oMmD"
        ],
        "stats": { "fuerza": 55, "velocidad": 60, "ki": 50, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "tien-z",
        "Personaje": "Tien Shinhan-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El guerrero disciplinado de tres ojos. Maestro de artes marciales y leal aliado.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1wu1EXDjXEoGh8vcwTLvF-sn3NguWhxEN",
            "https://lh3.googleusercontent.com/d/13S8W2KjjC0XoeyWpffXtedhy9KXEA-uU",
            "https://lh3.googleusercontent.com/d/1tiaR9xvwcLkvFfcr-JjF36v01M8aHlxf"
        ],
        "stats": { "fuerza": 50, "velocidad": 50, "ki": 45, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "yamcha-z",
        "Personaje": "Yamcha-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El ex-bandido del desierto. Guerrero Z que siempre dio lo mejor de sí.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1TTo19B7WCABIPxQPk35mvxiRfo8sqjfb",
            "https://lh3.googleusercontent.com/d/1vovtKe0PXaEq_WvyNXwFXqok_miZ81hm"
        ],
        "stats": { "fuerza": 40, "velocidad": 45, "ki": 35, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "roshi-z",
        "Personaje": "Master Roshi-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El legendario Maestro Tortuga. Erudito de artes marciales con más de 300 años.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/11q-RFyEN1KkEITMMH4bJXFsVRfQMUvW5"
        ],
        "stats": { "fuerza": 35, "velocidad": 40, "ki": 50, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "videl-z",
        "Personaje": "Videl-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La hija de Mr. Satan. Valiente luchadora que se unió a los Guerreros Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1rL7vPlT3OX3nVov2oP00T-SX0JcgL8eE",
            "https://lh3.googleusercontent.com/d/1OBCAkRkIrS1X0_SQG2zWLIZ9xtvSsIzD"
        ],
        "stats": { "fuerza": 20, "velocidad": 25, "ki": 15, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "androide-18-z",
        "Personaje": "Androide 18-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La Androide creada por el Dr. Gero. Esposa de Krillin y madre de Marron.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1VmZkCe_OnK8ZfrFR2TYYbeREtkBhQGuD",
            "https://lh3.googleusercontent.com/d/1PvdOQ_3YOK9TM9bC-o6Lu_SZvaXesVm2",
            "https://lh3.googleusercontent.com/d/1XnA3jkdx4OHFoqsn_SdAxk55bGhFm3r5",
            "https://lh3.googleusercontent.com/d/1HVdSbJTerr9oKzyLldqjRWpDJKcimJOW"
        ],
        "stats": { "fuerza": 60, "velocidad": 60, "ki": 55, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "androide-17-z",
        "Personaje": "Androide 17-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Androide gemelo de 18. Guardián de la naturaleza y luchador excepcional.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1b8MqOmfrJ503QB12p87dymQNcwa4Gsci"
        ],
        "stats": { "fuerza": 65, "velocidad": 65, "ki": 55, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "androide-16",
        "Personaje": "Androide 16",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Androide pacifista creado para matar a Goku. Amaba la naturaleza y los animales.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1T_AOwOBsfR3RnNgd8H5vuog224K_W9bt"
        ],
        "stats": { "fuerza": 70, "velocidad": 60, "ki": 50, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "bardock-z",
        "Personaje": "Bardock-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Ejército de Freezer",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El padre de Goku. Saiyan de clase baja que desafió a Freezer.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1sn2T-0wAu6JYe4L-gLnh5BCj2KtBRxFk",
            "https://lh3.googleusercontent.com/d/1MLMzVg7jYI9sSraumuXVVGxzD83-Plvn",
            "https://lh3.googleusercontent.com/d/189ev_mdwhfPYveR7YSS6bIqekkkpjFlN"
        ],
        "stats": { "fuerza": 50, "velocidad": 45, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "uub-z",
        "Personaje": "Uub-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La reencarnación humana de Majin Buu. Discípulo de Goku.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1vIlw4qeRjFSipOXg5TO1JBKTLliu5_58"
        ],
        "stats": { "fuerza": 40, "velocidad": 35, "ki": 50, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "mrsatan-z",
        "Personaje": "Mr. Satan-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Campeón Mundial de Artes Marciales. Héroe para la humanidad durante la saga Cell.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1h_rCg1_E4Cwf5Iwn92D5XkiqqqC8f5oc"
        ],
        "stats": { "fuerza": 10, "velocidad": 12, "ki": 5, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "bulma-futuro",
        "Personaje": "Bulma del Futuro",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra (Futuro)",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Fallecida",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La Bulma de la línea temporal futura. Madre de Trunks del Futuro.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1H-OcvnGWYVi36q88Se6JYZy-08umCmO2"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "chichi-z",
        "Personaje": "Chi-Chi-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Son",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "La esposa de Goku y madre de Gohan y Goten. Fuerte y protectora.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1JEtz_KqvUQhY4nutdjNm9DdU4Nx65Lfa",
            "https://lh3.googleusercontent.com/d/1Fih2A9QkN4Sw5JUNe4yMt0RwuqbSfgvI"
        ],
        "stats": { "fuerza": 15, "velocidad": 20, "ki": 10, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "dende",
        "Personaje": "Dende",
        "Raza": "Namekiano",
        "serie": "db-z",
        "planetaOrigen": "Namek",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Namekiano que se convirtió en el nuevo Dios de la Tierra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ScWiqZ1Ott1OsP0m6x9HrOy0OvFp5Ott"
        ],
        "stats": { "fuerza": 15, "velocidad": 20, "ki": 40, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "kami-z",
        "Personaje": "Kami-Z",
        "Raza": "Namekiano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dios de la Tierra",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Dios de la Tierra. Namekiano que creó las Esferas del Dragón originales.",
        "imagenes": [],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 60, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "kaito",
        "Personaje": "Kaito",
        "Raza": "Kai",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Kai del Norte. Mentor del Anciano Kaioshin y guía espiritual.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1SfIhqafHPZv_jCYETpMaQXq2mtMHjdrz"
        ],
        "stats": { "fuerza": 40, "velocidad": 35, "ki": 55, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "anciano-kaioshin",
        "Personaje": "Anciano Kaioshin",
        "Raza": "Kaioshin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Kaioshin más anciano y sabio del universo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1FBg2HERnU2hNKqBVjg3xfhJEMx3a9AM4"
        ],
        "stats": { "fuerza": 50, "velocidad": 45, "ki": 70, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "shin-z",
        "Personaje": "Shin-Z",
        "Raza": "Kaioshin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "El Kaioshin del Este. Dios creador que guió a los Guerreros Z contra Buu.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1C246mOqjwM4G3CCAGLYeIxepzKPgXpxN"
        ],
        "stats": { "fuerza": 45, "velocidad": 40, "ki": 60, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "yajirobe-z",
        "Personaje": "Yajirobe-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1wb1DJCU16PjKetw2OtF5-HIWP4GgEB_W"
        ],
        "stats": { "fuerza": 25, "velocidad": 30, "ki": 15, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "chiaotzu-z",
        "Personaje": "Chiaotzu-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1dwQv2MYeST9FSRUc8g7B0X7oEdHF1K5V"
        ],
        "stats": { "fuerza": 20, "velocidad": 25, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "mrpopo-z",
        "Personaje": "Mr. Popo-Z",
        "Raza": "Genio",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Palacio de Kami",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1odjss7Ru5NH96Aj0vuKL0sPzaR-tuHX0"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 50, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "korin-z",
        "Personaje": "Korin-Z",
        "Raza": "Gato parlante",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Torre de Korin",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1iR7pDP7sVjlYib9hvqJ3ISVw3f3TTJL0"
        ],
        "stats": { "fuerza": 15, "velocidad": 30, "ki": 35, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "olibu",
        "Personaje": "Olibu",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1KR1wgO0iiJ-C6TCPSixIiRsSyMPpcPvG"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 25, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "gran-kaioshin",
        "Personaje": "Gran Kaioshin",
        "Raza": "Kaioshin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/194LJHId-JhEX3SzIIymQN7ZLzFdN6wJ0"
        ],
        "stats": { "fuerza": 70, "velocidad": 60, "ki": 80, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "kaioshin-sur",
        "Personaje": "Kaioshin del Sur",
        "Raza": "Kaioshin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/11f6Icb5aBLXLY3glTrI9fs9PCz1i6Nfr"
        ],
        "stats": { "fuerza": 65, "velocidad": 55, "ki": 60, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "kaioshin-oeste",
        "Personaje": "Kaioshin del Oeste",
        "Raza": "Kaioshin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1hIaX4GAgG4hlTHhidLlVWRsLee8HqnrF"
        ],
        "stats": { "fuerza": 50, "velocidad": 55, "ki": 65, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "kaioshin-norte",
        "Personaje": "Kaioshin del Norte",
        "Raza": "Kaioshin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1654EmQpwxdsJCnqe4CbzjLCTr3RCj57z"
        ],
        "stats": { "fuerza": 40, "velocidad": 35, "ki": 50, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "gran-kaito",
        "Personaje": "Gran Kaito",
        "Raza": "Kai",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1kieQsfCoO3VWufwUSy9iJRi7AqGnJQvG"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "kaito-este",
        "Personaje": "Kaito del Este",
        "Raza": "Kai",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1NRpYtAK8XpTacnWEWiYPKb7b8kBB7_Nj"
        ],
        "stats": { "fuerza": 25, "velocidad": 25, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "kaito-oeste",
        "Personaje": "Kaito del Oeste",
        "Raza": "Kai",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1eXsw970oAGIO6ygr0PxZ6P9-rbjrZ-F8"
        ],
        "stats": { "fuerza": 25, "velocidad": 25, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "kaito-sur",
        "Personaje": "Kaito del Sur",
        "Raza": "Kai",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1cPRmsXMDwbN0FEIopmeQEivCnCKV9yRB"
        ],
        "stats": { "fuerza": 30, "velocidad": 20, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "enma-daioh",
        "Personaje": "Enma Daioh",
        "Raza": "Dios",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Juez del Más Allá",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1NDIyxk9Mj1M43LGM3X35IaIYK2i9F5Hq"
        ],
        "stats": { "fuerza": 40, "velocidad": 30, "ki": 50, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "gregory",
        "Personaje": "Gregory",
        "Raza": "Criatura mágica",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1yj7biSvN8Vvv-nRE_10c4LHCOHZn1DbW"
        ],
        "stats": { "fuerza": 5, "velocidad": 15, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "kibito",
        "Personaje": "Kibito",
        "Raza": "Shinjin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Sirviente de Shin",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1PVE3HqmJrn-W4A_taFZ1EuUTcM_VdJA8"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "kibitoshin-z",
        "Personaje": "Kibitoshin-Z",
        "Raza": "Shinjin",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Dioses del Universo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tX2vcM7SPw4dQZvkcQrxD8JoPaRdsfOO"
        ],
        "stats": { "fuerza": 50, "velocidad": 45, "ki": 60, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "porunga",
        "Personaje": "Porunga",
        "Raza": "Dragón",
        "serie": "db-z",
        "planetaOrigen": "Namek",
        "universo": "7",
        "afiliaciones": "Dragón de Namek",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1gfweqk2wOvIiYeJG6Cb7YnEJLtKTw_YC"
        ],
        "stats": { "fuerza": 60, "velocidad": 50, "ki": 70, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "shenron-z",
        "Personaje": "Shenron-Z",
        "Raza": "Dragón",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragón de la Tierra",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1apV3Biyz8IKFh-RFX6LCgk45mZdf3KRN"
        ],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 65, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "gran-patriarca",
        "Personaje": "Gran Patriarca",
        "Raza": "Namekiano",
        "serie": "db-z",
        "planetaOrigen": "Namek",
        "universo": "7",
        "afiliaciones": "Anciano de Namek",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1zdpLpx8A1DO9VGVYxVJDod8Lfa7C8pnY"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 60, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "janemba",
        "Personaje": "Janemba",
        "Raza": "Demonio",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1AKXa1aF3mx4VjUtp0WbMY2er5H1DujN2",
            "https://lh3.googleusercontent.com/d/1FvAKpSvsrwkFzQX5KgCQQKtByxM6dv14"
        ],
        "stats": { "fuerza": 90, "velocidad": 80, "ki": 80, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "cooler",
        "Personaje": "Cooler",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Ejército de Cooler",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1TxSLefpmvt8oXaC9EgilfzwiWfwzJcfJ",
            "https://lh3.googleusercontent.com/d/1JGnGWhanDSVlobQjG7CW5v-CqV4wdYEd"
        ],
        "stats": { "fuerza": 85, "velocidad": 80, "ki": 80, "tecnica": 75 },
        "transformaciones": []
    },
    {
        "id": "meta-cooler",
        "Personaje": "Meta-Cooler",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1KC8h1bvgOUh7mCiyDkkqVzYYoYOVkTl1",
            "https://lh3.googleusercontent.com/d/1IqKe_vCa859o9ZPF5tM__2FXkNn5ALbd"
        ],
        "stats": { "fuerza": 85, "velocidad": 80, "ki": 75, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "bojack",
        "Personaje": "Bojack",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Piratas Galácticos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1iy1tzjm8YjHL77dSBzUe9iaAHh1oALyZ",
            "https://lh3.googleusercontent.com/d/1UPqxbOQqlQACQNztDEeLMh8d4rhtT0OU"
        ],
        "stats": { "fuerza": 75, "velocidad": 70, "ki": 65, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "lord-slug",
        "Personaje": "Lord Slug",
        "Raza": "Namekiano",
        "serie": "db-z",
        "planetaOrigen": "Namek",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1_jZyPru_BNczio6is8MUEKMjc3VRQ9tE",
            "https://lh3.googleusercontent.com/d/1B0vLG6Qk6RDxhWBWklP2XKosCzNgbFHv",
            "https://lh3.googleusercontent.com/d/17d8atE-fzDE5_aI_lEPtI4aHeEIORWad"
        ],
        "stats": { "fuerza": 70, "velocidad": 60, "ki": 65, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "garlic-jr",
        "Personaje": "Garlic Jr.",
        "Raza": "Demonio",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Di-xLc8Zfc0veqq1Dnm7u-1TtjBIsfhL",
            "https://lh3.googleusercontent.com/d/1Pk51IcIT_GRSlwPZkUU4OBmjLAyVJf_K"
        ],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 45, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "hirudegarn",
        "Personaje": "Hirudegarn",
        "Raza": "Demonio",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/18QyNGfIaArNv9Q8X8k8njfs4pOXaNNc6",
            "https://lh3.googleusercontent.com/d/1beXqgEo8D20CS2FLaZdGDyzjit2mnVlJ"
        ],
        "stats": { "fuerza": 85, "velocidad": 75, "ki": 70, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "tapion",
        "Personaje": "Tapion",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ztATriCuUBJuFJu4BMfDYnz6LhjjTbcA"
        ],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 50, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "minotia",
        "Personaje": "Minotia",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Um3LezHbX9ZISi7AD6xafu-JUVUa3hf9"
        ],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 45, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "hoy",
        "Personaje": "Hoy",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1UzmoAxSmOsMIFHJ--lx97J9VUPUXmXO2"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "turles",
        "Personaje": "Turles",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Ejército de Turles",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1we6HEfjYGtWhpE5Rz6yerNbDF3I18zka",
            "https://lh3.googleusercontent.com/d/1HIPypyKSKMJQyqNdmBj5_f__qs_25kd6"
        ],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 45, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "dr-wheelo",
        "Personaje": "Dr. Wheelo",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1YTFDgzJBFsh6zdSezsSJE60rUU0ldY5N"
        ],
        "stats": { "fuerza": 50, "velocidad": 30, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "dr-kochin",
        "Personaje": "Dr. Kochin",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/15dhvnryNsCbbSBdXm-vn2m4Wq9MJKI1j"
        ],
        "stats": { "fuerza": 10, "velocidad": 15, "ki": 25, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "dr-lychee",
        "Personaje": "Dr. Lychee",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1oS8kkCfGtMVIsGDUBG4VoDJkFITtimtF"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 40, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "hatchiyack",
        "Personaje": "Hatchiyack",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1yXE3TqWO764KKcSEfVMLshKqmzS5-ODZ",
            "https://lh3.googleusercontent.com/d/1HPaKbTbsVVuUOBIeRDfbV848BQZjZBX0"
        ],
        "stats": { "fuerza": 75, "velocidad": 65, "ki": 60, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "androide-13",
        "Personaje": "Androide 13",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1FJ97m5Qu3zDHUC6_3PYsEUiQOmyPPMTc",
            "https://lh3.googleusercontent.com/d/156KrI50WRX5eAB8F6xwJURhbvB6G-mQb"
        ],
        "stats": { "fuerza": 70, "velocidad": 60, "ki": 55, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "androide-14",
        "Personaje": "Androide 14",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1sBcpvsESiCuR3ThE_NfcaRyVramD8fgm"
        ],
        "stats": { "fuerza": 60, "velocidad": 45, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "androide-15",
        "Personaje": "Androide 15",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1XKOwLl42utXXPa2IojcLfD3XnUkeV-py"
        ],
        "stats": { "fuerza": 55, "velocidad": 55, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "bio-broly",
        "Personaje": "Bio-Broly",
        "Raza": "Bio-Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1NwK2H4LllNgm2tnB9Tz92WSqPLashSTT"
        ],
        "stats": { "fuerza": 75, "velocidad": 65, "ki": 55, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "tarble",
        "Personaje": "Tarble",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1aDXxEnUQE01PnxIbiy5K9tB65ppUOY4m"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "capitan-ginyu",
        "Personaje": "Capitán Ginyu",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Fuerzas Especiales Ginyu",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1UKbDOBmHqqWQODTWTSkr0WqGUWohN7zN",
            "https://lh3.googleusercontent.com/d/1VD69inZXRhfyX5rgPgdGRLVtgKcn4Bm6"
        ],
        "stats": { "fuerza": 50, "velocidad": 45, "ki": 40, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "burter",
        "Personaje": "Burter",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Fuerzas Especiales Ginyu",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mG9U_5KLmcvMABD_wLExA5xsUxBzOjO4"
        ],
        "stats": { "fuerza": 40, "velocidad": 55, "ki": 30, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "jeice",
        "Personaje": "Jeice",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Fuerzas Especiales Ginyu",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1GhUjMtDZnDN1tSyAvJJP9rhieHeVUeWZ"
        ],
        "stats": { "fuerza": 40, "velocidad": 45, "ki": 30, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "recoome",
        "Personaje": "Recoome",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Fuerzas Especiales Ginyu",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1xoU8Tbu3ODQ99MR4JS3cf674RpLXzBVK"
        ],
        "stats": { "fuerza": 50, "velocidad": 35, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "guldo",
        "Personaje": "Guldo",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Fuerzas Especiales Ginyu",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Zw0iwjFY-L2W2JMI2vUjlyYezKIXfwPN"
        ],
        "stats": { "fuerza": 20, "velocidad": 20, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "zarbon",
        "Personaje": "Zarbon",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Élite de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/17vBB5S_y3rK_ghYaurHRzy-38ECV1vmv",
            "https://lh3.googleusercontent.com/d/1HFmNIw3dDh6wbVfJMKO62sG4yKNMop2i"
        ],
        "stats": { "fuerza": 45, "velocidad": 45, "ki": 35, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "dodoria",
        "Personaje": "Dodoria",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Élite de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1eEeOlh9kefrXF7EzfAqiFEW9tK3DABGs"
        ],
        "stats": { "fuerza": 45, "velocidad": 35, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "rey-cold",
        "Personaje": "Rey Cold",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Familia Real",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1OTA-qHN7DmgB0c3ql-3iADHIADAfAA8E"
        ],
        "stats": { "fuerza": 70, "velocidad": 60, "ki": 60, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "appule",
        "Personaje": "Appule",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Ejército de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1VcRkLZ3us5LoN645a5ivnNLFR3a2_yqm"
        ],
        "stats": { "fuerza": 20, "velocidad": 20, "ki": 15, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "cranbo",
        "Personaje": "Cranbo",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Ejército de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1fY9QHnXW1kWTFvqTcZgWGleSs1SRvmA8"
        ],
        "stats": { "fuerza": 15, "velocidad": 15, "ki": 10, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "fasha",
        "Personaje": "Fasha",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Élite Saiyan",
        "estado": "Fallecida",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1LkqAgJZKyBeRSsri3t1XvLsCtoZ_rwHp",
            "https://lh3.googleusercontent.com/d/1IP-kbPoCxg2Dxk2e5N_tv59P6nB6e-L5"
        ],
        "stats": { "fuerza": 35, "velocidad": 35, "ki": 25, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "tora",
        "Personaje": "Tora",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Élite Saiyan",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mwQH3aaY3OSaGJNOwnP-aJycdfjMSWTi",
            "https://lh3.googleusercontent.com/d/18d2j47J-d9xQWWwqzxkzfzPwshmeBgvD"
        ],
        "stats": { "fuerza": 40, "velocidad": 35, "ki": 25, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "shugesh",
        "Personaje": "Shugesh",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Élite Saiyan",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Z8fD5rVh8gSHq-TDcmCkYofywMgBWJCh",
            "https://lh3.googleusercontent.com/d/1y3BmpPI8mZN4hvTkAtFNbFoHerZ2M4iH"
        ],
        "stats": { "fuerza": 40, "velocidad": 30, "ki": 25, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "borgos",
        "Personaje": "Borgos",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Élite Saiyan",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1NwcEDXEGOcAQrhZFNs262zXlTJPGkfN3",
            "https://lh3.googleusercontent.com/d/1mqegpHJIHNSaYZ1fuCbA5erzg2H8iYHY"
        ],
        "stats": { "fuerza": 45, "velocidad": 25, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "zangya",
        "Personaje": "Zangya",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Piratas Galácticos",
        "estado": "Derrotada",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/16PcJ6ebooczF7ar9uJOffP2-ruIiaGt8"
        ],
        "stats": { "fuerza": 35, "velocidad": 40, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "bujin",
        "Personaje": "Bujin",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Piratas Galácticos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1OpBQBXGCiwffdjsue3_fsdG7mZQ9R7FK"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 25, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "bido",
        "Personaje": "Bido",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Piratas Galácticos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1XKtM53hJR5Af-BEsVjTkKKpv6D5eE8ZP"
        ],
        "stats": { "fuerza": 35, "velocidad": 25, "ki": 25, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "kogu",
        "Personaje": "Kogu",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Ejército de Cooler",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1sV3RuLDVl5wP_teF5gl2Ni1L1t52vPCO",
            "https://lh3.googleusercontent.com/d/122CBN11oAprc3c72ZQXsn_waPF1iiodr"
        ],
        "stats": { "fuerza": 25, "velocidad": 30, "ki": 20, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "salza",
        "Personaje": "Salza",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Élite de Cooler",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1aq-BaKtz3NtqVePUypYdK2E3MULKnhBS"
        ],
        "stats": { "fuerza": 40, "velocidad": 40, "ki": 35, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "dore",
        "Personaje": "Dore",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Élite de Cooler",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/14hFQUu4AC2bQ6t_1NVVJxdWhY2DL9a4j"
        ],
        "stats": { "fuerza": 40, "velocidad": 30, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "neiz",
        "Personaje": "Neiz",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Élite de Cooler",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1o2CTJVrAGJwz5rlytLQG4l4_gndn1u8z"
        ],
        "stats": { "fuerza": 35, "velocidad": 35, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "amond",
        "Personaje": "Amond",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Ejército de Turles",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/11goi0V7l8wqyl7J8VVg-9Bjb_FOnKqai"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 20, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "cacao",
        "Personaje": "Cacao",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Ejército de Turles",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Yp_w12DYkZSG54RRHRtxEb4iohcpev6M"
        ],
        "stats": { "fuerza": 25, "velocidad": 25, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "ginger",
        "Personaje": "Ginger",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Ejército de Turles",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1i7-z0-90nrW0XRu1QoIH4Qgavb6VAUcY"
        ],
        "stats": { "fuerza": 25, "velocidad": 20, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "nicky",
        "Personaje": "Nicky",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Ejército de Turles",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1LP1_D_8arxR5OMhhoHEokoftSPS7pylI"
        ],
        "stats": { "fuerza": 25, "velocidad": 20, "ki": 15, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "kado",
        "Personaje": "Kado",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Ejército de Turles",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1KGAo9FeW34bHcZcAGC4bRUEag1tOgrLG"
        ],
        "stats": { "fuerza": 20, "velocidad": 20, "ki": 15, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "abo",
        "Personaje": "Abo",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Piratas Espaciales",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1IFd7qFnABVKuSM6GrrgPbbx0jQ3RBfd8"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 25, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "aka",
        "Personaje": "Aka",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Galaxia",
        "universo": "7",
        "afiliaciones": "Piratas Espaciales",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1hJg1IXzJuLF0NsYZyzHHcQDy4pu6ZvfR"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "dr-gero",
        "Personaje": "Dr. Gero",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Patrulla Roja",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1RGqtJOHy3MF5ZA9BDyp8nxf8kf-byYEC"
        ],
        "stats": { "fuerza": 15, "velocidad": 10, "ki": 25, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "androide-19",
        "Personaje": "Androide 19",
        "Raza": "Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Patrulla Roja",
        "estado": "Destruido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1y3rznhHLePFJ_-OsOyN0JPgvDRwDSOW7"
        ],
        "stats": { "fuerza": 50, "velocidad": 40, "ki": 40, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "pui-pui",
        "Personaje": "Pui Pui",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Esbirros de Babidi",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/17a5lGIQOTrG-miSdzUPWnKgmj10weM6S"
        ],
        "stats": { "fuerza": 25, "velocidad": 20, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "yamu-spopovich",
        "Personaje": "Yamu & Spopovich",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Esbirros de Babidi",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1nW-vEvlf38zihTcSkdIMi0TjdXDmHGfy"
        ],
        "stats": { "fuerza": 25, "velocidad": 20, "ki": 20, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "cell-jr",
        "Personaje": "Cell Jr.",
        "Raza": "Bio-Androide",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Cell",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1YJu1aqE5gcaS0sZ4lBeZoxOpIwrERQ-v"
        ],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 45, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "saibamen",
        "Personaje": "Saibamen",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ejército Saiyan",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Z0y3_eB3vVN28OoNcobmNSVIGY8xouaL"
        ],
        "stats": { "fuerza": 20, "velocidad": 25, "ki": 15, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "bulla-z",
        "Personaje": "Bulla-Z",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Brief",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ot6kYmW8N-x0AlGZMACCEYSuYzvdNErr"
        ],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "marron",
        "Personaje": "Marron",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia de Krillin",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ig4n3vPV8EWLZvJJCx7LMW8iVe1Vz4yr"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "maron",
        "Personaje": "Maron",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1n3iQmc-5Dw8cXfRDSHIXHozmsASSHkPL"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "puar-z",
        "Personaje": "Puar-Z",
        "Raza": "Gato parlante",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Amigo de Yamcha",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1gyJ3xKm4h6UnjmNqW-4KBQdDCwCSNPGO"
        ],
        "stats": { "fuerza": 3, "velocidad": 10, "ki": 2, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "launch-z",
        "Personaje": "Launch-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Escuela Tortuga",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1h-A3NbNI0MwFYHp_fqYJnB02JxbU_h0L",
            "https://lh3.googleusercontent.com/d/1iOgOh1eZnEl6w3TgKko4w6PDvJ8JRMbo"
        ],
        "stats": { "fuerza": 15, "velocidad": 20, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "oxking-z",
        "Personaje": "Ox-King-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Son",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1PZVYRIX7n-NA3P8BPr_WIy9e7-RUBlmW"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 10, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "granjero",
        "Personaje": "Granjero",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1bXTXeezgAsUO9YR-R8pqF-40c5NYnUG_"
        ],
        "stats": { "fuerza": 5, "velocidad": 5, "ki": 2, "tecnica": 3 },
        "transformaciones": []
    },
    {
        "id": "erasa",
        "Personaje": "Erasa",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Amiga de Videl",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1obMVbmdzZRraIzegP0MQpQOfrB21vV5Q"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "baba-z",
        "Personaje": "Baba-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Vidente",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "dr-brief-z",
        "Personaje": "Dr. Brief-Z",
        "Raza": "Humano",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Corporación Cápsula",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1WQeTEy0_e_IewpAnlshISQIcmrDJ-utE"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "panchy-z",
        "Personaje": "Panchy-Z",
        "Raza": "Humana",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Brief",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1qmoowKx3XIrOVP5iT69vkK9ZEO6lAoA7"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "icarus",
        "Personaje": "Icarus",
        "Raza": "Dragón",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Mascota de Gohan",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1zEfZvLVA2uPOPpk0irB9LhpstchclgD_"
        ],
        "stats": { "fuerza": 15, "velocidad": 25, "ki": 10, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "rey-vegeta",
        "Personaje": "Rey Vegeta",
        "Raza": "Saiyan",
        "serie": "db-z",
        "planetaOrigen": "Planeta Vegeta",
        "universo": "7",
        "afiliaciones": "Rey de los Saiyans",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1dM3GXLR-8NsvtSfdH5AQeEiU-zGd2pGN"
        ],
        "stats": { "fuerza": 45, "velocidad": 40, "ki": 35, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "princesa-serpiente",
        "Personaje": "Princesa Serpiente",
        "Raza": "Diosa",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Serpiente del Camino",
        "estado": "Viva",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1bW8fFvDOUwJ_HcvvbyaJL9kVwK5mPRms"
        ],
        "stats": { "fuerza": 15, "velocidad": 20, "ki": 30, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "mez",
        "Personaje": "Mez",
        "Raza": "Demonio",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Guardianes del Más Allá",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1BmQMxg4_sLB9IFCogRhiSE_Y5O9rtXsp"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 15, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "goz",
        "Personaje": "Goz",
        "Raza": "Demonio",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Guardianes del Más Allá",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Jtpbu2yfZrFTeQVjZH1XVUXSq8VQ_qdv"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 15, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "arqua",
        "Personaje": "Arqua",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1PvGMTQ9FXTqE1I4qtxaIsqYOrhuiVNa7"
        ],
        "stats": { "fuerza": 15, "velocidad": 10, "ki": 10, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "caterpy",
        "Personaje": "Caterpy",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1X9ZDETXoxSUaeL1ZD6csxnFguXQuMuj7"
        ],
        "stats": { "fuerza": 15, "velocidad": 10, "ki": 10, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "arbee",
        "Personaje": "Arbee",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/13KWRo6w32-0STue4KPVmWJE9YzgS9_UT"
        ],
        "stats": { "fuerza": 18, "velocidad": 8, "ki": 10, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "angela",
        "Personaje": "Angela",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1xT9GFhehwjIsD7xlXK21VpFsxt_Ee4Sa"
        ],
        "stats": { "fuerza": 12, "velocidad": 15, "ki": 10, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "angila",
        "Personaje": "Angila",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1gYq4ICTmsc4FAS--zrwJ4qQtAGpnCej1"
        ],
        "stats": { "fuerza": 12, "velocidad": 15, "ki": 10, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "caroni",
        "Personaje": "Caroni",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1cutaefG5cixVIOq_2eKfZ4w9w7WTM3_t"
        ],
        "stats": { "fuerza": 15, "velocidad": 12, "ki": 8, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "pirozhki",
        "Personaje": "Pirozhki",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1QormEaWqmE5hPFpYJMqgkJ9GpqlKWrbr"
        ],
        "stats": { "fuerza": 15, "velocidad": 12, "ki": 8, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "miss-piiza",
        "Personaje": "Miss Piiza",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mLk1ZPyJ2ILAmwcHCTyv2m0u6zTPogqR"
        ],
        "stats": { "fuerza": 12, "velocidad": 10, "ki": 8, "tecnica": 8 },
        "transformaciones": []
    },
    {
        "id": "capitan-chicken",
        "Personaje": "Capitán Chicken",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1PF1IntD5bhj1qCkzgRc512HJBjxX7R6S"
        ],
        "stats": { "fuerza": 10, "velocidad": 10, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "world-tournament",
        "Personaje": "World Tournament",
        "Raza": "Objeto",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Objeto",
        "estado": "Inactivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Uvyqh0DipykxmT6JQOTJUg9-XhmmnEE_"
        ],
        "stats": { "fuerza": 0, "velocidad": 0, "ki": 0, "tecnica": 0 },
        "transformaciones": []
    },
    {
        "id": "locutor-alienigena",
        "Personaje": "Locutor Alienígena",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1rMRyPngUXvOXi9EfIXdR-QOCxwoTg5Gs"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "scratch-z",
        "Personaje": "Scratch-Z",
        "Raza": "Mascota",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1vmrsWc_rTBJ4j-dSZFu9I7xW4_HsU6RA"
        ],
        "stats": { "fuerza": 3, "velocidad": 8, "ki": 2, "tecnica": 3 },
        "transformaciones": []
    },
    {
        "id": "chilled",
        "Personaje": "Chilled",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Planeta Freezer N° 79",
        "universo": "7",
        "afiliaciones": "Antepasado de Freezer",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Qo6dNy6IY9pftFXlLnR6zh6CMT_ajoc9"
        ],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 50, "tecnica": 45 },
        "transformaciones": []
    },
    {
        "id": "bibidi",
        "Personaje": "Bibidi",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ctxg_rxoCwCs2CNSiJXYw0N2YQTsCK0Z"
        ],
        "stats": { "fuerza": 10, "velocidad": 15, "ki": 55, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "cynthia",
        "Personaje": "Cynthia",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1OoOIty7lfsBBMqj0Kck1KZq0NH3Sdcea"
        ],
        "stats": { "fuerza": 10, "velocidad": 10, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "nain",
        "Personaje": "Nain",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mlG_x_rluXlAqxPdgOEz42fWqy5INTNA"
        ],
        "stats": { "fuerza": 10, "velocidad": 10, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "lakasei",
        "Personaje": "Lakasei",
        "Raza": "Alienígena",
        "serie": "db-z",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Fallecido",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1NMiptH2Ba5AP-bcQVpJr4t1miSpqpUY8"
        ],
        "stats": { "fuerza": 10, "velocidad": 10, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "toribot-z",
        "Personaje": "Toribot",
        "Raza": "Robot",
        "serie": "db-z",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Inactivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "Aparición en Dragon Ball Z" },
        "primeraAparicionManga": null,
        "historia": "Personaje importante del universo Dragon Ball Z.",
        "descripcion": "Personaje del universo Dragon Ball Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1nEIMBC4jSFJq1Wlo9ovwRPFDdPEQwxoZ"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 2, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "goku-gt",
        "Personaje": "Goku GT",
        "Raza": "Saiyan",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z, Equipo GT",
        "estado": "Vivo",
        "edad": "Fisicamente 12 (cronologicamente 47)",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Goku es convertido en niño nuevamente por Pilaf usando las Esferas del Dragón de la Estrella Negra al inicio de Dragon Ball GT. A lo largo de la serie, viaja por el universo recolectando estas esferas junto a Pan y Trunks. Alcanza nuevas transformaciones como Super Saiyan 3 y Super Saiyan 4, esta última al controlar el poder del Oozaru. Se enfrenta a Baby, los Súper Androides 17, los Dragones Malignos y finalmente a Yi Xing Long, derrotándolo con el Espíritu de los Saiyans. Su cola vuelve a crecer durante la serie, permitiéndole acceder al Super Saiyan 4.",
        "descripcion": "El héroe convertido en niño que busca las Esferas de la Estrella Negra alcanzando el Super Saiyan 4.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1jX0mFeIasSCXe4703xT8gAXNNju4KH51",
            "https://lh3.googleusercontent.com/d/1mVgYvQXLYZcnnBJ3vxlvBO3fbm6nPTlm",
            "https://lh3.googleusercontent.com/d/1TMZQKPVpPtJvyW7s_ldraqkD6lXFrKW7",
            "https://lh3.googleusercontent.com/d/1VYJ19WtiuqMwX_K3z2XhAZTvzp8Ge6jR",
            "https://lh3.googleusercontent.com/d/12rjrdKr6Ru9aZbZcNjc1KbslqEIn_AVp",
            "https://lh3.googleusercontent.com/d/1CGYRJQUf3Idi-Hz-Q-XLlg4KXzMIidMl",
            "https://lh3.googleusercontent.com/d/1WdMNsxwYcHaER3kPa02LAfE-CWfDoKG2"
        ],
        "stats": { "fuerza": 95, "velocidad": 95, "ki": 90, "tecnica": 85 },
        "transformaciones": ["Super Saiyan", "Super Saiyan 2", "Super Saiyan 3", "Super Saiyan 4", "Super Saiyan 4 (Full Power)"]
    },
    {
        "id": "vegeta-gt",
        "Personaje": "Vegeta GT",
        "Raza": "Saiyan",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Vegeta mantiene su forma adulta durante Dragon Ball GT. Es poseído por Baby, convirtiéndose en Baby Vegeta, el antagonista principal del arco de Baby. Después de ser liberado, ayuda en la lucha contra los Súper Androides 17 y los Dragones Malignos. No logra alcanzar el Super Saiyan 4 de forma natural, pero utiliza el dispositivo Brúl para transformarse forzadamente y ayudar a Goku contra Yi Xing Long. Es uno de los pocos personajes que conserva su estatura adulta en toda la serie.",
        "descripcion": "El orgulloso príncipe Saiyan que lucha contra el control de Baby y los Dragones Malignos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/10hNit4LhCn7XNnR1BDIGckieDBf7nAB_",
            "https://lh3.googleusercontent.com/d/1lTlLGElFDPoP6JHj1mxaurrowq9aFdy6",
            "https://lh3.googleusercontent.com/d/1OdTd90wnA5UCax-Felv8DDlRjl-RJicB",
            "https://lh3.googleusercontent.com/d/1xuQlgYFP_uVfqqwH4rvRpj92Eis50Ls2"
        ],
        "stats": { "fuerza": 92, "velocidad": 88, "ki": 85, "tecnica": 80 },
        "transformaciones": ["Super Saiyan", "Super Saiyan 2", "Super Saiyan 4 (Asistido por Brúl)"]
    },
    {
        "id": "gogeta-gt",
        "Personaje": "Gogeta GT",
        "Raza": "Saiyan (Fusión)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Fusión",
        "estado": "Temporal",
        "edad": "Variable",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 54, "titulo": "La fusión definitiva: Gogeta" },
        "primeraAparicionManga": null,
        "historia": "Gogeta aparece en Dragon Ball GT como la fusión de Goku y Vegeta mediante los Pendientes Pothala, pero con una duración reducida. Alcanza el Super Saiyan 4, convirtiéndose en una de las formas más poderosas de la serie. Se enfrenta a Yi Xing Long (Omega Shenron) con una ventaja abrumadora, pero los pendientes se rompen antes de que pueda dar el golpe final debido a que el cuerpo de Goku es de niño y los pendientes no soportan el poder.",
        "descripcion": "La fusión temporal de Goku y Vegeta en Super Saiyan 4, el guerrero más poderoso de GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Bphs7s-tTbZ-vCUDahmfZT6yO-gwHpsx"
        ],
        "stats": { "fuerza": 98, "velocidad": 96, "ki": 95, "tecnica": 90 },
        "transformaciones": ["Super Saiyan 4"]
    },
    {
        "id": "pan-gt",
        "Personaje": "Pan GT",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Equipo GT",
        "estado": "Vivo",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Pan es la hija de Gohan y Videl, y la nieta de Goku. En Dragon Ball GT es una de las protagonistas principales, acompañando a Goku y Trunks en la búsqueda de las Esferas del Dragón de la Estrella Negra por el universo. Es valiente, impulsiva y posee una gran habilidad para el combate, aunque no alcanza el nivel de los Saiyans puros. A diferencia de su padre, se dedica a entrenar y proteger la Tierra junto a su abuelo.",
        "descripcion": "La nieta de Goku, valiente y aventurera, que viaja por el universo recolectando las Esferas de la Estrella Negra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1_bZTco13iart7ljbArYNZLQBLGpgxFP1"
        ],
        "stats": { "fuerza": 65, "velocidad": 70, "ki": 60, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "trunks-gt",
        "Personaje": "Trunks GT",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Equipo GT",
        "estado": "Vivo",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Trunks es el hijo de Vegeta y Bulma. En Dragon Ball GT es un adolescente que acompaña a Goku y Pan en su viaje espacial. Es inteligente y hábil con la tecnología, heredando la inteligencia de su madre. Aunque no es tan fuerte como su padre, demuestra ser un guerrero competente, alcanzando el Super Saiyan. Participa en la lucha contra Baby y los demás enemigos de GT.",
        "descripcion": "El hijo adolescente de Vegeta que viaja por el espacio con Goku y Pan.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/10TNB-76V3wkZ-Wt1jKfYgdToVd9vNtOE",
            "https://lh3.googleusercontent.com/d/1sL5qBhbCxf5EiAsdvGBINJAlmfsbtpx5"
        ],
        "stats": { "fuerza": 70, "velocidad": 72, "ki": 65, "tecnica": 60 },
        "transformaciones": ["Super Saiyan"]
    },
    {
        "id": "baby-vegeta",
        "Personaje": "Baby Vegeta",
        "Raza": "Tsufur (Parásito) / Saiyan",
        "serie": "db-gt",
        "planetaOrigen": "Plant",
        "universo": "7",
        "afiliaciones": "Tsufurianos, Baby",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 22, "titulo": "La venganza de Baby" },
        "primeraAparicionManga": null,
        "historia": "Baby Vegeta es la forma más poderosa de Baby, el último tsufuriano sobreviviente que busca vengar a su raza esclavizada por los Saiyans. Al poseer el cuerpo de Vegeta, Baby accede a todo su poder y alcanza transformaciones como Super Baby 1 y Super Baby 2. Es el principal antagonista del primer gran arco de Dragon Ball GT, logrando incluso dominar la Tierra entera con sus huevos tsufurianos. Goku lo derrota finalmente en el espacio exterior con el Super Saiyan 4.",
        "descripcion": "El último tsufuriano que posee a Vegeta para vengar su raza y dominar el universo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1DkBbNQt869Bx5IJ1PPwg89UBfrnXZmDq",
            "https://lh3.googleusercontent.com/d/1OLIfaXP7b5puvR7B2P50Y1ffE0OZ091k",
            "https://lh3.googleusercontent.com/d/1_BvSpfcGRUCeFH66JgemPVgB8PPleOCb",
            "https://lh3.googleusercontent.com/d/16Nqy_pyevySI2BY68hIYyids8iqjl_-i"
        ],
        "stats": { "fuerza": 90, "velocidad": 88, "ki": 85, "tecnica": 80 },
        "transformaciones": ["Golden Great Ape", "Super Baby 1", "Super Baby 2"]
    },
    {
        "id": "yi-xing-long",
        "Personaje": "Yi Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 49, "titulo": "El dragón de una estrella" },
        "primeraAparicionManga": null,
        "historia": "Yi Xing Long, también conocido como Omega Shenron en español, es el más poderoso de los Dragones Malignos. Nace de la Esfera de Una Estrella, corrompida por el uso excesivo de las Esferas del Dragón en el pasado. Es la fusión de todos los Dragones Malignos tras absorber a sus hermanos. Posee un poder abrumador que obliga a Goku y Vegeta a fusionarse en Gogeta Super Saiyan 4. Su ataque más devastador es el Minus Energy Power Ball. Es derrotado finalmente por Goku con el Genki Dama de todos los habitantes de la Tierra y el universo.",
        "descripcion": "El líder de los Dragones Malignos, el enemigo más poderoso de Dragon Ball GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1YAngPH-H5x3QsFZ8W-PtwvnfvtTYEIsQ",
            "https://lh3.googleusercontent.com/d/1rxAoKl9PuF7pAzDafBoeVSLJbrHQH1MO"
        ],
        "stats": { "fuerza": 97, "velocidad": 93, "ki": 95, "tecnica": 90 },
        "transformaciones": ["Yi Xing Long", "Omega Shenron", "Minus Energy"]
    },
    {
        "id": "super-17",
        "Personaje": "Súper Número 17",
        "Raza": "Androide (Cibernético)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dr. Myuu, Dr. Gero",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 42, "titulo": "El Súper Androide 17" },
        "primeraAparicionManga": null,
        "historia": "El Súper 17 es el resultado de la fusión entre el Androide 17 original y el Hell Fighter 17, controlado por los doctores Myuu y Gero desde el Otro Mundo. Es uno de los enemigos más formidables de GT, capaz de absorber cualquier ataque de energía y devolverlo potenciado. Derrota fácilmente a Goku, Vegeta y los demás Guerreros Z. Finalmente es vencido por Goku con la ayuda de Androide 18, quien lo distrae emotivamente, permitiendo que Goku lo atraviese con un Kamehameha.",
        "descripcion": "La fusión letal de los dos Androides 17, capaz de absorber cualquier ataque de energía.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/168QoOhbQCGvw3U9MtHg0G7JZkKpiNMLY"
        ],
        "stats": { "fuerza": 93, "velocidad": 90, "ki": 92, "tecnica": 85 },
        "transformaciones": ["Super Android 17"]
    },
    {
        "id": "uub-gt",
        "Personaje": "Uub GT",
        "Raza": "Humano (Reencarnación de Majin Buu)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Uub es la reencarnación de Kid Buu entrenado por Goku. En Dragon Ball GT ayuda a los Guerreros Z contra Baby. Al ser poseído por Baby, se vuelve un enemigo peligroso. Después de ser liberado, continúa protegiendo la Tierra. Misteriosamente desaparece durante el arco de los Súper 17, posiblemente eliminado por los guionistas, y no se le vuelve a ver en el arco de los Dragones Malignos.",
        "descripcion": "La reencarnación de Kid Buu entrenada por Goku que lucha contra Baby.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1RJjmzyucGxXxZwdiZfCwlO7cyGqqpaMp",
            "https://lh3.googleusercontent.com/d/1UIdVraRIMwtOM2CEseP9REQ-oWUYx1xY"
        ],
        "stats": { "fuerza": 78, "velocidad": 72, "ki": 75, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "giru",
        "Personaje": "Giru",
        "Raza": "Robot (Máquina Mutante)",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Equipo GT",
        "estado": "Activo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 17, "titulo": "El robot perdido" },
        "primeraAparicionManga": null,
        "historia": "Giru es un pequeño robot que Goku, Pan y Trunks encuentran en el Planeta M-2, el planeta de las Máquinas Mutantes. Inicialmente parece un enemigo, pero se vuelve su aliado inseparable. Tiene la capacidad única de rastrear y detectar las Esferas del Dragón de la Estrella Negra, convirtiéndose en el guía del equipo GT en su búsqueda espacial. Su lealtad y valentía lo hacen un miembro querido del equipo.",
        "descripcion": "El pequeño robot que guía a Goku, Pan y Trunks en la búsqueda de las Esferas del Dragón.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/19EbbNiSTUtPSs0Dl9j_g8FljIZuIIcpl"
        ],
        "stats": { "fuerza": 25, "velocidad": 40, "ki": 10, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "baby-gt",
        "Personaje": "Baby GT",
        "Raza": "Tsufuriano (Forma Parásito)",
        "serie": "db-gt",
        "planetaOrigen": "Plant",
        "universo": "7",
        "afiliaciones": "Tsufurianos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 12, "titulo": "El nacimiento de Baby" },
        "primeraAparicionManga": null,
        "historia": "Baby es el último tsufuriano creado por el Dr. Myuu, diseñado para vengar a su raza. Es un parásito que puede poseer cuerpos ajenos, comenzando con un huésped débil hasta llegar a Vegeta. Su objetivo es eliminar a los Saiyans y terraformar la Tierra para convertirla en un nuevo Planeta Plant. Su habilidad de posesión lo convierte en una amenaza única, capaz de controlar a casi cualquier guerrero. Goku lo derrota en el espacio exterior con el Super Saiyan 4.",
        "descripcion": "El parásito tsufuriano creado para vengar a su raza y exterminar a los Saiyans.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1cuuR7i03Ri2SjRH_ycvM13YJQiXe0zRj",
            "https://lh3.googleusercontent.com/d/13zLVdnEYrJSCZkxKSdIE4pGoCip5kfQ6"
        ],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 65, "tecnica": 75 },
        "transformaciones": ["Baby", "Baby (posesión)", "Baby Vegeta"]
    },
    {
        "id": "dr-myuu-y-dr-gero",
        "Personaje": "Dr. Myuu & Dr. Gero",
        "Raza": "Humano / Científico",
        "serie": "db-gt",
        "planetaOrigen": "Tierra / Planeta M-2",
        "universo": "7",
        "afiliaciones": "Máquinas Mutantes, Ejército de Myuu",
        "estado": "Derrotados",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 12, "titulo": "El nacimiento de Baby" },
        "primeraAparicionManga": null,
        "historia": "El Dr. Myuu es el científico jefe del Planeta M-2 y creador de Baby y las Máquinas Mutantes. En el Otro Mundo se alía con el Dr. Gero para crear al Hell Fighter 17 y al Super 17. Juntos representan una de las amenazas científicas más grandes de Dragon Ball GT, usando su inteligencia para crear enemigos casi imbatibles que requieren la cooperación de múltiples guerreros para ser derrotados.",
        "descripcion": "Los dos genios científicos que crean a Baby y al Súper 17 desde el Infierno.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ZRdD431RTw0ywP2Zwmcr0FUNdc7JHtcL"
        ],
        "stats": { "fuerza": 10, "velocidad": 10, "ki": 80, "tecnica": 95 },
        "transformaciones": []
    },
    {
        "id": "hell-fighter-17",
        "Personaje": "Hell Fighter #17",
        "Raza": "Androide (Cibernético)",
        "serie": "db-gt",
        "planetaOrigen": "Infierno",
        "universo": "7",
        "afiliaciones": "Dr. Myuu, Dr. Gero",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 40, "titulo": "El regreso del Infierno" },
        "primeraAparicionManga": null,
        "historia": "Hell Fighter 17 es un androide creado por el Dr. Myuu y el Dr. Gero en el Infierno. Es una copia mejorada del Androide 17 original, diseñada específicamente para el combate. Al fusionarse con el Androide 17 original, forma al Súper 17. Su diseño es idéntico al original pero su personalidad es más agresiva y malvada.",
        "descripcion": "La copia mejorada del Androide 17 creada por Myuu y Gero para fusionarse con el original.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1IyI5i9qfWiTne5itwFuTT5AktbfHjL1m"
        ],
        "stats": { "fuerza": 82, "velocidad": 80, "ki": 78, "tecnica": 75 },
        "transformaciones": []
    },
    {
        "id": "si-xing-long",
        "Personaje": "Si Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 50, "titulo": "El dragón de cuatro estrellas" },
        "primeraAparicionManga": null,
        "historia": "Si Xing Long, también conocido como Nuova Shenron, es el Dragón Maligno de la Esfera de Cuatro Estrellas. Es uno de los pocos dragones honorable y noble, hijo de Shen Long. Posee el poder del fuego y ataca con técnicas como Burning Attack. A diferencia de sus hermanos, no es malvado por naturaleza y respeta a Goku por su fuerza, pero debe cumplir su misión. Goku lo derrota honrándolo en la batalla.",
        "descripcion": "El dragón de cuatro estrellas, honorable guerrero del fuego y el más noble de los Dragones Malignos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1v52MVKWvlbU_JSnhw0i3sHYkOOG9oScT"
        ],
        "stats": { "fuerza": 88, "velocidad": 85, "ki": 82, "tecnica": 80 },
        "transformaciones": []
    },
    {
        "id": "san-xing-long",
        "Personaje": "San Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 50, "titulo": "El dragón de tres estrellas" },
        "primeraAparicionManga": null,
        "historia": "San Xing Long, también conocido como Eis Shenron, es el Dragón Maligno de la Esfera de Tres Estrellas. Es el hermano gemelo de Si Xing Long, pero de personalidad cruel y traicionera. Posee el poder del hielo, pudiendo congelar a sus oponentes con técnicas como Absolute Zero. Ataca a Goku cuando este baja la guardia tras vencer a Nuova, traicionando todo código de honor.",
        "descripcion": "El dragón de tres estrellas, cruel maestro del hielo y hermano traicionero de Nuova.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1DiIfjDaOTlgKfxMv5UmckwmSrO76MrFn"
        ],
        "stats": { "fuerza": 86, "velocidad": 82, "ki": 84, "tecnica": 78 },
        "transformaciones": []
    },
    {
        "id": "qi-xing-long",
        "Personaje": "Qi Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 47, "titulo": "El dragón de siete estrellas" },
        "primeraAparicionManga": null,
        "historia": "Qi Xing Long, también conocido como Haze Shenron, es el Dragón Maligno de la Esfera de Siete Estrellas. Es el primer dragón en aparecer y uno de los más débiles. Su poder es la contaminación, liberando un gas tóxico que envenena todo a su alrededor. Provoca la enfermedad del corazón en Goku y contamina el planeta. Su debilidad es el agua pura, y es derrotado por Pan.",
        "descripcion": "El dragón de siete estrellas que contamina el aire con su veneno tóxico.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1WzkBnLKrIy9gizA4ky2KBznlRBrGc5to",
            "https://lh3.googleusercontent.com/d/1wzjxaCVpXJsZ8eu3DqRA2QUOhXUvoLWV",
            "https://lh3.googleusercontent.com/d/1wjBQpZwUgyDP4mGy5TMlekDQi0Y1Wo52"
        ],
        "stats": { "fuerza": 65, "velocidad": 55, "ki": 70, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "liu-xing-long",
        "Personaje": "Liu Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 48, "titulo": "El dragón de seis estrellas" },
        "primeraAparicionManga": null,
        "historia": "Liu Xing Long, también conocido como Oceanus Shenron, es el Dragón Maligno de la Esfera de Seis Estrellas. Es el único dragón femenino y posee un carácter seductor. Su poder es el control del agua, pudiendo crear tormentas y tsunamis. También tiene la capacidad de lanzar un rayo que revierte la edad de sus oponentes, convirtiendo a Goku en un bebé. Es derrotada por Pan y Trunks.",
        "descripcion": "La dragona de seis estrellas que controla el agua y revierte la edad de sus oponentes.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1XV-SyFsJWQs5fNnRI6T3JYyoOkUQIUAy",
            "https://lh3.googleusercontent.com/d/1Ia8NyJ9PjZHvbeXGgTx3dN2KstNBb-w9"
        ],
        "stats": { "fuerza": 72, "velocidad": 68, "ki": 75, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "liang-xing-long",
        "Personaje": "Liang Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 49, "titulo": "El dragón de dos estrellas" },
        "primeraAparicionManga": null,
        "historia": "Liang Xing Long, también conocido como Rage Shenron, es el Dragón Maligno de la Esfera de Dos Estrellas. Es corpulento y posee un gran poder físico combinado con la habilidad de generar y manipular electricidad. Su ataque principal es el rayo eléctrico. Es derrotado por Goku en su forma Super Saiyan 4. Es el típico bruto del grupo, confiando en su fuerza bruta más que en la estrategia.",
        "descripcion": "El dragón de dos estrellas que domina los rayos eléctricos y la fuerza bruta.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1A4acE8TGB-fqrZGTEBg8zY7jhXMqjBHQ"
        ],
        "stats": { "fuerza": 80, "velocidad": 60, "ki": 65, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "wu-xing-long",
        "Personaje": "Wu Xing Long",
        "Raza": "Dragón Maligno",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Dragones Malignos",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 49, "titulo": "El dragón de cinco estrellas" },
        "primeraAparicionManga": null,
        "historia": "Wu Xing Long, también conocido como Naturon Shenron, es el Dragón Maligno de la Esfera de Cinco Estrellas. Posee el poder de la fusión y transformación, pudiendo absorber y combinar seres vivos con su cuerpo. Absorbe a una mujer y luego a Gohan, usando sus apariencias para engañar. Tiene la capacidad de estirar sus extremidades y cambiar su forma. Es derrotado por Vegeta.",
        "descripcion": "El dragón de cinco estrellas que puede absorber y fusionar seres vivos en su cuerpo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1J_EoGt8C_pjRg7Ci2G8-SEttT9yD2wA9"
        ],
        "stats": { "fuerza": 78, "velocidad": 65, "ki": 72, "tecnica": 80 },
        "transformaciones": []
    },
    {
        "id": "gohan-gt",
        "Personaje": "Gohan GT",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "28",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Gohan en Dragon Ball GT ha abandonado las artes marciales para dedicarse a su familia y su carrera como erudito. Es padre de Pan y esposo de Videl. Ha perdido gran parte de su poder por falta de entrenamiento. Es poseído por Baby y posteriormente absorbido por Wu Xing Long. A pesar de su debilitamiento, demuestra destellos de su poder cuando es necesario proteger a su familia.",
        "descripcion": "El hijo mayor de Goku, ahora un erudito que ha abandonado las artes marciales.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1DDK4EMMHl9WntO5PsXclNsH_nepMGVCy",
            "https://lh3.googleusercontent.com/d/1pArcywW1rC9xRw8pr6cgIa5a3oyjViM2"
        ],
        "stats": { "fuerza": 68, "velocidad": 60, "ki": 65, "tecnica": 70 },
        "transformaciones": []
    },
    {
        "id": "goten-gt",
        "Personaje": "Goten GT",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "24",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Goten en Dragon Ball GT es un adulto joven que ayuda en la defensa de la Tierra cuando es necesario. Se preocupa profundamente por la desaparición de su padre y su sobrina Pan. Participa en la lucha contra Baby y los Dragones Malignos, aunque su poder no es tan alto como en su juventud debido a la falta de entrenamiento constante.",
        "descripcion": "El hijo menor de Goku, un adulto joven que protege la Tierra junto a los Guerreros Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1GwzsCzGxvxKDZYuAj615bZCt4TjXiIFW",
            "https://lh3.googleusercontent.com/d/1JZObvJki65QAkKz4nCf-3EZL1oORkug5"
        ],
        "stats": { "fuerza": 65, "velocidad": 62, "ki": 60, "tecnica": 58 },
        "transformaciones": []
    },
    {
        "id": "buu-gt",
        "Personaje": "Buu GT",
        "Raza": "Majin",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Enfermo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Buu en Dragon Ball GT es el Majin Buu original (gordo) que se ha vuelvo amigo de los Guerreros Z. Durante la serie, cae misteriosamente enfermo y entra en un sueño profundo, posiblemente como resultado del uso excesivo de las Esferas del Dragón o por la contaminación de Qi Xing Long. No participa en la lucha contra los Dragones Malignos, permaneciendo dormido durante todo el arco.",
        "descripcion": "El Majin Buu gordo que cae en un misterioso sueño durante Dragon Ball GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1iZHtuiyysvaEDIeztZxkgwJ5_YTFMLOR"
        ],
        "stats": { "fuerza": 75, "velocidad": 60, "ki": 78, "tecnica": 65 },
        "transformaciones": []
    },
    {
        "id": "android-18-gt",
        "Personaje": "Androide #18 GT",
        "Raza": "Humano (Cibernéticamente mejorado)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia",
        "estado": "Vivo",
        "edad": "37",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Androide 18 en Dragon Ball GT está casada con Krilin y tiene una hija llamada Marron. Conserva su apariencia juvenve debido a sus modificaciones cibernéticas. Ayuda en la lucha contra el Súper 17, usando su conexión emocional con el Androide 17 para distraerlo, lo que permite a Goku dar el golpe final. Es uno de los pocos personajes que no envejece visiblemente.",
        "descripcion": "La androide que ayuda a derrotar al Súper 17 distrayéndolo con su vínculo fraternal.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1RU7tdJnOF7LDDxlB9kKi8a2WiEFza2yO"
        ],
        "stats": { "fuerza": 60, "velocidad": 65, "ki": 50, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "android-17-gt",
        "Personaje": "Androide #17 GT",
        "Raza": "Humano (Cibernéticamente mejorado)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guardabosques",
        "estado": "Vivo (fusionado temporalmente)",
        "edad": "37",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 40, "titulo": "El regreso del Infierno" },
        "primeraAparicionManga": null,
        "historia": "Androide 17 en Dragon Ball GT ha abandonado su vida de lucha y trabaja como guardabosques en una reserva natural, casado y con hijos. Es localizado por Hell Fighter 17 y ambos son forzados a fusionarse, creando al Súper 17. Aunque lucha internamente contra el control, no puede evitar la fusión. Finalmente, la intervención de Androide 18 permite la derrota de Súper 17 y la liberación del 17 original.",
        "descripcion": "El androide guardabosques que es forzado a fusionarse con su contraparte del Infierno.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1lOMjXO-RisugS-XHImy71sWxu4su_N6E"
        ],
        "stats": { "fuerza": 72, "velocidad": 70, "ki": 65, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "bulma-gt",
        "Personaje": "Bulma GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Brief",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Bulma en Dragon Ball GT ha envejecido notablemente, luciendo canas y una madurez que refleja su edad. A pesar de su apariencia, sigue siendo la genio tecnológica del grupo, creando nuevos dispositivos como el radar de las Esferas de la Estrella Negra y el dispositivo Brúl que permite la transformación en Super Saiyan 4. Es la madre de Trunks y Bra.",
        "descripcion": "La genio tecnológica que crea el radar de las Esferas de la Estrella Negra y el dispositivo Brúl.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1TSSpvj3tSuyedrE-xM8S9F1X7elbKrfH"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 10, "tecnica": 95 },
        "transformaciones": []
    },
    {
        "id": "mr-satan-gt",
        "Personaje": "Mr. Satán GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Campeón Mundial",
        "estado": "Vivo",
        "edad": "58",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Mr. Satán en Dragon Ball GT sigue siendo el Campeón Mundial de Artes Marciales, aunque su edad avanzada se nota más. Continúa aprovechándose del crédito por derrotar a los enemigos de la Tierra. Su hija Videl está casada con Gohan y tiene una nieta, Pan. A pesar de su cobardía, demuestra tener un buen corazón cuando la situación lo requiere.",
        "descripcion": "El Campeón Mundial que sigue aprovechando el crédito por salvar la Tierra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1gwQLz_o4s_K9sRw7yHhWsKFzAQRV8gMi"
        ],
        "stats": { "fuerza": 15, "velocidad": 12, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "goku-jr",
        "Personaje": "Goku Jr.",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Descendiente de Goku",
        "estado": "Vivo",
        "edad": "14",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 64, "titulo": "El legado de los Saiyans" },
        "primeraAparicionManga": null,
        "historia": "Goku Jr. es el tataranieto de Goku que aparece en el epílogo de Dragon Ball GT, 100 años después de los eventos principales. Es un joven tímido y de baja estatura, muy similar a su ancestro en personalidad. Participa en el Torneo de Artes Marciales y apenas logra transformarse en Super Saiyan, inspirándose en el espíritu de su bisabuelo. Es el último Saiyan mostrado en la cronología de Dragon Ball.",
        "descripcion": "El tataranieto de Goku que mantiene vivo el legado Saiyan en el futuro lejano.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/15DApgnDY76gT07u0_WEDD6w0IIICAjsm",
            "https://lh3.googleusercontent.com/d/1UzVZ6840cv6U47XT8Y20UceJE5N-T7ZY"
        ],
        "stats": { "fuerza": 30, "velocidad": 28, "ki": 25, "tecnica": 20 },
        "transformaciones": ["Super Saiyan"]
    },
    {
        "id": "vegeta-jr",
        "Personaje": "Vegeta Jr.",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Descendiente de Vegeta",
        "estado": "Vivo",
        "edad": "14",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 64, "titulo": "El legado de los Saiyans" },
        "primeraAparicionManga": null,
        "historia": "Vegeta Jr. es el tataranieto de Vegeta que aparece en el epílogo de Dragon Ball GT. Es el rival y amigo de Goku Jr., al igual que sus ancestros. Posee una personalidade orgullosa y confiada, heredando el carácter de Vegeta. Puede transformarse en Super Saiyan con facilidad, demostrando ser más fuerte que Goku Jr. inicialmente. Participa en el Torneo de Artes Marciales del siglo siguiente.",
        "descripcion": "El tataranieto de Vegeta, orgulloso rival de Goku Jr. en el futuro.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1f2hhs1TLLtJ8no2BLvws29DKNrVZUEPw",
            "https://lh3.googleusercontent.com/d/1WJ_TjsGu6nkd5j-n8SZFvXCk1yKkM3QH"
        ],
        "stats": { "fuerza": 35, "velocidad": 32, "ki": 28, "tecnica": 25 },
        "transformaciones": ["Super Saiyan"]
    },
    {
        "id": "shen-long-definitivo",
        "Personaje": "Shen Long Definitivo",
        "Raza": "Dragón Místico",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Esferas del Dragón",
        "estado": "Desactivado",
        "edad": "Milenarios",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 47, "titulo": "La invocación del dragón definitivo" },
        "primeraAparicionManga": null,
        "historia": "Shen Long Definitivo (Black Smoke Shenron / Ultimate Shenron) es la forma que toma el dragón cuando las Esferas del Dragón de la Estrella Negra son reunidas. Es una versión oscura y gigantesca de Shen Long, de color negro con ojos rojos. Antes de conceder el deseo, se divide en los siete Dragones Malignos, iniciando el arco final de Dragon Ball GT. Representa la corrupción de las Esferas por el mal uso de sus deseos.",
        "descripcion": "La forma oscura de Shen Long que se divide en los siete Dragones Malignos.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/10Ak4mawzqD-BooooRGUF-7kRtMVTF4Vt"
        ],
        "stats": { "fuerza": 85, "velocidad": 70, "ki": 90, "tecnica": 80 },
        "transformaciones": []
    },
    {
        "id": "para-para-brothers",
        "Personaje": "Para Para Brothers",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotados",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 3, "titulo": "Los hermanos Para Para" },
        "primeraAparicionManga": null,
        "historia": "Los Para Para Brothers son un trio de hermanos alienígenas que utilizan una danza especial para luchar. Su técnica característica es bailar en sincronía para generar ondas de choque y ataques combinados. Goku, Pan y Trunks los derrotan en los primeros episodios de la serie. Son uno de los primeros enemigos que enfrenta el Equipo GT en su viaje espacial.",
        "descripcion": "Los trio de hermanos bailarines que luchan con coreografías letales.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1VoPh2wuvg5yiHLhKFic72xYSftEJwlQg"
        ],
        "stats": { "fuerza": 40, "velocidad": 45, "ki": 35, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "dolltakkii",
        "Personaje": "Dolltakkii",
        "Raza": "Máquina Mutante",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Máquinas Mutantes",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 17, "titulo": "El planeta de las máquinas mutantes" },
        "primeraAparicionManga": null,
        "historia": "Dolltakkii es una de las Máquinas Mutantes del Planeta M-2 que sirve al Dr. Myuu. Tiene la apariencia de un muñeco/robot y es uno de los guardianes del planeta. Posee habilidades mecánicas avanzadas pero es derrotado por el Equipo GT durante su visita al planeta. Forma parte del ejército de máquinas que protegen a Baby y al Dr. Myuu.",
        "descripcion": "Una de las máquinas mutantes que protege el Planeta M-2 del Dr. Myuu.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1V6wjFPvI4Mq8cTgZHgx6516bR4zn2Rp3"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 20, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "redict",
        "Personaje": "Redict",
        "Raza": "Máquina Mutante",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Máquinas Mutantes",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 17, "titulo": "El planeta de las máquinas mutantes" },
        "primeraAparicionManga": null,
        "historia": "Redict es una computadora viviente y miembro de las Máquinas Mutantes. Tiene forma de una gran cabeza con una pantalla en el torso. Es uno de los sirvientes del Dr. Myuu en el Planeta M-2. Su función es procesar información y controlar otros sistemas del planeta. Es derrotado durante el ataque del Equipo GT a la fortaleza de Myuu.",
        "descripcion": "La supercomputadora viviente al servicio del Dr. Myuu en el Planeta M-2.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1wcq_5bD44VfaqxjG_SvcHIB1WFUR2I6S"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 30, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "getto",
        "Personaje": "Getto",
        "Raza": "Máquina Mutante",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Máquinas Mutantes",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 18, "titulo": "La fortaleza de Myuu" },
        "primeraAparicionManga": null,
        "historia": "Getto es una Máquina Mutante al servicio del Dr. Myuu. Forma parte del ejército de máquinas que protegen las instalaciones del Planeta M-2. Es un robot de combate con habilidades físicas mejoradas. Es derrotado por el Equipo GT durante su irrupción en la fortaleza del Dr. Myuu.",
        "descripcion": "Robot de combate del ejército de máquinas mutantes del Dr. Myuu.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1S8mSX-74XqElNxnjbo8jdBpxsec_9iSl"
        ],
        "stats": { "fuerza": 30, "velocidad": 25, "ki": 15, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "rivet",
        "Personaje": "Rivet",
        "Raza": "Máquina Mutante",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Máquinas Mutantes",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 18, "titulo": "La fortaleza de Myuu" },
        "primeraAparicionManga": null,
        "historia": "Rivet es una Máquina Mutante de gran tamaño y fuerza bruta que sirve como guardia en la fortaleza del Dr. Myuu. Su cuerpo robusto y sus brazos mecánicos lo convierten en un oponente formidable para el combate cuerpo a cuerpo. Es derrotado por el Equipo GT durante la infiltración en el Planeta M-2.",
        "descripcion": "La máquina mutante de gran tamaño y fuerza que protege la fortaleza de Myuu.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/12Mq6gp53MNdmqhreX7NmjlE3nayOd6fL"
        ],
        "stats": { "fuerza": 35, "velocidad": 20, "ki": 15, "tecnica": 25 },
        "transformaciones": []
    },
    {
        "id": "don-kiar",
        "Personaje": "Don Kiar",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 5, "titulo": "El cazador de tesoros espacial" },
        "primeraAparicionManga": null,
        "historia": "Don Kiar es un cazador de tesoros espacial que se cruza con el Equipo GT en su viaje por el universo. Es un personaje cómico que intenta robar las Esferas del Dragón, pero sus planes siempre terminan en fracaso. A pesar de ser un antagonista menor, proporciona momentos de alivio cómico en los episodios iniciales de la búsqueda espacial.",
        "descripcion": "El torpe cazador de tesoros espacial que intenta robar las Esferas del Dragón.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1trYhKxBV5aHFTiNGCyO_OO3Hjo1rpLKt"
        ],
        "stats": { "fuerza": 25, "velocidad": 25, "ki": 15, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "llood",
        "Personaje": "Llood",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 6, "titulo": "El cazador de recompensas" },
        "primeraAparicionManga": null,
        "historia": "Llood es un cazador de recompensas alienígena que intenta capturar a Goku, Pan y Trunks por una recompensa. Es un personaje menor que aparece durante la travesía espacial del Equipo GT. Utiliza tácticas engañosas para intentar atrapar al grupo, pero es fácilmente derrotado por la superioridad de los Saiyans.",
        "descripcion": "Un cazador de recompensas alienígena que acecha al Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1RbeSMP5jo-oK8eXTl2am903v3xRBqVN7"
        ],
        "stats": { "fuerza": 30, "velocidad": 35, "ki": 20, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "bra-gt",
        "Personaje": "Bra GT",
        "Raza": "Humano-Saiyan (Híbrido)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia Brief",
        "estado": "Vivo",
        "edad": "12",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Bra (o Bura) es la hija de Vegeta y Bulma, la hermana menor de Trunks. En Dragon Ball GT es una niña consentida y mimada que disfruta molestando a su hermano. A diferencia de otros híbridos Saiyan, no muestra interés en las artes marciales y no tiene habilidades de combate destacables. Hereda la actitud arrogante de su padre y la inteligencia de su madre.",
        "descripcion": "La hija menor de Vegeta y Bulma, una niña consentida sin interés en la lucha.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tfDnDOTiu99mPZ7iJzVC_93W_l8utF1S"
        ],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 5, "tecnica": 5 },
        "transformaciones": []
    },
    {
        "id": "videl-gt",
        "Personaje": "Videl GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia",
        "estado": "Vivo",
        "edad": "27",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Videl en Dragon Ball GT es la esposa de Gohan y madre de Pan. Ha abandonado las artes marciales para dedicarse a su familia. Apoya a su hija Pan en sus aventuras y se preocupa profundamente por su seguridad. Conserva su carácter fuerte y decidido, aunque ha canalizado su energía hacia el cuidado de su hogar.",
        "descripcion": "La esposa de Gohan y madre de Pan, ahora dedicada a su familia.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/171uaEQSgOute2QJoTh7vBiUnzh43iUsA"
        ],
        "stats": { "fuerza": 25, "velocidad": 30, "ki": 15, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "chichi-gt",
        "Personaje": "Chi-Chi GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Chi-Chi en Dragon Ball GT ha envejecido notablemente, mostrando canas y arrugas. Sigue siendo la madre protectora y sobreprotectora de Gohan, aunque su carácter se ha suavizado un poco con los años. Se preocupa constantemente por la desaparición de su esposo Goku (convertido en niño) y su nieta Pan. Aparece en momentos familiares a lo largo de la serie.",
        "descripcion": "La esposa de Goku y madre de Gohan, ahora una abuela que se preocupa por su familia.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/19w9OCReHBKkGMAPS-4DnRK9hjMXfB52E"
        ],
        "stats": { "fuerza": 10, "velocidad": 8, "ki": 5, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "krilin-gt",
        "Personaje": "Krilin GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Krilin en Dragon Ball GT ha envejecido y perdido gran parte de su poder, pero sigue siendo un miembro leal de los Guerreros Z. Está casado con Androide 18 y tienen una hija llamada Marron. Participa en la defensa de la Tierra durante la invasión de Baby y la amenaza del Súper 17, aunque su contribución es limitada. Es el mejor amigo de Goku desde su infancia.",
        "descripcion": "El mejor amigo de Goku, ahora un padre de familia que protege la Tierra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1oa_aLsj-WlYvU8vWqfoLQqtZnJcMph-C"
        ],
        "stats": { "fuerza": 40, "velocidad": 45, "ki": 35, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "piccolo-gt",
        "Personaje": "Piccolo GT",
        "Raza": "Namekiano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra (Namek)",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Piccolo en Dragon Ball GT ha envejecido notablemente y su poder ha disminuido. Cuando Baby llega a la Tierra, Piccolo se sacrifica para proteger a Gohan y a los demás, siendo destruido por Baby. Posteriormente, es revivido por las Esferas del Dragón de Namek. En el arco de los Dragones Malignos, ayuda a cuidar de Goku cuando enferma por el veneno de Qi Xing Long.",
        "descripcion": "El namekiano que se sacrifica para proteger a sus amigos de Baby.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1n4GBwDmIqdo14fLyIt44FZT4rC6rp0L7"
        ],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 58, "tecnica": 55 },
        "transformaciones": []
    },
    {
        "id": "dende-gt",
        "Personaje": "Dendé GT",
        "Raza": "Namekiano",
        "serie": "db-gt",
        "planetaOrigen": "Namek",
        "universo": "7",
        "afiliaciones": "Dios de la Tierra",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Dendé en Dragon Ball GT continúa siendo el Dios de la Tierra, cargo que asumió tras la fusión de Piccolo con Kami. Ayuda a los Guerreros Z en la distancia, comunicándose con ellos a través de Mr. Satán. Durante la invasión de Baby, es controlado por los huevos tsufurianos, pero es liberado posteriormente. Sigue siendo un pilar espiritual para la Tierra.",
        "descripcion": "El Dios de la Tierra namekiano que guía espiritualmente a los Guerreros Z.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1rOqr5GiSfOvsaCvGfxgzWg1FWN3ItaKt"
        ],
        "stats": { "fuerza": 15, "velocidad": 15, "ki": 60, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "roshi-gt",
        "Personaje": "Roshi GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "82",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "El Maestro Roshi en Dragon Ball GT es extremadamente anciano pero conserva su personalidad pervertida y sabia. Sigue siendo el maestro de artes marciales más antiguo vivo. Ayuda en la defensa de la Tierra contra Baby y los otros enemigos, aunque su poder es mínimo comparado con los Saiyans. Su longevidad se atribuye a su dominio del ki.",
        "descripcion": "El anciano maestro de artes marciales que sigue siendo una fuente de sabiduría y humor.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1nkJ2d4izvoAHotn5mPVO9L-AMnGOlPeH"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 30, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "ten-shinhan-gt",
        "Personaje": "Ten Shinhan GT",
        "Raza": "Humano (Triclope)",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Ten Shinhan en Dragon Ball GT ha envejecido pero conserva su espíritu de lucha. Entrena diariamente en soledad, manteniendo su poder. Aparece ayudando en la defensa de la Tierra contra Baby y los demás enemigos. Su técnica del Kikoho sigue siendo letal, aunque su alcance es limitado comparado con el poder de los Saiyans.",
        "descripcion": "El guerrero de tres ojos que sigue entrenando y protegiendo la Tierra a pesar de su edad.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1nLTH4XZXQRZIRLlJee8lPDGV1QnaniyJ"
        ],
        "stats": { "fuerza": 38, "velocidad": 40, "ki": 35, "tecnica": 48 },
        "transformaciones": []
    },
    {
        "id": "yamcha-gt",
        "Personaje": "Yamcha GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Guerreros Z",
        "estado": "Vivo",
        "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Yamcha en Dragon Ball GT ha envejecido notablemente y ha abandonado completamente las artes marciales. Se dedica a su carrera como jugador de béisbol profesional. A pesar de no ser un luchador activo, mantiene su amistad con los Guerreros Z y apoya desde las gradas. Es poseído brevemente por los huevos de Baby, pero es liberado después.",
        "descripcion": "El ex-luchador convertido en jugador de béisbol profesional.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1N4PiHzPUbYP7GrIUHUgu87IF4OM-Dxmj"
        ],
        "stats": { "fuerza": 20, "velocidad": 25, "ki": 15, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "kibitoshin-gt",
        "Personaje": "Kibitoshin GT",
        "Raza": "Kaioshin / Kibito (Fusionado)",
        "serie": "db-gt",
        "planetaOrigen": "Mundo Sagrado (Otro Mundo)",
        "universo": "7",
        "afiliaciones": "Dioses",
        "estado": "Separado",
        "edad": "Milenario",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 23, "titulo": "La batalla en el espacio" },
        "primeraAparicionManga": null,
        "historia": "Kibitoshin en Dragon Ball GT aparece ayudando a los Guerreros Z durante la amenaza de Baby. Han sido separados por el uso de las Esferas del Dragón de Namek, revirtiendo su fusión. El Viejo Kaioshin juega un papel crucial al despertar el poder oculto de Gohan y al fusionar los pendientes Pothala de Goku y Vegeta para formar a Gogeta.",
        "descripcion": "Los dioses kaioshin que ayudan a los Guerreros Z desde el Otro Mundo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tX2vcM7SPw4dQZvkcQrxD8JoPaRdsfOO"
        ],
        "stats": { "fuerza": 45, "velocidad": 40, "ki": 70, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "gohan-baby",
        "Personaje": "Gohan Baby",
        "Raza": "Humano-Saiyan (Híbrido) / Tsufuriano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Baby",
        "estado": "Liberado",
        "edad": "28",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 24, "titulo": "El control de Baby" },
        "primeraAparicionManga": null,
        "historia": "Gohan Baby es el cuerpo de Gohan controlado por Baby tras ser poseído por el parásito tsufuriano. Conserva todas las habilidades de Gohan pero bajo el control mental de Baby. Es utilizado como uno de los soldados de élite de Baby durante la invasión de la Tierra. Es liberado cuando Goku derrota a Baby Vegeta.",
        "descripcion": "Gohan bajo el control mental de Baby, utilizado como soldado en la invasión de la Tierra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tXs5VyDddLvcbQ0QEBbZ8WZS_sh--nlb"
        ],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 58, "tecnica": 55 },
        "transformaciones": ["Controlado por Baby"]
    },
    {
        "id": "goten-baby",
        "Personaje": "Goten Baby",
        "Raza": "Humano-Saiyan (Híbrido) / Tsufuriano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Baby",
        "estado": "Liberado",
        "edad": "24",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 24, "titulo": "El control de Baby" },
        "primeraAparicionManga": null,
        "historia": "Goten Baby es el cuerpo de Goten controlado por Baby. Como híbrido Saiyan, Goten poseído es un guerrero formidable para el ejército tsufuriano. Es uno de los muchos Guerreros Z que caen bajo el control de Baby durante su invasión. Afortunadamente, todos son liberados tras la derrota de Baby.",
        "descripcion": "Goten bajo el control del parásito Baby durante la invasión tsufuriana.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1UAA7Zde1MHqly4r4McYQa06YGE9TI-Ft"
        ],
        "stats": { "fuerza": 55, "velocidad": 52, "ki": 50, "tecnica": 48 },
        "transformaciones": ["Controlado por Baby"]
    },
    {
        "id": "trunks-baby",
        "Personaje": "Trunks Baby",
        "Raza": "Humano-Saiyan (Híbrido) / Tsufuriano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Baby",
        "estado": "Liberado",
        "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 25, "titulo": "Trunks controlado" },
        "primeraAparicionManga": null,
        "historia": "Trunks Baby es el joven Trunks controlado por Baby. A pesar de estar poseído, Trunks lucha internamente contra el control de Baby, demostrando su fuerza de voluntad. Es liberado junto con los demás cuando Goku derrota a Baby Vegeta. Esta experiencia afecta profundamente a Trunks, quien jura hacerse más fuerte para proteger a los suyos.",
        "descripcion": "Trunks bajo control de Baby, luchando internamente por liberarse.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1FTkc_f6XHAG8AYRCBXwtUK2zUoXpSVFN"
        ],
        "stats": { "fuerza": 55, "velocidad": 55, "ki": 50, "tecnica": 48 },
        "transformaciones": ["Controlado por Baby"]
    },
    {
        "id": "bulma-leigh",
        "Personaje": "Bulma Leigh",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Mercader",
        "estado": "Vivo",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 2, "titulo": "La nave espacial" },
        "primeraAparicionManga": null,
        "historia": "Bulma Leigh es una comerciante espacial que el Equipo GT encuentra en su viaje. A pesar de compartir el nombre con Bulma Brief, no tienen relación. Es una oportunista que intenta estafar a Goku, Pan y Trunks vendiéndoles equipo defectuoso. Aparece como un personaje cómico menor durante la saga espacial.",
        "descripcion": "Una comerciante espacial oportunista que se cruza con el Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1mp3fJdWyVuZ1MWNx0CHDZIPFrhMANQrQ"
        ],
        "stats": { "fuerza": 8, "velocidad": 10, "ki": 5, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "marron-gt",
        "Personaje": "Marron GT",
        "Raza": "Humano",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Familia",
        "estado": "Vivo",
        "edad": "12",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Marron es la hija de Krilin y Androide 18. En Dragon Ball GT es una niña que vive una vida normal en la Tierra junto a sus padres. No muestra habilidades de combate y lleva una vida pacífica. Es mencionada y aparece brevemente en algunos episodios de fondo durante las reuniones de los Guerreros Z.",
        "descripcion": "La hija de Krilin y Androide 18, una niña normal en un mundo de guerreros.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1nc3nOZEIspObBqNxk7qGIO2Sy47eU0Ng"
        ],
        "stats": { "fuerza": 3, "velocidad": 5, "ki": 2, "tecnica": 3 },
        "transformaciones": []
    },
    {
        "id": "shen-long-gt",
        "Personaje": "Shen Long",
        "Raza": "Dragón Místico",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Esferas del Dragón",
        "estado": "Activo",
        "edad": "Milenario",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El misterioso regreso de Goku" },
        "primeraAparicionManga": null,
        "historia": "Shen Long en Dragon Ball GT aparece cuando las Esferas del Dragón normales son reunidas, pero los deseos han dejado de funcionar correctamente debido al uso excesivo. El dragón se ha vuelto más pequeño y débil. Las Esferas del Dragón de la Estrella Negra crean una contraparte oscura de Shen Long que da origen a los Dragones Malignos.",
        "descripcion": "El dragón sagrado de las Esferas del Dragón, debilitado por el uso excesivo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ffAipIvjxZj3MrF1UQMq5gCNjn6ymmSm"
        ],
        "stats": { "fuerza": 50, "velocidad": 45, "ki": 80, "tecnica": 60 },
        "transformaciones": []
    },
    {
        "id": "dragon-humo-negro",
        "Personaje": "Dragón del Humo Negro",
        "Raza": "Dragón Místico Oscuro",
        "serie": "db-gt",
        "planetaOrigen": "Tierra",
        "universo": "7",
        "afiliaciones": "Esferas del Dragón Oscuras",
        "estado": "Desactivado",
        "edad": "Milenario",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 47, "titulo": "La maldición de las esferas" },
        "primeraAparicionManga": null,
        "historia": "El Dragón del Humo Negro es la forma que toma la energía negativa acumulada en las Esferas del Dragón de la Estrella Negra. Cuando el deseo final es pedido, este dragón emerge del humo negro y libera a los siete Dragones Malignos, cada uno representando una esfera corrupta. Es la manifestación física del abuso del poder de las esferas.",
        "descripcion": "La manifestación de la energía negativa de las Esferas de la Estrella Negra.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ynFZsWBSZaYOAMzEckGzsN1o7z5xfiqE"
        ],
        "stats": { "fuerza": 80, "velocidad": 70, "ki": 90, "tecnica": 75 },
        "transformaciones": ["Dragones Malignos"]
    },
    {
        "id": "super-sigma",
        "Personaje": "Super-Sigma",
        "Raza": "Máquina Mutante",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Dr. Myuu",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 20, "titulo": "Sigma, la máquina de guerra" },
        "primeraAparicionManga": null,
        "historia": "Super-Sigma es una de las creaciones más poderosas del Dr. Myuu, una gigantesca máquina de guerra diseñada para destruir a los Saiyans. Es el líder del ejército de Máquinas Mutantes en el Planeta M-2. Posee una gran resistencia y poder de fuego. Es derrotado por Goku y Trunks durante el asalto al Planeta M-2.",
        "descripcion": "La máquina de guerra definitiva del Dr. Myuu, diseñada para destruir Saiyans.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1AouM97BrQSApVGV9AH9jLKGZ16TIMumG"
        ],
        "stats": { "fuerza": 55, "velocidad": 35, "ki": 30, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "nut",
        "Personaje": "Nut",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 9, "titulo": "El planeta de los gigantes" },
        "primeraAparicionManga": null,
        "historia": "Nut es un habitante del planeta de los gigantes que el Equipo GT visita durante su viaje espacial. Es un personaje menor que interactúa con Goku, Pan y Trunks durante su breve estadía en el planeta. Aparece como parte de los diversos personajes alienígenas que pueblan el universo de Dragon Ball GT.",
        "descripcion": "Un habitante del planeta de los gigantes encontrado por el Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Wyvg6MMIkdmQTAiIiGLcaU_tDrWYPxgY"
        ],
        "stats": { "fuerza": 15, "velocidad": 10, "ki": 8, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "schiilla",
        "Personaje": "Schiilla",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 8, "titulo": "El cazador de tesoros" },
        "primeraAparicionManga": null,
        "historia": "Schiilla es un alienígena que el Equipo GT encuentra durante su viaje. Es un personaje secundario que aparece en los episodios iniciales de la búsqueda espacial. Forma parte del variado elenco de extraterrestres que encuentran Goku, Pan y Trunks en su aventura por el universo.",
        "descripcion": "Un alienígena encontrado durante la travesía espacial del Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1ouiO0_p9CtVqzWyqeIr6YWaaku89b-Gn"
        ],
        "stats": { "fuerza": 18, "velocidad": 20, "ki": 12, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "palace",
        "Personaje": "Palace",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 7, "titulo": "El palacio espacial" },
        "primeraAparicionManga": null,
        "historia": "Palace es un alienígena con apariencia de robot que el Equipo GT encuentra en su viaje. Es un enemigo menor que intenta obstaculizar la búsqueda de las Esferas del Dragón. Representa uno de los muchos desafíos que Goku, Pan y Trunks enfrentan en los planetas que visitan durante el arco espacial.",
        "descripcion": "Un enemigo robótico menor encontrado por el Equipo GT en el espacio.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Kt4MvFGT66Il0jUrSC-GwywNsmtjBJKx"
        ],
        "stats": { "fuerza": 20, "velocidad": 15, "ki": 10, "tecnica": 18 },
        "transformaciones": []
    },
    {
        "id": "mamba",
        "Personaje": "Mamba",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 9, "titulo": "El planeta de los gigantes" },
        "primeraAparicionManga": null,
        "historia": "Mamba es un alienígena serpiente que aparece durante la visita del Equipo GT al planeta de los gigantes. Es un personaje menor que forma parte del ecosistema alienígena que los héroes exploran. Contribuye a la atmósfera de aventura y descubrimiento que caracteriza el arco espacial de Dragon Ball GT.",
        "descripcion": "Un alienígena con forma de serpiente encontrado en el planeta de los gigantes.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/13-IApp8AnB_-G0TPBoTVDio30gIIGI4J"
        ],
        "stats": { "fuerza": 22, "velocidad": 25, "ki": 10, "tecnica": 15 },
        "transformaciones": []
    },
    {
        "id": "nehji",
        "Personaje": "Nehji",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Mercenarios",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 10, "titulo": "El planeta del juego" },
        "primeraAparicionManga": null,
        "historia": "Nehji es un alienígena que gobierna un planeta de juegos donde el Equipo GT se ve envuelto en desafíos. Es un personaje que utiliza trampas y juegos para atrapar a sus víctimas. Goku, Pan y Trunks deben superar sus pruebas para continuar su viaje. Representa la variedad de culturas y peligros del universo.",
        "descripcion": "El gobernante de un planeta de juegos que desafía al Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1OCXLHCfCljFYwhdu9RJO2kRguub_EPk0"
        ],
        "stats": { "fuerza": 25, "velocidad": 20, "ki": 20, "tecnica": 35 },
        "transformaciones": []
    },
    {
        "id": "vis",
        "Personaje": "Vis",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 11, "titulo": "El planeta de las ilusiones" },
        "primeraAparicionManga": null,
        "historia": "Vis es un alienígena que habita un planeta de ilusiones en la ruta del Equipo GT. Posee habilidades para crear espejismos y engañar a los viajeros. Es uno de los muchos personajes menores que aparecen durante el arco de búsqueda espacial. Goku, Pan y Trunks logran superar sus ilusiones para continuar su viaje.",
        "descripcion": "Un alienígena ilusionista que intenta engañar al Equipo GT en su viaje.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Qw9wtUiohmbZdZ_vJFbdnfhlkuM-O8Yi"
        ],
        "stats": { "fuerza": 18, "velocidad": 20, "ki": 25, "tecnica": 40 },
        "transformaciones": []
    },
    {
        "id": "enma",
        "Personaje": "Enma",
        "Raza": "Deidad (Dios del Infierno)",
        "serie": "db-gt",
        "planetaOrigen": "Otro Mundo",
        "universo": "7",
        "afiliaciones": "Otro Mundo",
        "estado": "Activo",
        "edad": "Milenario",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 40, "titulo": "El regreso del Infierno" },
        "primeraAparicionManga": null,
        "historia": "Enma Daioh es el dios del Infierno que juzga las almas de los fallecidos. En Dragon Ball GT, permite que los doctores Myuu y Gero accedan al laboratorio del Infierno para crear al Hell Fighter 17, sin saber las consecuencias. Cuando el Infierno se descontrola, intenta ayudar a los Guerreros Z a contener la amenaza.",
        "descripcion": "El dios del Infierno que juzga las almas y supervisa el Otro Mundo.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/12tsSbYyqdnXULZpJS3j-PJAEV-CctTuR"
        ],
        "stats": { "fuerza": 40, "velocidad": 30, "ki": 65, "tecnica": 50 },
        "transformaciones": []
    },
    {
        "id": "rey-yoma",
        "Personaje": "Rey Yoma",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Ejército de Yoma",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 14, "titulo": "El rey Yoma" },
        "primeraAparicionManga": null,
        "historia": "El Rey Yoma es el monarca de un planeta alienígena que el Equipo GT visita. Gobierna con puño de hierro y utiliza a sus súbditos para su beneficio. Goku, Pan y Trunks se enfrentan a él y lo derrotan, liberando al planeta de su tiranía. Es un ejemplo de los diversos opresores que los héroes enfrentan en su viaje.",
        "descripcion": "El tiránico monarca alienígena derrotado por el Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1bc3S6UknluOK-WydoLbojjteIIsy8GDs"
        ],
        "stats": { "fuerza": 35, "velocidad": 30, "ki": 25, "tecnica": 30 },
        "transformaciones": []
    },
    {
        "id": "zuhnamar",
        "Personaje": "Zuhnamar",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 15, "titulo": "El planeta desierto" },
        "primeraAparicionManga": null,
        "historia": "Zuhnamar es un alienígena que vive en un planeta desierto donde el Equipo GT aterriza. Es un personaje solitario que ha sobrevivido en condiciones extremas. Goku, Pan y Trunks lo ayudan y lo derrotan cuando se vuelve hostil. Representa uno de los muchos encuentros casuales durante la odisea espacial.",
        "descripcion": "Un habitante solitario de un planeta desierto encontrado por el Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/14UT59MZllDy5M1bo0Riq4K0i1usWLGR1"
        ],
        "stats": { "fuerza": 22, "velocidad": 18, "ki": 15, "tecnica": 20 },
        "transformaciones": []
    },
    {
        "id": "gigante-monmath",
        "Personaje": "Gigante de Monmath",
        "Raza": "Alienígena (Gigante)",
        "serie": "db-gt",
        "planetaOrigen": "Monmath",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 9, "titulo": "El planeta de los gigantes" },
        "primeraAparicionManga": null,
        "historia": "El Gigante de Monmath es un enorme alienígena que habita en el planeta de los gigantes. Es una criatura de proporciones colosales que representa una amenaza física para el Equipo GT. Goku debe usar su astucia y poder para derrotarlo, demostrando que el tamaño no es garantía de victoria.",
        "descripcion": "Un gigante colosal del planeta Monmath enfrentado por el Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1fzHh-tO77nsBIKO-FENjz28EarIsgfUo"
        ],
        "stats": { "fuerza": 45, "velocidad": 15, "ki": 10, "tecnica": 10 },
        "transformaciones": []
    },
    {
        "id": "pack",
        "Personaje": "Pack",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 13, "titulo": "El cazador de recompensas espacial" },
        "primeraAparicionManga": null,
        "historia": "Pack es un alienígena que el Equipo GT encuentra durante su travesía espacial. Es un personaje secundario que aparece brevemente en la serie. Forma parte del diverso elenco de personajes extraterrestres que pueblan los planetas visitados por Goku, Pan y Trunks en su búsqueda de las Esferas del Dragón.",
        "descripcion": "Un alienígena menor encontrado durante la travesía espacial del Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1Uajmu8SFUP9MPvjOz-UXG-tKU_jWEqNF"
        ],
        "stats": { "fuerza": 15, "velocidad": 18, "ki": 8, "tecnica": 12 },
        "transformaciones": []
    },
    {
        "id": "rakkaru",
        "Personaje": "Rakkaru",
        "Raza": "Alienígena",
        "serie": "db-gt",
        "planetaOrigen": "Desconocido",
        "universo": "7",
        "afiliaciones": "Ninguna",
        "estado": "Derrotado",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 10, "titulo": "El planeta del juego" },
        "primeraAparicionManga": null,
        "historia": "Rakkaru es un alienígena que aparece en el planeta de los juegos junto a Nehji. Es un personaje secundario que actúa como parte del entretenimiento del planeta. Goku, Pan y Trunks deben enfrentarlo como parte de los desafíos del planeta. Aporta a la atmósfera de variedad y peligro del universo GT.",
        "descripcion": "Un habitante del planeta de juegos que desafía al Equipo GT.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1HX7oOyhqrSmMLfU-zVPm3YR4tFAGWxOn"
        ],
        "stats": { "fuerza": 20, "velocidad": 22, "ki": 12, "tecnica": 18 },
        "transformaciones": []
    },
    {
        "id": "su-goro-y-su-kogoro",
        "Personaje": "Su Goro y Su Kogoro",
        "Raza": "Máquina Mutante",
        "serie": "db-gt",
        "planetaOrigen": "Planeta M-2",
        "universo": "7",
        "afiliaciones": "Dr. Myuu, Máquinas Mutantes",
        "estado": "Derrotados",
        "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 18, "titulo": "La fortaleza de Myuu" },
        "primeraAparicionManga": null,
        "historia": "Su Goro y Su Kogoro son dos máquinas mutantes que actúan como guardias personales del Dr. Myuu en su fortaleza del Planeta M-2. Son robots de combate avanzados que protegen las instalaciones principales. Son derrotados por el Equipo GT durante su asalto final a la fortaleza de Myuu. Representan la última línea de defensa antes de enfrentar a Baby.",
        "descripcion": "Los dos robots guardianes de la fortaleza del Dr. Myuu en el Planeta M-2.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1q9OrGQXeZh9Vlxvdmow9MRrK2_vn3fwh"
        ],
        "stats": { "fuerza": 28, "velocidad": 25, "ki": 15, "tecnica": 25 },
        "transformaciones": []
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
