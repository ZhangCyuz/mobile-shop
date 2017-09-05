var searchText = $.getQueryString('search_text');
console.log(searchText);
var oSearchText = document.getElementById('search-text');
oSearchText.value = searchText;
searchGoods();
//调用搜索商品接口
function searchGoods (){
  shop.api.searchGoods({
    "search_text": searchText,
    "page": 1,
    "pagesize": 10,
    "callback": function(response) {
      console.log(response);
      var html = "";
      for (var i = 0; i < response.data.length; i++) {
        var obj = response.data[i];
        html += '<div class="search-a"><a href="detail.html?goods_id=' + obj.goods_id + '"><img src="' + obj.goods_thumb + '" /><div class="search-j"><i>' + obj.goods_name + '</i><br /><span> '+ '￥' + obj.price + '</span></div></a></div>';
      }
      document.getElementById('Att').innerHTML = html;
    }
  });
}
if (localStorage.getItem('token')) {
  $('#login1').html(localStorage.getItem('username'));
  // $('.head-nav-right').html('注销');
}
