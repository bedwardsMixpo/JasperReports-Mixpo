var LinkButton=Class.create({initialize:function(e,s,t,i){this.id=e,this.element=$(e),this.disabled=!1,this.defaultClassName=s,this.hoverClassName=t,this.disabledClassName=i,this.element.className=s;var l=this;this.element.observe("click",function(e){return l.disabled||l.onclick(e),!1}),this.element.observe("mouseout",function(e){l.element.className=l.disabled?i:s}),this.element.observe("mouseover",function(e){l.element.className=l.disabled?i:t})},getElement:function(){return this.element},setDisabled:function(e){this.disabled=e,this.element.className=this.disabled?this.disabledClassName:this.defaultClassName},onclick:function(e){}}),InputButton=Class.create({initialize:function(e,s,t,i,l){this.id=e,this.element=$(e),this.disabled=!1,this.defaultClassName=s,this.hoverClassName=t,this.downClassName=i,this.disabledClassName=l,this.element.className=s;var a=this;this.element.observe("click",function(e){a.disabled||a.onclick(e)}),this.element.observe("mouseout",function(e){a.element.className=a.disabled?l:s}),this.element.observe("mouseover",function(e){a.element.className=a.disabled?l:t}),this.element.observe("mousedown",function(e){a.element.className=a.disabled?l:i}),this.element.observe("mouseup",function(e){a.element.className=a.disabled?l:t})},getElement:function(){return this.element},setDisabled:function(e){this.disabled=e,this.element.className=this.disabled?this.disabledClassName:this.defaultClassName},onclick:function(e){}}),ImageButton=Class.create({initialize:function(e,s,t,i,l,a,n,m,d){this.id=e,this.element=$(e),this.disabled=!1,this.defaultClassName=s,this.hoverClassName=t,this.downClassName=i,this.disabledClassName=l,this.defaultImg=a,this.hoverImg=n,this.downImg=m,this.disabledImg=d,this.element.className=s;var o=this;this.element.observe("click",function(e){return o.disabled||o.onclick(e),!1}),this.element.observe("mouseout",function(e){o.element.className=o.disabled?l:s,o.element.src=o.disabled?d:a}),this.element.observe("mouseover",function(e){o.element.className=o.disabled?l:t,o.element.src=o.disabled?d:n}),this.element.observe("mousedown",function(e){o.element.className=o.disabled?l:i,o.element.src=o.disabled?d:m}),this.element.observe("mouseup",function(e){o.element.className=o.disabled?l:t,o.element.src=o.disabled?d:n})},getElement:function(){return this.element},setDisabled:function(e){this.disabled=e,this.element.className=this.disabled?this.disabledClassName:this.defaultClassName,this.element.src=this.disabled?this.disabledImg:this.defaultImg},onclick:function(e){}}),DivButton=Class.create({initialize:function(e,s,t,i,l){this.id=e,this.element=$(e),this.disabled=!1,this.defaultClassName=s,this.hoverClassName=t,this.downClassName=i,this.disabledClassName=l,this.element.className=s;var a=this;this.element.observe("click",function(e){return a.disabled||a.onclick(e),!1}),this.element.observe("mouseout",function(e){a.element.className=a.disabled?l:s}),this.element.observe("mouseover",function(e){a.element.className=a.disabled?l:t}),this.element.observe("mousedown",function(e){a.element.className=a.disabled?l:i}),this.element.observe("mouseup",function(e){a.element.className=a.disabled?l:t})},getElement:function(){return this.element},setDisabled:function(e){this.disabled=e,this.element.className=this.disabled?this.disabledClassName:this.defaultClassName},onclick:function(e){}});