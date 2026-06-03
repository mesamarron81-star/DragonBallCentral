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
            "https://lh3.googleusercontent.com/d/1aJRfKMWyWisod1xR7XgLUpPMHENwiyMU"
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
