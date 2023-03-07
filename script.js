// HTML

// Form
var form = element("form", "form", "form", "form")
// Inputs
var NameInput = element("NameInput", "input", "Name", "input")
var MailInput = element("MailInput", "input", "Mail", "input")
//radios
var IDGSRadio = element("IDGSRadio", "input", "IDGS", "radio")
var IEVNDRadio = element("IEVNDRadio", "input", "IEVND", "radio")
var IMRadio = element("IMRadio", "input", "IM", "radio")
// checkbox
var MusicBox = element("MusicBox", "input", "Music", "checkbox");
var SportsBox = element("SportsBox", "input", "Sports", "checkbox")
var SeriesBox = element("SeriesBox", "input", "Series", "checkbox")
var MoviesBox = element("MoviesBox", "input", "Movies", "checkbox")

// view
// Inputs
var ViewNameInput = element("ViewNameInput", "input", "ViewName", "input")
var ViewMailInput = element("ViewMailInput", "input", "ViewMail", "input")
//radios
var ViewIDGSRadio = element("ViewIDGSRadio", "input", "ViewIDGS", "radio")
var ViewIEVNDRadio = element("ViewIEVNDRadio", "input", "ViewIEVND", "radio")
var ViewIMRadio = element("ViewIMRadio", "input", "ViewIM", "radio")
// checkbox
var ViewMusicBox = element("ViewMusicBox", "input", "ViewMusic", "checkbox");
var ViewSportsBox = element("ViewSportsBox", "input", "ViewSports", "checkbox")
var ViewSeriesBox = element("ViewSeriesBox", "input", "ViewSeries", "checkbox")
var ViewMoviesBox = element("ViewMoviesBox", "input", "ViewMovies", "checkbox")
// botones
var ClearButton = element("ClearButton", "button", "ClearButton", "button")
var SendButton = element("SendButton", "button", "SendButton", "button")
var PreviousButton = element("PreviousButton", "button", "PreviousButton", "button")
var NextButton = element("NextButton", "button", "NextButton", "button")

// posicion
var posicion = element("posicion", "input","posicion","input")
var total = element("total",  "input","total","input")
var total2 = element("total2",  "input","total2","input")
posicion.style.width = "75px";
posicion.style.height = "35px";
total2.style.width = "75px";
total2.style.height = "35px";

total.style.width = "75px";
total.style.height = "35px";
posicion.disabled = true;
total.disabled = true;
total2.disabled = true;

var formularios = []

// form
var FormContainer = document.createElement("div");
FormContainer.style.margin = "200px";


form.appendChild(labels("NameInput", "Nombre"));
FormBR();
form.appendChild(NameInput);
FormBR();
form.appendChild(labels("MailInput", "Correo electrónico"));
FormBR();
form.appendChild(MailInput);
FormBR();
form.appendChild(labels("", "En que carrera estas inscrito?"));
FormBR();
form.appendChild(labels("IDGSRadio", "IDGS"));
form.appendChild(IDGSRadio);
FormBR();
form.appendChild(labels("IEVNDRadio", "IEVND"));
form.appendChild(IEVNDRadio);
FormBR();
form.appendChild(labels("IMRadio", "IM"));
form.appendChild(IMRadio);
FormBR();
form.appendChild(labels("", "Que te gusta hacer?"));
FormBR();
form.appendChild(labels("MusicBox", "Música"));
form.appendChild(MusicBox);
FormBR();
form.appendChild(labels("SportsBox", "Deportes"));
form.appendChild(SportsBox);
FormBR();
form.appendChild(labels("SeriesBox", "Series"));
form.appendChild(SeriesBox);
FormBR();
form.appendChild(labels("MoviesBox", "Películas"));
form.appendChild(MoviesBox);
FormBR();
form.appendChild(total2)
FormBR();
FormBR();

var Clear = document.createTextNode("Limpiar");
ClearButton.appendChild(Clear);
form.appendChild(ClearButton);
var Enviar = document.createTextNode("Enviar");
SendButton.appendChild(Enviar);
form.appendChild(SendButton);





// view
var view = document.createElement("div");
view.style.margin = "200px";

view.appendChild(labels("ViewNameInput", "Nombre"));
ViewBR();
view.appendChild(ViewNameInput);
ViewBR();
view.appendChild(labels("ViewMailInput", "Correo electrónico"));
ViewBR();
view.appendChild(ViewMailInput);
ViewBR();
view.appendChild(labels("", "En que carrera estas inscrito?"));
ViewBR();
view.appendChild(labels("ViewIDGSRadio", "IDGS"));
view.appendChild(ViewIDGSRadio);
ViewBR();
view.appendChild(labels("ViewIEVNDRadio", "IEVND"));
view.appendChild(ViewIEVNDRadio);
ViewBR();
view.appendChild(labels("ViewIMRadio", "IM"));
view.appendChild(ViewIMRadio);
ViewBR();
view.appendChild(labels("", "Que te gusta hacer?"));
ViewBR();
view.appendChild(labels("ViewMusicBox", "Música"));
view.appendChild(ViewMusicBox);
ViewBR();
view.appendChild(labels("ViewSportsBox", "Deportes"));
view.appendChild(ViewSportsBox);
ViewBR();
view.appendChild(labels("ViewSeriesBox", "Series"));
view.appendChild(ViewSeriesBox);
ViewBR();
view.appendChild(labels("ViewMoviesBox", "Películas"));
view.appendChild(ViewMoviesBox);
ViewBR();
view.appendChild(posicion)
view.appendChild(labels("","/"))
view.appendChild(total)
ViewBR()
ViewBR()

