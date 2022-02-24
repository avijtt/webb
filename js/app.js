function mynavigation() {
    var mynav = document.getElementById('topnav');
    if (mynav.className == 'nav') {
        mynav.className += ' responsive';
    }
    else {
        mynav.className = 'nav';
    }
}
function validate() {
    var name, email, msg;
    name = document.getElementById('myname').value;
    email = document.getElementById('myemail').value;
    msg = document.getElementById('mymsg').value;

    if (name == '' || email == '' || msg == '') {
        if (name == '') {
            document.getElementById('nameErr').innerHTML = 'name is required';
        }
        if (email == '') {
            document.getElementById('emailErr').innerHTML = 'email is required';
        }
        if (msg == '') {
            document.getElementById('msgErr').innerHTML = 'message is required';
        }
        return false;
    }
    else {
        return true;
    }
}