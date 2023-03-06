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

const profileR = `
<div class="sexi container" id="sexi">
<div id="profileContent" class="profileContent container">
        <div class="leftProfile container">
            <div class="profileInfo container">
                <img src="src/img/profile-photo.jpg">
                <h3>Nickname</h3>
                <h4>Library Colaborator</h4>    
            </div>
           

            <div class="container profileOptions">
                <div class="firstOpt">
                    <i class="fa-solid fa-book"></i>
                    <a href="#">Books</a>
                </div>
                <div class=" container secondOpt">
                    <i class="fa-solid fa-clock"></i>
                    <a href="#">Vigency</a>
                </div>
                <div class="container thirdOpt">
                    <i class="fa-solid fa-check"></i>
                    <a href="#">Recommendations</a>
                </div>
                <button href="mailto:50profe@correo.com" class="contactUs">Contact Us</button>
            </div>
        </div>

        <div class="rightProfile container">
            <h2>Books</h2>
            <div class="contentBooks container">
                <div class="books container">
                    <h3>El cuco de cristal</h3>

                    <img src="src/img/ElCucoDeCristal.gif">

                    <p>¿ESTÁS PREPARADO PARA ARRIESGAR TU CORAZÓN? Vuelve Javier Castillo MAGNÉTICA - SALVAJE - MONUMENTAL - TREPIDANTE El regreso más esperado MÁS DE 1.700.000 EJEMPLARES VENDIDOS Un trasplante de urgencia Un donante lleno de secretos¿Qué esconden los latidos de tu corazón</p>
                </div>
                <div class="books container">
                    <h3>Hijos de la fábula</h3>

                    <img src="src/img//HijosDeLaFabula.gif">
                    
                    <p>Dos jóvenes exaltados, Asier y Joseba, se marchan en 2011 al sur de Francia con la intención de convertirse en militantes de ETA. Esperan instrucciones en una granja de pollos, acogidos por una pareja francesa con la que apenas se entienden</p>
                </div>
            </div>
        </div>
    </div>
</div>
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
change(document.getElementById("home"),homeR);
// change(document.getElementById("works"),worksR);
change(document.getElementById("about"),aboutR);
change(document.getElementById("contact"),contactR);
change(document.getElementById("profile"),profileR);

