    // var unit = document.querySelector('#unit');
    // var ul = document.querySelector('ul');
    // //得到导航条
    // var nav = document.querySelector('#goods-nav');
    // // 总宽度是多少
    // var alllength = unit.querySelectorAll('li').length * 60;
    // // 屏幕宽度
    // var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // // 左边最小的translateX的值
    // var min = alllength - windowWidth;
    // // 起点的位置
    // var deltaX;
    //
    // var nowx = 0;
    //
    // var movearr = [0,0];
    //
    // unit.addEventListener('touchstart', function(event) {
    //   event.preventDefault();
    //   movearr = [0,0];
    //
    //   ul.style.transition = 'none';
    //
    //   deltaX = event.touches[0].clientX - nowx;
    // }, false)
    //
    // unit.addEventListener('touchmove', function(event) {
    //   event.preventDefault();
    //
    //   nowx = event.touches[0].clientX - deltaX;
    //
    //   ul.style.transform = "translateX(" + nowx + 'px)';
    //   ul.style.webkitTransform = "translateX(" + nowx + 'px)';
    //   movearr.push(event.touches[0].clientX);
    // }, false)
    //
    // unit.addEventListener('touchend', function(event) {
    //   event.preventDefault();
    //   var s = movearr[movearr.length - 1] - movearr[movearr.length - 2];
    //   var targetx = nowx + s * 3;
    //   if (targetx < -min) {
    //     targetx = -min;
    //     ul.style.transition = 'all 0.6s cubic-bezier(0.15, 0.85, 0.15, 2.08) 0s';
    //   } else if (targetx > 0) {
    //     targetx = 0;
    //     ul.style.transition = 'all 0.6s cubic-bezier(0.15, 0.85, 0.15, 2.08) 0s';
    //   } else {
    //     ul.style.transition = 'all 0.6s cubic-bezier(0.15, 0.85, 0.15, 2.08) 0s';
    //   }
    //   ul.style.transform = "translateX(" + targetx + 'px)';
    //   ul.style.webkitTransform = "translateX(" + targetx + 'px)';
    // })




    var cat_id = $.getQueryString('cat_id');
    	 shop.api.fetchGoodsListByCatId(cat_id, function(response) {
    					if (response.data.length === 0) {
    			      var oH1 = document.createElement('h1');
    			      oH1.innerText = "当前分类下面没有商品";
    			      goods.appendChild(oH1);
    			      return;
    			    }
              //处理返回的数据
    					for (var i = 0; i < response.data.length; i++) {
    						var obj = response.data[i];
    						var oLs = document.createElement('li');
    						var oA = document.createElement('a');
    						oA.className = 'oA';
    						oA.href = "detail.html?goods_id=" + obj.goods_id;
    						var text = document.createElement("p");
    						var price = document.createElement("a");
    						text.innerText = obj.goods_name;
    						price.innerText = "￥" + '' +obj.price;
    						var oImgs = document.createElement("img");
    						oImgs.src = obj.goods_thumb;
    						goods.appendChild(oA);
    						oA.appendChild(oLs);
    						oLs.appendChild(oImgs);
    						oLs.appendChild(text);
    						oLs.appendChild(price);
    					}
          });
    			if (localStorage.getItem('token')) {
    				$('#login1').html(localStorage.getItem('username'));
    				// $('.head-nav-right').html('注销');
    			}