var Anterior = document.createTextNode("Anterior");
PreviousButton.appendChild(Anterior);
view.appendChild(PreviousButton);
var Siguiente = document.createTextNode("Siguiente");
NextButton.appendChild(Siguiente);
view.appendChild(NextButton);

// body 
var body = document.getElementsByTagName("body")[0];
body.style.display = "flex";
body.style.flexDirection = "row";
body.style.alignItems = "center";

FormContainer.appendChild(form);
// FormContainer.appendChild(view);
body.appendChild(FormContainer);
body.appendChild(view);

// Funciones
function FormBR() {
    var br = document.createElement('br');
    form.appendChild(br);
}

function ViewBR() {
    var br = document.createElement('br');
    view.appendChild(br);
}

function labels(id, text) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = text;
    return label;
}

function element(Ename, Type, Id, Name) {
    var Ename = document.createElement(Type);
    Ename.setAttribute("id", Id);
    Ename.setAttribute("name", Name);
    Name === "radio" ? Ename.setAttribute("type", Name) : null;
    Name === "checkbox" ? Ename.setAttribute("type", Name) : null;
    return Ename;
}


// Eventos
form.addEventListener("submit", function (e) {
    e.preventDefault();
})


ClearButton.addEventListener("click", function () {
    NameInput.value = "";
    MailInput.value = "";
    IDGSRadio.checked = false;
    IEVNDRadio.checked = false;
    IMRadio.checked = false;
    MusicBox.checked = false;
    SportsBox.checked = false;
    SeriesBox.checked = false;
    MoviesBox.checked = false;
})

SendButton.addEventListener("click", function () {
    var form = {
        name: NameInput.value,
        mail: MailInput.value,
        carrera: IDGSRadio.checked ? "IDGS" : IEVNDRadio.checked ? "IEVND" : "IM",
        Hobbies: [MusicBox.checked ? "Música" : null, SportsBox.checked ? "Deportes" : null, SeriesBox.checked ? "Series" : null, MoviesBox.checked ? "Películas" : null]
}
    formularios.push(form);
    localStorage.setItem("formularios", JSON.stringify(formularios));
    NameInput.value = "";
    MailInput.value = "";
    IDGSRadio.checked = false;
    IEVNDRadio.checked = false;
    IMRadio.checked = false;
    MusicBox.checked = false;
    SportsBox.checked = false;
    SeriesBox.checked = false;
    MoviesBox.checked = false;
    TElements(i)

})

NextButton.addEventListener("click", function () {
    var formularios = JSON.parse(localStorage.getItem("formularios"));
    var i = 0;
    if (i < formularios.length) {
        ViewNameInput.value = formularios[i].name;
        ViewMailInput.value = formularios[i].mail;
        formularios[i].carrera === "IDGS" ? ViewIDGSRadio.checked = true : formularios[i].carrera === "IEVND" ? ViewIEVNDRadio.checked = true : ViewIMRadio.checked = true;
        formularios[i].Hobbies[0] === "Música" ? ViewMusicBox.checked = true : ViewMoviesBox.checked = false;
        formularios[i].Hobbies[1] === "Deportes" ? ViewSportsBox.checked = true : ViewMoviesBox.checked = false;
        formularios[i].Hobbies[2] === "Series" ? ViewSeriesBox.checked = true : ViewMoviesBox.checked = false;
        formularios[i].Hobbies[3] === "Películas" ? ViewMoviesBox.checked = true : ViewMoviesBox.checked = false;
        i++;
    }
    TElements(i)
})

PreviousButton.addEventListener("click", function () {
    var formularios = JSON.parse(localStorage.getItem("formularios"));
    var i = formularios.length - 1;
    if (i >= 0) {
        ViewNameInput.value = formularios[i].name;
        ViewMailInput.value = formularios[i].mail;
        formularios[i].carrera === "IDGS" ? ViewIDGSRadio.checked = true : formularios[i].carrera === "IEVND" ? ViewIEVNDRadio.checked = true : ViewIMRadio.checked = true;
        formularios[i].Hobbies[0] === "Música" ? ViewMusicBox.checked = true : ViewMoviesBox.checked = false;
        formularios[i].Hobbies[1] === "Deportes" ? ViewSportsBox.checked = true : ViewMoviesBox.checked = false;
        formularios[i].Hobbies[2] === "Series" ? ViewSeriesBox.checked = true : ViewMoviesBox.checked = false;
        formularios[i].Hobbies[3] === "Películas" ? ViewMoviesBox.checked = true : ViewMoviesBox.checked = false;
        i--;
    }
    TElements(i)
})

function TElements (i){
    var formularios = JSON.parse(localStorage.getItem("formularios"));
    var elements = formularios.length 
    total.value = elements
    total2.value = elements
    elements == 1? posicion.value = 1 : posicion.value = i+1
    
}
