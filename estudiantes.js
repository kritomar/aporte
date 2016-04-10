//
function printListEstudiantes(listaEstudiantes)
{
	var listHTML= '<ol>';
	for (var i=0; i < listaEstudiantes.length; i += 1)
	{
		listHTML += '<li>Nombre: '+ estudiante[0,i]+  '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}


//imprime la lista de estudiantes

function print(html)
{
	document.write(html);
}
//declaracion de arreglos y variables
var busqueda;
var datos=[];
var estudiante = [];
datos.push(["Nombre:  ","Genero:  ", "Edad:  ", "ArregloDeNOtas:  ","Ciudad:  ","LenguajeFavorito:  ","EstaTrabajando:  "])
estudiante.push(["thays","femenino",18,20,"santa_elena","html","si"]);
estudiante.push(["dillan","masculino",20,40,"santa_elena","php","no"]);
estudiante.push(["martha","femenino",58,80,"santa_elena","js","si"]);
estudiante.push(["carol","femenino",25,90,"santa_elena","paint","no"]);
estudiante.push(["elvira","femenino",34,70,"santa_elena","java","si"]);

//validación para busqueda de estudiante, salir o enlistar
while(true)
{
	
	busqueda= prompt("Ingrese el estudiante a buscar:");
	

	if(busqueda === "q")
	{
		break;
	}
	else if(busqueda ==="l")
	{
		printListEstudiantes(estudiante);
	}
	else 
	{
		var enlista = estudiante.indexOf(busqueda);
		if (enlista >= 0)
		{
			alert("estudiante encontrado");
		}

		else
		{
			alert("No existe el estudiante");
		}
	}
}


