
const homeR = `
    <div id="sexi">
        <div id="homeContent" class="homeContent container">
            <div class="content container">
                <img src="src/img/Jake_libro.png" height="400px">
                <div class="titleContent container">
                    <h1>Virtual<br>Library</h1>
                    <button class="btnTitle">Hire Us</button>
                </div>
            </div>
            <div class="options container">
                <a href="#0">
                    <h3>Acceso en línea</h3>
                    <p>Posibilidad de acceder a los recursos en línea desde cualquier lugar y en cualquier momento, siempre y cuando se tenga una conexión a Internet.</p>
                </a>
                
                <a href="#0">
                    <h3>Acceso para todos</h3>
                    <p>Acceso a materiales para una audiencia global, sin importar la ubicación física o la capacidad física de la persona para visitar una biblioteca en persona.</p>
                </a>
                
                <a href="#0">
                    <h3>Actualizaciones Regulares</h3>
                    <p>Actualizacion regular con nuevos recursos y tecnologías, lo que garantiza que los usuarios tengan acceso a los materiales más actualizados y relevantes.</p>
                </a>
            </div>
        </div>
    </div>
`

const worksR = `
<div class="sexi container" id="sexi">
    <div id="worksContent" class="worksContent container">
        
    </div>
</div>
`

const aboutR = `
<div class="sexi container" id="sexi">Hola2</div>
`

const contactR = `
<div class="sexi container" id="sexi">Hola3</div>
`

const hireUsR = `
<div class="sexi container" id="sexi">Hola4</div>
`

function render(documentHtml, innerHtml){
    documentHtml.innerHTML = innerHtml;
}

function change(documentHtml, contenedor){    
    documentHtml.addEventListener("click",()=>{    
        document.getElementById("sexi").remove();
        render(document.getElementById("right"),contenedor);
    })
}

render(document.getElementById("right"), homeR);
/*change(document.getElementById("home"),homeR);
change(document.getElementById("works"),worksR);
change(document.getElementById("about"),aboutR);
change(document.getElementById("contact"),contactR);
change(document.getElementById("hireUs"),hireUsR);

*/