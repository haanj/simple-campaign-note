(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),s=(a(20),a(3)),o=a(4),d=a(7),l=a(5),h=a(6),u=a(2),m=(a(22),[{id:1,name:"Character",description:"A list of major and minor characters",color:"red",cards:[{id:1,name:"Allan Goode",description:"Generally a good guy who's done amazing heroics",text:"Born in a small village, blah blah blah blah"},{id:2,name:"Jerry Smith",description:"Yawn",text:"Lorem ipsum blah blah blah"},{id:3,name:"Mike Truck",description:"Built like a truck",text:"Part man, part car"}]},{id:2,name:"Location",description:"Noteworthy locations",color:"green",cards:[{id:3,name:"Riverbend",description:"Small river fishing village",text:"The birthplace of Allan Goode, this is blah blah blah"},{id:4,name:"Rocksville",description:"Mining camp",text:"hi ho hi ho"}]}]),C=a(8),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={categories:e.categories,activeCategoryId:e.activeCategoryId},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.activeCategoryId!==this.props.activeCategoryId&&this.setState({activeCategoryId:e.activeCategoryId}),e.categories!==this.props.categories&&this.setState({categories:e.categories})}},{key:"render",value:function(){var e=this,t=this.state.categories.map(function(t){var a=t.id===e.state.activeCategoryId,n=i.a.createElement("span",{className:"edit-button"},i.a.createElement(C.a,{icon:["far","edit"]})),r="name";a&&(r+=" active");var c=i.a.createElement("span",{className:r,alt:a?"Active Category":"",onClick:function(){return e.props.handleChangeCategory(t.id)}},t.name);return i.a.createElement("li",{key:t.id},c,n)});return i.a.createElement("nav",{className:"category-list list-container"},i.a.createElement("ul",null,t,i.a.createElement("li",{className:"add-button",key:"addCategory",onClick:function(){return e.props.handleAddCategory()}},i.a.createElement(C.a,{icon:["far","plus-square"]}))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={cards:e.cards,activeCardId:e.activeCardId,activeCategoryId:e.activeCategoryId},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setStateDelayed({show:!0})}},{key:"componentWillUnmount",value:function(){this.clearTimeout()}},{key:"clearTimeout",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.timeOut&&clearTimeout(this.timeOut)})},{key:"setStateDelayed",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.timeOut=setTimeout(function(){t.setState(e)},a)}},{key:"componentWillReceiveProps",value:function(e){e.activeCategoryId!==this.props.activeCategoryId&&this.setState({activeCategoryId:e.activeCategoryId}),e.cards!==this.props.cards?(this.clearTimeout(),this.setState({show:!1}),this.setStateDelayed({cards:e.cards,show:!0,activeCardId:e.activeCardId})):e.activeCardId!==this.props.activeCardId&&this.setState({activeCardId:e.activeCardId})}},{key:"render",value:function(){var e=this,t=this.state.cards.map(function(t){var a=t.id===e.state.activeCardId,n=i.a.createElement("span",{className:"edit-button"},i.a.createElement(C.a,{icon:["far","edit"]})),r="name";a&&(r+=" active");var c=i.a.createElement("span",{className:r,alt:a?"Active Card":"",onClick:function(){return e.props.handleChangeCard(t.id)}},t.name);return i.a.createElement("li",{key:t.id},c,n)}),a="card-list list-container";return this.state.show&&(a+=" show"),i.a.createElement("nav",{className:a},i.a.createElement("ul",null,t,i.a.createElement("li",{className:"add-button",key:"addCard",onClick:function(){return e.props.handleAddCard(e.state.activeCategoryId)}},i.a.createElement(C.a,{icon:["far","plus-square"]}))))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={show:e.show||!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.show!==this.props.show&&this.setState({show:e.show})}},{key:"render",value:function(){var e=this,t="cancel-confirm";return this.state.show&&(t+=" show"),i.a.createElement("span",{className:t},i.a.createElement("span",{className:"cancel-button button",onClick:function(){return e.props.handleClickCancel()}},i.a.createElement(C.a,{icon:["far","times-circle"]})),i.a.createElement("span",{className:"confirm-button button",onClick:function(){return e.props.handleClickConfirm()}},i.a.createElement(C.a,{icon:["far","check-circle"]})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={card:e.card,isNameFocused:!1,nameKey:Math.random()},a.nameInput=i.a.createRef(),a.handleChangeNameFocus=a._onChangeNameFocus.bind(Object(u.a)(Object(u.a)(a))),a.handleClickCancel=a._onClickCancel.bind(Object(u.a)(Object(u.a)(a))),a.handleClickConfirm=a._onClickConfirm.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.card!==this.props.card&&this.setState({card:e.card})}},{key:"_onChangeNameFocus",value:function(e){var t=this;this.setState({isNameFocused:e}),e&&setTimeout(function(){t.nameInput.current.focus()},0)}},{key:"_onClickCancel",value:function(){this.setState({nameKey:Math.random()}),this.handleChangeNameFocus(!1)}},{key:"_onClickConfirm",value:function(){this.handleChangeNameFocus(!1);var e=this.nameInput.current.innerText||"Untitled";this.props.handleUpdateCard(this.state.card.id,{name:e})}},{key:"render",value:function(){var e=this,t=this.state.card;if(!t)return null;var a="card-name";return this.state.isNameFocused&&(a+=" focus"),i.a.createElement("article",{className:"card-container"},i.a.createElement("header",null,i.a.createElement("h1",{ref:this.nameInput,key:this.state.nameKey,className:a,onClick:function(){return e.handleChangeNameFocus(!0)},contentEditable:this.state.isNameFocused,autoFocus:this.stateisNameFocused},t.name),i.a.createElement(p,{show:this.state.isNameFocused,handleClickCancel:function(){return e.handleClickCancel()},handleClickConfirm:function(){return e.handleClickConfirm()}})),i.a.createElement("section",null,i.a.createElement("label",{htmlFor:"card-description"},"Summary"),i.a.createElement("div",{className:"card-description"},t.description)),i.a.createElement("main",null,i.a.createElement("label",{htmlFor:"card-text"},"Notes"),i.a.createElement("div",{className:"card-text"},t.text)))}}]),t}(n.Component),b=a(9),y=a(12),k=a(13),I=a(14);b.b.add(y.a,k.a,I.a);var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={categories:m,activeCategoryId:m[0].id,activeCardId:m[0].cards[0].id},a.handleChangeCategory=a._onChangeCategory.bind(Object(u.a)(Object(u.a)(a))),a.handleChangeCard=a._onChangeCard.bind(Object(u.a)(Object(u.a)(a))),a.handleAddCategory=a._onAddCategory.bind(Object(u.a)(Object(u.a)(a))),a.handleAddCard=a._onAddCard.bind(Object(u.a)(Object(u.a)(a))),a.handleUpdateCard=a._onUpdateCard.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getNewModelId",value:function(e){return e.reduce(function(e,t){return Math.max(e,t.id)},0)+1}},{key:"_onChangeCategory",value:function(e){var t=this.state.categories.find(function(t){return t.id===e}).cards[0]||{};this.setState({activeCategoryId:e,activeCardId:t.id})}},{key:"_onAddCategory",value:function(e){var t=this.state.categories.slice(),a={id:this.getNewModelId(this.state.categories),name:"New Category",description:"This is a new category",color:"blue",cards:[]},n=Object.assign({},a,e);t.push(n),this.setState({categories:t})}},{key:"_onAddCard",value:function(e,t){var a=this.state.categories.slice(),n=a.find(function(t){return t.id===e}),i=n.cards,r={id:this.getNewModelId(i),name:"New ".concat(n.name),description:"lorem ipsum",text:"Lorem ipsum blah blah blah"},c=Object.assign({},r,t);i.push(c),this.setState({categories:a,activeCardId:c.id})}},{key:"_onUpdateCard",value:function(e,t){var a=this.state.activeCategoryId,n=this.state.categories.slice(),i=n.findIndex(function(e){return e.id===a}),r=n[i],c=r.cards.findIndex(function(t){return t.id===e}),s=r.cards[c],o=Object.assign(s,t);r.cards[c]=o,this.setState({categories:n})}},{key:"getActiveCard",value:function(){var e=this.state.activeCardId;return this.getActiveCards().find(function(t){return t.id===e})}},{key:"getActiveCards",value:function(){var e=this.state.categories.slice(),t=this.state.activeCategoryId;return e.find(function(e){return e.id===t}).cards}},{key:"_onChangeCard",value:function(e){this.setState({activeCardId:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,{categories:this.state.categories,activeCategoryId:this.state.activeCategoryId,handleChangeCategory:this.handleChangeCategory,handleAddCategory:this.handleAddCategory}),i.a.createElement(g,{cards:this.getActiveCards(),activeCategoryId:this.state.activeCategoryId,activeCardId:this.state.activeCardId,handleChangeCard:this.handleChangeCard,handleAddCard:this.handleAddCard}),i.a.createElement(f,{card:this.getActiveCard(),handleUpdateCard:this.handleUpdateCard}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.85090fc7.chunk.js.map