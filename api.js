// BASE DE DATOS INTEGRADA - DRAGON BALL CENTRAL
var PERSONAJES_DATA = [
    // ============================================================
    // DRAGON BALL CLÁSICO (db-classic)
    // ============================================================
    {
        "id": "goku-kid", "Personaje": "Goku (Ni\u00F1o)", "Raza": "Saiyan", "serie": "db-classic",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "12 (inicio)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Son Goku fue enviado a la Tierra siendo un beb\u00E9. Al golpearse la cabeza perdi\u00F3 su prop\u00F3sito original y se convirti\u00F3 en el defensor del planeta. Sus aventuras comenzaron cuando conoci\u00F3 a Bulma y juntos emprendieron la b\u00FAsqueda de las Esferas del Drag\u00F3n.",
        "descripcion": "El joven Saiyan criado en la Tierra. Su cola de mono y su apetito insaciable lo hacen \u00FAnico.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Ni%C3%B1o"],
        "stats": { "fuerza": 30, "velocidad": 45, "ki": 20, "tecnica": 25 },
        "transformaciones": ["Base", "Ozzaru"],
        "tecnicas": ["Kamehameha", "Nube Kinto", "Bast\u00F3n M\u00E1gico", "Pu\u00F1o de Drag\u00F3n"]
    },
    {
        "id": "bulma", "Personaje": "Bulma", "Raza": "Humana", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "16 (inicio)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Bulma, la brillante hija del Dr. Brief, conoci\u00F3 a Goku mientras buscaba las Esferas del Drag\u00F3n. Su inteligencia y determinaci\u00F3n la llevaron a crear maravillas tecnol\u00F3gicas como el Radar del Drag\u00F3n. Con el tiempo se cas\u00F3 con Vegeta y form\u00F3 una familia.",
        "descripcion": "Genio cient\u00EDfica y compa\u00F1era de aventuras de Goku. Creadora del Radar del Drag\u00F3n.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/00bcd4?text=Bulma"],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 2, "tecnica": 100 },
        "transformaciones": [],
        "tecnicas": ["Radar del Drag\u00F3n", "Inventos"]
    },
    {
        "id": "krilin", "Personaje": "Krilin", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "13 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 14, "titulo": "El rival de Goku" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 25, "titulo": "El rival" },
        "historia": "Krilin lleg\u00F3 al Templo del Maestro Roshi buscando entrenamiento y se convirti\u00F3 en el mejor amigo de Goku. A pesar de ser humano, su valent\u00EDa y determinaci\u00F3n lo llevaron a enfrentar a los mayores enemigos del universo, convirti\u00E9ndose en uno de los guerreros m\u00E1s fuertes de la Tierra.",
        "descripcion": "El mejor amigo de Goku. Guerrero humano de coraje inquebrantable.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Krilin"],
        "stats": { "fuerza": 35, "velocidad": 55, "ki": 40, "tecnica": 70 },
        "transformaciones": [],
        "tecnicas": ["Kamehameha", "Kienzan", "Pu\u00F1o Solar", "Vuelo"]
    },
    {
        "id": "roshi", "Personaje": "Maestro Roshi", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "300+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 15, "titulo": "La Tortuga y el Maestro" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 3, "titulo": "Kame-Sen'nin" },
        "historia": "El legendario Kame-Sen'nin, maestro de artes marciales que entren\u00F3 a Goku y Krilin. Creador de la t\u00E9cnica Kamehameha. A pesar de su avanzada edad y sus peculiares h\u00E1bitos, es uno de los humanos m\u00E1s sabios y poderosos de la Tierra.",
        "descripcion": "El legendario Tortuga Gal\u00E1ctica. Invent\u00F3 la Kamehameha y entren\u00F3 a los mayores h\u00E9roes.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Maestro+Roshi"],
        "stats": { "fuerza": 25, "velocidad": 30, "ki": 50, "tecnica": 90 },
        "transformaciones": ["Base", "Max Power"],
        "tecnicas": ["Kamehameha", "Mafuba", "Sue\u00F1o Hipn\u00F3tico", "T\u00E9cnica de la Bala de Fuego"]
    },
    {
        "id": "yamcha", "Personaje": "Yamcha", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "16 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 5, "titulo": "El ladr\u00F3n del desierto" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 7, "titulo": "Yamcha" },
        "historia": "Yamcha comenz\u00F3 como un ladr\u00F3n del desierto con miedo a las mujeres. Al conocer a Goku y Bulma, cambi\u00F3 su camino y se convirti\u00F3 en un guerrero. Fue uno de los Guerreros Z hasta que su poder qued\u00F3 superado por las amenazas c\u00F3smicas.",
        "descripcion": "Ex-ladr\u00F3n del desierto y miembro fundador de los Guerreros Z.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Yamcha"],
        "stats": { "fuerza": 28, "velocidad": 40, "ki": 30, "tecnica": 55 },
        "transformaciones": [],
        "tecnicas": ["R\u00E1faga de Ki", "Pu\u00F1o del Lobo", "Kamehameha", "Vuelo"]
    },
    {
        "id": "tenshinhan", "Personaje": "Tenshinhan", "Raza": "Humano (Triclope)", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "17 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El tercer ojo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "Tenshinhan" },
        "historia": "Tenshinhan fue disc\u00EDpulo del Crane School y rival de Goku. Su tercer ojo le otorga habilidades \u00FAnicas. A pesar de comenzar como antagonista, se redimi\u00F3 y se convirti\u00F3 en un aliado leal. Su t\u00E9cnica Kikoho es una de las m\u00E1s poderosas de la Tierra.",
        "descripcion": "Guerrero triclope de honor inquebrantable. Domina el Kikoho.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Tenshinhan"],
        "stats": { "fuerza": 38, "velocidad": 50, "ki": 45, "tecnica": 75 },
        "transformaciones": [],
        "tecnicas": ["Kikoho", "T\u00E9cnica de los Cuatro Brazos", "Vuelo", "R\u00E1faga de Ki"]
    },
    {
        "id": "chaoz", "Personaje": "Chaoz", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "12 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El tercer ojo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "Tenshinhan" },
        "historia": "Chaoz es el mejor amigo de Tenshinhan y compa\u00F1ero de la Crane School. Posee habilidades ps\u00EDquicas \u00FAnicas como telequinesis y telepat\u00EDa. Aunque su poder de combate es limitado, su lealtad es absoluta.",
        "descripcion": "Amigo de Tenshinhan con poderes ps\u00EDquicos.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Chaoz"],
        "stats": { "fuerza": 15, "velocidad": 25, "ki": 35, "tecnica": 60 },
        "transformaciones": [],
        "tecnicas": ["Telequinesis", "Telepat\u00EDa", "R\u00E1faga de Ki"]
    },

    // ============================================================
    // DRAGON BALL Z (db-z)
    // ============================================================
    {
        "id": "goku-z", "Personaje": "Goku Z", "Raza": "Saiyan", "serie": "db-z",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z, Ej\u00E9rcito Gal\u00E1ctico", "estado": "Vivo", "edad": "42 (final de Super)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "El nuevo enemigo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 194, "titulo": "El regreso de Piccolo" },
        "historia": "Son Goku, el Saiyan criado en la Tierra, se convirti\u00F3 en el protector del planeta. Enfrent\u00F3 a los Saiyans invasores, a Freezer en Namek, a los Androides y Cell, y finalmente a Majin Buu. Con cada batalla super\u00F3 sus propios l\u00EDmites hasta convertirse en leyenda.",
        "descripcion": "El protagonista legendario. De Kaioken a Super Saiyan 3, su poder no conoce l\u00EDmites.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1YMQWD6mSeOAnboAO7TLQpzoSm1F2pCXa",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x3",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x10",
            "https://lh3.googleusercontent.com/d/1yFCllILQ9OZ7DFPdpEktH2gcEqGy9Bpb",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Full+Power",
            "https://lh3.googleusercontent.com/d/1-7RPBAi4fO8cZwYo8za3DrYK_cdDtDrm",
            "https://lh3.googleusercontent.com/d/1Y0oE1HReTeCMFw2gri00WWStTHHSiQY6"
        ],
        "stats": { "fuerza": 88, "velocidad": 85, "ki": 90, "tecnica": 85 },
        "transformaciones": [
            { "id": "gokuz_base", "orden": 1, "nombre": "Base", "imagen": "https://lh3.googleusercontent.com/d/1YMQWD6mSeOAnboAO7TLQpzoSm1F2pCXa", "descripcion": "Estado natural de Goku en la era Z.", "saga": "Dragon Ball Z" },
            { "id": "gokuz_kaioken", "orden": 2, "nombre": "Kaioken", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken", "descripcion": "T\u00E9cnica del Reino de los Kaios que multiplica el poder del usuario.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "gokuz_kaioken3", "orden": 3, "nombre": "Kaioken x3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x3", "descripcion": "Multiplicador de poder triple que lleva al cuerpo al l\u00EDmite.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "gokuz_kaioken10", "orden": 4, "nombre": "Kaioken x10", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x10", "descripcion": "Multiplicador de poder extremo que pone en riesgo la vida del usuario.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "gokuz_ssj", "orden": 5, "nombre": "Super Saiyan", "imagen": "https://lh3.googleusercontent.com/d/1yFCllILQ9OZ7DFPdpEktH2gcEqGy9Bpb", "descripcion": "Primera transformaci\u00F3n Saiyan legendaria. Goku la alcanz\u00F3 en Namek.", "saga": "Dragon Ball Z (Freezer)" },
            { "id": "gokuz_ssjfp", "orden": 6, "nombre": "Super Saiyan Full Power", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Full+Power", "descripcion": "Estado Super Saiyan perfeccionado en la Sala del Tiempo.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "gokuz_ssj2", "orden": 7, "nombre": "Super Saiyan 2", "imagen": "https://lh3.googleusercontent.com/d/1-7RPBAi4fO8cZwYo8za3DrYK_cdDtDrm", "descripcion": "Evoluci\u00F3n del Super Saiyan con poder el\u00E9ctrico.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "gokuz_ssj3", "orden": 8, "nombre": "Super Saiyan 3", "imagen": "https://lh3.googleusercontent.com/d/1Y0oE1HReTeCMFw2gri00WWStTHHSiQY6", "descripcion": "Forma de cabello largo y sin cejas. Poder abrumador contra Majin Buu.", "saga": "Dragon Ball Z (Majin Buu)" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportaci\u00F3n", "Kaioken", "Fusi\u00F3n"]
    },
    {
        "id": "vegeta-z", "Personaje": "Vegeta Z", "Raza": "Saiyan", "serie": "db-z",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z, Ej\u00E9rcito Gal\u00E1ctico", "estado": "Vivo", "edad": "43 (final de Super)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 5, "titulo": "Goku muere... \u00A1hay una \u00FAltima oportunidad!" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 204, "titulo": "El secreto de los Saiyajin" },
        "historia": "Vegeta, el pr\u00EDncipe de los Saiyan, lleg\u00F3 como invasor y termin\u00F3 convirti\u00E9ndose en un aliado indispensable. Su orgullo lo llev\u00F3 a superar constantemente sus l\u00EDmites. Se enfrent\u00F3 a Freezer, Cell y Majin Buu, siempre buscando superar a Goku.",
        "descripcion": "El pr\u00EDncipe Saiyan. Su orgullo lo llev\u00F3 de villano a h\u00E9roe legendario.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1tj9NL7D6PrvN3laNGvV6CU3kfow6HIey",
            "https://lh3.googleusercontent.com/d/1pLt1hPWAecLv2cKOkiJyvLHl7N86dM5Z",
            "https://lh3.googleusercontent.com/d/1yyylVjVlhMyFFgOPghUeXz8uROeIcW93",
            "https://lh3.googleusercontent.com/d/1eUPHkJ5gxL0Br9rFCbGtZEd_bdhla3_b",
            "https://lh3.googleusercontent.com/d/1ANStMudWIvUOS4PVglQlbEDm0pZj_48f",
            "https://lh3.googleusercontent.com/d/1Nf5iP5R61hOLOEIfPX32TYrlIrDu9aCn",
            "https://lh3.googleusercontent.com/d/1egIvYugu40qEPSVDAdOs1j30N7PGFbv5"
        ],
        "stats": { "fuerza": 86, "velocidad": 82, "ki": 85, "tecnica": 90 },
        "transformaciones": [
            { "id": "vegetaz_base", "orden": 1, "nombre": "Base", "imagen": "https://lh3.googleusercontent.com/d/1tj9NL7D6PrvN3laNGvV6CU3kfow6HIey", "descripcion": "Estado natural de Vegeta en la era Z.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "vegetaz_ozzaru", "orden": 2, "nombre": "Ozzaru", "imagen": "https://lh3.googleusercontent.com/d/1pLt1hPWAecLv2cKOkiJyvLHl7N86dM5Z", "descripcion": "Transformaci\u00F3n en mono gigante.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "vegetaz_ssj", "orden": 3, "nombre": "Super Saiyan", "imagen": "https://lh3.googleusercontent.com/d/1yyylVjVlhMyFFgOPghUeXz8uROeIcW93", "descripcion": "Primera transformaci\u00F3n Saiyan. Vegeta la alcanz\u00F3 tras la derrota ante Freezer.", "saga": "Dragon Ball Z (Freezer)" },
            { "id": "vegetaz_super_vegeta", "orden": 4, "nombre": "Super Vegeta", "imagen": "https://lh3.googleusercontent.com/d/1eUPHkJ5gxL0Br9rFCbGtZEd_bdhla3_b", "descripcion": "Versi\u00F3n mejorada del Super Saiyan con m\u00FAsculos aumentados.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "vegetaz_ssj2", "orden": 5, "nombre": "Super Saiyan 2", "imagen": "https://lh3.googleusercontent.com/d/1ANStMudWIvUOS4PVglQlbEDm0pZj_48f", "descripcion": "Evoluci\u00F3n del Super Saiyan en la Sala del Tiempo.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "vegetaz_majin", "orden": 6, "nombre": "Majin Vegeta", "imagen": "https://lh3.googleusercontent.com/d/1Nf5iP5R61hOLOEIfPX32TYrlIrDu9aCn", "descripcion": "Vegeta bajo el control de Babidi, impulsado por su orgullo.", "saga": "Dragon Ball Z (Majin Buu)" },
            { "id": "vegetaz_ssj3", "orden": 7, "nombre": "Super Saiyan 3", "imagen": "https://lh3.googleusercontent.com/d/1egIvYugu40qEPSVDAdOs1j30N7PGFbv5", "descripcion": "Forma de cabello largo. Vegeta la alcanz\u00F3 tras a\u00F1os de entrenamiento.", "saga": "Dragon Ball Z (Majin Buu)" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack", "Ataque del Orgullo"]
    },
    {
        "id": "piccolo", "Personaje": "Piccolo", "Raza": "Namekiano", "serie": "db-z",
        "Planeta de origen": "Namek", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "El nuevo enemigo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 194, "titulo": "El regreso de Piccolo" },
        "historia": "Piccolo, la reencarnaci\u00F3n de Piccolo Daima\u014D, abandon\u00F3 su maldad al entrenar a Gohan. Se convirti\u00F3 en un Namekiano noble y estrat\u00E9gico, pieza clave de los Guerreros Z. En Super Hero desbloque\u00F3 la poderosa forma Piccolo Naranja.",
        "descripcion": "Guerrero estrat\u00E9gico y maestro de Gohan. Desbloque\u00F3 la forma Naranja.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Piccolo",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Piccolo+Naranja"
        ],
        "stats": { "fuerza": 80, "velocidad": 82, "ki": 88, "tecnica": 98 },
        "transformaciones": ["Piccolo", "Piccolo Naranja", "Potencial Desatado"],
        "tecnicas": ["Makankosappo", "Masenko", "Regeneraci\u00F3n", "Vuelo"]
    },
    {
        "id": "gohan-z", "Personaje": "Gohan Z", "Raza": "H\u00EDbrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "28 (final de Super)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "El nuevo enemigo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 196, "titulo": "Gohan aparece" },
        "historia": "Gohan, hijo de Goku y Chi-Chi, mostr\u00F3 un potencial oculto inmenso desde ni\u00F1o. Entrenado por Piccolo y luego por el Supremo Kaioshin, desbloque\u00F3 el Estado Definitivo. En Super Hero despert\u00F3 Gohan Bestia.",
        "descripcion": "Hijo de Goku con potencial infinito. Su forma Bestia lo sit\u00FAa entre los m\u00E1s fuertes.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+SSJ2",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Definitivo",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Bestia"
        ],
        "stats": { "fuerza": 92, "velocidad": 90, "ki": 98, "tecnica": 85 },
        "transformaciones": ["Base", "Super Saiyan 2", "Estado Definitivo", "Gohan Bestia"],
        "tecnicas": ["Masenko", "Kamehameha", "R\u00E1pel"]
    },
    {
        "id": "freezer-z", "Personaje": "Freezer Z", "Raza": "Raza de Freezer", "serie": "db-z",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Ej\u00E9rcito de Freezer", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 44, "titulo": "El emperador Freezer" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 245, "titulo": "Freezer aparece" },
        "historia": "Freezer, el tirano del Universo 7, destruy\u00F3 el Planeta Vegeta y masacr\u00F3 a los Saiyan. Derrotado por Goku en Namek y posteriormente por Trunks del Futuro, regres\u00F3 m\u00E1s poderoso que nunca.",
        "descripcion": "El emperador del mal. Tirano gal\u00E1ctico y verdugo de los Saiyan.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Freezer+1ra+Forma",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Freezer+Final",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Mecha+Freezer"
        ],
        "stats": { "fuerza": 90, "velocidad": 88, "ki": 92, "tecnica": 85 },
        "transformaciones": ["Primera Forma", "Forma Final", "Mecha Freezer"],
        "tecnicas": ["Death Beam", "Supernova", "Death Ball", "Rayo Mortal"]
    },
    {
        "id": "cell", "Personaje": "Cell", "Raza": "Bio-Androide", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 119, "titulo": "El ser perfecto" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 362, "titulo": "Cell" },
        "historia": "Cell es un bio-androide creado por el Dr. Gero a partir de las c\u00E9lulas de los mejores guerreros. Su forma perfecta lo convirti\u00F3 en la mayor amenaza de la Tierra. Fue derrotado por Gohan en el Cell Game.",
        "descripcion": "Bio-androide perfecto creado por el Dr. Gero para vengarse de Goku.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Cell+Imperfecto",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Cell+Perfecto"
        ],
        "stats": { "fuerza": 88, "velocidad": 86, "ki": 90, "tecnica": 82 },
        "transformaciones": ["Imperfecto", "Semi-Perfecto", "Perfecto", "Super Perfecto"],
        "tecnicas": ["Kamehameha", "Cell Jr.", "Absorci\u00F3n", "Regeneraci\u00F3n"]
    },
    {
        "id": "majin-buu", "Personaje": "Majin Buu", "Raza": "Genio (Mago)", "serie": "db-z",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Vivo (Buu Bueno)", "edad": "Millones de a\u00F1os",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 200, "titulo": "El despertar de Buu" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 460, "titulo": "Majin Buu" },
        "historia": "Majin Buu es una creaci\u00F3n del mago Bibidi. Exist\u00EDa desde tiempos inmemoriales, purificando el universo de amenazas. En su forma buena, se convirti\u00F3 en aliado de los Guerreros Z.",
        "descripcion": "El ser m\u00E1s impredecible del universo. Puro caos y poder destructivo.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Bu+Gordo",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Bu+Malo",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Buu",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kid+Buu"
        ],
        "stats": { "fuerza": 92, "velocidad": 85, "ki": 95, "tecnica": 88 },
        "transformaciones": ["Majin Buu", "Buu Malo", "Super Buu", "Kid Buu", "Buu Bueno"],
        "tecnicas": ["Chocolate Beam", "Regeneraci\u00F3n", "Absorci\u00F3n", "Ca\u00F3n de Ki"]
    },
    {
        "id": "trunks", "Personaje": "Trunks", "Raza": "H\u00EDbrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "17 (Final de Z)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 120, "titulo": "El guerrero del futuro" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 329, "titulo": "El guerrero del futuro" },
        "historia": "Hijo de Vegeta y Bulma. El Trunks del futuro viaj\u00F3 al pasado para advertir sobre los Androides. El Trunks del presente creci\u00F3 como un ni\u00F1o prodigio, alcanzando el Super Saiyan a temprana edad.",
        "descripcion": "Hijo de Vegeta. Guerrero del futuro y defensor de la Tierra.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+SSJ"
        ],
        "stats": { "fuerza": 72, "velocidad": 78, "ki": 70, "tecnica": 65 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 2 (Futuro)"],
        "tecnicas": ["Burning Attack", "Espada", "Final Flash", "Kamehameha"]
    },
    {
        "id": "goten", "Personaje": "Goten", "Raza": "H\u00EDbrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "7 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 195, "titulo": "El nuevo Saiyan" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 417, "titulo": "Goten" },
        "historia": "Goten es el segundo hijo de Goku. Sorprendentemente, alcanz\u00F3 el Super Saiyan sin entrenamiento formal. Junto a Trunks, form\u00F3 al guerrero de fusi\u00F3n Gotenks.",
        "descripcion": "Segundo hijo de Goku. Prodigio del Super Saiyan.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goten"],
        "stats": { "fuerza": 60, "velocidad": 65, "ki": 58, "tecnica": 50 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 2"],
        "tecnicas": ["Kamehameha", "Fusi\u00F3n", "R\u00E1faga de Ki"]
    },
    {
        "id": "satan", "Personaje": "Mr. Sat\u00E1n", "Raza": "Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Campe\u00F3n Mundial", "estado": "Vivo", "edad": "45+",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 171, "titulo": "El campe\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 378, "titulo": "El campe\u00F3n mundial" },
        "historia": "Mr. Sat\u00E1n es el Campe\u00F3n Mundial de Artes Marciales. Aunque su poder real es m\u00EDnimo, su carisma y suerte lo convirtieron en el h\u00E9roe p\u00FAblico de la Tierra. Se hizo amigo de Majin Buu.",
        "descripcion": "El campe\u00F3n mundial. H\u00E9roe p\u00FAblico de la Tierra.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Mr+Satan"],
        "stats": { "fuerza": 8, "velocidad": 12, "ki": 5, "tecnica": 20 },
        "transformaciones": [],
        "tecnicas": ["Golpe Dinamita", "Tajo de la Muerte"]
    },

    // ============================================================
    // DRAGON BALL GT (db-gt)
    // ============================================================
    {
        "id": "goku-gt", "Personaje": "Goku GT", "Raza": "Saiyan", "serie": "db-gt",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "46 (inicio GT)",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball GT", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "En Dragon Ball GT, Goku fue convertido en ni\u00F1o por un deseo de Pilaf. A pesar de su tama\u00F1o, emprendi\u00F3 la b\u00FAsqueda de las Esferas del Drag\u00F3n por el universo y alcanz\u00F3 la forma legendaria de Super Saiyan 4.",
        "descripcion": "Goku convertido en ni\u00F1o. Alcanz\u00F3 el legendario Super Saiyan 4.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1GKbIJI_ZivQIPjH9NaD3scxvGBIF8qaE",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+Base"
        ],
        "stats": { "fuerza": 88, "velocidad": 86, "ki": 90, "tecnica": 85 },
        "transformaciones": [
            { "id": "gokugt_base", "orden": 1, "nombre": "Base (Ni\u00F1o)", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+Base", "descripcion": "Goku en su cuerpo de ni\u00F1o en Dragon Ball GT.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+SSJ", "descripcion": "Super Saiyan en cuerpo de ni\u00F1o.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj3", "orden": 3, "nombre": "Super Saiyan 3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+SSJ3", "descripcion": "Super Saiyan 3 con cuerpo de ni\u00F1o.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj4", "orden": 4, "nombre": "Super Saiyan 4", "imagen": "https://lh3.googleusercontent.com/d/1GKbIJI_ZivQIPjH9NaD3scxvGBIF8qaE", "descripcion": "Forma primal que combina el poder del Super Saiyan con la cola de mono.", "saga": "Dragon Ball GT" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportaci\u00F3n", "Fusi\u00F3n"]
    },
    {
        "id": "vegeta-gt", "Personaje": "Vegeta GT", "Raza": "Saiyan", "serie": "db-gt",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "47 (inicio GT)",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball GT", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Vegeta en Dragon Ball GT conserva su orgullo Saiyan. Ayuda a Goku en la lucha contra Baby y los dragones malvados. Logra alcanzar el Super Saiyan 4 gracias a la ayuda de Bulma.",
        "descripcion": "El pr\u00EDncipe Saiyan en la era GT. Alcanz\u00F3 el Super Saiyan 4.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/171tTEXZSXgSrYa9G14UYlcUHV7gsqKKQ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+Base"
        ],
        "stats": { "fuerza": 86, "velocidad": 82, "ki": 85, "tecnica": 88 },
        "transformaciones": [
            { "id": "vegetagt_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+Base", "descripcion": "Vegeta en su estado base en GT.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+SSJ", "descripcion": "Super Saiyan en GT.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+SSJ2", "descripcion": "Super Saiyan 2 en GT.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_ssj4", "orden": 4, "nombre": "Super Saiyan 4", "imagen": "https://lh3.googleusercontent.com/d/171tTEXZSXgSrYa9G14UYlcUHV7gsqKKQ", "descripcion": "Vegeta alcanza el legendario SSJ4 con ayuda de Bulma.", "saga": "Dragon Ball GT" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack"]
    },
    {
        "id": "pan", "Personaje": "Pan", "Raza": "H\u00EDbrido Saiyan/Humano", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "9 (inicio GT)",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Drag\u00F3n" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 517, "titulo": "Fin de Z" },
        "historia": "Pan es la nieta de Goku e hija de Gohan y Videl. Valiente y audaz, acompa\u00F1\u00F3 a Goku y Trunks en su viaje por el universo en busca de las Esferas del Drag\u00F3n.",
        "descripcion": "Nieta de Goku. Guerrera valiente que viaj\u00F3 por el universo.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Pan"],
        "stats": { "fuerza": 30, "velocidad": 50, "ki": 25, "tecnica": 35 },
        "transformaciones": [],
        "tecnicas": ["Kamehameha", "Vuelo", "R\u00E1faga de Ki"]
    },
    {
        "id": "baby", "Personaje": "Baby", "Raza": "Tuffle Mutante", "serie": "db-gt",
        "Planeta de origen": "Planeta Plant", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 22, "titulo": "El regreso de los Tuffle" },
        "primeraAparicionManga": { "manga": "Dragon Ball GT", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Baby es el \u00FAltimo sobreviviente de la raza Tuffle. Busca venganza contra los Saiyan controlando cuerpos como par\u00E1sito. Tom\u00F3 control de Vegeta y se convirti\u00F3 en una de las mayores amenazas de GT.",
        "descripcion": "El \u00FAltimo Tuffle. Busca venganza contra los Saiyan.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Baby+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Baby+Vegeta",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Baby+2"
        ],
        "stats": { "fuerza": 85, "velocidad": 80, "ki": 88, "tecnica": 78 },
        "transformaciones": ["Baby", "Baby Vegeta", "Super Baby 1", "Super Baby 2", "Baby Ozzaru"],
        "tecnicas": ["Control Mental", "Rayo Vengativo", "Ca\u00F3n Tuffle"]
    },
    {
        "id": "super17", "Personaje": "Super 17", "Raza": "Androide", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Dr. Myuu", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 42, "titulo": "El androide supremo" },
        "primeraAparicionManga": { "manga": "Dragon Ball GT", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Super 17 es la fusi\u00F3n de los Androides 17 del infierno y del mundo real, creado por el Dr. Myuu. Es un cyborg capaz de absorber ataques de Ki y devolverlos.",
        "descripcion": "Fusi\u00F3n de Androides 17. Absorbe y devuelve ataques de Ki.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+17"],
        "stats": { "fuerza": 84, "velocidad": 60, "ki": 82, "tecnica": 75 },
        "transformaciones": [],
        "tecnicas": ["Absorci\u00F3n de Ki", "Rayo El\u00E9ctrico", "Pu\u00F1o Destructor"]
    },
    {
        "id": "omega-shenron", "Personaje": "Omega Shenron", "Raza": "Drag\u00F3n Malvado", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 55, "titulo": "El poder de los dragones" },
        "primeraAparicionManga": { "manga": "Dragon Ball GT", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Omega Shenron es la fusi\u00F3n de los 7 Dragones Malvados creados por el mal uso de las Esferas del Drag\u00F3n. Es el villano final de Dragon Ball GT y el ser m\u00E1s poderoso de esa serie.",
        "descripcion": "El drag\u00F3n malvado definitivo. Villano final de Dragon Ball GT.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Syn+Shenron",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Omega+Shenron"
        ],
        "stats": { "fuerza": 95, "velocidad": 88, "ki": 97, "tecnica": 90 },
        "transformaciones": ["Syn Shenron", "Omega Shenron"],
        "tecnicas": ["Rayo de la Muerte Negra", "Esfera Minus", "Garra Drag\u00F3n"]
    },

    // ============================================================
    // DRAGON BALL SUPER (db-super)
    // ============================================================
    {
        "id": "goku-super", "Personaje": "Goku Super", "Raza": "Saiyan", "serie": "db-super",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "42 (final de Super)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "La batalla de los dioses" },
        "historia": "En Dragon Ball Super, Goku alcanz\u00F3 nuevos niveles de poder divino. Desde el Super Saiyan God hasta el Ultra Instinto, cada batalla lo elev\u00F3 m\u00E1s all\u00E1 de los l\u00EDmites de los dioses.",
        "descripcion": "El guerrero que alcanz\u00F3 los dioses. Domina el Ultra Instinto.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1iHTNtJP8jnuc6fEwG4bup7_D42lOLiwk",
            "https://lh3.googleusercontent.com/d/1YUo_QnbgWMRX7RDd5Qox7KxNI_JHf8VE",
            "https://lh3.googleusercontent.com/d/1Z6PJUuGvdhupyJp2fg4qL8jcWZodzeCf",
            "https://lh3.googleusercontent.com/d/1kAN3IQ29W4PAkg7ZSgJ8JONHX4qmbBN8",
            "https://lh3.googleusercontent.com/d/11BbW2Ls1f3LO1S0j08L349m1FeOGwx6b",
            "https://lh3.googleusercontent.com/d/1J9wK8LYZzQmCCJmnAAXkQu-11BXlax8G"
        ],
        "stats": { "fuerza": 97, "velocidad": 99, "ki": 100, "tecnica": 92 },
        "transformaciones": [
            { "id": "gokus_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Super+Base", "descripcion": "Estado base de Goku en Super.", "saga": "Dragon Ball Super" },
            { "id": "gokus_ssg", "orden": 2, "nombre": "Super Saiyan God", "imagen": "https://lh3.googleusercontent.com/d/1iHTNtJP8jnuc6fEwG4bup7_D42lOLiwk", "descripcion": "Poder divino rojo alcanzado por el ritual de seis Saiyans.", "saga": "Dragon Ball Super (Batalla de los Dioses)" },
            { "id": "gokus_ssb", "orden": 3, "nombre": "Super Saiyan Blue", "imagen": "https://lh3.googleusercontent.com/d/1YUo_QnbgWMRX7RDd5Qox7KxNI_JHf8VE", "descripcion": "Fusi\u00F3n del SSG con el Super Saiyan. Ki divino azul.", "saga": "Dragon Ball Super (Resurrecci\u00F3n de F)" },
            { "id": "gokus_ssb_kaioken", "orden": 4, "nombre": "Super Saiyan Blue Kaioken", "imagen": "https://lh3.googleusercontent.com/d/1Z6PJUuGvdhupyJp2fg4qL8jcWZodzeCf", "descripcion": "Kaioken sobre SSB. Poder colosal al l\u00EDmite.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "gokus_ui", "orden": 5, "nombre": "Ultra Instinto Sign", "imagen": "https://lh3.googleusercontent.com/d/1kAN3IQ29W4PAkg7ZSgJ8JONHX4qmbBN8", "descripcion": "Ultra Instinto inicial. El cuerpo se mueve por instinto.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "gokus_ui_dominado", "orden": 6, "nombre": "Ultra Instinto Dominado", "imagen": "https://lh3.googleusercontent.com/d/11BbW2Ls1f3LO1S0j08L349m1FeOGwx6b", "descripcion": "Forma completa del Ultra Instinto. Cabello plateado.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "gokus_ui_propio", "orden": 7, "nombre": "Ultra Instinto Propio", "imagen": "https://lh3.googleusercontent.com/d/1J9wK8LYZzQmCCJmnAAXkQu-11BXlax8G", "descripcion": "La verdadera forma del Ultra Instinto. Poder absoluto.", "saga": "Dragon Ball Super (Manga)" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportaci\u00F3n", "Kaioken", "Fusi\u00F3n"]
    },
    {
        "id": "vegeta-super", "Personaje": "Vegeta Super", "Raza": "Saiyan", "serie": "db-super",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "43 (final de Super)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "La batalla de los dioses" },
        "historia": "Vegeta en Dragon Ball Super super\u00F3 todos los l\u00EDmites anteriores. Entren\u00F3 con Whis, alcanz\u00F3 el Super Saiyan God y el Super Saiyan Blue. En el manga logr\u00F3 el Ultra Ego, la t\u00E9cnica de los Dioses de la Destrucci\u00F3n.",
        "descripcion": "El pr\u00EDncipe Saiyan que alcanz\u00F3 los dioses. Domina el Ultra Ego.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1D73ovHEm_vCm6Ldlk4t4G206rFJL-u_p",
            "https://lh3.googleusercontent.com/d/1WiZFuoOACyGsFnps-VZFyoqldfbQSLZT",
            "https://lh3.googleusercontent.com/d/1YxKIzlcLrrfCslo6Y2wSc10CqK9SaweF",
            "https://lh3.googleusercontent.com/d/1mUcwXTh-mI76n6b1S5nhcrNyV_wNEyMb"
        ],
        "stats": { "fuerza": 96, "velocidad": 93, "ki": 97, "tecnica": 94 },
        "transformaciones": [
            { "id": "vegetas_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Super+Base", "descripcion": "Estado base de Vegeta en Super.", "saga": "Dragon Ball Super" },
            { "id": "vegetas_ssg", "orden": 2, "nombre": "Super Saiyan God", "imagen": "https://lh3.googleusercontent.com/d/1D73ovHEm_vCm6Ldlk4t4G206rFJL-u_p", "descripcion": "Poder divino rojo alcanzado con el entrenamiento de Whis.", "saga": "Dragon Ball Super (Batalla de los Dioses)" },
            { "id": "vegetas_ssb", "orden": 3, "nombre": "Super Saiyan Blue", "imagen": "https://lh3.googleusercontent.com/d/1WiZFuoOACyGsFnps-VZFyoqldfbQSLZT", "descripcion": "Super Saiyan God Super Saiyan. Ki divino azul.", "saga": "Dragon Ball Super (Resurrecci\u00F3n de F)" },
            { "id": "vegetas_ssb_evo", "orden": 4, "nombre": "Super Saiyan Blue Evolution", "imagen": "https://lh3.googleusercontent.com/d/1YxKIzlcLrrfCslo6Y2wSc10CqK9SaweF", "descripcion": "Evoluci\u00F3n del SSB con aura intensa. Super\u00F3 sus l\u00EDmites contra Jiren.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "vegetas_ultra_ego", "orden": 5, "nombre": "Ultra Ego", "imagen": "https://lh3.googleusercontent.com/d/1mUcwXTh-mI76n6b1S5nhcrNyV_wNEyMb", "descripcion": "T\u00E9cnica de los Dioses de la Destrucci\u00F3n. M\u00E1s poder cuanto m\u00E1s da\u00F1o recibe.", "saga": "Dragon Ball Super (Manga)" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack", "Ataque del Orgullo"]
    },
    {
        "id": "beerus", "Personaje": "Beerus", "Raza": "Dios de la Destrucci\u00F3n", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Universo 7", "estado": "Vivo", "edad": "Milenios",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "La batalla de los dioses" },
        "historia": "Beerus es el Dios de la Destrucci\u00F3n del Universo 7. Despert\u00F3 de un largo sue\u00F1o buscando al Super Saiyan God. Su poder es inconmensurable, capaz de destruir galaxias enteras. Tiene un peculiar amor por la buena comida.",
        "descripcion": "El Dios de la Destrucci\u00F3n del Universo 7. Poder absoluto.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Beerus",
            "https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Beerus+Enfadado"
        ],
        "stats": { "fuerza": 99, "velocidad": 97, "ki": 100, "tecnica": 98 },
        "transformaciones": ["Base", "Beerus Enfadado"],
        "tecnicas": ["Hakai", "Esfera de la Destrucci\u00F3n", "Rayo de la Ira"]
    },
    {
        "id": "whis", "Personaje": "Whis", "Raza": "\u00C1ngel", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Universo 7", "estado": "Vivo", "edad": "Milenios",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 2, "titulo": "El \u00E1ngel" },
        "historia": "Whis es el \u00E1ngel del Universo 7, mentor de Beerus y entrenador de Goku y Vegeta. Su poder supera incluso al de su Dios de la Destrucci\u00F3n. Ense\u00F1\u00F3 a Goku el Ultra Instinto y a Vegeta el camino hacia el Ultra Ego.",
        "descripcion": "\u00C1ngel del Universo 7. Mentor de Goku y Vegeta.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/00bcd4?text=Whis"],
        "stats": { "fuerza": 100, "velocidad": 100, "ki": 100, "tecnica": 100 },
        "transformaciones": [],
        "tecnicas": ["Ultra Instinto", "Barrera de \u00C1ngel", "B\u00E1culo de \u00C1ngel", "Reparaci\u00F3n"]
    },
    {
        "id": "broly", "Personaje": "Broly", "Raza": "Saiyan", "serie": "db-super",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Paragus, Freezer", "estado": "Vivo", "edad": "38",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": "Pel\u00EDcula", "titulo": "Dragon Ball Super: Broly" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": "Pel\u00EDcula", "titulo": "Dragon Ball Super: Broly" },
        "historia": "Broly es un Saiyan de inmenso poder latente, exiliado por Freezer al mismo tiempo que Goku. Su ira desatada lo convierte en el Berserker legendario. Goku y Vegeta apenas pudieron contenerlo con la fusi\u00F3n Gogeta.",
        "descripcion": "El Saiyan legendario. Poder berserker inmenso.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Broly+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Broly+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Broly+LSSJ"
        ],
        "stats": { "fuerza": 98, "velocidad": 88, "ki": 97, "tecnica": 75 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan Legendario"],
        "tecnicas": ["Ca\u00F3n Er\u00E1ser", "R\u00E1faga de Ira", "Pu\u00F1o del Drag\u00F3n", "Bombardeo Saiyan"]
    },
    {
        "id": "jiren", "Personaje": "Jiren", "Raza": "Desconocida", "serie": "db-super",
        "Planeta de origen": "Universo 11", "Universo": "11",
        "afiliaciones": "Tropa del Orgullo", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 85, "titulo": "El guerrero del Universo 11" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 30, "titulo": "Torneo del Poder" },
        "historia": "Jiren es el guerrero m\u00E1s fuerte del Universo 11, miembro de la Tropa del Orgullo. Su poder superaba al de un Dios de la Destrucci\u00F3n. En el Torneo del Poder, fue el rival final de Goku.",
        "descripcion": "El guerrero m\u00E1s fuerte del Universo 11. Rival final de Goku en el Torneo.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Jiren+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Jiren+Full+Power"
        ],
        "stats": { "fuerza": 99, "velocidad": 97, "ki": 99, "tecnica": 96 },
        "transformaciones": ["Base", "Poder M\u00E1ximo"],
        "tecnicas": ["Ca\u00F3n de Poder", "Pu\u00F1o del Orgullo", "Barrera de Ki"]
    },
    {
        "id": "hit", "Personaje": "Hit", "Raza": "Desconocida", "serie": "db-super",
        "Planeta de origen": "Universo 6", "Universo": "6",
        "afiliaciones": "Ninguna", "estado": "Vivo", "edad": "1000+",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 33, "titulo": "El asesino del Universo 6" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 12, "titulo": "El Torneo de los Universos" },
        "historia": "Hit es un legendario asesino del Universo 6 con la habilidad de manipular el tiempo. Su t\u00E9cnica Time Skip lo convirti\u00F3 en un rival formidable. En el Torneo del Poder, mejor\u00F3 su t\u00E9cnica para superar sus l\u00EDmites.",
        "descripcion": "Asesino legendario del Universo 6. Domina el Time Skip.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/607d8b?text=Hit"],
        "stats": { "fuerza": 88, "velocidad": 98, "ki": 90, "tecnica": 99 },
        "transformaciones": [],
        "tecnicas": ["Time Skip", "Time Lag", "Pu\u00F1o del Tiempo", "Asesinato Silencioso"]
    },
    {
        "id": "toppo", "Personaje": "Toppo", "Raza": "Desconocida", "serie": "db-super",
        "Planeta de origen": "Universo 11", "Universo": "11",
        "afiliaciones": "Tropa del Orgullo", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 85, "titulo": "El guerrero del Universo 11" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 30, "titulo": "Torneo del Poder" },
        "historia": "Toppo es el l\u00EDder de la Tropa del Orgullo del Universo 11 y candidato a Dios de la Destrucci\u00F3n. Su poder con justicia inquebrantable lo llev\u00F3 a desatar el poder de la destrucci\u00F3n contra Vegeta.",
        "descripcion": "L\u00EDder de la Tropa del Orgullo. Candidato a Dios de la Destrucci\u00F3n.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff6d00?text=Toppo",
            "https://via.placeholder.com/500x700/1a1a1a/ff6d00?text=Toppo+Hakai"
        ],
        "stats": { "fuerza": 92, "velocidad": 76, "ki": 94, "tecnica": 85 },
        "transformaciones": ["Base", "Dios de la Destrucci\u00F3n"],
        "tecnicas": ["Hakai", "Justicia Implacable", "Ca\u00F3n de la Justicia"]
    },
    {
        "id": "freezer-super", "Personaje": "Freezer Super", "Raza": "Raza de Freezer", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Ej\u00E9rcito de Freezer", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 19, "titulo": "El regreso de Freezer" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 5, "titulo": "El regreso del demonio" },
        "historia": "Freezer regres\u00F3 en Dragon Ball Super convertido en cyborg. Tras ser derrotado nuevamente, entren\u00F3 por primera vez en su vida y alcanz\u00F3 el Golden Freezer. M\u00E1s tarde, en el manga, logr\u00F3 la terror\u00EDfica forma Black Freezer.",
        "descripcion": "El emperador del mal renacido. Alcanz\u00F3 Golden y Black Freezer.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Golden+Freezer",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Black+Freezer"
        ],
        "stats": { "fuerza": 96, "velocidad": 94, "ki": 98, "tecnica": 90 },
        "transformaciones": ["Forma Final", "Golden Freezer", "Black Freezer"],
        "tecnicas": ["Death Beam", "Supernova", "Death Ball", "Rayo Mortal"]
    },

    // ============================================================
    // DRAGON BALL DAIMA (db-daima)
    // ============================================================
    {
        "id": "goku-daima", "Personaje": "Goku (Mini)", "Raza": "Saiyan", "serie": "db-daima",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Reducido",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El nuevo mundo" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Anime original" },
        "historia": "En Dragon Ball Daima, Goku y sus amigos son convertidos en ni\u00F1os por un deseo malvado. Emprenden una aventura en un misterioso mundo. A pesar de su tama\u00F1o reducido, Goku conserva su poder y descubre nuevas formas como el Super Saiyan 4 Daima.",
        "descripcion": "Goku convertido en ni\u00F1o. Nuevas aventuras en un mundo desconocido.",
        "imagenes": [
            "https://lh3.googleusercontent.com/d/1L2GCoJ9czVdIqcEr4DleZq3eL0mUpmis",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+Base"
        ],
        "stats": { "fuerza": 85, "velocidad": 88, "ki": 90, "tecnica": 85 },
        "transformaciones": [
            { "id": "gokud_base", "orden": 1, "nombre": "Base (Mini)", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+Base", "descripcion": "Goku en su forma reducida.", "saga": "Dragon Ball Daima" },
            { "id": "gokud_ssj4", "orden": 2, "nombre": "Super Saiyan 4 Daima", "imagen": "https://lh3.googleusercontent.com/d/1L2GCoJ9czVdIqcEr4DleZq3eL0mUpmis", "descripcion": "Variante del SSJ4 compatible con el cuerpo reducido.", "saga": "Dragon Ball Daima" }
        ],
        "tecnicas": ["Kamehameha", "Teletransportaci\u00F3n", "Kaioken"]
    },
    {
        "id": "vegeta-daima", "Personaje": "Vegeta (Mini)", "Raza": "Saiyan", "serie": "db-daima",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Reducido",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El nuevo mundo" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Anime original" },
        "historia": "Vegeta tambi\u00E9n fue convertido en ni\u00F1o en Dragon Ball Daima. Acompa\u00F1a a Goku en la nueva aventura, manteniendo su orgullo Saiyan a pesar de su apariencia juvenil.",
        "descripcion": "Vegeta en versi\u00F3n mini. Orgullo Saiyan intacto.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Mini+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Mini+SSJ"
        ],
        "stats": { "fuerza": 84, "velocidad": 80, "ki": 85, "tecnica": 86 },
        "transformaciones": ["Base (Mini)", "Super Saiyan (Mini)"],
        "tecnicas": ["Galick Gun", "Final Flash"]
    },
    {
        "id": "shin-daima", "Personaje": "Shin (Mini)", "Raza": "Kaioshin", "serie": "db-daima",
        "Planeta de origen": "Mundo Sagrado", "Universo": "7",
        "afiliaciones": "Universo 7", "estado": "Vivo", "edad": "Reducido",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El nuevo mundo" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Anime original" },
        "historia": "Shin, el Supremo Kaioshin del Universo 7, tambi\u00E9n es reducido en Dragon Ball Daima. Gu\u00EDa a Goku y Vegeta en el nuevo mundo.",
        "descripcion": "Supremo Kaioshin en versi\u00F3n mini. Gu\u00EDa a los guerreros en Daima.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/00bcd4?text=Shin+Mini"],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 80, "tecnica": 85 },
        "transformaciones": [],
        "tecnicas": ["Kai Kai", "Poder Divino"]
    },
    {
        "id": "glorio", "Personaje": "Glorio", "Raza": "Desconocida", "serie": "db-daima",
        "Planeta de origen": "Reino Demon\u00EDaco", "Universo": "7",
        "afiliaciones": "Reino Demon\u00EDaco", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El nuevo mundo" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Anime original" },
        "historia": "Glorio es un misterioso guerrero del Reino Demon\u00EDaco que aparece en Dragon Ball Daima. Sus verdaderas intenciones son desconocidas.",
        "descripcion": "Misterioso guerrero del Reino Demon\u00EDaco.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Glorio"],
        "stats": { "fuerza": 70, "velocidad": 65, "ki": 68, "tecnica": 72 },
        "transformaciones": [],
        "tecnicas": ["R\u00E1faga de Ki", "Vuelo"]
    },

    // ============================================================
    // DRAGON BALL GAMES (db-games)
    // ============================================================
    {
        "id": "cc-goku", "Personaje": "CC Goku", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Contrahistoria",
        "afiliaciones": "Time Patrol", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Super Dragon Ball Heroes", "episodio": 1, "titulo": "El prisionero del tiempo" },
        "primeraAparicionManga": { "manga": "Dragon Ball Xenoverse 2", "capitulo": "N/A", "titulo": "Videojuego" },
        "historia": "CC Goku es el Goku de la Contrahistoria, miembro de la Patrulla del Tiempo. Viste el uniforme de la Time Patrol y posee habilidades \u00FAnicas como el Super Saiyan God Super Saiyan Evolved.",
        "descripcion": "Goku de la Time Patrol. Protector de la l\u00EDnea temporal.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=CC+Goku",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=CC+Goku+SSG"
        ],
        "stats": { "fuerza": 90, "velocidad": 90, "ki": 92, "tecnica": 88 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan God", "Super Saiyan Blue"],
        "tecnicas": ["Kamehameha", "Timeskip", "Patrulla del Tiempo"]
    },
    {
        "id": "fu", "Personaje": "Fu", "Raza": "Humano (Mutante)", "serie": "db-games",
        "Planeta de origen": "Desconocido", "Universo": "Contrahistoria",
        "afiliaciones": "Ninguna", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Super Dragon Ball Heroes", "episodio": 1, "titulo": "El prisionero del tiempo" },
        "primeraAparicionManga": { "manga": "Dragon Ball Heroes", "capitulo": "N/A", "titulo": "Videojuego" },
        "historia": "Fu es un cient\u00EDfico del tiempo, hijo del malvado Towa. Manipula la Contrahistoria para crear nuevos escenarios de batalla y observar el caos resultante. Su poder ha crecido enormemente en Super Dragon Ball Heroes.",
        "descripcion": "Cient\u00EDfico del tiempo. Manipulador de la Contrahistoria.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Fu",
            "https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Fu+Oscuro"
        ],
        "stats": { "fuerza": 88, "velocidad": 85, "ki": 92, "tecnica": 95 },
        "transformaciones": ["Base", "Fu Oscuro", "Fu Absorbido"],
        "tecnicas": ["Time Break", "Rayo Oscuro", "Manipulaci\u00F3n Temporal"]
    },
    {
        "id": "sdbh-goku", "Personaje": "SDBH Goku", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Contrahistoria",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Super Dragon Ball Heroes", "episodio": 1, "titulo": "El prisionero del tiempo" },
        "primeraAparicionManga": { "manga": "Super Dragon Ball Heroes", "capitulo": "N/A", "titulo": "Manga promocional" },
        "historia": "El Goku de Super Dragon Ball Heroes ha alcanzado formas imposibles gracias a la energ\u00EDa de la Contrahistoria. Posee transformaciones como Super Saiyan 4 Limit Breaker y Ultra Instinto combinado con SSJ4.",
        "descripcion": "Goku de SDBH con formas imposibles como SSJ4 Limit Breaker.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SDBH+Goku+SSJ4",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SDBH+Goku+UI"
        ],
        "stats": { "fuerza": 97, "velocidad": 96, "ki": 98, "tecnica": 90 },
        "transformaciones": ["Base", "Super Saiyan 4", "Super Saiyan 4 Limit Breaker", "Ultra Instinto"],
        "tecnicas": ["Kamehameha Ah\u00ED", "God Kamehameha", "Teletransportaci\u00F3n"]
    },
    {
        "id": "sdbh-vegeta", "Personaje": "SDBH Vegeta", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Contrahistoria",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Super Dragon Ball Heroes", "episodio": 1, "titulo": "El prisionero del tiempo" },
        "primeraAparicionManga": { "manga": "Super Dragon Ball Heroes", "capitulo": "N/A", "titulo": "Manga promocional" },
        "historia": "El Vegeta de Super Dragon Ball Heroes tambi\u00E9n ha alcanzado formas \u00FAnicas como Super Saiyan 4 Evolution y Ultra Ego combinado con formas primitivas.",
        "descripcion": "Vegeta de SDBH con formas \u00FAnicas como SSJ4 Evolution.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SDBH+Vegeta+SSJ4",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SDBH+Vegeta+UE"
        ],
        "stats": { "fuerza": 96, "velocidad": 92, "ki": 97, "tecnica": 93 },
        "transformaciones": ["Base", "Super Saiyan 4", "Super Saiyan 4 Evolution", "Ultra Ego"],
        "tecnicas": ["Final Shine Attack", "Galick Gun", "Flash of Destruction"]
    },
    {
        "id": "demigra", "Personaje": "Demigra", "Raza": "Mago", "serie": "db-games",
        "Planeta de origen": "Desconocido", "Universo": "Contrahistoria",
        "afiliaciones": "Ninguna", "estado": "Vivo", "edad": "Milenios",
        "primeraAparicionAnime": { "serie": "Dragon Ball Xenoverse", "episodio": "N/A", "titulo": "Videojuego" },
        "primeraAparicionManga": { "manga": "Dragon Ball Xenoverse", "capitulo": "N/A", "titulo": "Videojuego" },
        "historia": "Demigra es un poderoso mago y uno de los principales antagonistas de Dragon Ball Xenoverse. Busca controlar la historia alterando el flujo del tiempo. Su poder rivaliza con el de los Dioses de la Destrucci\u00F3n.",
        "descripcion": "Mago oscuro que busca controlar la historia.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Demigra",
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Demigra+Final"
        ],
        "stats": { "fuerza": 90, "velocidad": 85, "ki": 95, "tecnica": 98 },
        "transformaciones": ["Base", "Demigra Final"],
        "tecnicas": ["Magia Oscura", "Control Mental", "Esfera de la Oscuridad"]
    },

    // ============================================================
    // DRAGON BALL AF (db-af)
    // ============================================================
    {
        "id": "goku-af", "Personaje": "Goku AF", "Raza": "Saiyan", "serie": "db-af",
        "Planeta de origen": "Vegeta", "Universo": "7 (Fanmade)",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball AF (Fanmade)", "episodio": "N/A", "titulo": "Fanmade" },
        "primeraAparicionManga": { "manga": "Dragon Ball AF (Toyble)", "capitulo": 1, "titulo": "El regreso de Goku" },
        "historia": "En el legendario fanmade Dragon Ball AF, Goku alcanz\u00F3 el m\u00EDtico Super Saiyan 5, una forma de cabello blanco y largo que supera todo lo conocido. La historia contin\u00FAa tras Dragon Ball GT explorando nuevos l\u00EDmites de poder.",
        "descripcion": "La leyenda fanmade. Goku alcanz\u00F3 el m\u00EDtico Super Saiyan 5.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Goku+SSJ5",
            "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Goku+AF+Base"
        ],
        "stats": { "fuerza": 100, "velocidad": 99, "ki": 100, "tecnica": 95 },
        "transformaciones": [
            { "id": "gokuaf_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Goku+AF+Base", "descripcion": "Estado base de Goku en AF.", "saga": "Dragon Ball AF" },
            { "id": "gokuaf_ssj4", "orden": 2, "nombre": "Super Saiyan 4", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Goku+AF+SSJ4", "descripcion": "Super Saiyan 4 con un poder incrementado.", "saga": "Dragon Ball AF" },
            { "id": "gokuaf_ssj5", "orden": 3, "nombre": "Super Saiyan 5", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Goku+SSJ5", "descripcion": "La legendaria forma de cabello blanco y largo. Poder que trasciende todo.", "saga": "Dragon Ball AF" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportaci\u00F3n", "Pu\u00F1o del Drag\u00F3n"]
    },
    {
        "id": "xicor", "Personaje": "Xicor", "Raza": "Saiyan/Dios", "serie": "db-af",
        "Planeta de origen": "Desconocido", "Universo": "7 (Fanmade)",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball AF (Fanmade)", "episodio": "N/A", "titulo": "Fanmade" },
        "primeraAparicionManga": { "manga": "Dragon Ball AF (Toyble)", "capitulo": 2, "titulo": "El hijo del dios" },
        "historia": "Xicor es el hijo de Goku y la diosa Zenkai en el fanmade Dragon Ball AF. Es un ser de inmenso poder que supera incluso a Goku SSJ5. Su existencia desaf\u00EDa el orden del universo.",
        "descripcion": "Hijo de Goku en AF. Poder que supera al Super Saiyan 5.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Xicor",
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Xicor+Final"
        ],
        "stats": { "fuerza": 100, "velocidad": 100, "ki": 100, "tecnica": 98 },
        "transformaciones": ["Base", "Xicor Final", "Xicor M\u00E1ximo"],
        "tecnicas": ["Pu\u00F1o Divino", "Rayo C\u00F3smico", "Teletransportaci\u00F3n Divina"]
    },
    {
        "id": "vegeta-af", "Personaje": "Vegeta AF", "Raza": "Saiyan", "serie": "db-af",
        "Planeta de origen": "Vegeta", "Universo": "7 (Fanmade)",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball AF (Fanmade)", "episodio": "N/A", "titulo": "Fanmade" },
        "primeraAparicionManga": { "manga": "Dragon Ball AF (Toyble)", "capitulo": 3, "titulo": "El pr\u00EDncipe renace" },
        "historia": "Vegeta en Dragon Ball AF no se queda atr\u00E1s. Alcanza su propio Super Saiyan 5, demostrando que su orgullo Saiyan lo impulsa a seguir los pasos de Goku hacia nuevas cimas de poder.",
        "descripcion": "Vegeta AF con su propio Super Saiyan 5.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Vegeta+SSJ5",
            "https://via.placeholder.com/500x700/1a1a1a/ffffff?text=Vegeta+AF+Base"
        ],
        "stats": { "fuerza": 98, "velocidad": 94, "ki": 98, "tecnica": 95 },
        "transformaciones": ["Base", "Super Saiyan 4", "Super Saiyan 5"],
        "tecnicas": ["Galick Gun", "Final Flash", "Orgullo Saiyan"]
    }
];

