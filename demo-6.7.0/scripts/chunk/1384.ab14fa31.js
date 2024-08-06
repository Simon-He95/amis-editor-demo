"use strict";(self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[]).push([[1384],{31384:function(e,t,n){n.r(t),n.d(t,{ColorControl:function(){return p},default:function(){return h}});var o=n(31635),r=n(96540),a=n(40961),l=n(91945),s=n(10162),i=n(86058),c=n(25751),p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isOpened:!1,isFocused:!1,inputValue:n.props.value||"",tempValue:n.props.value||""},n.open=n.open.bind(n),n.close=n.close.bind(n),n.focus=n.focus.bind(n),n.blur=n.blur.bind(n),n.handleChange=n.handleChange.bind(n),n.handleTempChange=n.handleTempChange.bind(n),n.handleConfirm=n.handleConfirm.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.clearValue=n.clearValue.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n.handleClick=n.handleClick.bind(n),n.preview=r.createRef(),n.input=r.createRef(),n}return(0,o.C6)(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props;e.value!==t.value&&this.setState({inputValue:t.value||""})},t.prototype.handleFocus=function(){this.setState({isFocused:!0})},t.prototype.handleBlur=function(){this.setState({isFocused:!1,inputValue:this.props.value})},t.prototype.focus=function(){this.input.current&&this.input.current.focus()},t.prototype.blur=function(){this.input.current&&this.input.current.blur()},t.prototype.open=function(e){this.props.disabled||this.setState({isOpened:!0},e)},t.prototype.close=function(){this.setState({isOpened:!1})},t.prototype.clearValue=function(){var e=this.props;(0,e.onChange)(e.resetValue||"")},t.prototype.handleClick=function(){this.state.isOpened?this.close():this.open(this.focus)},t.prototype.handleInputChange=function(e){var t=this;if(this.props.allowCustomColor){var n=this.props.onChange;this.setState({inputValue:e.currentTarget.value},(function(){t.validateColor(t.state.inputValue)&&n(t.state.inputValue)}))}},t.prototype.validateColor=function(e){if(""===e)return!1;if("inherit"===e)return!1;if("transparent"===e)return!1;var t=document.createElement("img");return t.style.color="rgb(0, 0, 0)",t.style.color=e,"rgb(0, 0, 0)"!==t.style.color||(t.style.color="rgb(255, 255, 255)",t.style.color=e,"rgb(255, 255, 255)"!==t.style.color)},t.prototype.handleChange=function(e){var t=this.props,n=t.onChange,o=t.format;n("rgba"===o?"rgba(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,", ").concat(e.rgb.a,")"):"rgb"===o?"rgb(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,")"):"hsl"===o?"hsl(".concat(Math.round(e.hsl.h),", ").concat(Math.round(100*e.hsl.s),"%, ").concat(Math.round(100*e.hsl.l),"%)"):e.hex)},t.prototype.handleTempChange=function(e){var t=this.state.tempValue,n=this.props.format;t="rgba"===n?"rgba(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,", ").concat(e.rgb.a,")"):"rgb"===n?"rgb(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,")"):"hsl"===n?"hsl(".concat(Math.round(e.hsl.h),", ").concat(Math.round(100*e.hsl.s),"%, ").concat(Math.round(100*e.hsl.l),"%)"):e.hex,this.setState({tempValue:t})},t.prototype.handleConfirm=function(){(0,this.props.onChange)(this.state.tempValue),this.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.classPrefix,o=t.className,p=t.popoverClassName,h=t.value,u=t.placeholder,d=t.disabled,C=t.popOverContainer,m=t.popOverContainerSelector,g=t.format,f=t.clearable,b=t.placement,v=t.classnames,y=t.presetColors,k=t.allowCustomColor,V=t.mobileUI,E=this.props.translate,w=this.state.isOpened,N=this.state.isFocused,P=this.state.tempValue;return r.createElement("div",{className:v("ColorPicker",{"is-disabled":d,"is-focused":N,"is-opened":w},o)},r.createElement("span",{onClick:this.handleClick,className:v("ColorPicker-preview")},r.createElement("i",{ref:this.preview,className:"".concat(n,"ColorPicker-previewIcon"),style:{background:this.state.inputValue||"#ccc"}})),r.createElement("input",{ref:this.input,type:"text",autoComplete:"off",size:10,className:v("ColorPicker-input"),value:this.state.inputValue||"",placeholder:E(u),disabled:d,onChange:this.handleInputChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onClick:this.handleClick,readOnly:V}),f&&!d&&h?r.createElement("a",{onClick:this.clearValue,className:v("ColorPicker-clear")},r.createElement(s.In,{icon:"input-clear",className:"icon"})):null,r.createElement("span",{className:v("ColorPicker-arrow")},r.createElement(s.In,{icon:"right-arrow-bold",className:"icon",onClick:this.handleClick})),!V&&w?r.createElement(i.hJs,{placement:b||"auto",target:function(){return(0,a.findDOMNode)(e)},onHide:this.close,container:C||function(){return(0,a.findDOMNode)(e)},containerSelector:m,rootClose:!1,show:!0},r.createElement(i.Kx3,{classPrefix:n,className:v("ColorPicker-popover",p),onHide:this.close,overlay:!0},k?r.createElement(l.Xq,{styles:{},disableAlpha:!!~["rgb","hex"].indexOf(g),color:h,presetColors:y,onChangeComplete:this.handleChange}):r.createElement(l.gF,{color:h,colors:Array.isArray(y)?y.filter((function(e){return"string"==typeof e||(0,i.Gvm)(e)})).map((function(e){return"string"==typeof e?e:(0,i.Gvm)(e)?null==e?void 0:e.color:e})):void 0,onChangeComplete:this.handleChange}))):null,V&&r.createElement(c.A,{className:v("".concat(n,"ColorPicker-popup")),container:C,isShow:w,onHide:this.handleClick,showConfirm:!0,onConfirm:this.handleConfirm},k?r.createElement(l.Xq,{styles:{},disableAlpha:!!~["rgb","hex"].indexOf(g),color:P,presetColors:y,onChangeComplete:this.handleTempChange}):r.createElement(l.gF,{color:P,colors:Array.isArray(y)?y.filter((function(e){return"string"==typeof e||(0,i.Gvm)(e)})).map((function(e){return"string"==typeof e?e:(0,i.Gvm)(e)?null==e?void 0:e.color:e})):void 0,onChangeComplete:this.handleTempChange})))},t.defaultProps={format:"hex",clearable:!0,placeholder:"ColorPicker.placeholder",allowCustomColor:!0},(0,o.Cg)([i.d6t,(0,o.Sn)("design:type",Function),(0,o.Sn)("design:paramtypes",[String]),(0,o.Sn)("design:returntype",void 0)],t.prototype,"validateColor",null),t}(r.PureComponent),h=(0,i.IWl)((0,i.t5k)((0,i.Pd)(p,{value:"onChange"})))}}]);