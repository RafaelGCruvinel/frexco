(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(16),a(17),a(18),a(19),a(2)),i=a(3),s=a(5),m=a(4),u=a(1),d=a(6),h=a(7),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={qtde:0,sum:0},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"get_total_price",value:function(){return console.log("get_total_price"),this.state.sum.toFixed(2)}},{key:"handleChange",value:function(e){var t;console.log("handleChange");var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=(this.state.qtde,a.name);console.log(r,n),"qtde"==r&&n<0&&(n=0),"qtde"==r&&(this.sum=n*this.props.info.price),this.setState((t={},Object(h.a)(t,r,n),Object(h.a)(t,"sum",this.sum),t)),this.props.onProductQuantityChange(this.props.info.name,{sum:this.sum,qtde:n})}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",{"data-th":"Product"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-2 hidden-xs",hidden:!0},r.a.createElement("img",{src:"http://placehold.it/100x100",alt:"...",class:"img-responsive"})),r.a.createElement("div",{class:"col-sm-10"},r.a.createElement("h4",{class:"nomargin"},this.props.info.name)))),r.a.createElement("td",{"data-th":"Unidade",hidden:!0},r.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect1"},r.a.createElement("option",null,"Ma\xe7o"))),r.a.createElement("td",{"data-th":"Price"},"R$ ",this.props.info.price.toFixed(2)),r.a.createElement("td",{"data-th":"Quantity"},r.a.createElement("input",{name:"qtde",type:"number",class:"form-control text-center",min:"0",value:this.state.qtde,onChange:this.handleChange})),r.a.createElement("td",{"data-th":"Subtotal",class:"text-center"},"R$ ",this.get_total_price()))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={soma:0,productValues:{},products:{},restaurantName:""},a.productList=[{name:"Morango ",price:20},{name:"Piment\xe3o amarelo",price:10},{name:"Piment\xe3o verde",price:7},{name:"Piment\xe3o vermelho",price:10},{name:"Salsa Industrial*",price:2.5},{name:"Tomate molho ",price:80},{name:"Tomate salada",price:42},{name:"Cebolinha*",price:.29},{name:"Cenoura G",price:25},{name:"Hortel\xe3",price:3},{name:"Lim\xe3o Tahiti",price:9.5},{name:"Manjeric\xe3o*",price:.3},{name:"Melancia ",price:22.95},{name:"Alface crespa",price:10.8},{name:"Cebola",price:10},{name:"Cebolinha*",price:.29},{name:"Hortel\xe3",price:3},{name:"Alface americana",price:11.7},{name:"Alface crespa",price:10.8},{name:"Alface roxa",price:0},{name:"Couve manteiga",price:7.2},{name:"R\xfacula",price:17.6},{name:"Agri\xe3o",price:9.4},{name:"Repolho Verde ",price:11.6},{name:"Repolho Roxo",price:0},{name:"Abobrinha",price:1.6},{name:"Beringela",price:6.6},{name:"Ab\xf3bora kabotcha ",price:0},{name:"Batata doce",price:6.5},{name:"Batata boneca",price:24},{name:"Cenoura",price:15},{name:"Cebola",price:8},{name:"Beterraba",price:10},{name:"Tomate Salada",price:29.4},{name:"Abacaxi",price:23.4},{name:"Laranja",price:28},{name:"Melancia ",price:1.35},{name:"Lim\xe3o Tahiti",price:7.6}],console.log(a.productList[0]),a.handleProductQuantityChange=a.handleProductQuantityChange.bind(Object(u.a)(a)),a.onChangeRestaurantName=a.onChangeRestaurantName.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onChangeRestaurantName",value:function(e){console.log("handleChange");var t=e.target.value;console.log(t),this.setState({restaurantName:t})}},{key:"handleProductQuantityChange",value:function(e,t){var a=t.sum,n=t.qtde;console.log("handleProductQuantityChange-",e,t);var r=Object.assign({},this.state.productValues);r[e]=a;var c=Object.assign({},this.state.products);c[e]=n,this.setState({soma:a,productValues:r,products:c})}},{key:"somaGeral",value:function(){var e=this.state.productValues;return Object.keys(e).reduce(function(t,a){return t+parseFloat(e[a]||0)},0).toFixed(2)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value}),console.log("mudou")}},{key:"handleSubmit",value:function(e){if(""!=this.state.restaurantName){var t=Object.assign({},this.state.products);t.Restaurante=this.state.restaurantName,t.Date=new Date,alert("Seu pedido \xe9: "+JSON.stringify(this.state.products)),console.log(t),fetch("https://frexco-ecdab.firebaseio.com/produtos.json",{method:"POST",body:JSON.stringify(t)}).then(function(e){e.ok?(alert("Tudo certo! :D"),console.log("Tudo certo!")):(alert("Ixi, algo deu errado.. verifique a internet e tente novamente."),console.log("Network response was not ok."),console.log(e))}).catch(function(e){console.log("There has been a problem with your fetch operation: "+e.message)}),e.preventDefault()}else alert("Prrencha o nome do Restaurante.")}},{key:"render_product_list",value:function(){var e=this;return this.productList.map(function(t){return r.a.createElement(p,{key:t.name,info:t,onProductQuantityChange:e.handleProductQuantityChange})})}},{key:"render",value:function(){var e=this.somaGeral();return r.a.createElement("p",{style:{alignItems:"center"}},r.a.createElement("div",{class:"container"},r.a.createElement("br",null),r.a.createElement("strong",null,"Restaurante: "),r.a.createElement("input",{type:"text",name:"Restaurante",onChange:this.onChangeRestaurantName}),r.a.createElement("br",null),r.a.createElement("table",{id:"cart",class:"table table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"40%"}},"Produto"),r.a.createElement("th",{style:{width:"10%"},hidden:!0},"Unidade"),r.a.createElement("th",{style:{width:"20%"}},"Pre\xe7o"),r.a.createElement("th",{style:{width:"18%"}},"Quantidade"),r.a.createElement("th",{style:{width:"22%"},class:"text-center"},"Subtotal"))),r.a.createElement("tbody",null,this.render_product_list()),r.a.createElement("tfoot",null,r.a.createElement("tr",{class:"visible-xs"},r.a.createElement("td",{class:"text-center"},r.a.createElement("strong",null,"Total R$ ",r.a.createElement("span",{id:"total"},e)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:this.handleSubmit,class:"btn btn-warning"},r.a.createElement("i",{class:"fa fa-angle-left"})," Enviar pedido")),r.a.createElement("td",{colspan:"2",class:"hidden-xs"}),r.a.createElement("td",{class:"hidden-xs text-center"},r.a.createElement("strong",null,"Total R$ ",e)),r.a.createElement("td",null,r.a.createElement("a",{href:"#",class:"btn btn-success btn-block"},"Checkout ",r.a.createElement("i",{class:"fa fa-angle-right"}))))))))}}]),t}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null," Teste ")),r.a.createElement("body",null,r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.8973ef3c.chunk.js.map