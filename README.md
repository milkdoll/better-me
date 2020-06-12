# better-me
1.页面跳转<br>
mui.openWindow({
					url: "add.html",//页面相对路径,
					extras: {
						userId: 12112 //传参数到页面
					}
				});
				//页面获取参数
				var userDetail = plus.webview.currentWebview();
				$('#detail_user').html("用户"+userDetail.userId);
			<br>
2.页面开启返回
mui.init({
				swipeBack: true //启用右滑关闭功能
			});
			
