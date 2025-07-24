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
while (booleano === true) {
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
        let booleano = true;
        while (booleano === true) {
            let menucategorias = prompt(`===============================
                Menu de  categorías de hamburguesas - CATEGORIAS
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
                let num = prompt('Ingrese el numero de la categoria que quera editar');
                let nomb = prompt('Ingrese el nuevo nombre de la categoria');
                let descr = prompt ('Ingrese la descripcion de la nueva categoria');

                categorias[num -1]["nombre"]= nomb;
                categorias[num-1]["descripcion"]= descr;
            } else if (menucategorias === '5') {
                booleano = false;
            };
        };
    }
    if (menuprincipal === '2') {
        let booleano = true;
        while (booleano === true) {
            let menuchefs = prompt(`===============================
                Menu de  categorías de hamburguesas - CHEFS
                ===============================
                Seleccione una opción:
                1.Registrar nuevo chef
                2.Listar chefs
                3.Eliminar chefs
                4.Modificar chefs
                5.Salir
                `);

            if (menuchefs === '1') {
                alert('Registrar nuevo chef');
                let nombre = prompt('Escriba el nombre del chef que quiera agregar: ');
                let especialidad = prompt('Escriba la especialidad del chef');

                chefs.push({
                    "nombre": nombre,
                    "especialidad": especialidad,
                })

            } else if (menuchefs === '2') {
                alert('Listar chefs');
                let largo = chefs.length;
                for (let i = 0; i < largo; i++) {
                    alert(
                        "chefs# " + (i + 1) + "\n" +
                        "nombre: " + chefs[i]["nombre"] + "\n" +
                        "especialidad: " + chefs[i]["especialidad"]
                    )
                }
            } else if (menuchefs === '3') {
                alert('Eliminar chef');
                let largo = chefs.length;
                for (let i = 0; i < largo; i++) {
                    alert(
                        "chefs# " + (i + 1) + "\n" +
                        "nombre: " + chefs[i]["nombre"] + "\n" +
                        "especialidad: " + chefs[i]["especialidad"]
                    )
                }
                let eliminar = prompt('Ingrese el id del chef que quiera eliminar');
                chefs.splice(eliminar - 1, 1);

            } else if (menuchefs === '4') {
                alert('Modificar chef')
                let largo = chefs.length;
                for (let i = 0; i < largo; i++) {
                    alert(
                        "chefs# " + (i + 1) + "\n" +
                        "nombre: " + chefs[i]["nombre"] + "\n" +
                        "especialidad: " + chefs[i]["especialidad"]
                    )
                }
                let num = prompt('Ingrese el numero del chef que quera editar');
                let nomb = prompt('Ingrese el nuevo nombre del chef');
                let descr = prompt ('Ingrese la nueva especialidad del chef');

                chefs[num -1]["nombre"]= nomb;
                chefs[num-1]["especialidad"]= descr;
            } else if (menuchefs === '5') {
                booleano = false;
            };
        };
    };
}








//Desarrollado por: Maria Alejandra Gomez Archila - cc.1005234916