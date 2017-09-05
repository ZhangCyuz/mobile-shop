var total = $.getQueryString('total');
$('#total').text('总计：'+total);
var address_id = 0;
//给地址栏加上一个点击事件
$('#address').click(function(event){
  console.log(event.target);
  if (event.target) {
    address_id = event.target.getAttribute('data-id');
  }
});

$(function(){
  $('#order').click(function(){
    if (address_id === 0) {
      alert('请选择地址后再下订单');
      return;
    }
    shop.api.addOrder(address_id, total, function(response){
      console.log(response);
      location.assign('orderPage.html');
    });
  });



//点击新增按钮显示新增表
  $("#addUserAddress").click(function(){
    $(".layer").show();
  });
  $(".layer h2 span").click(function(){
    $(".layer").hide();
  });
  $('#add').click(function(){
    var data = $("form").serialize();
    console.log(data);
    shop.api.addUserAddress(data, function(response){
      console.log(response);
      if (response.code === 0) {
        $('.layer').hide();
        fetchUserAddress();
      }
    });
  });
  fetchUserAddress();
  function fetchUserAddress() {
    shop.api.fetchUserAddress(function(response) {
      var html = "";
      for (var i = 0; i < response.data.length; i++) {
        var obj = response.data[i];
        html += '<div id="addressMy"><input type="checkbox" class="fl"/><div class="address-item" data-id="'+obj.address_id+'">'+'收货地址：'+ obj.address_name +' ' + obj.consignee + ' ' + obj.city + ' '+ obj.mobile +' </div></div>';
      }
      $('#address').html(html);
    });
  }
});
function remove() {
  $("#addressMy").remove();
}
