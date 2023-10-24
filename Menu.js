const request = new XMLHttpRequest();
const xmlFile = "Menu.xml";

function start() {
    request.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4) {
            menu(this.responseXML)
        }
    }
    request.open("GET", xmlFile, true)
    request.send()
}

function menu(xml) {
    var Primi = xml.querySelector('Primi');

    Primi.querySelectorAll('piatto').forEach(element => {
        var primo = element.querySelector('nome').textContent
        var pr1 = element.querySelector('prezzo').textContent
        document.getElementById('Primi').innerHTML += primo + "\n" + pr1 + "€ <br>";
    });

    var Secondi = xml.querySelector('Secondi');

    Secondi.querySelectorAll('piatto').forEach(element => {
        var secondo = element.querySelector('nome').textContent
        var pr2 = element.querySelector('prezzo').textContent
        document.getElementById('Secondi').innerHTML += secondo + "\n" + pr2 + "€ <br>";
    });

    var Contorni = xml.querySelector('Contorni');

    Contorni.querySelectorAll('piatto').forEach(element => {
        var contorno = element.querySelector('nome').textContent
        var pr3 = element.querySelector('prezzo').textContent
        document.getElementById('Contorni').innerHTML += contorno + "\n" + pr3 + "€ <br>";
    });

    var Dessert = xml.querySelector('Dessert');

    Dessert.querySelectorAll('piatto').forEach(element => {
        var des = element.querySelector('nome').textContent
        var pr4 = element.querySelector('prezzo').textContent
        document.getElementById('Dessert').innerHTML += des + "\n" + pr4 + "€ <br>";
    });
}