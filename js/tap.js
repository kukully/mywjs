var itcast={
	tab:function(dom,callback){;
		if(dom||typeof dom != "object"){
			console.log('请输入正确的dom对象')
			return
		}
		var startX,startY,st
		dom.addEventListener('touchstart',function(e){
			st=Date.now()
			if(e.targetTouches.length>1){
				return
			}
		 startX=e.targetTouches[0].clientX
		 startY=e.targetTouches[0].clientY
		 
		})
		dom.addEventListener('touchend',function(e){
			if(Date.now()-st>200){
				return
			}
			var endX=e.changedTouches[0].clientX-startX
			var endY=e.changedTouches[0].clientY-startY
			if(Math.abs(endX)>6||Math.abs(endY)>6){
				return
			}
			callback && callback(e)
		})

	}
}