$(function(){
      	$('input[name="username"]').focus(function() {
      		if ($('input[name="username"]').val() == "") {
      			$('#user-tip1').html("");
      			$('#user-tip1').html("用户名建议是字母+数字");
      		}
      	});
      	$('input[name="username"]').blur(function() {
      		var username = $('input[name="username"]').val();
          var password = $('input[name="password"]').val();
          $.ajax({
   	            "url":"http://h6.duchengjiu.top/shop/api_user.php",
   	            "type": "POST",
   	            "dataType": "json",
   	            "data": {
   	              "status": "check",
   	              "username": username,
   	              "password": password
   	            },
   	            "success": function(response) {
   	            $('#user-tip1').html("");
         		    $('#user-tip1').html("" + response.message );
   	            }
   	          });
            });
        $('input[name="password"]').focus(function() {
        		if ($('input[name="password"]').val() == "") {
        			$('#user-tip2').html("");
        			$('#user-tip2').html("密码位数在6~20之间");
        		}
        	});
        $('input[name="password"]').blur(function() {
        		var username = $('input[name="username"]').val();
            var password = $('input[name="password"]').val();
	     $.ajax({
	            "url":"http://h6.duchengjiu.top/shop/api_user.php",
	            "type": "POST",
	            "dataType": "json",
	            "data": {
	              "status": "check",
	              "username": username,
	              "password": password
	            },
	            "success": function(response){
              $('#user-tip2').html("");
              $('#user-tip2').html(""+'密码可用');
	            }
	          });
            $('input[name="password1"]').focus(function() {
            		if ($('input[name="password1"]').val() == "" ) {
            			$('#user-tip3').html("密码不相同,请重新输入");
            		}else if ($('input[name="password1"]').val() == $('input[name="password"]').val() ) {
            			$('#user-tip3').html("密码相同,请继续");
                }
            	});
            $('input[name="password1"]').blur(function() {
            		var username = $('input[name="username"]').val();
                var password = $('input[name="password1"]').val();
                if($('input[name="password1"]').val() !== $('input[name="password"]').val()){
                  $('#user-tip3').html("密码不相同,请重新输入");
                }else if ($('input[name="password1"]').val() == $('input[name="password"]').val() ) {
            			$('#user-tip3').html("密码相同,请继续");
                }
              });
      		});
  //点击注册按钮
  $('#register').click(function() {
    //获得用户名和密码

    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    var password1 = $('input[name="password1"]').val();
    if (username.length < 6) {
      alert("用户名过短");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      alert("密码长度在6~20位之间");
      return;
    }
    $.ajax({
      "url": "http://h6.duchengjiu.top/shop/api_user.php",
      "type": "POST",
      "dataType": "json",
      "data": {
        "status": "register",
        "username": username,
        "password": password
      },
      "success": function(response) {
        if (response.code == 0) {
          alert("注册成功");
          var timer = setInterval(go, 1000);
          var x = 0;
          function go(){
            x--;
            if (x <= 0){
              location.href='login.html';
            }else{
              console.log(x);
            }
          }
        }
        console.log(response);
      }
    })
  });
})
