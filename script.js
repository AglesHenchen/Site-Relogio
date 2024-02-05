var hours = document.getElementById("hours")
var day = document.getElementById("day")
var data_complet = document.getElementById("data_complet")


function data() {
    
    var data = new Date()
    var hora = ("0" + data.getHours()).slice(-2)
    var minutes = ("0" + data.getMinutes()).slice(-2)
    var seconds = ("0" + data.getSeconds()).slice(-2)


    var dia = ("0" + data.getDate()).slice(-2)
    var month = ("0" + (data.getMonth() + 1)).slice(-2)
    var year = (data.getFullYear())
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Domingo"]
    

    hours.innerHTML = `${hora}:${minutes}:${seconds}`
    day.innerHTML = (semana[data.getDay()])
    data_complet.innerHTML = `${dia}/${month}/${year}`
    
    if (hora >= 6 && hora <= 12) {
        document.body.style.backgroundImage = "url('images/morning.jpg')"
    } else if (hora >= 13 && hora <= 17) {
       document.body.style.backgroundImage = "url('images/afternoon.jpg')"
    } else if (hora >= 18 && hora <= 19) {
        document.body.style.backgroundImage = "url('images/sunset.jpg')"
    } else {
        document.body.style.backgroundImage = "url('images/night.jpg')"
    }

    
}

setInterval(data, 1000);
