/*Username Password Verificaiton*/
var user = document.querySelector('#username');
user.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (user.value.length == 0 || user.value.length < 5 ){
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    }else{
        user.style.border = '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})
var pass = document.querySelector('#password');
pass.addEventListener('keyup', function(){
    var u_times = document.querySelector('.p_times');
    var u_check = document.querySelector('.p_check');
    if (pass.value.length == 0 || pass.value.length < 5 ){
        pass.style.border = '1px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
        return false;
    }else{
        pass.style.border = '1px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';
    }
})
function validation(){
    if (user.value == 0 || user.value < 5 ){
        document.getElementById('erreur').innerHTML = 'Please Fill All The Fields';
        return false;
    } else if (pass.value == 0 || user.value < 8 ){
        document.getElementById('erreur').innerHTML = 'Please Fill All The Fields';
        return false;
    }
}


//loading
// window.onload = function() {
//     // hide loading wrapper and show map
//     document.querySelector(".loading-wrapper").style.display = "none";
//     document.querySelector(".map").style.display = "block";
//   };




const navCancel = document.getElementById("nav-cancel");
const navBurger = document.getElementById("nav-burger");
const nav = document.getElementById("nav");
    
navBurger.addEventListener("click", function(){
  navBurger.classList.toggle("is-active");
  navCancel.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
navCancel.addEventListener("click", function(){
  navBurger.classList.toggle("is-active");
  navCancel.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
