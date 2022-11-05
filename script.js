function formData(){
    var name= document.getElementById("name").value;
    document.getElementById('name-output').innerHTML = 'Customer Name: ' + name;
    var inDate= document.getElementById("in-date").value;
    document.getElementById('in-date-output').innerHTML = 'Check-in date: ' + inDate;
    var outDate= document.getElementById("out-date").value;
    document.getElementById('out-date-output').innerHTML = 'Check-out date: ' + outDate;
    var room= document.getElementById("room").value;
    document.getElementById('room-output').innerHTML = 'Room Type: ' + room;
    var ratePerDay;
    if (room == 'Normal') {
        ratePerDay = 2000;
    }
    else{
        ratePerDay = 4000;
    }
    document.getElementById('rate-per-day-output').innerHTML = 'Rate/day: ' + ratePerDay;
}