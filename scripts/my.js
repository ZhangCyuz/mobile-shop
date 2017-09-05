var navisopen = false;
$('.menu').click(function() {
  if (navisopen) {
    $(".login-list").show();
  } else {
    $(".login-list").hide();
  }
  navisopen = !navisopen;
})
// $('.content').click(function(event) {
//   if (event.target.className === 'menu' || !navisopen) {
//     return;
//   }
//   $(".content").hide();
//     navisopen = false;
// })
if (localStorage.getItem('token')) {
  $('#login').html(localStorage.getItem('username'));
  // $('.head-nav-right').html('注销');
}
var logOut = document.getElementById("logout");
logOut.onclick = function(token) {
  if (localStorage.token) {
    localStorage.clear(token);
    console.log(1);
    location.href = "login.html";
  }
}