var MEDIA_DATA = {
    "series": [
        {
            "titulo": "Dragon Ball",
            "descripcion": "La aventura original de Goku buscando las Esferas del Drag\u00F3n.",
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
            "info": "153 Episodios",
            "capitulos": 153,
            "inicio": "26/02/1986",
            "fin": "19/04/1989",
            "alias": ["DB", "Dragon Ball Cl\u00E1sico"]
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
            "descripcion": "Secuela alternativa donde Goku vuelve a ser ni\u00F1o.",
            "imagen": "https://lh3.googleusercontent.com/d/1hEN8OUh65JHzYgOO67te3YL7x1TJ2z91",
            "info": "64 Episodios",
            "capitulos": 64,
            "inicio": "07/02/1996",
            "fin": "19/11/1997",
            "alias": ["DBGT", "GT"]
        },
        {
            "titulo": "Dragon Ball Z Kai",
            "descripcion": "Remasterizaci\u00F3n de DBZ fiel al manga y sin relleno.",
            "imagen": "https://lh3.googleusercontent.com/d/1MrKM3d6CccP1Io_PeMK5tJSHAqelg0_Y",
            "info": "167 Episodios",
            "capitulos": 167,
            "inicio": "05/04/2009",
            "fin": "28/08/2011",
            "alias": ["Kai", "DBZ Kai"]
        },
        {
            "titulo": "Dragon Ball Super",
            "descripcion": "Continuaci\u00F3n oficial tras la derrota de Majin Buu.",
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
            "fin": "En emisi\u00F3n",
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
            "descripcion": "La legendaria historia fanmade de los a\u00F1os 2000.",
            "imagen": "https://lh3.googleusercontent.com/d/1qHsFQJOTLlQKxoaBHyoOB2tWWye_qFN0",
            "info": "Fanmade",
            "capitulos": 0,
            "inicio": "\u2014",
            "fin": "\u2014",
            "alias": ["DBAF", "AF"]
        }
    ],
    "mangas": [
        { "titulo": "DB X SAITAMA", "descripcion": "Crossover fan", "imagen": "https://lh3.googleusercontent.com/d/1vIZ2kGV1XdULy2bbfwotFTAMQWCR-w7u", "tipo": "fan" },
        { "titulo": "DBAF", "descripcion": "Fan manga AF", "imagen": "https://lh3.googleusercontent.com/d/1_QJe6RcQKceqBkqUQz9-S6xr9AH8bePq", "tipo": "fan" },
        { "titulo": "DRAGON BALL", "descripcion": "Manga original de Akira Toriyama", "imagen": "https://lh3.googleusercontent.com/d/1Vsy7Y1QCKC458m6B4Lcq_f0J5dN4j6kx", "tipo": "oficial" },
        { "titulo": "DRAGON BALL: Aquella vez que me reencarn\u00E9 en Yamcha", "descripcion": "Spin-off oficial", "imagen": "https://lh3.googleusercontent.com/d/1Ucj90qCRunNLccmBamHd-3maGQP2GA9x", "tipo": "oficial" },
        { "titulo": "DB MULTIVERSE", "descripcion": "Fan manga multiverso", "imagen": "https://lh3.googleusercontent.com/d/1SJjeWUjlFR7L9-xgexaKE3VNwJfAVOTl", "tipo": "fan" },
        { "titulo": "DRAGON BALL SUPER", "descripcion": "Continuaci\u00F3n oficial del manga", "imagen": "https://lh3.googleusercontent.com/d/1Mbnn5SXWKHSUmbWx_6NOF-q63QVXLDal", "tipo": "oficial" },
        { "titulo": "DRAGON BALL KAKUMEI", "descripcion": "Fan manga alternativo", "imagen": "https://lh3.googleusercontent.com/d/15AwAhSl2_pgFB7qJ5iLfQd6cJQ6fwzaF", "tipo": "fan" }
    ],
    "peliculas": [
        { "titulo": "La leyenda de Shenlong / El camino hacia el m\u00E1s fuerte (Latam)", "descripcion": "Dragon Ball", "info": "Diciembre 1986", "imagen": "https://lh3.googleusercontent.com/d/1MeskJh-7K8Q8UfAK1pT-1f3cBehBdwLa" },
        { "titulo": "La bella durmiente en el castillo del mal / La princesa durmiente en el castillo del diablo", "descripcion": "Dragon Ball", "info": "Julio 1987", "imagen": "https://lh3.googleusercontent.com/d/1Yhtd75UnoUgdHxeJJS8IeDnAS20X5u7O" },
        { "titulo": "Aventura m\u00EDstica / Gran aventura m\u00EDstica", "descripcion": "Dragon Ball", "info": "Julio 1988", "imagen": "https://lh3.googleusercontent.com/d/1vdukB3FoFKOewaWd4za-1Qe793mmRCuO" },
        { "titulo": "Garlic Junior Inmortal / \u00A1Devu\u00E9lvanme a mi Gohan!", "descripcion": "Dragon Ball Z", "info": "Julio 1989", "imagen": "https://lh3.googleusercontent.com/d/1msJ6i3_F-OaBOWQVRG4fvKtFjkF6jfZg" },
        { "titulo": "El m\u00E1s fuerte del mundo", "descripcion": "Dragon Ball Z", "info": "Marzo 1990", "imagen": "https://lh3.googleusercontent.com/d/1aUuKp0ekK4q9qykIA-ov3QuovAyd-TXh" },
        { "titulo": "La superbatalla decisiva por la Tierra / La batalla m\u00E1s grande de este mundo por la Tierra", "descripcion": "Dragon Ball Z", "info": "Julio 1990", "imagen": "https://lh3.googleusercontent.com/d/1kLDjDs91N0qm85BoLVbH3Al09v4LN_pa" },
        { "titulo": "El superguerrero Son Goku / Goku es un Super Saiyajin", "descripcion": "Dragon Ball Z", "info": "Marzo 1991", "imagen": "https://lh3.googleusercontent.com/d/1R9BYS8ZqtUZ2C0Nu36zVGOf4pPdMreWU" },
        { "titulo": "Los mejores rivales / Los rivales m\u00E1s poderosos", "descripcion": "Dragon Ball Z", "info": "Julio 1991", "imagen": "https://lh3.googleusercontent.com/d/1WBJj1qH5gtPbyfyWMoDcMY2F0ySpyHj0" },
        { "titulo": "Guerreros de fuerza ilimitada / Los guerreros m\u00E1s poderosos", "descripcion": "Dragon Ball Z", "info": "Marzo 1992", "imagen": "https://lh3.googleusercontent.com/d/1Yct44chN74cdxfZ9bNYF1ivkY8GyhuLY" },
        { "titulo": "Los tres grandes Super Saiyans / La pelea de los tres Saiyajins", "descripcion": "Dragon Ball Z", "info": "Julio 1992", "imagen": "https://lh3.googleusercontent.com/d/1C_ot9R07D6yvo2AXiAw7uztJaZk8zhk_" },
        { "titulo": "Estalla el duelo / El poder invencible", "descripcion": "Dragon Ball Z", "info": "Marzo 1993", "imagen": "https://lh3.googleusercontent.com/d/1s9xEKPOGc-1nulMQG0Cuef_bzGSBBw_U" },
        { "titulo": "Los guerreros de plata / La galaxia corre peligro", "descripcion": "Dragon Ball Z", "info": "Julio 1993", "imagen": "https://lh3.googleusercontent.com/d/1PYOnYKFLEcU-pXcVFhVwL_1GJF8CoejI" },
        { "titulo": "El regreso de Broly / El regreso del guerrero legendario", "descripcion": "Dragon Ball Z", "info": "Marzo 1994", "imagen": "https://lh3.googleusercontent.com/d/1c0gsVhK-24jp79MqRrZkZZV33yqBTCHF" },
        { "titulo": "El combate definitivo / El combate final", "descripcion": "Dragon Ball Z", "info": "Julio 1994", "imagen": "https://lh3.googleusercontent.com/d/1zhU7lVBjEiiViivwCBjRw_rxvS6FuIMI" },
        { "titulo": "\u00A1El renacer de la fusi\u00F3n! / La fusi\u00F3n de Goku y Vegeta", "descripcion": "Dragon Ball Z", "info": "Marzo 1995", "imagen": "https://lh3.googleusercontent.com/d/10g1s8cP-wgrt3x4P-EQKQQdNj87GBXqM" },
        { "titulo": "El ataque del drag\u00F3n / El ataque del drag\u00F3n", "descripcion": "Dragon Ball Z", "info": "Julio 1995", "imagen": "https://lh3.googleusercontent.com/d/1YzWZBnF5SVHQ76ZtHzGo_d9--o8AvU3S" },
        { "titulo": "El camino hacia el m\u00E1s fuerte / El camino hacia el poder", "descripcion": "Dragon Ball (Especial 10\u00BA Aniv.)", "info": "Marzo 1996", "imagen": "https://lh3.googleusercontent.com/d/1kv0-M5kuwkQKEV8zMuH0Fmc4q-Ku0ujK" },
        { "titulo": "La batalla de los dioses", "descripcion": "Dragon Ball Super", "info": "Marzo 2013", "imagen": "https://lh3.googleusercontent.com/d/1BXVTWTH1_wW205QretsCiGiwLq5fTxPH" },
        { "titulo": "La resurrecci\u00F3n de Freezer / La resurrecci\u00F3n de 'F'", "descripcion": "Dragon Ball Super", "info": "Abril 2015", "imagen": "https://lh3.googleusercontent.com/d/132tuEe-NXEG0zbYYZb307YFL433YTok9" },
        { "titulo": "Dragon Ball Super: Broly", "descripcion": "Dragon Ball Super", "info": "Diciembre 2018", "imagen": "https://lh3.googleusercontent.com/d/13bM-a9y8l72FiBD0-ZY5qr1HqOQV9Qck" },
        { "titulo": "Dragon Ball Super: Super Hero", "descripcion": "Dragon Ball Super", "info": "Junio 2022", "imagen": "https://lh3.googleusercontent.com/d/1--0Hiil4UtBmw8ktiXNCla9m1edyCby2" }
    ],
    "videojuegos": [
        { "titulo": "Dragon Ball Sparking! ZERO", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/115sLGIdzioiaRAsxG4ATFfliXWObYpQF" },
        { "titulo": "Dragon Ball Z: Sagas", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/12jXt_CnKRxXIQD_MTGYg79BPLaij85R3" },
        { "titulo": "Dragon Ball Z: Buu's Fury", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15F8kUwNevGxeU3hBfRksKLZdu6gG_n8Z" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15SZUX8XyEOFjHgV9J8mUFKLLRCrNxEaH" },
        { "titulo": "Dragon Ball: The Breakers", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15n9jmkwKd64AyrYaG1Q3Mo_LTw5LhI4X" },
        { "titulo": "Dragon Ball Raging Blast", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1CDaqeXIbeSDIL-cB8Nm72SojEbGHYKGv" },
        { "titulo": "Dragon Ball Z: Budokai", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1GR5bWqLoO7eGdz-yeKOnyJqmqoDsd7JE" },
        { "titulo": "Dragon Ball Z: El Legado de Goku", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1KYbxQgzTN4Rxnn314-uUSZY4AkqPNd_X" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 3", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1LJjapTQJ28k_6Pt1_vZxFMqBi2wmWx6_" },
        { "titulo": "Dragon Ball Legends", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1OTxA0GWun1qk-8bOyLrNqwuyDHn6Dtro" },
        { "titulo": "Dragon Ball Raging Blast 2", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1PpxQ0fS7kzhmG1gg0TlQqfc-QldSZwzM" },
        { "titulo": "Dragon Ball Z: Kakarot", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Q2frh1C-i8lHs2kSVs4nmSuVaqPVBn7m" },
        { "titulo": "Dragon Ball Z: Shin Budokai", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1QSfUMU0HG63XqUElUscGbN1c--BmQpTm" },
        { "titulo": "Dragon Ball Z: Shin Budokai - Another Road", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1SquR3MJrgxrgRYXCWEfD-fkeuGRgi9Ed" },
        { "titulo": "Dragon Ball: Advanced Adventure", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Tsj4ICOMHfisXKItRYObeu608txA71Vz" },
        { "titulo": "Dragon Ball Z: Budokai 3", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1UcPPHRupw_7Cg0bcceCMZux00fbWcLyA" },
        { "titulo": "Dragon Ball Z: Budokai 2", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1VpnGeNTwnoCeF1OIgONFwFXrSiQBCZtY" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 2", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aBMBzvH8LUqDZoxDfdTzednCwXTiahY1" },
        { "titulo": "Dragon Ball Z: The Legacy of Goku II", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aCDo3I04ud5PcA1l2Z7JGvowVUYCsa3K" },
        { "titulo": "Dragon Ball FighterZ", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1emM49Xbed6wuzu6W5FP7DXiC2uGydUwM" },
        { "titulo": "Dragon Ball Z: Dokkan Battle", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1nM6Wc-shh6lH8TRVS0NRhhA23Mc638qW" },
        { "titulo": "Dragon Ball Xenoverse 2", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1opHnByooG3XhwoOGb129gvTHK2zemLQz" },
        { "titulo": "Super Dragon Ball Heroes: World Mission", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1qY1OnwfhIGcE2fNxGPPytaxjn5HpSo8r" },
        { "titulo": "Dragon Ball Fusions", "descripcion": "Informaci\u00F3n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1x6y8WCWJA-7eH_aRckj_Bp0YKRv92lmk" }
    ],
    "videos": [
        { "titulo": "Dragon Ball Cl\u00E1sico - Opening (Makafushigi Adventure)", "descripcion": "El opening original que inici\u00F3 la leyenda de Dragon Ball.", "imagen": "https://img.youtube.com/vi/JSb7p0SIc1w/mqdefault.jpg", "youtubeId": "JSb7p0SIc1w", "categoria": "Openings" },
        { "titulo": "Goku se Transforma en Super Saiyajin 3 por Primera Vez", "descripcion": "La impactante transformaci\u00F3n de Goku SSJ3 frente a Majin Buu.", "imagen": "https://img.youtube.com/vi/Ut8wlVuT3pc/mqdefault.jpg", "youtubeId": "Ut8wlVuT3pc", "categoria": "Transformaciones" },
        { "titulo": "Goku Despierta el Ultra Instinto por Primera Vez", "descripcion": "Goku alcanza el Ultra Instinto por primera vez en el Torneo del Poder.", "imagen": "https://img.youtube.com/vi/6CF29TtxU2c/mqdefault.jpg", "youtubeId": "6CF29TtxU2c", "categoria": "Transformaciones" },
        { "titulo": "Gogeta vs Broly - Batalla \u00C9pica Completa", "descripcion": "La fusi\u00F3n definitiva de Gogeta vs Broly en 4K.", "imagen": "https://img.youtube.com/vi/BYt9F2vCfqU/mqdefault.jpg", "youtubeId": "BYt9F2vCfqU", "categoria": "Batallas" },
        { "titulo": "Vegito vs Majin Buu - Combate Legendario", "descripcion": "Vegito hace su debut aplastando a Buuhan en una batalla \u00E9pica.", "imagen": "https://img.youtube.com/vi/pmB5p1ZIWQw/mqdefault.jpg", "youtubeId": "pmB5p1ZIWQw", "categoria": "Batallas" },
        { "titulo": "Goku vs Majin Vegeta - La Rivalidad Saiyajin", "descripcion": "La pelea m\u00E1s intensa entre Goku y Vegeta bajo el control de Babidi.", "imagen": "https://img.youtube.com/vi/89fzXpb9rCU/mqdefault.jpg", "youtubeId": "89fzXpb9rCU", "categoria": "Batallas" },
        { "titulo": "Dragon Ball Super: SUPER HERO - Tr\u00E1iler Oficial", "descripcion": "El tr\u00E1iler oficial de la pel\u00EDcula Super Hero con Gohan y Piccolo.", "imagen": "https://img.youtube.com/vi/t5CIs0jDqC8/mqdefault.jpg", "youtubeId": "t5CIs0jDqC8", "categoria": "Trailers" },
        { "titulo": "Dragon Ball Z Kakarot DLC 6 - Goku vs Vegeta 4K (Goku's Next Journey)", "descripcion": "La batalla final entre Goku y Vegeta en el DLC 6 de Dragon Ball Z Kakarot en 4K 60FPS.", "imagen": "https://img.youtube.com/vi/p3CDfDwwb6Q/mqdefault.jpg", "youtubeId": "p3CDfDwwb6Q", "categoria": "Batallas" }
    ],
    "fanAnimations": [
        {
            "titulo": "Dragon Ball Deliverance",
            "creador": "FRAME ONE",
            "url": "https://www.youtube.com/@frameone1",
            "descripcion": "A\u00F1os despu\u00E9s de Dragon Ball GT, los Z Fighters se enfrentan a una poderosa amenaza que causa caos en Namek. Serie fan-made con animaci\u00F3n de alta calidad y modelados 3D.",
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
            "descripcion": "La batalla final de Gohan del futuro contra los androides, recreada con una impresionante animaci\u00F3n fan que captura la esencia del guerrero m\u00E1s tr\u00E1gico.",
            "imagen": "https://img.youtube.com/vi/rQ_eqJHw4tE/mqdefault.jpg",
            "capitulos": [
                { "titulo": "Partes 1 + 2", "youtubeId": "rQ_eqJHw4tE" }
            ]
        },
        {
            "titulo": "Dragon Ball MAGIC",
            "creador": "Totally Not Mark",
            "url": "https://www.youtube.com/@TotallyNotMark",
            "descripcion": "Una parodia animada en colaboraci\u00F3n con TeamFourStar que reimagina el universo Dragon Ball con un toque de humor y creatividad.",
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
            "nombre": "Dragon Ball Cl\u00E1sico",
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
            "sagas": [
                { "titulo": "Saga de Pilaf", "imagen": "https://lh3.googleusercontent.com/d/1gJ9FBJKuQ8p-KItR1D6tnAkzgYkYkgfv" },
                { "titulo": "Saga del 21\u00B0 Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1fyWjTkx8cRMp65swf1U1JZtREmi0ylCq" },
                { "titulo": "Saga del Ej\u00E9rcito de la Patrulla Roja (Red Ribbon)", "imagen": "https://lh3.googleusercontent.com/d/14XvgWlBw9b4sZ5Qk58WA1qG6kX8Y6Ibo" },
                { "titulo": "Saga de Uranai Baba", "imagen": "https://lh3.googleusercontent.com/d/1PkQrcpTKiQ103YTouhggGkJKxtVYAcnW" },
                { "titulo": "Saga del 22\u00B0 Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1EAk58Ae4gpHYbUkY5L0KqvpMopAM_CdG" },
                { "titulo": "Saga de Piccolo Daima\u014D", "imagen": "https://lh3.googleusercontent.com/d/1uJzWMgU1NFj3-_N6MvhyuRy7A6Qgwy5S" },
                { "titulo": "Saga del 23\u00B0 Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1AKxAfo8pmqIKqkR81rVvAmV5zCTSOD6u" }
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
                { "titulo": "Saga de las Esferas del Drag\u00F3n de la Estrella Negra", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Estrellas+Negras" },
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
                { "titulo": "Saga de la Resurrecci\u00F3n de \u201CF\u201D", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Resurreccion+de+F" },
                { "titulo": "Saga del Torneo del Universo 6", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Torneo+Universo+6" },
                { "titulo": "Saga de Goku Black (o de Trunks del Futuro)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Goku+Black" },
                { "titulo": "Saga del Torneo del Poder (o de la Supervivencia Universal)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Torneo+del+Poder" },
                { "titulo": "Pel\u00EDcula Dragon Ball Super: Broly", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+Broly" },
                { "titulo": "Saga de Moro (o del Prisionero de la Patrulla Gal\u00E1ctica)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Moro" },
                { "titulo": "Saga de Granolah el Superviviente", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Granolah" },
                { "titulo": "Pel\u00EDcula / Saga de Super Hero", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+Hero" }
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
            { "nombre": "Cristal de la Omnipotencia", "dragon": "\u2014", "color": "info", "descripcion": "Artefacto \u00FAnico capaz de otorgar poder absoluto sin l\u00EDmites conocidos.", "imagen": "https://lh3.googleusercontent.com/d/1kwllvhGWA2-9KxqwPStyca9v6mUKTMWc" }
        ],
        "principales": [
            { "nombre": "Esferas del Drag\u00F3n", "dragon": "Shenlong", "color": "warning", "descripcion": "Las siete esferas de la Tierra. Conceden un deseo al reunirlas.", "imagen": "https://lh3.googleusercontent.com/d/1_bCHC8MeGlixl6yqSuso8G5V9uhn8AmM" },
            { "nombre": "Esferas del Drag\u00F3n de Namek", "dragon": "Porunga", "color": "success", "descripcion": "Mucho m\u00E1s grandes; conceden tres deseos en idioma Namek.", "imagen": "https://lh3.googleusercontent.com/d/1powONUqd6btTR4GheQvAyc990HKHTBDA" },
            { "nombre": "Super Esferas del Drag\u00F3n", "dragon": "Super Shenlong", "color": "info", "descripcion": "Del tama\u00F1o de planetas. Sin l\u00EDmites de poder.", "imagen": "https://lh3.googleusercontent.com/d/14MPoXE9vqzqPwwP5Bg-Yt6jJ_whWYG4h" }
        ],
        "variantes": [
            { "nombre": "Esferas del Drag\u00F3n de Cereal", "dragon": "Toronbo", "color": "success", "descripcion": "Esferas del planeta Cereal, hogar de Granolah.", "imagen": "https://lh3.googleusercontent.com/d/1dMQfaDo2tfXNmb954-T34DwuEQamJc5W" },
            { "nombre": "Esferas del Drag\u00F3n Oscuras", "dragon": "Drag\u00F3n Oscuro", "color": "dark", "descripcion": "Esferas de color oscuro vinculadas a energ\u00EDas corruptas y dragones oscuros.", "imagen": "https://lh3.googleusercontent.com/d/13tgVnKRZ6GhYFAJUP1AMHWn-CQAk2a7R" },
            { "nombre": "Esferas del Drag\u00F3n Especiales", "dragon": "Shenlong", "color": "primary", "descripcion": "Ediciones limitadas y variantes especiales del multiverso.", "imagen": "https://lh3.googleusercontent.com/d/1fRtltVnEL1Vb3hGGUxRVvxALscKHcNPF" },
            { "nombre": "Esferas del Drag\u00F3n de Energ\u00EDa Negativa", "dragon": "\u2014", "color": "danger", "descripcion": "Esferas cargadas con energ\u00EDa negativa que distorsionan los deseos.", "imagen": "https://lh3.googleusercontent.com/d/13whURNtmtBWqfJStYOvzesGhikpxCnC7" },
            { "nombre": "Esferas del Drag\u00F3n del Reino Demon\u00EDaco", "dragon": "Tamagami", "color": "secondary", "descripcion": "Artefactos del Reino Demon\u00EDaco introducidos en Dragon Ball Daima.", "imagen": "https://lh3.googleusercontent.com/d/19PLsHz2B_w4Gz1z6D4h5shGj4cxgMYxN" }
        ]
    },
    "universos": [
        { "id": 1, "dios": "Iwan", "angel": "Awamo", "imagen": "https://lh3.googleusercontent.com/d/18dAswrvAP5YvngQ3gRvlpwSO3czV8qE_", "highlight": false, "descripcion": "El universo con el nivel mortal m\u00E1s alto del multiverso, regido por la sabidur\u00EDa y el orden absoluto.", "diosInfo": { "nombre": "Iwan", "imagen": "https://lh3.googleusercontent.com/d/1hqOJQrZ60Mp5tO1jlGPKeKMDHzjaLoND", "descripcion": "Un Dios de la Destrucci\u00F3n de aspecto anciano, conocido por su actitud seria y su apego a las reglas.", "habilidades": "Poder de destrucci\u00F3n canalizado a trav\u00E9s de su bast\u00F3n. Su experiencia milenaria lo convierte en un estratega letal." }, "angelInfo": { "nombre": "Awamo", "imagen": "https://lh3.googleusercontent.com/d/1uTZx3iCdjYCuFsHpH3ylzgRsaJWe7UYs", "descripcion": "\u00C1ngel de modales impecables y porte distinguido.", "funcion": "Supervisar y entrenar al Dios de la Destrucci\u00F3n Iwan, adem\u00E1s de mantener el equilibrio del universo." }, "kaioshin": [ { "nombre": "Anciano Kaioshin del Universo 1", "imagen": "https://lh3.googleusercontent.com/d/1-INbrWfU4APaz7G55l4HwVsaLY3mj2zP", "descripcion": "El Supremo Kaioshin m\u00E1s antiguo del universo 1.", "rol": "Guiar la creaci\u00F3n y el desarrollo de la vida en el universo." } ] },
        { "id": 2, "dios": "Heles", "angel": "Sour", "imagen": "https://lh3.googleusercontent.com/d/1Lc2qFDNAO_wNpT9A-SUN0VOuqE7QOtBM", "highlight": false, "descripcion": "El universo del amor y la belleza, donde los guerreros luchan con elegancia y pasi\u00F3n.", "diosInfo": { "nombre": "Heles", "imagen": "https://lh3.googleusercontent.com/d/1s9pKbzkPmAF0DrHvjqGfFzTE1pZW_F55", "descripcion": "Una Diosa de la Destrucci\u00F3n femenina que valora la est\u00E9tica y el amor en todas sus formas.", "habilidades": "Destrucci\u00F3n estilizada con movimientos gr\u00E1ciles pero mortales. Puede canalizar la energ\u00EDa del amor en poder destructivo." }, "angelInfo": { "nombre": "Sour", "imagen": "https://lh3.googleusercontent.com/d/1ncHtTHvYBu_o6JHOArYuUWgGbyKb64AT", "descripcion": "\u00C1ngel de apariencia andr\u00F3gina y personalidad burbujeante.", "funcion": "Asistir a Heles y mantener el orden divino en el universo del amor." }, "kaioshin": [ { "nombre": "Pell", "imagen": "https://lh3.googleusercontent.com/d/1dVasadfFLsvNzxwKo10h-RkEIlSXOHSI", "descripcion": "Supremo Kaioshin del Universo 2, elegante y apasionado.", "rol": "Fomentar la creaci\u00F3n de vida con amor y armon\u00EDa." } ] },
        { "id": 3, "dios": "Mule", "angel": "Camparri", "imagen": "https://lh3.googleusercontent.com/d/1tVRNEvMnT0nVShSv-QrPxHMkOx6H7nBo", "highlight": false, "descripcion": "El universo de la inteligencia y la sabidur\u00EDa, habitado por seres l\u00F3gicos y estrat\u00E9gicos.", "diosInfo": { "nombre": "Mule", "imagen": "https://lh3.googleusercontent.com/d/12D1XlzrgYfp2hGwWWCUSX5N5bguXbMXX", "descripcion": "Un Dios de la Destrucci\u00F3n de complexi\u00F3n robusta, impulsivo pero con un gran coraz\u00F3n.", "habilidades": "Fuerza bruta combinada con ataques de destrucci\u00F3n masiva. Su resistencia es legendaria." }, "angelInfo": { "nombre": "Camparri", "imagen": "https://lh3.googleusercontent.com/d/1ds2ekAXr1omi5xszfbweAKvOTSnuWvTv", "descripcion": "\u00C1ngel sereno y calculador, siempre un paso adelante.", "funcion": "Guiar a Mule en sus decisiones destructivas y velar por el equilibrio universal." }, "kaioshin": [ { "nombre": "Ea", "imagen": "https://lh3.googleusercontent.com/d/1Hp7dJp580nXRNgUz8vl8DXgqLMIWk6yw", "descripcion": "Supremo Kaioshin del Universo 3, de complexi\u00F3n delgada y gran intelecto.", "rol": "Supervisar la creaci\u00F3n tecnol\u00F3gica y biol\u00F3gica del universo." } ] },
        { "id": 4, "dios": "Quitela", "angel": "Cognac", "imagen": "https://lh3.googleusercontent.com/d/1Mx28PSYFEy0xKtPefGhr7nRO6XxNjsrc", "highlight": false, "descripcion": "Un universo astuto y tramposo, donde la picard\u00EDa y el enga\u00F1o son moneda corriente.", "diosInfo": { "nombre": "Quitela", "imagen": "https://lh3.googleusercontent.com/d/1Q7YYEga0XPzrtLDE5CoXd8VMqojklp8_", "descripcion": "Un Dios de la Destrucci\u00F3n peque\u00F1o pero letal, conocido por su risa burlona y su astucia.", "habilidades": "Agilidad sobrehumana y ataques de destrucci\u00F3n quir\u00FArgicos. Experto en explotar debilidades ajenas." }, "angelInfo": { "nombre": "Cognac", "imagen": "https://lh3.googleusercontent.com/d/16UXe9tFsyC_hswuCP5uzSt9ymB4AYeup", "descripcion": "\u00C1ngel de aspecto joven y actitud juguetona.", "funcion": "Asistir a Quitela y mantener registros precisos del equilibrio universal." }, "kaioshin": [ { "nombre": "Kuru", "imagen": "https://lh3.googleusercontent.com/d/14tDD3ZhLSWDy_GaHMBRg8aa919I1-nnt", "descripcion": "Supremo Kaioshin del Universo 4, menudo y de movimientos r\u00E1pidos.", "rol": "Crear y supervisar las formas de vida ingeniosas del universo." } ] },
        { "id": 5, "dios": "Arack", "angel": "Cukatail", "imagen": "https://lh3.googleusercontent.com/d/1-_MbEVE8-a6kuueqetRtroefDZJsAHe1", "highlight": false, "descripcion": "Un universo equilibrado donde la fuerza y la sabidur\u00EDa coexisten en armon\u00EDa.", "diosInfo": { "nombre": "Arack", "imagen": "https://lh3.googleusercontent.com/d/1NB1iQBi6PkBdFa_O0LTRxp79wJJXxDLk", "descripcion": "Un Dios de la Destrucci\u00F3n de gran tama\u00F1o y fuerza colosal, de car\u00E1cter tranquilo pero implacable.", "habilidades": "Poder destructivo masivo con capacidad de afectar \u00E1reas extensas. Su presencia impone respeto." }, "angelInfo": { "nombre": "Cukatail", "imagen": "https://lh3.googleusercontent.com/d/125EzCjv11UH9rZppGpwXKSqkk7rzaRLu", "descripcion": "\u00C1ngel de personalidad en\u00E9rgica y entusiasta.", "funcion": "Entrenar a Arack y asegurar que la destrucci\u00F3n se realice con precisi\u00F3n milim\u00E9trica." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 5", "imagen": "https://lh3.googleusercontent.com/d/1egvDEW-FSGAcbBdRj-nMs_v-RAi5u8fe", "descripcion": "Supremo Kaioshin de sabidur\u00EDa profunda.", "rol": "Mantener la creaci\u00F3n y el desarrollo evolutivo del universo." } ] },
        { "id": 6, "dios": "Champa", "angel": "Vados", "imagen": "https://lh3.googleusercontent.com/d/1lqhTIUnlMIZjDivbNi9YsloEvUVOdb-x", "highlight": false, "descripcion": "Universo gemelo del 7, regido por el Dios de la Destrucci\u00F3n Champa, rival de Beerus.", "diosInfo": { "nombre": "Champa", "imagen": "https://lh3.googleusercontent.com/d/1YWVReR-B0_KqDN2XUM5g-5rZOooZQuEY", "descripcion": "Hermano gemelo de Beerus, igual de poderoso pero m\u00E1s glot\u00F3n y perezoso. Su rivalidad con Beerus es legendaria.", "habilidades": "Poder de destrucci\u00F3n equiparable a Beerus. Hakai avanzado y combate cuerpo a cuerpo devastador." }, "angelInfo": { "nombre": "Vados", "imagen": "https://lh3.googleusercontent.com/d/1d5W0pzIpOKXWUDN1r11JDRbM8FeNtHln", "descripcion": "\u00C1ngel del Universo 6 y hermana mayor de Whis. La m\u00E1s poderosa entre los \u00E1ngeles conocidos.", "funcion": "Entrenar a Champa y supervisar el equilibrio del Universo 6. Es la consejera principal del Dios de la Destrucci\u00F3n." }, "kaioshin": [ { "nombre": "Fuwa", "imagen": "https://lh3.googleusercontent.com/d/15O4J042dgWEru0pa9gB4Xr7fa0almkt0", "descripcion": "Anciano Supremo Kaioshin del Universo 6, de complexi\u00F3n grande y car\u00E1cter afable.", "rol": "Supervisar la creaci\u00F3n divina en el universo gemelo." } ] },
        { "id": 7, "dios": "Beerus", "angel": "Whis", "imagen": "https://lh3.googleusercontent.com/d/19HNd0a-KPgrjzWKovmRsxJf8wlZUtnIQ", "highlight": true, "descripcion": "El universo principal de la serie, hogar de Goku y los Guerreros Z. El m\u00E1s relevante del multiverso.", "diosInfo": { "nombre": "Beerus", "imagen": "https://lh3.googleusercontent.com/d/1_sboPUI8XqpZFzjoWX2qoPeloe7piH_M", "descripcion": "El Dios de la Destrucci\u00F3n del Universo 7. Temido por todos, despierta cada milenios para destruir civilizaciones. Su poder es casi absoluto.", "habilidades": "Hakai (destrucci\u00F3n divina), combate cuerpo a cuerpo supremo, resistencia sobrehumana, capacidad de destruir planetas enteros con un dedo." }, "angelInfo": { "nombre": "Whis", "imagen": "https://lh3.googleusercontent.com/d/1mttxv2hfSK4bojUS10g9So5i-6JD84vI", "descripcion": "\u00C1ngel del Universo 7 e instructor de Beerus. Es el ser m\u00E1s poderoso del universo, capaz de manipular el tiempo.", "funcion": "Entrenar a Beerus y a los guerreros del Universo 7. Tambi\u00E9n es el maestro de Goku y Vegeta en las t\u00E9cnicas divinas." }, "kaioshin": [ { "nombre": "Shin (Kaioshin del Este)", "imagen": "https://lh3.googleusercontent.com/d/102ZwV5gyTk9LJOlCB3FdaFzXXpa0J1Lu", "descripcion": "El Supremo Kaioshin actual del Universo 7. Originalmente era el Kaioshin del Este antes de la muerte de sus compa\u00F1eros.", "rol": "Supervisar la creaci\u00F3n de vida y el desarrollo de los planetas del universo." }, { "nombre": "Kibito", "imagen": "", "descripcion": "Asistente y guardaespaldas del Supremo Kaioshin Shin.", "rol": "Proteger al Kaioshin y asistir en sus labores divinas." }, { "nombre": "Anciano Kaioshin (Old Kai)", "imagen": "https://lh3.googleusercontent.com/d/11FZGuXeWJYpkujg4sx5cjjuRc1k7LBpt", "descripcion": "El Supremo Kaioshin anterior, liberado por Gohan de la Espada Z. Posee conocimiento milenario.", "rol": "Consejero divino con habilidades m\u00EDsticas como despertar el potencial oculto." } ] },
        { "id": 8, "dios": "Liquiir", "angel": "Korn", "imagen": "https://lh3.googleusercontent.com/d/12-NT_WEHchwAAT8ib2_UB-IvqgcMQ4F6", "highlight": false, "descripcion": "Un universo pac\u00EDfico y tranquilo, donde los mortales viven en armon\u00EDa sin grandes conflictos.", "diosInfo": { "nombre": "Liquiir", "imagen": "https://lh3.googleusercontent.com/d/1TkftUIpnJCf2fG3Urtct2MHuyGRLeGbJ", "descripcion": "Un Dios de la Destrucci\u00F3n de aspecto amigable y relajado, poco dado a la destrucci\u00F3n innecesaria.", "habilidades": "Destrucci\u00F3n precisa y controlada. Prefiere la negociaci\u00F3n sobre la aniquilaci\u00F3n." }, "angelInfo": { "nombre": "Korn", "imagen": "https://lh3.googleusercontent.com/d/1hyn6ZAFcjQ0TilxQwYvFi0uDZuIMV3y9", "descripcion": "\u00C1ngel de personalidad tranquila y serena.", "funcion": "Asistir a Liquiir y mantener el equilibrio en el universo m\u00E1s pac\u00EDfico." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 8", "imagen": "https://lh3.googleusercontent.com/d/1fE695ikOOCLeDifY8bYhvvVAaZ_A4BBT", "descripcion": "Supremo Kaioshin de car\u00E1cter sereno.", "rol": "Guiar el desarrollo espiritual y creativo del universo." } ] },
        { "id": 9, "dios": "Sidra", "angel": "Mohito", "imagen": "https://lh3.googleusercontent.com/d/1HhuXuyWfXkNnkNPXgzdxStlhVOHh8T6C", "highlight": false, "descripcion": "Un universo de seres cobardes y d\u00E9biles, donde la fuerza bruta brilla por su ausencia.", "diosInfo": { "nombre": "Sidra", "imagen": "https://lh3.googleusercontent.com/d/1DNxjNwuk4DpHlvaU2G-JH1vZqX-GJuq4", "descripcion": "Un Dios de la Destrucci\u00F3n indeciso y temeroso, que duda antes de destruir. F\u00E1cil de intimidar.", "habilidades": "Su Hakai es inestable y lento. Depende en gran medida de su \u00E1ngel para tomar decisiones." }, "angelInfo": { "nombre": "Mohito", "imagen": "https://lh3.googleusercontent.com/d/1wVeo_49E4vQiINypUDeWtkXa-FvT-mtQ", "descripcion": "\u00C1ngel de personalidad burlona y sarc\u00E1stica, siempre con una sonrisa.", "funcion": "Compensar la debilidad de Sidra con su astucia y conocimientos divinos." }, "kaioshin": [ { "nombre": "Roh", "imagen": "https://lh3.googleusercontent.com/d/1lkmDHh05i_o4Ok4rUphDcF6dZkAZdDvK", "descripcion": "Supremo Kaioshin del Universo 9, de aspecto anciano y voz temblorosa.", "rol": "Intentar mantener el orden en un universo ca\u00F3tico y desorganizado." } ] },
        { "id": 10, "dios": "Rumsshi", "angel": "Kusu", "imagen": "https://lh3.googleusercontent.com/d/1gMgYYYuBATbgtKuWggJdkyaAP9ns-8Di", "highlight": false, "descripcion": "Un universo alegre y juguet\u00F3n, donde los mortales disfrutan de la vida sin preocupaciones.", "diosInfo": { "nombre": "Rumsshi", "imagen": "https://lh3.googleusercontent.com/d/1RuChn5ivHhZ1aaEeFd8Jg_KXD5heWgha", "descripcion": "Un Dios de la Destrucci\u00F3n exc\u00E9ntrico y bullicioso, que r\u00EDe y juega mientras destruye.", "habilidades": "Destrucci\u00F3n ca\u00F3tica e impredecible. Su estilo de lucha es tan err\u00E1tico como efectivo." }, "angelInfo": { "nombre": "Kusu", "imagen": "https://lh3.googleusercontent.com/d/13N5yQbKaUBOgKGH7FNMsRvAgIgtmA3eF", "descripcion": "\u00C1ngel de aspecto joven y actitud vivaz.", "funcion": "Canalizar la energ\u00EDa ca\u00F3tica de Rumsshi y mantener un m\u00EDnimo de orden divino." }, "kaioshin": [ { "nombre": "Gowasu", "imagen": "https://lh3.googleusercontent.com/d/1diP_-h4lPkwih3s7w6_QGiKkHspjSAiw", "descripcion": "Supremo Kaioshin del Universo 10, de aspecto calvo y car\u00E1cter doctrinal.", "rol": "Supervisar la creaci\u00F3n y ense\u00F1ar los valores divinos a los mortales." }, { "nombre": "Zamasu", "imagen": "", "descripcion": "Kaioshin aprendiz del Universo 10, alumno de Gowasu. M\u00E1s tarde se convertir\u00EDa en una amenaza multiversal.", "rol": "Aprendiz de Kaioshin, destinado a convertirse en Supremo Kaioshin." } ] },
        { "id": 11, "dios": "Belmod", "angel": "Marcarita", "imagen": "https://lh3.googleusercontent.com/d/1rACaukY7B-9BSbczOCoYtRiR-Q_ZlQ29", "highlight": false, "descripcion": "El universo de la justicia y los h\u00E9roes, hogar del glorioso Ej\u00E9rcito de la Justicia.", "diosInfo": { "nombre": "Belmod", "imagen": "https://lh3.googleusercontent.com/d/1EyJBTOcA8ZWqLlaInzOS7-thAwCsc1N4", "descripcion": "Un Dios de la Destrucci\u00F3n payasesco pero letal, rival de Beerus. Oculto tras su apariencia c\u00F3mica hay un poder inmenso.", "habilidades": "Agilidad sobrehumana, capacidad de estirar su cuerpo y ataques de destrucci\u00F3n impredecibles." }, "angelInfo": { "nombre": "Marcarita", "imagen": "https://lh3.googleusercontent.com/d/1lMWLiq07mKSd6gj9zDnjKC0buzMvxntc", "descripcion": "\u00C1ngel del Universo 11, maternal y elegante.", "funcion": "Guiar a Belmod y supervisar al Ej\u00E9rcito de la Justicia, especialmente a Jiren." }, "kaioshin": [ { "nombre": "Khai", "imagen": "https://lh3.googleusercontent.com/d/1IVwJkUSwbE23VCIs4FvpgPwEw_yhu6RG", "descripcion": "Supremo Kaioshin del Universo 11, devoto de la justicia y la moral.", "rol": "Crear h\u00E9roes y guiar espiritualmente a los guerreros de la justicia." } ] },
        { "id": 12, "dios": "Giin", "angel": "Martinu", "imagen": "https://lh3.googleusercontent.com/d/11fisFAdPQDvDl3kOldRr9wGB7Xqdvkof", "highlight": false, "descripcion": "El universo m\u00E1s perfecto del multiverso, con el nivel mortal m\u00E1s alto junto al Universo 1.", "diosInfo": { "nombre": "Giin", "imagen": "https://lh3.googleusercontent.com/d/1tzm1trweWEMzTEw0DfQOGQlqGUq7gnRP", "descripcion": "Un Dios de la Destrucci\u00F3n de aspecto felino, orgulloso de la perfecci\u00F3n de su universo.", "habilidades": "Destrucci\u00F3n calculada y milim\u00E9trica. Su precisi\u00F3n es considerada la mejor entre los dioses." }, "angelInfo": { "nombre": "Martinu", "imagen": "https://lh3.googleusercontent.com/d/127gejS-9GrLQT2aY4HftcgvOG7E97WGk", "descripcion": "\u00C1ngel de modales refinados y aspecto elegante.", "funcion": "Mantener el est\u00E1ndar de perfecci\u00F3n del universo y asistir a Giin en sus deberes destructivos." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 12", "imagen": "https://lh3.googleusercontent.com/d/1StOdkm_J_Du4qsyvs1omX_fyxdNkokoQ", "descripcion": "Supremo Kaioshin de sabidur\u00EDa inigualable.", "rol": "Mantener la creaci\u00F3n perfecta y el equilibrio supremo del universo." } ] }
    ],
    "biomas": [
        { "nombre": "Corporaci\u00F3n C\u00E1psula", "clima": "Urbano", "descripcion": "Centro tecnol\u00F3gico de West City." },
        { "nombre": "Monta\u00F1a Paozu", "clima": "Monta\u00F1oso", "descripcion": "Hogar de la infancia de Goku." },
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
        "titulo": "Mi Coraz\u00F3n Encantado",
        "artista": "Aar\u00F3n Montalvo",
        "categoria": "Opening",
        "cover": "https://img.youtube.com/vi/k5n1d88Cq1w/mqdefault.jpg",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        "id": 3,
        "titulo": "Limit Break x Survivor",
        "artista": "Adri\u00E1n Barba",
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
        "titulo": "\u00C1ngeles Fuimos",
        "artista": "Adri\u00E1n Barba",
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