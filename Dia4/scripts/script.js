//###########################################-
//################ QUIZ #####################-
//###########################################-


//Diccionarios

let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

let chefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];


let hamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
];

let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];
let booleano = true;

alert('Binvenido La cafetería de Campuslands');
while (booleano) {
    let menuprincipal = prompt(`===============================
        Bienvenido al menu principal
        ===============================
        Seleccione el apartado que quiere gestionar
        1.Categorias de hamburguesas
        2.Chefs
        3.Hamburguesas
        4.Ingredientes
        5.Consultas opcionales
        6.Salir de Cafeteria Campuslands
        `);

    if (menuprincipal === '1') {
        let menucategorias = prompt(`===============================
                Menu de  categorías de hamburguesas
                ===============================
                Seleccione una opción:
                1.Registrar nueva categoría
                2.Listar categorías
                3.Eliminar categoría
                4.Modificar categoría
                5.Salir
                `);

        if (menucategorias === '1') {
            alert('Registrar nueva categoria');
            let nombre = prompt('Escriba el nombre de la categoria que quiera agregar: ');
            let descripcion = prompt('Escriba la descripcion de la nueva categoria');

            categorias.push({
                "nombre": nombre,
                "descripcion": descripcion,
            })

        } else if (menucategorias === '2') {
            alert('Listar cataegorias');
            let largo = categorias.length;
            for (let i = 0; i < largo; i++) {
                alert(
                    "categorias# " + (i + 1) + "\n" +
                    "nombre: " + categorias[i]["nombre"] + "\n" +
                    "descripcion: " + categorias[i]["descripcion"]
                )
            }
        } else if (menucategorias === '3') {
            alert('Eliminar categoria');
            let largo = categorias.length;
            for (let i = 0; i < largo; i++) {
                alert(
                    "categorias# " + (i + 1) + "\n" +
                    "nombre: " + categorias[i]["nombre"] + "\n" +
                    "descripcion: " + categorias[i]["descripcion"]
                )
            }
            let eliminar = prompt('Ingrese el id de la categoria que quiera eliminar');
            categorias.splice(eliminar - 1, 1);
        }

    } else if (menucategorias === '4') {
        alert('Modificar categoria')
            let largo = categorias.length;
            for (let i = 0; i < largo; i++) {
                alert(
                    "categorias# " + (i + 1) + "\n" +
                    "nombre: " + categorias[i]["nombre"] + "\n" +
                    "descripcion: " + categorias[i]["descripcion"]
                )
            }

    } else if (menucategorias === '5') {
        booleano = false;
    };
};








//Desarrollado por: Maria Alejandra Gomez Archila - cc.1005234916