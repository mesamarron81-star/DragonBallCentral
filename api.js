// BASE DE DATOS INTEGRADA - DRAGON BALL CENTRAL
var PERSONAJES_DATA = [
    // ============================================================
    // DRAGON BALL CLASICO (db-classic)
    // ============================================================
    {
        "id": "goku-kid", "Personaje": "Goku (Nino)", "Raza": "Saiyan", "serie": "db-classic",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "12 (inicio)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Dragon" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Son Goku fue enviado a la Tierra siendo un bebe. Al golpearse la cabeza perdio su proposito original y se convirtio en el defensor del planeta.",
        "descripcion": "El joven Saiyan criado en la Tierra. Su cola de mono y su apetito insaciable lo hacen unico.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Nino"],
        "stats": { "fuerza": 30, "velocidad": 45, "ki": 20, "tecnica": 25 },
        "transformaciones": [
            { "id": "gokukid_ozzaru", "orden": 1, "nombre": "Ozzaru", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ozzaru", "descripcion": "Transformacion en mono gigante al mirar la luna llena.", "saga": "Dragon Ball" }
        ],
        "tecnicas": ["Kamehameha", "Nube Kinto", "Baston Magico"]
    },
    {
        "id": "bulma", "Personaje": "Bulma", "Raza": "Humana", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "16 (inicio)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Dragon" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 1, "titulo": "Bulma y Son Goku" },
        "historia": "Bulma, la brillante hija del Dr. Brief, conocio a Goku mientras buscaba las Esferas del Dragon.",
        "descripcion": "Genio cientifica y companera de aventuras de Goku. Creadora del Radar del Dragon.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/00bcd4?text=Bulma"],
        "stats": { "fuerza": 5, "velocidad": 10, "ki": 2, "tecnica": 100 },
        "transformaciones": [],
        "tecnicas": ["Radar del Dragon", "Inventos"]
    },
    {
        "id": "krilin", "Personaje": "Krilin", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "13 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 14, "titulo": "El rival de Goku" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 25, "titulo": "El rival" },
        "historia": "Krilin llego al Templo del Maestro Roshi buscando entrenamiento y se convirtio en el mejor amigo de Goku.",
        "descripcion": "El mejor amigo de Goku. Guerrero humano de coraje inquebrantable.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Krilin"],
        "stats": { "fuerza": 35, "velocidad": 55, "ki": 40, "tecnica": 70 },
        "transformaciones": [],
        "tecnicas": ["Kamehameha", "Kienzan", "Puño Solar"]
    },
    {
        "id": "roshi", "Personaje": "Maestro Roshi", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "300+",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 15, "titulo": "La Tortuga y el Maestro" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 3, "titulo": "Kame-Sen'nin" },
        "historia": "El legendario Kame-Sen'nin, maestro de artes marciales que entreno a Goku y Krilin. Creador de la Kamehameha.",
        "descripcion": "El legendario Tortuga Galactica. Invento la Kamehameha.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Maestro+Roshi"],
        "stats": { "fuerza": 25, "velocidad": 30, "ki": 50, "tecnica": 90 },
        "transformaciones": ["Base", "Max Power"],
        "tecnicas": ["Kamehameha", "Mafuba"]
    },
    {
        "id": "yamcha", "Personaje": "Yamcha", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "16 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 5, "titulo": "El ladron del desierto" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 7, "titulo": "Yamcha" },
        "historia": "Yamcha comenzo como un ladron del desierto. Al conocer a Goku y Bulma, cambio su camino.",
        "descripcion": "Ex-ladron del desierto y miembro fundador de los Guerreros Z.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Yamcha"],
        "stats": { "fuerza": 28, "velocidad": 40, "ki": 30, "tecnica": 55 },
        "transformaciones": [],
        "tecnicas": ["Puño del Lobo", "Kamehameha"]
    },
    {
        "id": "tenshinhan", "Personaje": "Tenshinhan", "Raza": "Humano (Triclope)", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "17 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El tercer ojo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "Tenshinhan" },
        "historia": "Tenshinhan fue discipulo del Crane School. Su tercer ojo le otorga habilidades unicas.",
        "descripcion": "Guerrero triclope de honor inquebrantable.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Tenshinhan"],
        "stats": { "fuerza": 38, "velocidad": 50, "ki": 45, "tecnica": 75 },
        "transformaciones": [],
        "tecnicas": ["Kikoho", "Vuelo"]
    },
    {
        "id": "chaoz", "Personaje": "Chaoz", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "12 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 82, "titulo": "El tercer ojo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 113, "titulo": "Tenshinhan" },
        "historia": "Chaoz es el mejor amigo de Tenshinhan. Posee habilidades psiquicas como telequinesis.",
        "descripcion": "Amigo de Tenshinhan con poderes psiquicos.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Chaoz"],
        "stats": { "fuerza": 15, "velocidad": 25, "ki": 35, "tecnica": 60 },
        "transformaciones": [],
        "tecnicas": ["Telequinesis", "Telepatia"]
    },
    {
        "id": "chichi", "Personaje": "Chichi", "Raza": "Humana", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Familia Son", "estado": "Vivo", "edad": "12 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 77, "titulo": "La princesa Chichi" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 107, "titulo": "Chichi" },
        "historia": "Chichi es la hija del Rey Gyuma. Conocio a Goku cuando eran ninos y prometio casarse con el. Es una madre dedicada y esposa estricta.",
        "descripcion": "Esposa de Goku y madre de Gohan y Goten.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Chichi"],
        "stats": { "fuerza": 20, "velocidad": 25, "ki": 15, "tecnica": 30 },
        "transformaciones": [],
        "tecnicas": ["Kamehameha", "Vuelo"]
    },
    {
        "id": "pilaf", "Personaje": "Pilaf", "Raza": "Demonio", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Pilaf Gang", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 1, "titulo": "El secreto de las Esferas del Dragon" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 5, "titulo": "Pilaf" },
        "historia": "Pilaf es un pequeno demonio obsesionado con conseguir las Esferas del Dragon para dominar el mundo.",
        "descripcion": "Diminuto demonio que busca las Esferas del Dragon.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Pilaf"],
        "stats": { "fuerza": 5, "velocidad": 8, "ki": 10, "tecnica": 25 },
        "transformaciones": [],
        "tecnicas": ["Combate Robot", "Trampas"]
    },
    {
        "id": "arale", "Personaje": "Arale", "Raza": "Androide", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Villa Pingüino", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 28, "titulo": "Arale aparece" },
        "primeraAparicionManga": { "manga": "Dr. Slump", "capitulo": 1, "titulo": "Arale" },
        "historia": "Arale es una robot nina creada por el Dr. Senbei Norimaki. Su fuerza absurda la hace capaz de enfrentarse incluso a personajes como Goku.",
        "descripcion": "Robot nina de fuerza absurda del Dr. Slump.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Arale"],
        "stats": { "fuerza": 99, "velocidad": 50, "ki": 10, "tecnica": 30 },
        "transformaciones": [],
        "tecnicas": ["Puño de Ojo de Pescado", "Cañon de Popo", "Vuelo"]
    },
    {
        "id": "tao-pai-pai", "Personaje": "Tao Pai Pai", "Raza": "Humano", "serie": "db-classic",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Ejercito Patrulla Roja", "estado": "Vivo (Cyborg)", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 58, "titulo": "El asesino Tao Pai Pai" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 85, "titulo": "Tao Pai Pai" },
        "historia": "Tao Pai Pai fue un letal asesino a sueldo contratado por la Patrulla Roja. Domina la tecnica Dodon Pa. Convertido en cyborg, siguio siendo una amenaza.",
        "descripcion": "Asesino a sueldo, maestro del Dodon Pa.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Tao+Pai+Pai"],
        "stats": { "fuerza": 32, "velocidad": 55, "ki": 30, "tecnica": 70 },
        "transformaciones": [],
        "tecnicas": ["Dodon Pa", "Lengua Mortal", "Vuelo en Pilar"]
    },
    {
        "id": "piccolo-daimaoh", "Personaje": "Piccolo Daimaoh", "Raza": "Namekiano", "serie": "db-classic",
        "Planeta de origen": "Namek", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball", "episodio": 91, "titulo": "El rey demonio" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 135, "titulo": "Piccolo Daimaoh" },
        "historia": "Piccolo Daimaoh es la manifestacion del mal de los Namekianos. Aterrorizo la Tierra hasta que fue derrotado por Goku. Antes de morir, escupio un huevo del que nacio Piccolo.",
        "descripcion": "El Rey Demonio original. Fuente de todo mal.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Piccolo+Daimaoh"],
        "stats": { "fuerza": 55, "velocidad": 50, "ki": 60, "tecnica": 75 },
        "transformaciones": ["Joven", "Viejo"],
        "tecnicas": ["Rayo Demoníaco", "Explosion Demoníaca", "Vuelo"]
    },
    // ============================================================
    // DRAGON BALL Z (db-z)
    // ============================================================
    {
        "id": "goku-z", "Personaje": "Goku Z", "Raza": "Saiyan", "serie": "db-z",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "42 (final de Z)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "El nuevo enemigo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 194, "titulo": "El regreso de Piccolo" },
        "historia": "Goku, el Saiyan criado en la Tierra, se convirtio en el protector del planeta. Enfrento a los Saiyans, Freezer, los Androides y Cell, y finalmente a Majin Buu, superando siempre sus limites.",
        "descripcion": "El protagonista legendario de la era Z.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Z+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x3",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x10",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x20",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Full+Power",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ3"
        ],
        "stats": { "fuerza": 88, "velocidad": 85, "ki": 90, "tecnica": 85 },
        "transformaciones": [
            { "id": "gokuz_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Z+Base", "descripcion": "Estado natural de Goku.", "saga": "Dragon Ball Z" },
            { "id": "gokuz_kaioken", "orden": 2, "nombre": "Kaioken", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken", "descripcion": "Tecnica del Reino de los Kaios que multiplica el poder.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "gokuz_kaioken3", "orden": 3, "nombre": "Kaioken x3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x3", "descripcion": "Multiplicador de poder triple.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "gokuz_kaioken10", "orden": 4, "nombre": "Kaioken x10", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x10", "descripcion": "Multiplicador de poder x10.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "gokuz_kaioken20", "orden": 5, "nombre": "Kaioken x20", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x20", "descripcion": "Maximo multiplicador conocido del Kaioken.", "saga": "Dragon Ball Z (Freezer)" },
            { "id": "gokuz_ssj", "orden": 6, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "Primera transformacion Saiyan legendaria.", "saga": "Dragon Ball Z (Freezer)" },
            { "id": "gokuz_ssjfp", "orden": 7, "nombre": "Super Saiyan Full Power", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Full+Power", "descripcion": "Estado SSJ perfeccionado en la Sala del Tiempo.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "gokuz_ssj2", "orden": 8, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "Evolucion del SSJ con poder electrico.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "gokuz_ssj3", "orden": 9, "nombre": "Super Saiyan 3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ3", "descripcion": "Forma de cabello largo y sin cejas.", "saga": "Dragon Ball Z (Majin Buu)" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportacion", "Kaioken"]
    },
    {
        "id": "vegeta-z", "Personaje": "Vegeta Z", "Raza": "Saiyan", "serie": "db-z",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "43",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 5, "titulo": "Goku muere" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 204, "titulo": "El secreto de los Saiyajin" },
        "historia": "Vegeta, el principe de los Saiyan, llego como invasor y se convirtio en aliado indispensable. Enfrento a Freezer, Cell y Majin Buu, siempre buscando superar a Goku.",
        "descripcion": "El principe Saiyan. De villano a heroe.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Z+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Vegeta",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2"
        ],
        "stats": { "fuerza": 86, "velocidad": 82, "ki": 85, "tecnica": 90 },
        "transformaciones": [
            { "id": "vegetaz_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Z+Base", "descripcion": "Estado natural de Vegeta.", "saga": "Dragon Ball Z (Saiyans)" },
            { "id": "vegetaz_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "Primera transformacion Saiyan.", "saga": "Dragon Ball Z (Freezer)" },
            { "id": "vegetaz_super_vegeta", "orden": 3, "nombre": "Super Vegeta", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Vegeta", "descripcion": "Version mejorada del SSJ con musculos aumentados.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "vegetaz_ssj2", "orden": 4, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "Evolucion del SSJ en la Sala del Tiempo.", "saga": "Dragon Ball Z (Cell)" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack"]
    },
    {
        "id": "piccolo-z", "Personaje": "Piccolo Z", "Raza": "Namekiano", "serie": "db-z",
        "Planeta de origen": "Namek", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "El nuevo enemigo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 194, "titulo": "El regreso de Piccolo" },
        "historia": "Piccolo, la reencarnacion de Piccolo Daimaoh, abandono su maldad al entrenar a Gohan. Se convirtio en un guerrero estrategico clave de los Guerreros Z.",
        "descripcion": "Guerrero estrategico y maestro de Gohan.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Piccolo"],
        "stats": { "fuerza": 80, "velocidad": 82, "ki": 88, "tecnica": 98 },
        "transformaciones": ["Piccolo", "Piccolo Fusionado (Kami)", "Potencial Desatado"],
        "tecnicas": ["Makankosappo", "Masenko", "Regeneracion"]
    },
    {
        "id": "gohan-nino-z", "Personaje": "Gohan (Nino) Z", "Raza": "Hibrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "4-10",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 1, "titulo": "El nuevo enemigo" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 196, "titulo": "Gohan aparece" },
        "historia": "Gohan nino mostro un potencial oculto inmenso desde pequeno. Entrenado por Piccolo, desperto su ira en la batalla contra los Saiyans y Freezer.",
        "descripcion": "Hijo de Goku con un potencial oculto inmenso.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Nino",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Nino+SSJ"
        ],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 70, "tecnica": 40 },
        "transformaciones": [
            { "id": "gohannino_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Nino", "descripcion": "Gohan en su ninez.", "saga": "Dragon Ball Z" },
            { "id": "gohannino_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Nino+SSJ", "descripcion": "Super Saiyan alcanzado por primera vez.", "saga": "Dragon Ball Z (Cell)" },
            { "id": "gohannino_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "Gohan SSJ2 contra Cell. Su momento mas epico.", "saga": "Dragon Ball Z (Cell)" }
        ],
        "tecnicas": ["Masenko", "Kamehameha", "Rapel"]
    },
    {
        "id": "gohan-adulto-z", "Personaje": "Gohan Adulto Z", "Raza": "Hibrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "24-28",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 195, "titulo": "Gohan adulto" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 440, "titulo": "El despertar" },
        "historia": "Gohan adulto desbloqueo su Potential Desatado por el Anciano Kaioshin, alcanzando un poder inmenso que le permitio enfrentar a Super Buu. Su forma definitiva lo coloco entre los mas fuertes de Z.",
        "descripcion": "Gohan con el Potential Desatado. Guerrero definitivo.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Adulto",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Ultimate"
        ],
        "stats": { "fuerza": 85, "velocidad": 82, "ki": 92, "tecnica": 80 },
        "transformaciones": [
            { "id": "gohanad_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Adulto", "descripcion": "Gohan adulto en su estado base.", "saga": "Dragon Ball Z (Majin Buu)" },
            { "id": "gohanad_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "Super Saiyan adulto.", "saga": "Dragon Ball Z (Majin Buu)" },
            { "id": "gohanad_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "Super Saiyan 2 adulto.", "saga": "Dragon Ball Z (Majin Buu)" },
            { "id": "gohanad_ultimate", "orden": 4, "nombre": "Ultimate", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Ultimate", "descripcion": "Potential desatado por el Anciano Kaioshin.", "saga": "Dragon Ball Z (Majin Buu)" }
        ],
        "tecnicas": ["Masenko", "Kamehameha", "Rapel"]
    },
    {
        "id": "freezer-z", "Personaje": "Freezer Z", "Raza": "Raza de Freezer", "serie": "db-z",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Ejercito de Freezer", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 44, "titulo": "El emperador Freezer" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 245, "titulo": "Freezer aparece" },
        "historia": "Freezer, el tirano del Universo 7, destruyo el Planeta Vegeta. Derrotado por Goku en Namek y posteriormente por Trunks del Futuro.",
        "descripcion": "El emperador del mal. Tirano galactico.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Freezer+1ra+Forma",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Freezer+Final",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Mecha+Freezer"
        ],
        "stats": { "fuerza": 90, "velocidad": 88, "ki": 92, "tecnica": 85 },
        "transformaciones": ["Primera Forma", "Segunda Forma", "Tercera Forma", "Forma Final", "Mecha Freezer"],
        "tecnicas": ["Death Beam", "Supernova", "Death Ball"]
    },
    {
        "id": "cell", "Personaje": "Cell", "Raza": "Bio-Androide", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 119, "titulo": "El ser perfecto" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 362, "titulo": "Cell" },
        "historia": "Cell es un bio-androide creado por el Dr. Gero a partir de celulas de los mejores guerreros. Su forma perfecta fue la mayor amenaza de la Tierra.",
        "descripcion": "Bio-androide perfecto.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Cell+Imperfecto",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Cell+Perfecto"
        ],
        "stats": { "fuerza": 88, "velocidad": 86, "ki": 90, "tecnica": 82 },
        "transformaciones": ["Imperfecto", "Semi-Perfecto", "Perfecto", "Super Perfecto"],
        "tecnicas": ["Kamehameha", "Cell Jr.", "Absorcion"]
    },
    {
        "id": "majin-buu", "Personaje": "Majin Buu", "Raza": "Genio (Mago)", "serie": "db-z",
        "Planeta de origin": "Desconocido", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Vivo (Buu Bueno)", "edad": "Millones de anos",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 200, "titulo": "El despertar de Buu" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 460, "titulo": "Majin Buu" },
        "historia": "Majin Buu es una creacion del mago Bibidi. Su forma pura caotica representa el peligro mas grande jamas enfrentado por los Guerreros Z.",
        "descripcion": "El ser mas impredecible del universo.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Bu+Gordo",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Buu",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kid+Buu"
        ],
        "stats": { "fuerza": 92, "velocidad": 85, "ki": 95, "tecnica": 88 },
        "transformaciones": ["Majin Buu", "Buu Malo", "Super Buu", "Kid Buu", "Buu Bueno"],
        "tecnicas": ["Chocolate Beam", "Regeneracion", "Absorcion"]
    },
    {
        "id": "dabura", "Personaje": "Dabura", "Raza": "Demonio", "serie": "db-z",
        "Planeta de origen": "Reino Demonio", "Universo": "7",
        "afiliaciones": "Babidi", "estado": "Convertido en piedra", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 210, "titulo": "El rey del infierno" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 452, "titulo": "Dabura" },
        "historia": "Dabura es el Rey del Reino Demonio, liberado y controlado por Babidi. Su poder rivaliza con Cell y posee habilidades magicas como convertir a sus enemigos en piedra con su saliva.",
        "descripcion": "Rey de los Demonios. Sirviente de Babidi.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Dabura"],
        "stats": { "fuerza": 85, "velocidad": 75, "ki": 88, "tecnica": 80 },
        "transformaciones": [],
        "tecnicas": ["Saliva Petrificante", "Espada Demonio", "Rayo de Ki"]
    },
    {
        "id": "trunks-kid-z", "Personaje": "Trunks (Kid) Z", "Raza": "Hibrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "8 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 195, "titulo": "Trunks" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 417, "titulo": "Trunks" },
        "historia": "Hijo de Vegeta y Bulma. Desde muy pequeno alcanzo el Super Saiyan. Junto a Goten formo al guerrero de fusion Gotenks.",
        "descripcion": "Hijo de Vegeta. Prodigio del Super Saiyan.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+SSJ"
        ],
        "stats": { "fuerza": 55, "velocidad": 60, "ki": 52, "tecnica": 48 },
        "transformaciones": [
            { "id": "trunkskid_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Base", "descripcion": "Trunks en su forma base.", "saga": "Dragon Ball Z (Majin Buu)" },
            { "id": "trunkskid_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+SSJ", "descripcion": "Super Saiyan alcanzado sin entrenamiento formal.", "saga": "Dragon Ball Z (Majin Buu)" }
        ],
        "tecnicas": ["Burning Attack", "Espada", "Kamehameha"]
    },
    {
        "id": "trunks-futuro-z", "Personaje": "Trunks del Futuro Z", "Raza": "Hibrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Desconocido", "edad": "17 (viaje al pasado)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 120, "titulo": "El guerrero del futuro" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 329, "titulo": "El guerrero del futuro" },
        "historia": "Trunks del futuro llego del futuro para advertir sobre los Androides. Crecio en un mundo devastado, entrenando bajo la tutela de Gohan del futuro.",
        "descripcion": "Guerrero del futuro que salvo la linea temporal.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Future+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Future+SSJ"
        ],
        "stats": { "fuerza": 72, "velocidad": 78, "ki": 70, "tecnica": 65 },
        "transformaciones": [
            { "id": "trunksf_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Future+Base", "descripcion": "Estado base.", "saga": "Dragon Ball Z (Androides)" },
            { "id": "trunksf_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Future+SSJ", "descripcion": "Super Saiyan alcanzado en el futuro.", "saga": "Dragon Ball Z (Androides)" },
            { "id": "trunksf_ssj_dai", "orden": 3, "nombre": "Super Saiyan Dai San Dankai", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Grade+3", "descripcion": "Forma muscular del SSJ con poder aumentado.", "saga": "Dragon Ball Z (Androides)" }
        ],
        "tecnicas": ["Burning Attack", "Espada", "Final Flash"]
    },
    {
        "id": "goten", "Personaje": "Goten", "Raza": "Hibrido Saiyan/Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "7 (debut)",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 195, "titulo": "Goten" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 417, "titulo": "Goten" },
        "historia": "Goten es el segundo hijo de Goku. Sorprendentemente, alcanzo el Super Saiyan sin entrenamiento. Junto a Trunks, formo a Gotenks.",
        "descripcion": "Segundo hijo de Goku. Prodigio.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goten"],
        "stats": { "fuerza": 60, "velocidad": 65, "ki": 58, "tecnica": 50 },
        "transformaciones": ["Base", "Super Saiyan"],
        "tecnicas": ["Kamehameha", "Fusion"]
    },
    {
        "id": "satan", "Personaje": "Mr. Satan", "Raza": "Humano", "serie": "db-z",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Campeon Mundial", "estado": "Vivo", "edad": "45+",
        "primeraAparicionAnime": { "serie": "Dragon Ball Z", "episodio": 171, "titulo": "El campeon" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 378, "titulo": "El campeon mundial" },
        "historia": "Mr. Satan es el Campeon Mundial de Artes Marciales. Su carisma lo convirtio en el heroe publico de la Tierra.",
        "descripcion": "El campeon mundial.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Mr+Satan"],
        "stats": { "fuerza": 8, "velocidad": 12, "ki": 5, "tecnica": 20 },
        "transformaciones": [],
        "tecnicas": ["Golpe Dinamita"]
    },
    // ============================================================
    // DRAGON BALL GT (db-gt)
    // ============================================================
    {
        "id": "goku-gt", "Personaje": "Goku GT", "Raza": "Saiyan", "serie": "db-gt",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "46 (inicio GT)",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Dragon" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Goku fue convertido en nino por un deseo de Pilaf. A pesar de su tamano, logro el legendario Super Saiyan 4.",
        "descripcion": "Goku en nino. Alcanzo el SSJ4.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Golden+Ozaru",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ4"
        ],
        "stats": { "fuerza": 88, "velocidad": 86, "ki": 90, "tecnica": 85 },
        "transformaciones": [
            { "id": "gokugt_base", "orden": 1, "nombre": "Base (Nino)", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+Base", "descripcion": "Goku en cuerpo de nino.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+SSJ", "descripcion": "SSJ en cuerpo de nino.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+SSJ2", "descripcion": "SSJ2 con cuerpo de nino.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj3", "orden": 4, "nombre": "Super Saiyan 3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+GT+SSJ3", "descripcion": "SSJ3 de cabello largo.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_golden_ozaru", "orden": 5, "nombre": "Golden Ozaru", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Golden+Ozaru", "descripcion": "Mono gigante dorado, precursor del SSJ4.", "saga": "Dragon Ball GT" },
            { "id": "gokugt_ssj4", "orden": 6, "nombre": "Super Saiyan 4", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ4", "descripcion": "Forma primal que combina el SSJ con la cola de mono.", "saga": "Dragon Ball GT" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportacion"]
    },
    {
        "id": "vegeta-gt", "Personaje": "Vegeta GT", "Raza": "Saiyan", "serie": "db-gt",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "47",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Dragon" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Vegeta en GT conserva su orgullo. Ayuda a Goku en la lucha contra Baby y los dragones malvados. Alcanza el SSJ4.",
        "descripcion": "El principe Saiyan en GT.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Golden+Ozaru",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ4"
        ],
        "stats": { "fuerza": 86, "velocidad": 82, "ki": 85, "tecnica": 88 },
        "transformaciones": [
            { "id": "vegetagt_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+Base", "descripcion": "Estado base en GT.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+SSJ", "descripcion": "SSJ en GT.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+GT+SSJ2", "descripcion": "SSJ2 en GT.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_golden_ozaru", "orden": 4, "nombre": "Golden Ozaru", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Golden+Ozaru", "descripcion": "Mono gigante dorado.", "saga": "Dragon Ball GT" },
            { "id": "vegetagt_ssj4", "orden": 5, "nombre": "Super Saiyan 4", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ4", "descripcion": "Vegeta alcanza el SSJ4.", "saga": "Dragon Ball GT" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash"]
    },
    {
        "id": "pan-gt", "Personaje": "Pan GT", "Raza": "Hibrido Saiyan/Humano", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "9",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Dragon" },
        "primeraAparicionManga": { "manga": "Dragon Ball", "capitulo": 517, "titulo": "Fin de Z" },
        "historia": "Pan es la nieta de Goku. Valiente y audaz, acompanio a Goku y Trunks en su viaje por el universo.",
        "descripcion": "Nieta de Goku.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Pan+GT"],
        "stats": { "fuerza": 30, "velocidad": 50, "ki": 25, "tecnica": 35 },
        "transformaciones": [],
        "tecnicas": ["Kamehameha", "Vuelo"]
    },
    {
        "id": "trunks-gt", "Personaje": "Trunks GT", "Raza": "Hibrido Saiyan/Humano", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "18",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 1, "titulo": "El deseo del Dragon" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Trunks adulto en GT. Acompania a Goku y Pan en la busqueda de las Esferas del Dragon por el universo.",
        "descripcion": "Trunks adulto en GT.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+GT"],
        "stats": { "fuerza": 60, "velocidad": 70, "ki": 58, "tecnica": 55 },
        "transformaciones": ["Base", "Super Saiyan"],
        "tecnicas": ["Burning Attack", "Espada"]
    },
    {
        "id": "baby", "Personaje": "Baby", "Raza": "Tuffle Mutante", "serie": "db-gt",
        "Planeta de origen": "Planeta Plant", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 22, "titulo": "El regreso de los Tuffle" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Baby es el ultimo Tuffle que busca venganza contra los Saiyan controlandolos como parasito. Tomo control de Vegeta.",
        "descripcion": "El ultimo Tuffle.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Baby",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Baby+Vegeta"
        ],
        "stats": { "fuerza": 85, "velocidad": 80, "ki": 88, "tecnica": 78 },
        "transformaciones": ["Baby", "Baby Vegeta", "Super Baby 1", "Super Baby 2", "Baby Ozzaru"],
        "tecnicas": ["Control Mental", "Rayo Vengativo"]
    },
    {
        "id": "super17", "Personaje": "Super 17", "Raza": "Androide", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Dr. Myuu", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 42, "titulo": "El androide supremo" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Super 17 es la fusion de los Androides 17. Absorbe ataques de Ki.",
        "descripcion": "Fusion de Androides 17.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+17"],
        "stats": { "fuerza": 84, "velocidad": 60, "ki": 82, "tecnica": 75 },
        "transformaciones": [],
        "tecnicas": ["Absorcion de Ki", "Rayo Electrico"]
    },
    {
        "id": "omega-shenron", "Personaje": "Omega Shenron", "Raza": "Dragon Malvado", "serie": "db-gt",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Ninguna", "estado": "Muerto", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball GT", "episodio": 55, "titulo": "El poder de los dragones" },
        "primeraAparicionManga": { "manga": "N/A", "capitulo": "N/A", "titulo": "Serie original" },
        "historia": "Omega Shenron es la fusion de los 7 Dragones Malvados. Villano final de GT.",
        "descripcion": "El dragon malvado final.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Syn+Shenron",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Omega+Shenron"
        ],
        "stats": { "fuerza": 95, "velocidad": 88, "ki": 97, "tecnica": 90 },
        "transformaciones": ["Syn Shenron", "Omega Shenron"],
        "tecnicas": ["Rayo de la Muerte Negra", "Esfera Minus"]
    },
    // ============================================================
    // DRAGON BALL SUPER (db-super)
    // ============================================================
    {
        "id": "goku-super", "Personaje": "Goku Super", "Raza": "Saiyan", "serie": "db-super",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "42",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "Batalla de los Dioses" },
        "historia": "Goku en Super alcanzo niveles divinos de poder: SSG, SSB y finalmente el Ultra Instinto, superando los limites de los dioses.",
        "descripcion": "El guerrero que alcanzo los dioses. Domina el Ultra Instinto.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ3",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSG",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB+Kaioken",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=UI+Sign",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ultra+Instinct",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Perfected+UI",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=True+Ultra+Instinct"
        ],
        "stats": { "fuerza": 97, "velocidad": 99, "ki": 100, "tecnica": 92 },
        "transformaciones": [
            { "id": "gokus_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Base", "descripcion": "Estado base en Super.", "saga": "Dragon Ball Super" },
            { "id": "gokus_kaioken", "orden": 2, "nombre": "Kaioken", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken", "descripcion": "Tecnica multiplicadora del Reino Kai.", "saga": "Dragon Ball Super" },
            { "id": "gokus_kaioken3", "orden": 3, "nombre": "Kaioken x3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x3", "descripcion": "Kaioken triple.", "saga": "Dragon Ball Super" },
            { "id": "gokus_kaioken10", "orden": 4, "nombre": "Kaioken x10", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x10", "descripcion": "Kaioken x10.", "saga": "Dragon Ball Super" },
            { "id": "gokus_kaioken20", "orden": 5, "nombre": "Kaioken x20", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kaioken+x20", "descripcion": "Kaioken x20.", "saga": "Dragon Ball Super" },
            { "id": "gokus_ssj", "orden": 6, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "Super Saiyan.", "saga": "Dragon Ball Super" },
            { "id": "gokus_ssjfp", "orden": 7, "nombre": "Super Saiyan Full Power", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Full+Power", "descripcion": "SSJ perfeccionado.", "saga": "Dragon Ball Super" },
            { "id": "gokus_ssj2", "orden": 8, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "SSJ2.", "saga": "Dragon Ball Super" },
            { "id": "gokus_ssj3", "orden": 9, "nombre": "Super Saiyan 3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ3", "descripcion": "SSJ3.", "saga": "Dragon Ball Super" },
            { "id": "gokus_ssg", "orden": 10, "nombre": "Super Saiyan God", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSG", "descripcion": "Poder divino rojo.", "saga": "Dragon Ball Super (Batalla de los Dioses)" },
            { "id": "gokus_ssb", "orden": 11, "nombre": "Super Saiyan Blue", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB", "descripcion": "Fusion del SSG y SSJ. Ki divino azul.", "saga": "Dragon Ball Super (Resurreccion de F)" },
            { "id": "gokus_ssb_kaioken", "orden": 12, "nombre": "Super Saiyan Blue Kaioken", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB+Kaioken", "descripcion": "Kaioken sobre SSB.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "gokus_ui_sign", "orden": 13, "nombre": "Ultra Instinto Sign", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=UI+Sign", "descripcion": "Ultra Instinto inicial. El cuerpo se mueve por instinto.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "gokus_ui", "orden": 14, "nombre": "Ultra Instinto", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ultra+Instinct", "descripcion": "Ultra Instinto completo. Cabello plateado.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "gokus_ui_perfected", "orden": 15, "nombre": "Ultra Instinto Perfecto", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Perfected+UI", "descripcion": "Ultra Instinto dominado por completo.", "saga": "Dragon Ball Super (Manga)" },
            { "id": "gokus_ui_true", "orden": 16, "nombre": "Ultra Instinto Verdadero", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=True+Ultra+Instinct", "descripcion": "La verdadera forma del Ultra Instinto que Goku domina.", "saga": "Dragon Ball Super (Manga)" }
        ],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportacion", "Kaioken"]
    },
    {
        "id": "vegeta-super", "Personaje": "Vegeta Super", "Raza": "Saiyan", "serie": "db-super",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "43",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "Batalla de los Dioses" },
        "historia": "Vegeta entreno con Whis, alcanzo el SSG y SSB. En el manga logro el Ultra Ego, tecnica de los Dioses de la Destruccion.",
        "descripcion": "El principe Saiyan divino. Domina el Ultra Ego.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Vegeta",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSG",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB+Evo",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ultra+Ego"
        ],
        "stats": { "fuerza": 96, "velocidad": 93, "ki": 97, "tecnica": 94 },
        "transformaciones": [
            { "id": "vegetas_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Base", "descripcion": "Estado base en Super.", "saga": "Dragon Ball Super" },
            { "id": "vegetas_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "Super Saiyan.", "saga": "Dragon Ball Super" },
            { "id": "vegetas_super_vegeta", "orden": 3, "nombre": "Super Vegeta", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Super+Vegeta", "descripcion": "SSJ con poder aumentado.", "saga": "Dragon Ball Super" },
            { "id": "vegetas_ssj2", "orden": 4, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "SSJ2.", "saga": "Dragon Ball Super" },
            { "id": "vegetas_ssg", "orden": 5, "nombre": "Super Saiyan God", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSG", "descripcion": "Poder divino rojo.", "saga": "Dragon Ball Super (Batalla de los Dioses)" },
            { "id": "vegetas_ssb", "orden": 6, "nombre": "Super Saiyan Blue", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB", "descripcion": "SSG + SSJ. Ki divino azul.", "saga": "Dragon Ball Super (Resurreccion de F)" },
            { "id": "vegetas_ssb_evo", "orden": 7, "nombre": "SSB Evolution", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSB+Evo", "descripcion": "Evolucion del SSB con aura intensa.", "saga": "Dragon Ball Super (Torneo del Poder)" },
            { "id": "vegetas_ultra_ego", "orden": 8, "nombre": "Ultra Ego", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ultra+Ego", "descripcion": "Tecnica divina de los Dioses de la Destruccion.", "saga": "Dragon Ball Super (Manga)" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack"]
    },
    {
        "id": "gohan-super", "Personaje": "Gohan Super", "Raza": "Hibrido Saiyan/Humano", "serie": "db-super",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "28",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "Batalla de los Dioses" },
        "historia": "Gohan en Super desperto su forma Bestia, colocandolo entre los mas fuertes del multiverso.",
        "descripcion": "Gohan con su forma Bestia.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ultimate",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Bestia"
        ],
        "stats": { "fuerza": 94, "velocidad": 91, "ki": 98, "tecnica": 86 },
        "transformaciones": [
            { "id": "gohans_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Base", "descripcion": "Estado base.", "saga": "Dragon Ball Super" },
            { "id": "gohans_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "SSJ.", "saga": "Dragon Ball Super" },
            { "id": "gohans_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ2", "descripcion": "SSJ2.", "saga": "Dragon Ball Super" },
            { "id": "gohans_ultimate", "orden": 4, "nombre": "Ultimate", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Ultimate", "descripcion": "Potential desatado.", "saga": "Dragon Ball Super" },
            { "id": "gohans_beast", "orden": 5, "nombre": "Beast", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+Bestia", "descripcion": "Forma Bestia despertada en Super Hero.", "saga": "Dragon Ball Super (Super Hero)" }
        ],
        "tecnicas": ["Masenko", "Kamehameha", "Rapel"]
    },
    {
        "id": "trunks-futuro-super", "Personaje": "Trunks del Futuro Super", "Raza": "Hibrido Saiyan/Humano", "serie": "db-super",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "30+",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 47, "titulo": "El regreso de Trunks" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 14, "titulo": "El futuro de Trunks" },
        "historia": "Trunks del futuro regresa en Super para pedir ayuda contra Goku Black. Alcanzo el SSJ Rage, una transformacion unica impulsada por su ira.",
        "descripcion": "Guerrero del futuro. Alcanzo el SSJ Rage.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Futuro+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Futuro+SSJ2",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Rage"
        ],
        "stats": { "fuerza": 88, "velocidad": 90, "ki": 92, "tecnica": 82 },
        "transformaciones": [
            { "id": "trunksfs_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Futuro+Base", "descripcion": "Estado base.", "saga": "Dragon Ball Super (Goku Black)" },
            { "id": "trunksfs_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ", "descripcion": "SSJ.", "saga": "Dragon Ball Super (Goku Black)" },
            { "id": "trunksfs_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Futuro+SSJ2", "descripcion": "SSJ2.", "saga": "Dragon Ball Super (Goku Black)" },
            { "id": "trunksfs_ssj_rage", "orden": 4, "nombre": "Super Saiyan Rage", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=SSJ+Rage", "descripcion": "Transformacion unica impulsada por la ira.", "saga": "Dragon Ball Super (Goku Black)" }
        ],
        "tecnicas": ["Burning Attack", "Espada", "Final Flash", "Masenko"]
    },
    {
        "id": "beerus", "Personaje": "Beerus", "Raza": "Dios de la Destruccion", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Universo 7", "estado": "Vivo", "edad": "Milenios",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 1, "titulo": "Batalla de los Dioses" },
        "historia": "Beerus es el Dios de la Destruccion del Universo 7. Desperto buscando al Super Saiyan God.",
        "descripcion": "Dios de la Destruccion del Universo 7.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Beerus",
            "https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Beerus+Enfadado"
        ],
        "stats": { "fuerza": 99, "velocidad": 97, "ki": 100, "tecnica": 98 },
        "transformaciones": ["Base", "Beerus Enfadado"],
        "tecnicas": ["Hakai", "Esfera de la Destruccion"]
    },
    {
        "id": "whis", "Personaje": "Whis", "Raza": "Angel", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Universo 7", "estado": "Vivo", "edad": "Milenios",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 1, "titulo": "La paz regresa" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 2, "titulo": "El angel" },
        "historia": "Whis es el angel del Universo 7, mentor de Beerus y entrenador de Goku y Vegeta.",
        "descripcion": "Angel del Universo 7.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/00bcd4?text=Whis"],
        "stats": { "fuerza": 100, "velocidad": 100, "ki": 100, "tecnica": 100 },
        "transformaciones": [],
        "tecnicas": ["Ultra Instinto", "Baston de Angel"]
    },
    {
        "id": "broly-super", "Personaje": "Broly Super", "Raza": "Saiyan", "serie": "db-super",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Paragus, Freezer", "estado": "Vivo", "edad": "38",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": "Pelicula", "titulo": "Broly" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": "Pelicula", "titulo": "Broly" },
        "historia": "Broly es un Saiyan con poder latente inmenso. Su ira desatada lo convierte en el Berserker legendario.",
        "descripcion": "El Saiyan legendario de Super.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Broly+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Broly+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Broly+LSSJ"
        ],
        "stats": { "fuerza": 98, "velocidad": 88, "ki": 97, "tecnica": 75 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan Legendario"],
        "tecnicas": ["Cañon Eraser", "Puño del Dragon"]
    },
    {
        "id": "jiren", "Personaje": "Jiren", "Raza": "Desconocida", "serie": "db-super",
        "Planeta de origen": "Universo 11", "Universo": "11",
        "afiliaciones": "Tropa del Orgullo", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 85, "titulo": "El guerrero del U11" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 30, "titulo": "Torneo del Poder" },
        "historia": "Jiren, el guerrero mas fuerte del U11, superaba a un Dios de la Destruccion en poder.",
        "descripcion": "Guerrero mas fuerte del U11.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Jiren",
            "https://via.placeholder.com/500x700/1a1a1a/ff1744?text=Jiren+Full+Power"
        ],
        "stats": { "fuerza": 99, "velocidad": 97, "ki": 99, "tecnica": 96 },
        "transformaciones": ["Base", "Poder Maximo"],
        "tecnicas": ["Cañon de Poder", "Puño del Orgullo"]
    },
    {
        "id": "hit", "Personaje": "Hit", "Raza": "Desconocida", "serie": "db-super",
        "Planeta de origen": "U6", "Universo": "6",
        "afiliaciones": "Ninguna", "estado": "Vivo", "edad": "1000+",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 33, "titulo": "El asesino" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 12, "titulo": "Torneo U6" },
        "historia": "Hit es un legendario asesino del U6 con la habilidad de manipular el tiempo.",
        "descripcion": "Asesino legendario. Domina el Time Skip.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/607d8b?text=Hit"],
        "stats": { "fuerza": 88, "velocidad": 98, "ki": 90, "tecnica": 99 },
        "transformaciones": [],
        "tecnicas": ["Time Skip", "Time Lag"]
    },
    {
        "id": "toppo", "Personaje": "Toppo", "Raza": "Desconocida", "serie": "db-super",
        "Planeta de origen": "U11", "Universo": "11",
        "afiliaciones": "Tropa del Orgullo", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 85, "titulo": "El guerrero del U11" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 30, "titulo": "Torneo del Poder" },
        "historia": "Toppo es lider de la Tropa del Orgullo y candidato a Dios de la Destruccion.",
        "descripcion": "Candidato a Dios de la Destruccion.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff6d00?text=Toppo",
            "https://via.placeholder.com/500x700/1a1a1a/ff6d00?text=Toppo+Hakai"
        ],
        "stats": { "fuerza": 92, "velocidad": 76, "ki": 94, "tecnica": 85 },
        "transformaciones": ["Base", "Dios de la Destruccion"],
        "tecnicas": ["Hakai", "Cañon de la Justicia"]
    },
    {
        "id": "freezer-super", "Personaje": "Freezer Super", "Raza": "Raza de Freezer", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "7",
        "afiliaciones": "Ejercito de Freezer", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 19, "titulo": "El regreso de Freezer" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 5, "titulo": "El regreso" },
        "historia": "Freezer regresa en Super convertido en cyborg. Entreno por primera vez y alcanzo Golden Freezer y Black Freezer.",
        "descripcion": "Freezer renacido. Golden y Black Freezer.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Golden+Freezer",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Black+Freezer"
        ],
        "stats": { "fuerza": 96, "velocidad": 94, "ki": 98, "tecnica": 90 },
        "transformaciones": ["Forma Final", "Golden Freezer", "Black Freezer"],
        "tecnicas": ["Death Beam", "Supernova", "Death Ball"]
    },
    {
        "id": "caulifla", "Personaje": "Caulifla", "Raza": "Saiyan (U6)", "serie": "db-super",
        "Planeta de origen": "Sada (U6)", "Universo": "6",
        "afiliaciones": "Universo 6", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 70, "titulo": "La Saiyan del U6" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 28, "titulo": "Caulifla" },
        "historia": "Caulifla es una prodigio Saiyan del U6 que alcanzo el SSJ y SSJ2 con facilidad. Forma parte del Team Universe 6 en el Torneo del Poder.",
        "descripcion": "Prodigio Saiyan del Universo 6.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Caulifla",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Caulifla+SSJ2"
        ],
        "stats": { "fuerza": 82, "velocidad": 88, "ki": 80, "tecnica": 72 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 2"],
        "tecnicas": ["Cañon de Ki", "Puño Saiyan"]
    },
    {
        "id": "kale", "Personaje": "Kale", "Raza": "Saiyan (U6)", "serie": "db-super",
        "Planeta de origen": "Sada (U6)", "Universo": "6",
        "afiliaciones": "Universo 6", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 70, "titulo": "La Saiyan del U6" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 28, "titulo": "Kale" },
        "historia": "Kale es la Berserker del U6, con un poder similar al Broly original. Su forma Legendaria la convierte en una fuerza imparable.",
        "descripcion": "Berserker Saiyan del U6.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kale",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Kale+Berserker"
        ],
        "stats": { "fuerza": 90, "velocidad": 75, "ki": 88, "tecnica": 60 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan Legendario"],
        "tecnicas": ["Puño Berserker", "Rayo de Ira"]
    },
    {
        "id": "cabba", "Personaje": "Cabba", "Raza": "Saiyan (U6)", "serie": "db-super",
        "Planeta de origen": "Sada (U6)", "Universo": "6",
        "afiliaciones": "Universo 6", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 33, "titulo": "El torneo U6" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 12, "titulo": "Torneo U6" },
        "historia": "Cabba es un Saiyan del U6 que aprendio el SSJ de Vegeta. Es un guerrero honorable y leal.",
        "descripcion": "Saiyan honorable del U6.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Cabba",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Cabba+SSJ2"
        ],
        "stats": { "fuerza": 70, "velocidad": 75, "ki": 68, "tecnica": 65 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 2"],
        "tecnicas": ["Cañon Galick", "Puño de Luz"]
    },
    {
        "id": "goku-black", "Personaje": "Black Goku", "Raza": "Saiyan (Kaioshin)", "serie": "db-super",
        "Planeta de origen": "Desconocido", "Universo": "10",
        "afiliaciones": "Ninguna", "estado": "Eliminado", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 47, "titulo": "El misterioso Saiyan" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 14, "titulo": "Black Goku" },
        "historia": "Black Goku es Zamasu, un Kaioshin aprendiz que robo el cuerpo de Goku. Su odio por los mortales lo convirtio en una amenaza multiversal.",
        "descripcion": "Zamasu en el cuerpo de Goku. Amenaza divina.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Black+Goku",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Black+Goku+SSR"
        ],
        "stats": { "fuerza": 95, "velocidad": 94, "ki": 96, "tecnica": 92 },
        "transformaciones": ["Base", "Super Saiyan Rosé"],
        "tecnicas": ["Kamehameha Negra", "Espada de Ki", "Luz de la Justicia Divina"]
    },
    {
        "id": "zamasu", "Personaje": "Zamasu", "Raza": "Kaioshin", "serie": "db-super",
        "Planeta de origen": "U10", "Universo": "10",
        "afiliaciones": "Ninguna", "estado": "Eliminado", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Super", "episodio": 47, "titulo": "Zamasu" },
        "primeraAparicionManga": { "manga": "Dragon Ball Super", "capitulo": 14, "titulo": "Zamasu" },
        "historia": "Zamasu, aprendiz de Gowasu, despreciaba a los mortales. Usando las Super Esferas se volvio inmortal y planeo acabar con toda la vida humana.",
        "descripcion": "Kaioshin inmortal que busco exterminar a los mortales.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Zamasu",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Zamasu+Fusionado"
        ],
        "stats": { "fuerza": 88, "velocidad": 85, "ki": 95, "tecnica": 90 },
        "transformaciones": ["Zamasu", "Zamasu Inmortal", "Zamasu Fusionado (Merged Zamasu)"],
        "tecnicas": ["Luz de la Justicia Divina", "Barrera Divina", "Rayo de la Ira"]
    },
    // ============================================================
    // DRAGON BALL DAIMA (db-daima)
    // ============================================================
    {
        "id": "goku-daima", "Personaje": "Goku (Mini)", "Raza": "Saiyan (Mini)", "serie": "db-daima",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Goku es convertido en nino en Daima, explorando nuevos reinos y recuperando su forma adulta con transformaciones unicas de esta serie.",
        "descripcion": "Goku en forma mini con transformaciones exclusivas de Daima.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+SSJ2",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+SSJ3"
        ],
        "stats": { "fuerza": 85, "velocidad": 88, "ki": 86, "tecnica": 80 },
        "transformaciones": [
            { "id": "gokud_base", "orden": 1, "nombre": "Base Mini", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini", "descripcion": "Forma mini en Daima.", "saga": "Dragon Ball Daima" },
            { "id": "gokud_ssj", "orden": 2, "nombre": "Super Saiyan Mini", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+SSJ", "descripcion": "SSJ en forma mini.", "saga": "Dragon Ball Daima" },
            { "id": "gokud_ssj2", "orden": 3, "nombre": "Super Saiyan 2 Mini", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+SSJ2", "descripcion": "SSJ2 en forma mini.", "saga": "Dragon Ball Daima" },
            { "id": "gokud_ssj3", "orden": 4, "nombre": "Super Saiyan 3 Mini", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+Mini+SSJ3", "descripcion": "SSJ3 en forma mini.", "saga": "Dragon Ball Daima" }
        ],
        "tecnicas": ["Kamehameha", "Teletransportacion", "Puño de Luz"]
    },
    {
        "id": "vegeta-daima", "Personaje": "Vegeta (Mini)", "Raza": "Saiyan (Mini)", "serie": "db-daima",
        "Planeta de origen": "Vegeta", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Vegeta tambien es convertido en nino en Daima. Mantiene su orgullo Saiyan a pesar de su reducido tamano.",
        "descripcion": "Vegeta en forma mini.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Mini",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Mini+SSJ"
        ],
        "stats": { "fuerza": 83, "velocidad": 82, "ki": 84, "tecnica": 78 },
        "transformaciones": [
            { "id": "vegetad_base", "orden": 1, "nombre": "Base Mini", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Mini", "descripcion": "Vegeta en forma mini.", "saga": "Dragon Ball Daima" },
            { "id": "vegetad_ssj", "orden": 2, "nombre": "Super Saiyan Mini", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+Mini+SSJ", "descripcion": "SSJ en forma mini.", "saga": "Dragon Ball Daima" }
        ],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack"]
    },
    {
        "id": "shin-daima", "Personaje": "Shin (Mini)", "Raza": "Kaioshin", "serie": "db-daima",
        "Planeta de origen": "Reino de los Kaios", "Universo": "7",
        "afiliaciones": "Kaioshin", "estado": "Vivo", "edad": "Milenios",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Shin, el Kaioshin del U7, tambien es convertido en nino en Daima. Guia a los demas en esta nueva aventura.",
        "descripcion": "Kaioshin del U7 en forma mini.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/9c27b0?text=Shin+Mini"],
        "stats": { "fuerza": 60, "velocidad": 55, "ki": 80, "tecnica": 70 },
        "transformaciones": [],
        "tecnicas": ["Teletransportacion", "Barrera de Ki"]
    },
    {
        "id": "glorio", "Personaje": "Glorio", "Raza": "Desconocida", "serie": "db-daima",
        "Planeta de origen": "Reino Demonio", "Universo": "7",
        "afiliaciones": "Reino Demonio", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Glorio es un mago del Reino Demonio que aparece en Daima. Sus origenes y propositos son un misterio.",
        "descripcion": "Mago del Reino Demonio.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Glorio"],
        "stats": { "fuerza": 55, "velocidad": 60, "ki": 75, "tecnica": 85 },
        "transformaciones": [],
        "tecnicas": ["Magia Oscura", "Barrera Magica"]
    },
    {
        "id": "panzy", "Personaje": "Panzy", "Raza": "Humano (Mini)", "serie": "db-daima",
        "Planeta de origen": "Tierra", "Universo": "7",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Panzy es una chica del Reino Demonio que ayuda a los Guerreros Z en su aventura en Daima.",
        "descripcion": "Nueva aliada en el Reino Demonio.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Panzy"],
        "stats": { "fuerza": 30, "velocidad": 50, "ki": 40, "tecnica": 45 },
        "transformaciones": [],
        "tecnicas": ["Magia Basica", "Vuelo"]
    },
    {
        "id": "gomah", "Personaje": "Gomah", "Raza": "Demonio", "serie": "db-daima",
        "Planeta de origen": "Reino Demonio", "Universo": "7",
        "afiliaciones": "Reino Demonio", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Gomah es un poderoso demonio del Reino Demonio que amenaza a los protagonistas en Daima.",
        "descripcion": "Poderoso demonio del Reino Demonio.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gomah"],
        "stats": { "fuerza": 78, "velocidad": 70, "ki": 82, "tecnica": 75 },
        "transformaciones": [],
        "tecnicas": ["Magia Negra", "Rayo Oscuro"]
    },
    {
        "id": "degesu", "Personaje": "Degesu", "Raza": "Demonio", "serie": "db-daima",
        "Planeta de origen": "Reino Demonio", "Universo": "7",
        "afiliaciones": "Reino Demonio", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicionAnime": { "serie": "Dragon Ball Daima", "episodio": 1, "titulo": "El inicio de una nueva aventura" },
        "primeraAparicionManga": { "manga": "Dragon Ball Daima", "capitulo": 1, "titulo": "Daima" },
        "historia": "Degesu es un demonio del Reino Demonio que trabaja junto a Gomah en Daima.",
        "descripcion": "Demonio del Reino Demonio.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Degesu"],
        "stats": { "fuerza": 65, "velocidad": 68, "ki": 70, "tecnica": 72 },
        "transformaciones": [],
        "tecnicas": ["Magia Negra", "Bola Oscura"]
    },
    // ============================================================
    // DRAGON BALL GAMES / HEROES (db-games)
    // ============================================================
    {
        "id": "xeno-goku", "Personaje": "Xeno Goku", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Patrulla del Tiempo", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Heroes", "año": 2010 },
        "historia": "Xeno Goku es un Goku de otra linea temporal que trabaja para la Patrulla del Tiempo, protegiendo la historia de alteraciones. Domina formas unicas como el SSJ4 y Super Saiyan 4 Limit Breaker.",
        "descripcion": "Goku de la Patrulla del Tiempo. SSJ4, SSG, SSB.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ3",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ4",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ4+LB",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSG",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSB"
        ],
        "stats": { "fuerza": 98, "velocidad": 97, "ki": 99, "tecnica": 95 },
        "transformaciones": [
            { "id": "xenoku_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+Base", "descripcion": "Estado base.", "saga": "Heroes" },
            { "id": "xenoku_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ", "descripcion": "SSJ.", "saga": "Heroes" },
            { "id": "xenoku_ssj2", "orden": 3, "nombre": "Super Saiyan 2", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ2", "descripcion": "SSJ2.", "saga": "Heroes" },
            { "id": "xenoku_ssj3", "orden": 4, "nombre": "Super Saiyan 3", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ3", "descripcion": "SSJ3.", "saga": "Heroes" },
            { "id": "xenoku_ssj4", "orden": 5, "nombre": "Super Saiyan 4", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ4", "descripcion": "SSJ4, forma primal Saiyan.", "saga": "Heroes" },
            { "id": "xenoku_ssj4_lb", "orden": 6, "nombre": "Super Saiyan 4 Limit Breaker", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSJ4+LB", "descripcion": "SSJ4 mas alla del limite.", "saga": "Heroes" },
            { "id": "xenoku_ssg", "orden": 7, "nombre": "Super Saiyan God", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSG", "descripcion": "SSG divino.", "saga": "Heroes" },
            { "id": "xenoku_ssb", "orden": 8, "nombre": "Super Saiyan Blue", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Goku+SSB", "descripcion": "SSB.", "saga": "Heroes" }
        ],
        "tecnicas": ["Kamehameha x10", "Dragon Fist", "Teletransportacion", "Patrulla del Tiempo"]
    },
    {
        "id": "xeno-vegeta", "Personaje": "Xeno Vegeta", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Patrulla del Tiempo", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Heroes", "año": 2010 },
        "historia": "Xeno Vegeta es el principe Saiyan de la Patrulla del Tiempo, con acceso a SSJ4 y SSB.",
        "descripcion": "Vegeta de la Patrulla del Tiempo.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Vegeta",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xeno+Vegeta+SSJ4"
        ],
        "stats": { "fuerza": 97, "velocidad": 94, "ki": 96, "tecnica": 93 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 4"],
        "tecnicas": ["Final Shine Attack", "Big Bang Attack", "Galick Gun"]
    },
    {
        "id": "beat", "Personaje": "Beat", "Raza": "Humano", "serie": "db-games",
        "Planeta de origen": "Tierra", "Universo": "Dragon Ball Heroes",
        "afiliaciones": "Patrulla del Tiempo", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Heroes", "año": 2010 },
        "historia": "Beat es el protagonista avatar de Dragon Ball Heroes, un joven que se une a la Patrulla del Tiempo.",
        "descripcion": "Protagonista avatar de Heroes.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Beat"],
        "stats": { "fuerza": 75, "velocidad": 78, "ki": 72, "tecnica": 80 },
        "transformaciones": [],
        "tecnicas": ["Ataque Variable", "Patrulla del Tiempo"]
    },
    {
        "id": "shallot", "Personaje": "Shallot", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Dragon Ball Legends",
        "afiliaciones": "Ninguna", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Legends", "año": 2018 },
        "historia": "Shallot es un Saiyan del pasado despertado en Legends con la capacidad de usar SSG y SSB.",
        "descripcion": "Saiyan antiguo de Legends.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Shallot",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Shallot+SSG"
        ],
        "stats": { "fuerza": 85, "velocidad": 83, "ki": 82, "tecnica": 78 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 3", "Super Saiyan God"],
        "tecnicas": ["Kamehameha", "Puño Saiyan"]
    },
    {
        "id": "giblet", "Personaje": "Giblet", "Raza": "Saiyan", "serie": "db-games",
        "Planeta de origen": "Vegeta", "Universo": "Dragon Ball Legends",
        "afiliaciones": "Ninguna", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Legends", "año": 2019 },
        "historia": "Giblet es el hermano gemelo de Shallot, despertado como Saiyan oscuro con poder divino.",
        "descripcion": "Gemelo oscuro de Shallot.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Giblet"],
        "stats": { "fuerza": 87, "velocidad": 85, "ki": 86, "tecnica": 82 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan God"],
        "tecnicas": ["Kamehameha Oscura", "Puño Oscuro"]
    },
    {
        "id": "fu", "Personaje": "Fu", "Raza": "Demonio/Saiyan Hibrido", "serie": "db-games",
        "Planeta de origen": "Desconocido", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Ninguna", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Heroes", "año": 2015 },
        "historia": "Fu es el hijo de Mira y Towa, un demonio Saiyan que manipula el tiempo y las realidades en Heroes.",
        "descripcion": "Demonio Saiyan que manipula el tiempo.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Fu"],
        "stats": { "fuerza": 92, "velocidad": 90, "ki": 95, "tecnica": 94 },
        "transformaciones": ["Base", "Dark Factor", "Demonio Saiyan"],
        "tecnicas": ["Manipulacion Temporal", "Magia Oscura", "Rayo Demonio"]
    },
    {
        "id": "trunks-patrol", "Personaje": "Trunks Patrulla del Tiempo", "Raza": "Hibrido Saiyan/Humano", "serie": "db-games",
        "Planeta de origen": "Tierra", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Patrulla del Tiempo", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Online", "año": 2010 },
        "historia": "Este Trunks es miembro de la Patrulla del Tiempo que protege la historia viajando entre lineas temporales.",
        "descripcion": "Trunks miembro de la Patrulla del Tiempo.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+Patrulla",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+SSJ3"
        ],
        "stats": { "fuerza": 78, "velocidad": 82, "ki": 75, "tecnica": 80 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 3"],
        "tecnicas": ["Burning Attack", "Espada", "Patrulla del Tiempo"]
    },
    {
        "id": "mira", "Personaje": "Mira", "Raza": "Demonio Artificial", "serie": "db-games",
        "Planeta de origen": "Reino Demonio", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Reino Demonio", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Online", "año": 2010 },
        "historia": "Mira es un demonio artificial creado por Towa, con poder comparable al de los dioses.",
        "descripcion": "Demonio artificial creado por Towa.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Mira"],
        "stats": { "fuerza": 90, "velocidad": 82, "ki": 88, "tecnica": 78 },
        "transformaciones": [],
        "tecnicas": ["Rayo Oscuro", "Puño Demonio", "Magia Negra"]
    },
    {
        "id": "towa", "Personaje": "Towa", "Raza": "Demonio", "serie": "db-games",
        "Planeta de origen": "Reino Demonio", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Reino Demonio", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Online", "año": 2010 },
        "historia": "Towa es una hechicera demonio que altera la historia creando demonios artificiales como Mira.",
        "descripcion": "Hechicera demonio del tiempo.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Towa"],
        "stats": { "fuerza": 70, "velocidad": 75, "ki": 85, "tecnica": 90 },
        "transformaciones": [],
        "tecnicas": ["Magia Oscura", "Hechizo de Tiempo", "Creacion de Demonios"]
    },
    {
        "id": "demigra", "Personaje": "Demigra", "Raza": "Demonio", "serie": "db-games",
        "Planeta de origen": "Reino Demonio", "Universo": "Linea Temporal Alternativa",
        "afiliaciones": "Reino Demonio", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "juego": "Dragon Ball Xenoverse", "año": 2015 },
        "historia": "Demigra es un demonio de la magia oscura que amenaza con destruir la historia en Xenoverse.",
        "descripcion": "Demonio oscuro de Xenoverse.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Demigra"],
        "stats": { "fuerza": 85, "velocidad": 80, "ki": 95, "tecnica": 92 },
        "transformaciones": ["Demigra", "Demigra Poder Maximo"],
        "tecnicas": ["Magia Oscura", "Esfera de la Oscuridad"]
    },
    // ============================================================
    // DRAGON BALL AF (db-af)
    // ============================================================
    {
        "id": "goku-af", "Personaje": "Goku AF", "Raza": "Saiyan", "serie": "db-af",
        "Planeta de origen": "Vegeta", "Universo": "AF",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicion": { "tipo": "Doujinshi", "titulo": "Dragon Ball AF", "año": 2000 },
        "historia": "Goku AF es la version del legendario doujinshi. Alcanza el Super Saiyan 5, superando el SSJ4 de GT.",
        "descripcion": "El legendario SSJ5 del doujinshi.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+Base",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+SSJ",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+SSJ5"
        ],
        "stats": { "fuerza": 99, "velocidad": 98, "ki": 100, "tecnica": 95 },
        "transformaciones": [
            { "id": "gokuaf_base", "orden": 1, "nombre": "Base", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+Base", "descripcion": "Estado base.", "saga": "AF" },
            { "id": "gokuaf_ssj", "orden": 2, "nombre": "Super Saiyan", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+SSJ", "descripcion": "SSJ.", "saga": "AF" },
            { "id": "gokuaf_ssj4", "orden": 3, "nombre": "Super Saiyan 4", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+SSJ4", "descripcion": "SSJ4.", "saga": "AF" },
            { "id": "gokuaf_ssj5", "orden": 4, "nombre": "Super Saiyan 5", "imagen": "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Goku+AF+SSJ5", "descripcion": "SSJ5 con cabello plateado largo.", "saga": "AF" }
        ],
        "tecnicas": ["Kamehameha AF", "Genkidama Suprema", "Teletransportacion", "Puño del Dragon"]
    },
    {
        "id": "vegeta-af", "Personaje": "Vegeta AF", "Raza": "Saiyan", "serie": "db-af",
        "Planeta de origen": "Vegeta", "Universo": "AF",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicion": { "tipo": "Doujinshi", "titulo": "Dragon Ball AF", "año": 2000 },
        "historia": "Vegeta AF alcanza el SSJ5 al igual que Goku en el doujinshi, manteniendo su rivalidad eterna.",
        "descripcion": "Vegeta con SSJ5 en el universo AF.",
        "imagenes": [
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+AF",
            "https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Vegeta+AF+SSJ5"
        ],
        "stats": { "fuerza": 98, "velocidad": 95, "ki": 97, "tecnica": 94 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 5"],
        "tecnicas": ["Final Flash AF", "Galick Gun Suprema"]
    },
    {
        "id": "xicor", "Personaje": "Xicor", "Raza": "Saiyan/Dios", "serie": "db-af",
        "Planeta de origen": "Desconocido", "Universo": "AF",
        "afiliaciones": "Ninguna", "estado": "Activo", "edad": "Desconocida",
        "primeraAparicion": { "tipo": "Doujinshi", "titulo": "Dragon Ball AF", "año": 2000 },
        "historia": "Xicor es el hijo de Goku con la Diosa Zenkai, el antagonista principal del doujinshi AF. Posee poder divino innato.",
        "descripcion": "Hijo divino de Goku. Antagonista de AF.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Xicor"],
        "stats": { "fuerza": 100, "velocidad": 99, "ki": 100, "tecnica": 98 },
        "transformaciones": ["Xicor", "Xicor Poder Maximo"],
        "tecnicas": ["Rayo Divino", "Puño de Zenkai", "Kamehameha Divina"]
    },
    {
        "id": "gohan-af", "Personaje": "Gohan AF", "Raza": "Hibrido Saiyan/Humano", "serie": "db-af",
        "Planeta de origen": "Tierra", "Universo": "AF",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicion": { "tipo": "Doujinshi", "titulo": "Dragon Ball AF", "año": 2000 },
        "historia": "Gohan AF mantiene su forma Ultimate y potencialmente alcanza nuevas alturas en el universo AF.",
        "descripcion": "Gohan en el universo AF.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Gohan+AF"],
        "stats": { "fuerza": 88, "velocidad": 85, "ki": 90, "tecnica": 84 },
        "transformaciones": ["Base", "Ultimate Gohan"],
        "tecnicas": ["Masenko", "Kamehameha AF"]
    },
    {
        "id": "trunks-af", "Personaje": "Trunks AF", "Raza": "Hibrido Saiyan/Humano", "serie": "db-af",
        "Planeta de origen": "Tierra", "Universo": "AF",
        "afiliaciones": "Guerreros Z", "estado": "Vivo", "edad": "Desconocida",
        "primeraAparicion": { "tipo": "Doujinshi", "titulo": "Dragon Ball AF", "año": 2000 },
        "historia": "Trunks AF es el guerrero del futuro en el universo AF, luchando junto a los demas.",
        "descripcion": "Trunks del futuro en AF.",
        "imagenes": ["https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=Trunks+AF"],
        "stats": { "fuerza": 75, "velocidad": 80, "ki": 72, "tecnica": 78 },
        "transformaciones": ["Base", "Super Saiyan", "Super Saiyan 2"],
        "tecnicas": ["Burning Attack", "Espada AF", "Final Flash"]
    },
];
var MEDIA_DATA = {
    "series": [
        {
            "titulo": "Dragon Ball",
            "descripcion": "La aventura original de Goku buscando las Esferas del Drag+¦n.",
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
            "info": "153 Episodios",
            "capitulos": 153,
            "inicio": "26/02/1986",
            "fin": "19/04/1989",
            "alias": ["DB", "Dragon Ball Cl+ísico"]
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
            "descripcion": "Secuela alternativa donde Goku vuelve a ser ni+¦o.",
            "imagen": "https://lh3.googleusercontent.com/d/1hEN8OUh65JHzYgOO67te3YL7x1TJ2z91",
            "info": "64 Episodios",
            "capitulos": 64,
            "inicio": "07/02/1996",
            "fin": "19/11/1997",
            "alias": ["DBGT", "GT"]
        },
        {
            "titulo": "Dragon Ball Z Kai",
            "descripcion": "Remasterizaci+¦n de DBZ fiel al manga y sin relleno.",
            "imagen": "https://lh3.googleusercontent.com/d/1MrKM3d6CccP1Io_PeMK5tJSHAqelg0_Y",
            "info": "167 Episodios",
            "capitulos": 167,
            "inicio": "05/04/2009",
            "fin": "28/08/2011",
            "alias": ["Kai", "DBZ Kai"]
        },
        {
            "titulo": "Dragon Ball Super",
            "descripcion": "Continuaci+¦n oficial tras la derrota de Majin Buu.",
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
            "fin": "En emisi+¦n",
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
            "descripcion": "La legendaria historia fanmade de los a+¦os 2000.",
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
        { "titulo": "DRAGON BALL: Aquella vez que me reencarn+® en Yamcha", "descripcion": "Spin-off oficial", "imagen": "https://lh3.googleusercontent.com/d/1Ucj90qCRunNLccmBamHd-3maGQP2GA9x", "tipo": "oficial" },
        { "titulo": "DB MULTIVERSE", "descripcion": "Fan manga multiverso", "imagen": "https://lh3.googleusercontent.com/d/1SJjeWUjlFR7L9-xgexaKE3VNwJfAVOTl", "tipo": "fan" },
        { "titulo": "DRAGON BALL SUPER", "descripcion": "Continuaci+¦n oficial del manga", "imagen": "https://lh3.googleusercontent.com/d/1Mbnn5SXWKHSUmbWx_6NOF-q63QVXLDal", "tipo": "oficial" },
        { "titulo": "DRAGON BALL KAKUMEI", "descripcion": "Fan manga alternativo", "imagen": "https://lh3.googleusercontent.com/d/15AwAhSl2_pgFB7qJ5iLfQd6cJQ6fwzaF", "tipo": "fan" }
    ],
    "peliculas": [
        { "titulo": "La leyenda de Shenlong / El camino hacia el m+ís fuerte (Latam)", "descripcion": "Dragon Ball", "info": "Diciembre 1986", "imagen": "https://lh3.googleusercontent.com/d/1MeskJh-7K8Q8UfAK1pT-1f3cBehBdwLa" },
        { "titulo": "La bella durmiente en el castillo del mal / La princesa durmiente en el castillo del diablo", "descripcion": "Dragon Ball", "info": "Julio 1987", "imagen": "https://lh3.googleusercontent.com/d/1Yhtd75UnoUgdHxeJJS8IeDnAS20X5u7O" },
        { "titulo": "Aventura m+¡stica / Gran aventura m+¡stica", "descripcion": "Dragon Ball", "info": "Julio 1988", "imagen": "https://lh3.googleusercontent.com/d/1vdukB3FoFKOewaWd4za-1Qe793mmRCuO" },
        { "titulo": "Garlic Junior Inmortal / -íDevu+®lvanme a mi Gohan!", "descripcion": "Dragon Ball Z", "info": "Julio 1989", "imagen": "https://lh3.googleusercontent.com/d/1msJ6i3_F-OaBOWQVRG4fvKtFjkF6jfZg" },
        { "titulo": "El m+ís fuerte del mundo", "descripcion": "Dragon Ball Z", "info": "Marzo 1990", "imagen": "https://lh3.googleusercontent.com/d/1aUuKp0ekK4q9qykIA-ov3QuovAyd-TXh" },
        { "titulo": "La superbatalla decisiva por la Tierra / La batalla m+ís grande de este mundo por la Tierra", "descripcion": "Dragon Ball Z", "info": "Julio 1990", "imagen": "https://lh3.googleusercontent.com/d/1kLDjDs91N0qm85BoLVbH3Al09v4LN_pa" },
        { "titulo": "El superguerrero Son Goku / Goku es un Super Saiyajin", "descripcion": "Dragon Ball Z", "info": "Marzo 1991", "imagen": "https://lh3.googleusercontent.com/d/1R9BYS8ZqtUZ2C0Nu36zVGOf4pPdMreWU" },
        { "titulo": "Los mejores rivales / Los rivales m+ís poderosos", "descripcion": "Dragon Ball Z", "info": "Julio 1991", "imagen": "https://lh3.googleusercontent.com/d/1WBJj1qH5gtPbyfyWMoDcMY2F0ySpyHj0" },
        { "titulo": "Guerreros de fuerza ilimitada / Los guerreros m+ís poderosos", "descripcion": "Dragon Ball Z", "info": "Marzo 1992", "imagen": "https://lh3.googleusercontent.com/d/1Yct44chN74cdxfZ9bNYF1ivkY8GyhuLY" },
        { "titulo": "Los tres grandes Super Saiyans / La pelea de los tres Saiyajins", "descripcion": "Dragon Ball Z", "info": "Julio 1992", "imagen": "https://lh3.googleusercontent.com/d/1C_ot9R07D6yvo2AXiAw7uztJaZk8zhk_" },
        { "titulo": "Estalla el duelo / El poder invencible", "descripcion": "Dragon Ball Z", "info": "Marzo 1993", "imagen": "https://lh3.googleusercontent.com/d/1s9xEKPOGc-1nulMQG0Cuef_bzGSBBw_U" },
        { "titulo": "Los guerreros de plata / La galaxia corre peligro", "descripcion": "Dragon Ball Z", "info": "Julio 1993", "imagen": "https://lh3.googleusercontent.com/d/1PYOnYKFLEcU-pXcVFhVwL_1GJF8CoejI" },
        { "titulo": "El regreso de Broly / El regreso del guerrero legendario", "descripcion": "Dragon Ball Z", "info": "Marzo 1994", "imagen": "https://lh3.googleusercontent.com/d/1c0gsVhK-24jp79MqRrZkZZV33yqBTCHF" },
        { "titulo": "El combate definitivo / El combate final", "descripcion": "Dragon Ball Z", "info": "Julio 1994", "imagen": "https://lh3.googleusercontent.com/d/1zhU7lVBjEiiViivwCBjRw_rxvS6FuIMI" },
        { "titulo": "-íEl renacer de la fusi+¦n! / La fusi+¦n de Goku y Vegeta", "descripcion": "Dragon Ball Z", "info": "Marzo 1995", "imagen": "https://lh3.googleusercontent.com/d/10g1s8cP-wgrt3x4P-EQKQQdNj87GBXqM" },
        { "titulo": "El ataque del drag+¦n / El ataque del drag+¦n", "descripcion": "Dragon Ball Z", "info": "Julio 1995", "imagen": "https://lh3.googleusercontent.com/d/1YzWZBnF5SVHQ76ZtHzGo_d9--o8AvU3S" },
        { "titulo": "El camino hacia el m+ís fuerte / El camino hacia el poder", "descripcion": "Dragon Ball (Especial 10-¦ Aniv.)", "info": "Marzo 1996", "imagen": "https://lh3.googleusercontent.com/d/1kv0-M5kuwkQKEV8zMuH0Fmc4q-Ku0ujK" },
        { "titulo": "La batalla de los dioses", "descripcion": "Dragon Ball Super", "info": "Marzo 2013", "imagen": "https://lh3.googleusercontent.com/d/1BXVTWTH1_wW205QretsCiGiwLq5fTxPH" },
        { "titulo": "La resurrecci+¦n de Freezer / La resurrecci+¦n de 'F'", "descripcion": "Dragon Ball Super", "info": "Abril 2015", "imagen": "https://lh3.googleusercontent.com/d/132tuEe-NXEG0zbYYZb307YFL433YTok9" },
        { "titulo": "Dragon Ball Super: Broly", "descripcion": "Dragon Ball Super", "info": "Diciembre 2018", "imagen": "https://lh3.googleusercontent.com/d/13bM-a9y8l72FiBD0-ZY5qr1HqOQV9Qck" },
        { "titulo": "Dragon Ball Super: Super Hero", "descripcion": "Dragon Ball Super", "info": "Junio 2022", "imagen": "https://lh3.googleusercontent.com/d/1--0Hiil4UtBmw8ktiXNCla9m1edyCby2" }
    ],
    "videojuegos": [
        { "titulo": "Dragon Ball Sparking! ZERO", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/115sLGIdzioiaRAsxG4ATFfliXWObYpQF" },
        { "titulo": "Dragon Ball Z: Sagas", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/12jXt_CnKRxXIQD_MTGYg79BPLaij85R3" },
        { "titulo": "Dragon Ball Z: Buu's Fury", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15F8kUwNevGxeU3hBfRksKLZdu6gG_n8Z" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15SZUX8XyEOFjHgV9J8mUFKLLRCrNxEaH" },
        { "titulo": "Dragon Ball: The Breakers", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15n9jmkwKd64AyrYaG1Q3Mo_LTw5LhI4X" },
        { "titulo": "Dragon Ball Raging Blast", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1CDaqeXIbeSDIL-cB8Nm72SojEbGHYKGv" },
        { "titulo": "Dragon Ball Z: Budokai", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1GR5bWqLoO7eGdz-yeKOnyJqmqoDsd7JE" },
        { "titulo": "Dragon Ball Z: El Legado de Goku", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1KYbxQgzTN4Rxnn314-uUSZY4AkqPNd_X" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 3", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1LJjapTQJ28k_6Pt1_vZxFMqBi2wmWx6_" },
        { "titulo": "Dragon Ball Legends", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1OTxA0GWun1qk-8bOyLrNqwuyDHn6Dtro" },
        { "titulo": "Dragon Ball Raging Blast 2", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1PpxQ0fS7kzhmG1gg0TlQqfc-QldSZwzM" },
        { "titulo": "Dragon Ball Z: Kakarot", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Q2frh1C-i8lHs2kSVs4nmSuVaqPVBn7m" },
        { "titulo": "Dragon Ball Z: Shin Budokai", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1QSfUMU0HG63XqUElUscGbN1c--BmQpTm" },
        { "titulo": "Dragon Ball Z: Shin Budokai - Another Road", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1SquR3MJrgxrgRYXCWEfD-fkeuGRgi9Ed" },
        { "titulo": "Dragon Ball: Advanced Adventure", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Tsj4ICOMHfisXKItRYObeu608txA71Vz" },
        { "titulo": "Dragon Ball Z: Budokai 3", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1UcPPHRupw_7Cg0bcceCMZux00fbWcLyA" },
        { "titulo": "Dragon Ball Z: Budokai 2", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1VpnGeNTwnoCeF1OIgONFwFXrSiQBCZtY" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 2", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aBMBzvH8LUqDZoxDfdTzednCwXTiahY1" },
        { "titulo": "Dragon Ball Z: The Legacy of Goku II", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aCDo3I04ud5PcA1l2Z7JGvowVUYCsa3K" },
        { "titulo": "Dragon Ball FighterZ", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1emM49Xbed6wuzu6W5FP7DXiC2uGydUwM" },
        { "titulo": "Dragon Ball Z: Dokkan Battle", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1nM6Wc-shh6lH8TRVS0NRhhA23Mc638qW" },
        { "titulo": "Dragon Ball Xenoverse 2", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1opHnByooG3XhwoOGb129gvTHK2zemLQz" },
        { "titulo": "Super Dragon Ball Heroes: World Mission", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1qY1OnwfhIGcE2fNxGPPytaxjn5HpSo8r" },
        { "titulo": "Dragon Ball Fusions", "descripcion": "Informaci+¦n no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1x6y8WCWJA-7eH_aRckj_Bp0YKRv92lmk" }
    ],
    "videos": [
        { "titulo": "Dragon Ball Cl+ísico - Opening (Makafushigi Adventure)", "descripcion": "El opening original que inici+¦ la leyenda de Dragon Ball.", "imagen": "https://img.youtube.com/vi/JSb7p0SIc1w/mqdefault.jpg", "youtubeId": "JSb7p0SIc1w", "categoria": "Openings" },
        { "titulo": "Goku se Transforma en Super Saiyajin 3 por Primera Vez", "descripcion": "La impactante transformaci+¦n de Goku SSJ3 frente a Majin Buu.", "imagen": "https://img.youtube.com/vi/Ut8wlVuT3pc/mqdefault.jpg", "youtubeId": "Ut8wlVuT3pc", "categoria": "Transformaciones" },
        { "titulo": "Goku Despierta el Ultra Instinto por Primera Vez", "descripcion": "Goku alcanza el Ultra Instinto por primera vez en el Torneo del Poder.", "imagen": "https://img.youtube.com/vi/6CF29TtxU2c/mqdefault.jpg", "youtubeId": "6CF29TtxU2c", "categoria": "Transformaciones" },
        { "titulo": "Gogeta vs Broly - Batalla +ëpica Completa", "descripcion": "La fusi+¦n definitiva de Gogeta vs Broly en 4K.", "imagen": "https://img.youtube.com/vi/BYt9F2vCfqU/mqdefault.jpg", "youtubeId": "BYt9F2vCfqU", "categoria": "Batallas" },
        { "titulo": "Vegito vs Majin Buu - Combate Legendario", "descripcion": "Vegito hace su debut aplastando a Buuhan en una batalla +®pica.", "imagen": "https://img.youtube.com/vi/pmB5p1ZIWQw/mqdefault.jpg", "youtubeId": "pmB5p1ZIWQw", "categoria": "Batallas" },
        { "titulo": "Goku vs Majin Vegeta - La Rivalidad Saiyajin", "descripcion": "La pelea m+ís intensa entre Goku y Vegeta bajo el control de Babidi.", "imagen": "https://img.youtube.com/vi/89fzXpb9rCU/mqdefault.jpg", "youtubeId": "89fzXpb9rCU", "categoria": "Batallas" },
        { "titulo": "Dragon Ball Super: SUPER HERO - Tr+íiler Oficial", "descripcion": "El tr+íiler oficial de la pel+¡cula Super Hero con Gohan y Piccolo.", "imagen": "https://img.youtube.com/vi/t5CIs0jDqC8/mqdefault.jpg", "youtubeId": "t5CIs0jDqC8", "categoria": "Trailers" },
        { "titulo": "Dragon Ball Z Kakarot DLC 6 - Goku vs Vegeta 4K (Goku's Next Journey)", "descripcion": "La batalla final entre Goku y Vegeta en el DLC 6 de Dragon Ball Z Kakarot en 4K 60FPS.", "imagen": "https://img.youtube.com/vi/p3CDfDwwb6Q/mqdefault.jpg", "youtubeId": "p3CDfDwwb6Q", "categoria": "Batallas" }
    ],
    "fanAnimations": [
        {
            "titulo": "Dragon Ball Deliverance",
            "creador": "FRAME ONE",
            "url": "https://www.youtube.com/@frameone1",
            "descripcion": "A+¦os despu+®s de Dragon Ball GT, los Z Fighters se enfrentan a una poderosa amenaza que causa caos en Namek. Serie fan-made con animaci+¦n de alta calidad y modelados 3D.",
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
            "descripcion": "La batalla final de Gohan del futuro contra los androides, recreada con una impresionante animaci+¦n fan que captura la esencia del guerrero m+ís tr+ígico.",
            "imagen": "https://img.youtube.com/vi/rQ_eqJHw4tE/mqdefault.jpg",
            "capitulos": [
                { "titulo": "Partes 1 + 2", "youtubeId": "rQ_eqJHw4tE" }
            ]
        },
        {
            "titulo": "Dragon Ball MAGIC",
            "creador": "Totally Not Mark",
            "url": "https://www.youtube.com/@TotallyNotMark",
            "descripcion": "Una parodia animada en colaboraci+¦n con TeamFourStar que reimagina el universo Dragon Ball con un toque de humor y creatividad.",
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
            "nombre": "Dragon Ball Cl+ísico",
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl",
            "sagas": [
                { "titulo": "Saga de Pilaf", "imagen": "https://lh3.googleusercontent.com/d/1gJ9FBJKuQ8p-KItR1D6tnAkzgYkYkgfv" },
                { "titulo": "Saga del 21-¦ Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1fyWjTkx8cRMp65swf1U1JZtREmi0ylCq" },
                { "titulo": "Saga del Ej+®rcito de la Patrulla Roja (Red Ribbon)", "imagen": "https://lh3.googleusercontent.com/d/14XvgWlBw9b4sZ5Qk58WA1qG6kX8Y6Ibo" },
                { "titulo": "Saga de Uranai Baba", "imagen": "https://lh3.googleusercontent.com/d/1PkQrcpTKiQ103YTouhggGkJKxtVYAcnW" },
                { "titulo": "Saga del 22-¦ Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1EAk58Ae4gpHYbUkY5L0KqvpMopAM_CdG" },
                { "titulo": "Saga de Piccolo Daima+ì", "imagen": "https://lh3.googleusercontent.com/d/1uJzWMgU1NFj3-_N6MvhyuRy7A6Qgwy5S" },
                { "titulo": "Saga del 23-¦ Torneo de las Artes Marciales", "imagen": "https://lh3.googleusercontent.com/d/1AKxAfo8pmqIKqkR81rVvAmV5zCTSOD6u" }
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
                { "titulo": "Saga de las Esferas del Drag+¦n de la Estrella Negra", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Estrellas+Negras" },
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
                { "titulo": "Saga de la Resurrecci+¦n de ÔÇ£FÔÇØ", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Resurreccion+de+F" },
                { "titulo": "Saga del Torneo del Universo 6", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Torneo+Universo+6" },
                { "titulo": "Saga de Goku Black (o de Trunks del Futuro)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Goku+Black" },
                { "titulo": "Saga del Torneo del Poder (o de la Supervivencia Universal)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Torneo+del+Poder" },
                { "titulo": "Pel+¡cula Dragon Ball Super: Broly", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+Broly" },
                { "titulo": "Saga de Moro (o del Prisionero de la Patrulla Gal+íctica)", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Moro" },
                { "titulo": "Saga de Granolah el Superviviente", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Saga+de+Granolah" },
                { "titulo": "Pel+¡cula / Saga de Super Hero", "imagen": "https://via.placeholder.com/600x338/1a1a1a/ff5e00?text=Super+Hero" }
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
            { "nombre": "Cristal de la Omnipotencia", "dragon": "ÔÇö", "color": "info", "descripcion": "Artefacto +¦nico capaz de otorgar poder absoluto sin l+¡mites conocidos.", "imagen": "https://lh3.googleusercontent.com/d/1kwllvhGWA2-9KxqwPStyca9v6mUKTMWc" }
        ],
        "principales": [
            { "nombre": "Esferas del Drag+¦n", "dragon": "Shenlong", "color": "warning", "descripcion": "Las siete esferas de la Tierra. Conceden un deseo al reunirlas.", "imagen": "https://lh3.googleusercontent.com/d/1_bCHC8MeGlixl6yqSuso8G5V9uhn8AmM" },
            { "nombre": "Esferas del Drag+¦n de Namek", "dragon": "Porunga", "color": "success", "descripcion": "Mucho m+ís grandes; conceden tres deseos en idioma Namek.", "imagen": "https://lh3.googleusercontent.com/d/1powONUqd6btTR4GheQvAyc990HKHTBDA" },
            { "nombre": "Super Esferas del Drag+¦n", "dragon": "Super Shenlong", "color": "info", "descripcion": "Del tama+¦o de planetas. Sin l+¡mites de poder.", "imagen": "https://lh3.googleusercontent.com/d/14MPoXE9vqzqPwwP5Bg-Yt6jJ_whWYG4h" }
        ],
        "variantes": [
            { "nombre": "Esferas del Drag+¦n de Cereal", "dragon": "Toronbo", "color": "success", "descripcion": "Esferas del planeta Cereal, hogar de Granolah.", "imagen": "https://lh3.googleusercontent.com/d/1dMQfaDo2tfXNmb954-T34DwuEQamJc5W" },
            { "nombre": "Esferas del Drag+¦n Oscuras", "dragon": "Drag+¦n Oscuro", "color": "dark", "descripcion": "Esferas de color oscuro vinculadas a energ+¡as corruptas y dragones oscuros.", "imagen": "https://lh3.googleusercontent.com/d/13tgVnKRZ6GhYFAJUP1AMHWn-CQAk2a7R" },
            { "nombre": "Esferas del Drag+¦n Especiales", "dragon": "Shenlong", "color": "primary", "descripcion": "Ediciones limitadas y variantes especiales del multiverso.", "imagen": "https://lh3.googleusercontent.com/d/1fRtltVnEL1Vb3hGGUxRVvxALscKHcNPF" },
            { "nombre": "Esferas del Drag+¦n de Energ+¡a Negativa", "dragon": "ÔÇö", "color": "danger", "descripcion": "Esferas cargadas con energ+¡a negativa que distorsionan los deseos.", "imagen": "https://lh3.googleusercontent.com/d/13whURNtmtBWqfJStYOvzesGhikpxCnC7" },
            { "nombre": "Esferas del Drag+¦n del Reino Demon+¡aco", "dragon": "Tamagami", "color": "secondary", "descripcion": "Artefactos del Reino Demon+¡aco introducidos en Dragon Ball Daima.", "imagen": "https://lh3.googleusercontent.com/d/19PLsHz2B_w4Gz1z6D4h5shGj4cxgMYxN" }
        ]
    },
    "universos": [
        { "id": 1, "dios": "Iwan", "angel": "Awamo", "imagen": "https://lh3.googleusercontent.com/d/18dAswrvAP5YvngQ3gRvlpwSO3czV8qE_", "highlight": false, "descripcion": "El universo con el nivel mortal m+ís alto del multiverso, regido por la sabidur+¡a y el orden absoluto.", "diosInfo": { "nombre": "Iwan", "imagen": "https://lh3.googleusercontent.com/d/1hqOJQrZ60Mp5tO1jlGPKeKMDHzjaLoND", "descripcion": "Un Dios de la Destrucci+¦n de aspecto anciano, conocido por su actitud seria y su apego a las reglas.", "habilidades": "Poder de destrucci+¦n canalizado a trav+®s de su bast+¦n. Su experiencia milenaria lo convierte en un estratega letal." }, "angelInfo": { "nombre": "Awamo", "imagen": "https://lh3.googleusercontent.com/d/1uTZx3iCdjYCuFsHpH3ylzgRsaJWe7UYs", "descripcion": "+üngel de modales impecables y porte distinguido.", "funcion": "Supervisar y entrenar al Dios de la Destrucci+¦n Iwan, adem+ís de mantener el equilibrio del universo." }, "kaioshin": [ { "nombre": "Anciano Kaioshin del Universo 1", "imagen": "https://lh3.googleusercontent.com/d/1-INbrWfU4APaz7G55l4HwVsaLY3mj2zP", "descripcion": "El Supremo Kaioshin m+ís antiguo del universo 1.", "rol": "Guiar la creaci+¦n y el desarrollo de la vida en el universo." } ] },
        { "id": 2, "dios": "Heles", "angel": "Sour", "imagen": "https://lh3.googleusercontent.com/d/1Lc2qFDNAO_wNpT9A-SUN0VOuqE7QOtBM", "highlight": false, "descripcion": "El universo del amor y la belleza, donde los guerreros luchan con elegancia y pasi+¦n.", "diosInfo": { "nombre": "Heles", "imagen": "https://lh3.googleusercontent.com/d/1s9pKbzkPmAF0DrHvjqGfFzTE1pZW_F55", "descripcion": "Una Diosa de la Destrucci+¦n femenina que valora la est+®tica y el amor en todas sus formas.", "habilidades": "Destrucci+¦n estilizada con movimientos gr+íciles pero mortales. Puede canalizar la energ+¡a del amor en poder destructivo." }, "angelInfo": { "nombre": "Sour", "imagen": "https://lh3.googleusercontent.com/d/1ncHtTHvYBu_o6JHOArYuUWgGbyKb64AT", "descripcion": "+üngel de apariencia andr+¦gina y personalidad burbujeante.", "funcion": "Asistir a Heles y mantener el orden divino en el universo del amor." }, "kaioshin": [ { "nombre": "Pell", "imagen": "https://lh3.googleusercontent.com/d/1dVasadfFLsvNzxwKo10h-RkEIlSXOHSI", "descripcion": "Supremo Kaioshin del Universo 2, elegante y apasionado.", "rol": "Fomentar la creaci+¦n de vida con amor y armon+¡a." } ] },
        { "id": 3, "dios": "Mule", "angel": "Camparri", "imagen": "https://lh3.googleusercontent.com/d/1tVRNEvMnT0nVShSv-QrPxHMkOx6H7nBo", "highlight": false, "descripcion": "El universo de la inteligencia y la sabidur+¡a, habitado por seres l+¦gicos y estrat+®gicos.", "diosInfo": { "nombre": "Mule", "imagen": "https://lh3.googleusercontent.com/d/12D1XlzrgYfp2hGwWWCUSX5N5bguXbMXX", "descripcion": "Un Dios de la Destrucci+¦n de complexi+¦n robusta, impulsivo pero con un gran coraz+¦n.", "habilidades": "Fuerza bruta combinada con ataques de destrucci+¦n masiva. Su resistencia es legendaria." }, "angelInfo": { "nombre": "Camparri", "imagen": "https://lh3.googleusercontent.com/d/1ds2ekAXr1omi5xszfbweAKvOTSnuWvTv", "descripcion": "+üngel sereno y calculador, siempre un paso adelante.", "funcion": "Guiar a Mule en sus decisiones destructivas y velar por el equilibrio universal." }, "kaioshin": [ { "nombre": "Ea", "imagen": "https://lh3.googleusercontent.com/d/1Hp7dJp580nXRNgUz8vl8DXgqLMIWk6yw", "descripcion": "Supremo Kaioshin del Universo 3, de complexi+¦n delgada y gran intelecto.", "rol": "Supervisar la creaci+¦n tecnol+¦gica y biol+¦gica del universo." } ] },
        { "id": 4, "dios": "Quitela", "angel": "Cognac", "imagen": "https://lh3.googleusercontent.com/d/1Mx28PSYFEy0xKtPefGhr7nRO6XxNjsrc", "highlight": false, "descripcion": "Un universo astuto y tramposo, donde la picard+¡a y el enga+¦o son moneda corriente.", "diosInfo": { "nombre": "Quitela", "imagen": "https://lh3.googleusercontent.com/d/1Q7YYEga0XPzrtLDE5CoXd8VMqojklp8_", "descripcion": "Un Dios de la Destrucci+¦n peque+¦o pero letal, conocido por su risa burlona y su astucia.", "habilidades": "Agilidad sobrehumana y ataques de destrucci+¦n quir+¦rgicos. Experto en explotar debilidades ajenas." }, "angelInfo": { "nombre": "Cognac", "imagen": "https://lh3.googleusercontent.com/d/16UXe9tFsyC_hswuCP5uzSt9ymB4AYeup", "descripcion": "+üngel de aspecto joven y actitud juguetona.", "funcion": "Asistir a Quitela y mantener registros precisos del equilibrio universal." }, "kaioshin": [ { "nombre": "Kuru", "imagen": "https://lh3.googleusercontent.com/d/14tDD3ZhLSWDy_GaHMBRg8aa919I1-nnt", "descripcion": "Supremo Kaioshin del Universo 4, menudo y de movimientos r+ípidos.", "rol": "Crear y supervisar las formas de vida ingeniosas del universo." } ] },
        { "id": 5, "dios": "Arack", "angel": "Cukatail", "imagen": "https://lh3.googleusercontent.com/d/1-_MbEVE8-a6kuueqetRtroefDZJsAHe1", "highlight": false, "descripcion": "Un universo equilibrado donde la fuerza y la sabidur+¡a coexisten en armon+¡a.", "diosInfo": { "nombre": "Arack", "imagen": "https://lh3.googleusercontent.com/d/1NB1iQBi6PkBdFa_O0LTRxp79wJJXxDLk", "descripcion": "Un Dios de la Destrucci+¦n de gran tama+¦o y fuerza colosal, de car+ícter tranquilo pero implacable.", "habilidades": "Poder destructivo masivo con capacidad de afectar +íreas extensas. Su presencia impone respeto." }, "angelInfo": { "nombre": "Cukatail", "imagen": "https://lh3.googleusercontent.com/d/125EzCjv11UH9rZppGpwXKSqkk7rzaRLu", "descripcion": "+üngel de personalidad en+®rgica y entusiasta.", "funcion": "Entrenar a Arack y asegurar que la destrucci+¦n se realice con precisi+¦n milim+®trica." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 5", "imagen": "https://lh3.googleusercontent.com/d/1egvDEW-FSGAcbBdRj-nMs_v-RAi5u8fe", "descripcion": "Supremo Kaioshin de sabidur+¡a profunda.", "rol": "Mantener la creaci+¦n y el desarrollo evolutivo del universo." } ] },
        { "id": 6, "dios": "Champa", "angel": "Vados", "imagen": "https://lh3.googleusercontent.com/d/1lqhTIUnlMIZjDivbNi9YsloEvUVOdb-x", "highlight": false, "descripcion": "Universo gemelo del 7, regido por el Dios de la Destrucci+¦n Champa, rival de Beerus.", "diosInfo": { "nombre": "Champa", "imagen": "https://lh3.googleusercontent.com/d/1YWVReR-B0_KqDN2XUM5g-5rZOooZQuEY", "descripcion": "Hermano gemelo de Beerus, igual de poderoso pero m+ís glot+¦n y perezoso. Su rivalidad con Beerus es legendaria.", "habilidades": "Poder de destrucci+¦n equiparable a Beerus. Hakai avanzado y combate cuerpo a cuerpo devastador." }, "angelInfo": { "nombre": "Vados", "imagen": "https://lh3.googleusercontent.com/d/1d5W0pzIpOKXWUDN1r11JDRbM8FeNtHln", "descripcion": "+üngel del Universo 6 y hermana mayor de Whis. La m+ís poderosa entre los +íngeles conocidos.", "funcion": "Entrenar a Champa y supervisar el equilibrio del Universo 6. Es la consejera principal del Dios de la Destrucci+¦n." }, "kaioshin": [ { "nombre": "Fuwa", "imagen": "https://lh3.googleusercontent.com/d/15O4J042dgWEru0pa9gB4Xr7fa0almkt0", "descripcion": "Anciano Supremo Kaioshin del Universo 6, de complexi+¦n grande y car+ícter afable.", "rol": "Supervisar la creaci+¦n divina en el universo gemelo." } ] },
        { "id": 7, "dios": "Beerus", "angel": "Whis", "imagen": "https://lh3.googleusercontent.com/d/19HNd0a-KPgrjzWKovmRsxJf8wlZUtnIQ", "highlight": true, "descripcion": "El universo principal de la serie, hogar de Goku y los Guerreros Z. El m+ís relevante del multiverso.", "diosInfo": { "nombre": "Beerus", "imagen": "https://lh3.googleusercontent.com/d/1_sboPUI8XqpZFzjoWX2qoPeloe7piH_M", "descripcion": "El Dios de la Destrucci+¦n del Universo 7. Temido por todos, despierta cada milenios para destruir civilizaciones. Su poder es casi absoluto.", "habilidades": "Hakai (destrucci+¦n divina), combate cuerpo a cuerpo supremo, resistencia sobrehumana, capacidad de destruir planetas enteros con un dedo." }, "angelInfo": { "nombre": "Whis", "imagen": "https://lh3.googleusercontent.com/d/1mttxv2hfSK4bojUS10g9So5i-6JD84vI", "descripcion": "+üngel del Universo 7 e instructor de Beerus. Es el ser m+ís poderoso del universo, capaz de manipular el tiempo.", "funcion": "Entrenar a Beerus y a los guerreros del Universo 7. Tambi+®n es el maestro de Goku y Vegeta en las t+®cnicas divinas." }, "kaioshin": [ { "nombre": "Shin (Kaioshin del Este)", "imagen": "https://lh3.googleusercontent.com/d/102ZwV5gyTk9LJOlCB3FdaFzXXpa0J1Lu", "descripcion": "El Supremo Kaioshin actual del Universo 7. Originalmente era el Kaioshin del Este antes de la muerte de sus compa+¦eros.", "rol": "Supervisar la creaci+¦n de vida y el desarrollo de los planetas del universo." }, { "nombre": "Kibito", "imagen": "", "descripcion": "Asistente y guardaespaldas del Supremo Kaioshin Shin.", "rol": "Proteger al Kaioshin y asistir en sus labores divinas." }, { "nombre": "Anciano Kaioshin (Old Kai)", "imagen": "https://lh3.googleusercontent.com/d/11FZGuXeWJYpkujg4sx5cjjuRc1k7LBpt", "descripcion": "El Supremo Kaioshin anterior, liberado por Gohan de la Espada Z. Posee conocimiento milenario.", "rol": "Consejero divino con habilidades m+¡sticas como despertar el potencial oculto." } ] },
        { "id": 8, "dios": "Liquiir", "angel": "Korn", "imagen": "https://lh3.googleusercontent.com/d/12-NT_WEHchwAAT8ib2_UB-IvqgcMQ4F6", "highlight": false, "descripcion": "Un universo pac+¡fico y tranquilo, donde los mortales viven en armon+¡a sin grandes conflictos.", "diosInfo": { "nombre": "Liquiir", "imagen": "https://lh3.googleusercontent.com/d/1TkftUIpnJCf2fG3Urtct2MHuyGRLeGbJ", "descripcion": "Un Dios de la Destrucci+¦n de aspecto amigable y relajado, poco dado a la destrucci+¦n innecesaria.", "habilidades": "Destrucci+¦n precisa y controlada. Prefiere la negociaci+¦n sobre la aniquilaci+¦n." }, "angelInfo": { "nombre": "Korn", "imagen": "https://lh3.googleusercontent.com/d/1hyn6ZAFcjQ0TilxQwYvFi0uDZuIMV3y9", "descripcion": "+üngel de personalidad tranquila y serena.", "funcion": "Asistir a Liquiir y mantener el equilibrio en el universo m+ís pac+¡fico." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 8", "imagen": "https://lh3.googleusercontent.com/d/1fE695ikOOCLeDifY8bYhvvVAaZ_A4BBT", "descripcion": "Supremo Kaioshin de car+ícter sereno.", "rol": "Guiar el desarrollo espiritual y creativo del universo." } ] },
        { "id": 9, "dios": "Sidra", "angel": "Mohito", "imagen": "https://lh3.googleusercontent.com/d/1HhuXuyWfXkNnkNPXgzdxStlhVOHh8T6C", "highlight": false, "descripcion": "Un universo de seres cobardes y d+®biles, donde la fuerza bruta brilla por su ausencia.", "diosInfo": { "nombre": "Sidra", "imagen": "https://lh3.googleusercontent.com/d/1DNxjNwuk4DpHlvaU2G-JH1vZqX-GJuq4", "descripcion": "Un Dios de la Destrucci+¦n indeciso y temeroso, que duda antes de destruir. F+ícil de intimidar.", "habilidades": "Su Hakai es inestable y lento. Depende en gran medida de su +íngel para tomar decisiones." }, "angelInfo": { "nombre": "Mohito", "imagen": "https://lh3.googleusercontent.com/d/1wVeo_49E4vQiINypUDeWtkXa-FvT-mtQ", "descripcion": "+üngel de personalidad burlona y sarc+ística, siempre con una sonrisa.", "funcion": "Compensar la debilidad de Sidra con su astucia y conocimientos divinos." }, "kaioshin": [ { "nombre": "Roh", "imagen": "https://lh3.googleusercontent.com/d/1lkmDHh05i_o4Ok4rUphDcF6dZkAZdDvK", "descripcion": "Supremo Kaioshin del Universo 9, de aspecto anciano y voz temblorosa.", "rol": "Intentar mantener el orden en un universo ca+¦tico y desorganizado." } ] },
        { "id": 10, "dios": "Rumsshi", "angel": "Kusu", "imagen": "https://lh3.googleusercontent.com/d/1gMgYYYuBATbgtKuWggJdkyaAP9ns-8Di", "highlight": false, "descripcion": "Un universo alegre y juguet+¦n, donde los mortales disfrutan de la vida sin preocupaciones.", "diosInfo": { "nombre": "Rumsshi", "imagen": "https://lh3.googleusercontent.com/d/1RuChn5ivHhZ1aaEeFd8Jg_KXD5heWgha", "descripcion": "Un Dios de la Destrucci+¦n exc+®ntrico y bullicioso, que r+¡e y juega mientras destruye.", "habilidades": "Destrucci+¦n ca+¦tica e impredecible. Su estilo de lucha es tan err+ítico como efectivo." }, "angelInfo": { "nombre": "Kusu", "imagen": "https://lh3.googleusercontent.com/d/13N5yQbKaUBOgKGH7FNMsRvAgIgtmA3eF", "descripcion": "+üngel de aspecto joven y actitud vivaz.", "funcion": "Canalizar la energ+¡a ca+¦tica de Rumsshi y mantener un m+¡nimo de orden divino." }, "kaioshin": [ { "nombre": "Gowasu", "imagen": "https://lh3.googleusercontent.com/d/1diP_-h4lPkwih3s7w6_QGiKkHspjSAiw", "descripcion": "Supremo Kaioshin del Universo 10, de aspecto calvo y car+ícter doctrinal.", "rol": "Supervisar la creaci+¦n y ense+¦ar los valores divinos a los mortales." }, { "nombre": "Zamasu", "imagen": "", "descripcion": "Kaioshin aprendiz del Universo 10, alumno de Gowasu. M+ís tarde se convertir+¡a en una amenaza multiversal.", "rol": "Aprendiz de Kaioshin, destinado a convertirse en Supremo Kaioshin." } ] },
        { "id": 11, "dios": "Belmod", "angel": "Marcarita", "imagen": "https://lh3.googleusercontent.com/d/1rACaukY7B-9BSbczOCoYtRiR-Q_ZlQ29", "highlight": false, "descripcion": "El universo de la justicia y los h+®roes, hogar del glorioso Ej+®rcito de la Justicia.", "diosInfo": { "nombre": "Belmod", "imagen": "https://lh3.googleusercontent.com/d/1EyJBTOcA8ZWqLlaInzOS7-thAwCsc1N4", "descripcion": "Un Dios de la Destrucci+¦n payasesco pero letal, rival de Beerus. Oculto tras su apariencia c+¦mica hay un poder inmenso.", "habilidades": "Agilidad sobrehumana, capacidad de estirar su cuerpo y ataques de destrucci+¦n impredecibles." }, "angelInfo": { "nombre": "Marcarita", "imagen": "https://lh3.googleusercontent.com/d/1lMWLiq07mKSd6gj9zDnjKC0buzMvxntc", "descripcion": "+üngel del Universo 11, maternal y elegante.", "funcion": "Guiar a Belmod y supervisar al Ej+®rcito de la Justicia, especialmente a Jiren." }, "kaioshin": [ { "nombre": "Khai", "imagen": "https://lh3.googleusercontent.com/d/1IVwJkUSwbE23VCIs4FvpgPwEw_yhu6RG", "descripcion": "Supremo Kaioshin del Universo 11, devoto de la justicia y la moral.", "rol": "Crear h+®roes y guiar espiritualmente a los guerreros de la justicia." } ] },
        { "id": 12, "dios": "Giin", "angel": "Martinu", "imagen": "https://lh3.googleusercontent.com/d/11fisFAdPQDvDl3kOldRr9wGB7Xqdvkof", "highlight": false, "descripcion": "El universo m+ís perfecto del multiverso, con el nivel mortal m+ís alto junto al Universo 1.", "diosInfo": { "nombre": "Giin", "imagen": "https://lh3.googleusercontent.com/d/1tzm1trweWEMzTEw0DfQOGQlqGUq7gnRP", "descripcion": "Un Dios de la Destrucci+¦n de aspecto felino, orgulloso de la perfecci+¦n de su universo.", "habilidades": "Destrucci+¦n calculada y milim+®trica. Su precisi+¦n es considerada la mejor entre los dioses." }, "angelInfo": { "nombre": "Martinu", "imagen": "https://lh3.googleusercontent.com/d/127gejS-9GrLQT2aY4HftcgvOG7E97WGk", "descripcion": "+üngel de modales refinados y aspecto elegante.", "funcion": "Mantener el est+índar de perfecci+¦n del universo y asistir a Giin en sus deberes destructivos." }, "kaioshin": [ { "nombre": "Kaioshin del Universo 12", "imagen": "https://lh3.googleusercontent.com/d/1StOdkm_J_Du4qsyvs1omX_fyxdNkokoQ", "descripcion": "Supremo Kaioshin de sabidur+¡a inigualable.", "rol": "Mantener la creaci+¦n perfecta y el equilibrio supremo del universo." } ] }
    ],
    "biomas": [
        { "nombre": "Corporaci+¦n C+ípsula", "clima": "Urbano", "descripcion": "Centro tecnol+¦gico de West City." },
        { "nombre": "Monta+¦a Paozu", "clima": "Monta+¦oso", "descripcion": "Hogar de la infancia de Goku." },
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
        "titulo": "Mi Coraz+¦n Encantado",
        "artista": "Aar+¦n Montalvo",
        "categoria": "Opening",
        "cover": "https://img.youtube.com/vi/k5n1d88Cq1w/mqdefault.jpg",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        "id": 3,
        "titulo": "Limit Break x Survivor",
        "artista": "Adri+ín Barba",
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
        "titulo": "+üngeles Fuimos",
        "artista": "Adri+ín Barba",
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
