const xhr = new XMLHttpRequest();
xhr.open('GET', 'data/employees.json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let employees = JSON.parse(xhr.responseText);
        let statusHTML = '<ul class="bulleted">';
        for (let i=0; i<employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.send();

const xhrRooms = new XMLHttpRequest();
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.onreadystatechange = () => {
    if (xhrRooms.readyState === 4 && xhrRooms.status === 200) {
        let rooms = JSON.parse(xhrRooms.responseText);
        let statusHTML = '<ul class="rooms">';
        for (let i=0; i<rooms.length; i += 1) {
            if (rooms[i].available === true) {
                statusHTML += '<li class="empty">';
            } else {
                statusHTML += '<li class="full">';
            }
            statusHTML += rooms[i].room;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
};
xhrRooms.send();