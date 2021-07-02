(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{160:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm_bundler=__webpack_require__(4);__webpack_require__(812);var Buttonvue_type_script_lang_js={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function validator(value){return-1!==["small","medium","large"].indexOf(value)}},backgroundColor:{type:String}},emits:["click"],setup:function setup(props,_ref){var emit=_ref.emit;return props=Object(vue_esm_bundler.reactive)(props),{classes:Object(vue_esm_bundler.computed)((function(){var _ref2;return(_ref2={"storybook-button":!0,"storybook-button--primary":props.primary,"storybook-button--secondary":!props.primary})["storybook-button--"+(props.size||"medium")]=!0,_ref2})),style:Object(vue_esm_bundler.computed)((function(){return{backgroundColor:props.backgroundColor}})),onClick:function onClick(){emit("click")}}},render:function render(_ctx,_cache,$props,$setup,$data,$options){return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)("button",{type:"button",class:$setup.classes,onClick:_cache[1]||(_cache[1]=(...args)=>$setup.onClick&&$setup.onClick(...args)),style:$setup.style},Object(vue_esm_bundler.toDisplayString)($props.label),7)}};const __vuedocgen_export_0=Buttonvue_type_script_lang_js;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]}},161:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm_bundler=__webpack_require__(4);const _hoisted_1={class:"wrapper"},_hoisted_2=Object(vue_esm_bundler.createVNode)("div",null,[Object(vue_esm_bundler.createVNode)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[Object(vue_esm_bundler.createVNode)("g",{fill:"none","fill-rule":"evenodd"},[Object(vue_esm_bundler.createVNode)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(vue_esm_bundler.createVNode)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(vue_esm_bundler.createVNode)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})])]),Object(vue_esm_bundler.createVNode)("h1",null,"Acme")],-1);__webpack_require__(814);var Headervue_type_script_lang_js={name:"my-header",components:{MyButton:__webpack_require__(160).a},props:{user:{type:Object}},emits:["login","logout","createAccount"],render:function render(_ctx,_cache,$props,$setup,$data,$options){const _component_my_button=Object(vue_esm_bundler.resolveComponent)("my-button");return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)("header",null,[Object(vue_esm_bundler.createVNode)("div",_hoisted_1,[_hoisted_2,Object(vue_esm_bundler.createVNode)("div",null,[$props.user?(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(_component_my_button,{key:0,size:"small",onClick:_cache[1]||(_cache[1]=$event=>_ctx.$emit("logout")),label:"Log out"})):Object(vue_esm_bundler.createCommentVNode)("",!0),$props.user?Object(vue_esm_bundler.createCommentVNode)("",!0):(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(_component_my_button,{key:1,size:"small",onClick:_cache[2]||(_cache[2]=$event=>_ctx.$emit("login")),label:"Log in"})),$props.user?Object(vue_esm_bundler.createCommentVNode)("",!0):(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(_component_my_button,{key:2,primary:"",size:"small",onClick:_cache[3]||(_cache[3]=$event=>_ctx.$emit("createAccount")),label:"Sign up"}))])])])}};const __vuedocgen_export_0=Headervue_type_script_lang_js;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]}},208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(13);var _Header_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(161);__webpack_exports__.default={title:"Example/Header",component:_Header_vue__WEBPACK_IMPORTED_MODULE_1__.a};var Template=function Template(args){return{components:{MyHeader:_Header_vue__WEBPACK_IMPORTED_MODULE_1__.a},setup:function setup(){return Object.assign({},args)},template:'<my-header :user="user" />'}},LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={user:null},LoggedIn.parameters=Object.assign({storySource:{source:"(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyHeader },\n  // The story's `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    // Story args can be spread into the returned object\n    return { ...args };\n  },\n  // Then, the spread values can be accessed directly in the template\n  template: '<my-header :user=\"user\" />',\n})"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyHeader },\n  // The story's `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    // Story args can be spread into the returned object\n    return { ...args };\n  },\n  // Then, the spread values can be accessed directly in the template\n  template: '<my-header :user=\"user\" />',\n})"}},LoggedOut.parameters)},418:function(module,exports,__webpack_require__){var api=__webpack_require__(154),content=__webpack_require__(808);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},419:function(module,exports,__webpack_require__){var api=__webpack_require__(154),content=__webpack_require__(810);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},461:function(module,exports,__webpack_require__){__webpack_require__(462),__webpack_require__(618),__webpack_require__(619),__webpack_require__(824),__webpack_require__(825),__webpack_require__(827),__webpack_require__(828),__webpack_require__(826),__webpack_require__(820),__webpack_require__(829),__webpack_require__(819),__webpack_require__(821),__webpack_require__(830),module.exports=__webpack_require__(803)},529:function(module,exports){},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(193)},803:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(193).configure)([__webpack_require__(804),__webpack_require__(806)],module,!1)}).call(this,__webpack_require__(187)(module))},804:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":805};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=804},805:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(23),__webpack_require__(7),__webpack_require__(13),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(33),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(207),_excluded=["components"];function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_5__.b,{title:"Components/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("h1",{id:"qiskit-vue"},"Qiskit Vue"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"Qiskit component library for Vue 2 and Vue 3."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("h2",{id:"installation"},"Installation"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"Install the required dependencies:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("code",{parentName:"pre"},"npm install @qiskit-community/qiskit-vue vue-demi\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"If your project uses Vue 2, also install the Composition API package:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("code",{parentName:"pre"},"npm install @vue/composition-api\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("h2",{id:"usage-in-vue-2-project"},"Usage in Vue 2 project"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"Example:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("code",{parentName:"pre"},"<template>\n  <QLogo />\n</template>\n\n<script lang=\"ts\">\nimport Vue from 'vue'\nimport { Component } from 'vue-property-decorator'\nimport QLogo from '@qiskit-community/qiskit-vue/src/components/QLogo/index.vue'\n\n@Component({\n  components: { QLogo }\n})\nexport default class MyComponent extends Vue {}\n<\/script>\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("h2",{id:"usage-in-vue-3-project"},"Usage in Vue 3 project"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"Example:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("code",{parentName:"pre"},"<template>\n  <QLogo />\n</template>\n\n<script lang=\"ts\">\nimport { Options, Vue } from 'vue-class-component'\nimport QLogo from '@qiskit-community/qiskit-vue'\n\n@Options({\n  components: { QLogo }\n})\nexport default class MyComponent extends Vue {}\n<\/script>\n")))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Components/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_5__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},806:function(module,exports,__webpack_require__){var map={"./components/QLogo/index.stories.js":818,"./components/QiskitBanner/index.stories.js":822,"./stories/Button.stories.js":811,"./stories/Header.stories.js":208,"./stories/Page.stories.js":823};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=806},807:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(418)},808:function(module,exports,__webpack_require__){(exports=__webpack_require__(155)(!1)).push([module.i,".app-logo__solid[data-v-f5080bbc]{fill:currentColor}.app-logo__gradient[data-v-f5080bbc]{stop-color:currentColor}",""]),module.exports=exports},809:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(419)},810:function(module,exports,__webpack_require__){(exports=__webpack_require__(155)(!1)).push([module.i,".qiskit-banner[data-v-c5921e34]{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px;align-items:center;background:#491d8b;color:#fff;display:flex;font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;padding:.75rem 1.5rem}.qiskit-banner[data-v-c5921e34] a{color:#fff;text-decoration:underline}",""]),module.exports=exports},811:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(13);var _Button_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(160);__webpack_exports__.default={title:"Example/Button",component:_Button_vue__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select",options:["small","medium","large"]}},onClick:{}}};var Template=function Template(args){return{components:{MyButton:_Button_vue__WEBPACK_IMPORTED_MODULE_1__.a},setup:function setup(){return{args:args}},template:'<my-button v-bind="args" />'}},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:'(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyButton },\n  // The story\'s `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    return { args };\n  },\n  // And then the `args` are bound to your component with `v-bind="args"`\n  template: \'<my-button v-bind="args" />\',\n})'}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:'(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyButton },\n  // The story\'s `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    return { args };\n  },\n  // And then the `args` are bound to your component with `v-bind="args"`\n  template: \'<my-button v-bind="args" />\',\n})'}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:'(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyButton },\n  // The story\'s `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    return { args };\n  },\n  // And then the `args` are bound to your component with `v-bind="args"`\n  template: \'<my-button v-bind="args" />\',\n})'}},Large.parameters),Small.parameters=Object.assign({storySource:{source:'(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyButton },\n  // The story\'s `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    return { args };\n  },\n  // And then the `args` are bound to your component with `v-bind="args"`\n  template: \'<my-button v-bind="args" />\',\n})'}},Small.parameters)},812:function(module,exports,__webpack_require__){var api=__webpack_require__(154),content=__webpack_require__(813);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},813:function(module,exports,__webpack_require__){(exports=__webpack_require__(155)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},814:function(module,exports,__webpack_require__){var api=__webpack_require__(154),content=__webpack_require__(815);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},815:function(module,exports,__webpack_require__){(exports=__webpack_require__(155)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},816:function(module,exports,__webpack_require__){var api=__webpack_require__(154),content=__webpack_require__(817);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},817:function(module,exports,__webpack_require__){(exports=__webpack_require__(155)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},818:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Standard",(function(){return Standard}));__webpack_require__(13);var vue_esm_bundler=__webpack_require__(4);const _withId=Object(vue_esm_bundler.withScopeId)("data-v-f5080bbc");Object(vue_esm_bundler.pushScopeId)("data-v-f5080bbc");const _hoisted_1={class:"app-logo",version:"1.2",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 451.7 140.8","xml:space":"preserve"},_hoisted_2=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:".2","stop-opacity":"0"},null,-1),_hoisted_3=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:"1"},null,-1),_hoisted_4=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:"0","stop-opacity":"0"},null,-1),_hoisted_5=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:"1"},null,-1),_hoisted_6=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:".2","stop-opacity":"0"},null,-1),_hoisted_7=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:"1"},null,-1),_hoisted_8=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:".4","stop-opacity":"0"},null,-1),_hoisted_9=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:"1"},null,-1),_hoisted_10=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:"0","stop-opacity":"0"},null,-1),_hoisted_11=Object(vue_esm_bundler.createVNode)("stop",{class:"app-logo__gradient",offset:".4"},null,-1),_hoisted_12=Object(vue_esm_bundler.createVNode)("path",{class:"app-logo__solid",d:"M221.3 126.4h-11.6c-9.1 0-13.3-5-13.3-13v-6.2c-18.3-2.3-29.8-16.8-29.8-41.8 0-27.5 13.9-42.2 35.1-42.2S237 37.9 237 65.4c0 24.3-10.8 38.7-28.1 41.6v8.4H221zm1.5-54.6V59c0-14.8-8.4-24-21-24s-21 9.1-21 24v12.8c0 14.9 8.4 24 21 24s21-9.1 21-24zM246.3 30.3v-2c0-3.9 2.3-6.7 7.6-6.7s7.5 2.8 7.5 6.7v2c0 3.8-2.2 6.6-7.5 6.6s-7.6-2.8-7.6-6.6zM247.5 45.4h12.7v60.8h-12.7zM270.9 96.1l8.1-7.4c4.4 5.3 10 8.6 17.2 8.6s11-3 11-8.2c0-3.8-2.3-6.7-8.6-7.6l-5.6-.7c-12.4-1.5-20-6.9-20-18 0-11.9 9.3-18.8 22.6-18.8 11 0 17.2 3.6 22.7 9.7l-7.9 7.5a19.4 19.4 0 00-14.8-6.9c-7 0-10.3 3-10.3 7.6s3 6.8 9.3 7.8l5.7.7c13.3 2 19.2 7.9 19.2 17.7 0 11.7-9.4 19.5-24 19.5A29.3 29.3 0 01270.9 96zM328.2 19.7H341v53h.6L350 62l14.6-16.5h14.8L358.1 69l23.9 37.3h-15.2l-17.4-29-8.4 9.1v19.9h-12.8zM390.8 30.3v-2c0-3.9 2.4-6.7 7.6-6.7s7.5 2.8 7.5 6.7v2c0 3.8-2.2 6.6-7.5 6.6s-7.6-2.8-7.6-6.6zM392 45.4h12.7v60.8H392zM438.3 106.2c-8.8 0-13.5-5-13.5-13.2V55.8h-9.4V45.4h5.1c4.2 0 5.6-1.7 5.6-6V28.8h11.5v16.6h12.7v10.4h-12.7v40h11.8v10.4z"},null,-1),_hoisted_13=Object(vue_esm_bundler.createVNode)("path",{class:"app-logo__solid",d:"M70.8 140.3a70 70 0 1161.5-103 70 70 0 01-61.5 103zM70.5 5.2a65.2 65.2 0 1057.6 34.3A65.3 65.3 0 0070.7 5.2z"},null,-1),_hoisted_14=Object(vue_esm_bundler.createVNode)("path",{class:"app-logo__solid",d:"M70.4.4c-5 0-16.9.7-16.9 7.9s11.8 7.8 17 7.8 16.8-.7 16.8-7.8-11.8-8-16.9-8zm0 4.8c7.2 0 12.1 1.6 12.1 3s-5 3.2-12 3.2-12.2-1.7-12.2-3.1 5-3.1 12.1-3.1z"},null,-1);Object(vue_esm_bundler.popScopeId)();const render=_withId(((_ctx,_cache,$props,$setup,$data,$options)=>(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)("svg",_hoisted_1,[Object(vue_esm_bundler.createVNode)("defs",null,[Object(vue_esm_bundler.createVNode)("radialGradient",{id:_ctx.scopeId("gradient-1"),cx:"63.5",cy:"71.1",r:"65",gradientTransform:"matrix(.96 .21 -.14 .63 43 13.8)",gradientUnits:"userSpaceOnUse"},[_hoisted_2,_hoisted_3],8,["id"]),Object(vue_esm_bundler.createVNode)("radialGradient",{id:_ctx.scopeId("gradient-2"),cx:"40",cy:"162.1",r:"35",gradientTransform:"matrix(.98 0 0 .6 31.7 16.5)",gradientUnits:"userSpaceOnUse"},[_hoisted_4,_hoisted_5],8,["id"]),Object(vue_esm_bundler.createVNode)("radialGradient",{id:_ctx.scopeId("gradient-3"),cx:"40.5",cy:"29.8",r:"60.3",gradientTransform:"matrix(.98 0 0 .75 31.6 9.5)",gradientUnits:"userSpaceOnUse"},[_hoisted_6,_hoisted_7],8,["id"]),Object(vue_esm_bundler.createVNode)("radialGradient",{id:_ctx.scopeId("gradient-4"),cx:"3.1",cy:"-.4",r:"40.7",gradientTransform:"matrix(.4 .89 -1.26 .57 33 -.4)",gradientUnits:"userSpaceOnUse"},[_hoisted_8,_hoisted_9],8,["id"]),Object(vue_esm_bundler.createVNode)("radialGradient",{id:_ctx.scopeId("gradient-5"),cx:"-412.4",cy:"-1203.4",r:"1068.9",gradientTransform:"matrix(.98 0 0 .98 31.7 2.6)",gradientUnits:"userSpaceOnUse"},[_hoisted_10,_hoisted_11],8,["id"])]),_hoisted_12,Object(vue_esm_bundler.createVNode)("path",{fill:`url(#${_ctx.scopeId("gradient-1")})`,d:"M131.1 103.1C131 90.1 100.6 83 72 82.6c-30.4 0-61.8 7.6-61.9 20.5.2 13 30.6 20.3 59.2 20.6 30.3 0 61.7-7.7 61.8-20.5zM69.3 119c-32-.4-54.3-8.6-54.4-15.8.1-7.5 24.5-16 57.1-16 32 .5 54.3 8.7 54.4 16 0 7.4-24.5 15.8-57.1 15.8z"},null,8,["fill"]),_hoisted_13,Object(vue_esm_bundler.createVNode)("path",{fill:`url(#${_ctx.scopeId("gradient-2")})`,d:"M88.7 131c0-5.4-7.8-9.5-18-9.5s-18 4-18 9.4v.1c0 5.3 7.8 9.4 18 9.4s18-4 18-9.4zm-18 5c-8.1 0-13.3-3-13.3-5s5.2-5 13.3-5 13.2 2.9 13.3 5-5.3 4.9-13.3 4.9z"},null,8,["fill"]),Object(vue_esm_bundler.createVNode)("path",{fill:`url(#${_ctx.scopeId("gradient-3")})`,d:"M140.6 70.4c-.2-13.8-35.3-21.7-68.3-22-35 0-71.4 8.2-71.6 22C.9 84.5 36 92.3 69 92.7c35 0 71.4-8.3 71.6-22.1zM69.1 87.8c-37.4-.4-63.5-9.5-63.7-17.4C5.5 62.2 34.1 53 72.2 53c37.5.4 63.6 9.5 63.7 17.4-.1 8.2-28.7 17.4-66.8 17.4z"},null,8,["fill"]),Object(vue_esm_bundler.createVNode)("path",{fill:`url(#${_ctx.scopeId("gradient-4")})`,d:"M72 16.9c-30.4 0-61.8 7.7-61.8 20.6s30.4 20.3 59 20.6c30.4 0 61.8-7.7 61.8-20.6s-30.3-20.3-59-20.6zm-2.7 36.4C37.3 53 15 44.7 15 37.5c0-7.5 24.4-15.9 57-15.9 32 .4 54.3 8.7 54.3 15.9 0 7.5-24.4 15.8-57 15.8z"},null,8,["fill"]),_hoisted_14,Object(vue_esm_bundler.createVNode)("path",{fill:`url(#${_ctx.scopeId("gradient-5")})`,d:"M100 112.8a6.1 6.1 0 00-.9 0L72.8 67.6 48.8 26a6 6 0 10-4.5 2.2 6.6 6.6 0 00.8 0l24 41.3 10.8 18.7L95.3 115a6 6 0 104.7-2.2z"},null,8,["fill"])]))));var index_esm=__webpack_require__(132),uid=0,uidvue_type_script_lang_ts=Object(index_esm.a)({beforeCreate:function beforeCreate(){uid+=1},data:function data(){return{uid:uid}}});var mixins_uid=uidvue_type_script_lang_ts;uidvue_type_script_lang_ts.__docgenInfo={exportName:"default",displayName:"uid",description:"",tags:{}};var QLogovue_type_script_lang_ts=Object(index_esm.a)({methods:{scopeId:function scopeId(str){return""+str+this.uid}},mixins:[mixins_uid]});__webpack_require__(807);QLogovue_type_script_lang_ts.render=render,QLogovue_type_script_lang_ts.__scopeId="data-v-f5080bbc";var QLogo=QLogovue_type_script_lang_ts;QLogovue_type_script_lang_ts.__docgenInfo={exportName:"default",displayName:"QLogo",description:"",tags:{}};__webpack_exports__.default={title:"Components/QLogo",component:QLogo,argTypes:{}};var Standard=function Template(args){return{components:{QLogo:QLogo},setup:function setup(){return{args:args}},template:'<q-logo v-bind="args" />'}}.bind({});Standard.args={},Standard.parameters=Object.assign({storySource:{source:"(args) => ({\n  components: { QLogo },\n  setup() {\n    return { args };\n  },\n  template: '<q-logo v-bind=\"args\" />',\n})"}},Standard.parameters)},822:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ShortContent",(function(){return ShortContent})),__webpack_require__.d(__webpack_exports__,"LongContent",(function(){return LongContent})),__webpack_require__.d(__webpack_exports__,"FixedHeight",(function(){return FixedHeight})),__webpack_require__.d(__webpack_exports__,"WithLink",(function(){return WithLink}));__webpack_require__(13);var vue_esm_bundler=__webpack_require__(4);const _withId=Object(vue_esm_bundler.withScopeId)("data-v-c5921e34");Object(vue_esm_bundler.pushScopeId)("data-v-c5921e34");const _hoisted_1={class:"qiskit-banner"};Object(vue_esm_bundler.popScopeId)();const render=_withId(((_ctx,_cache,$props,$setup,$data,$options)=>(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)("div",_hoisted_1,[Object(vue_esm_bundler.createVNode)("div",null,[Object(vue_esm_bundler.renderSlot)(_ctx.$slots,"default",{},void 0,!0)])]))));var index_esm=__webpack_require__(132),QiskitBannervue_type_script_lang_ts=Object(index_esm.a)({});__webpack_require__(809);QiskitBannervue_type_script_lang_ts.render=render,QiskitBannervue_type_script_lang_ts.__scopeId="data-v-c5921e34";var QiskitBanner=QiskitBannervue_type_script_lang_ts;QiskitBannervue_type_script_lang_ts.__docgenInfo={exportName:"default",displayName:"QiskitBanner",description:"",tags:{},slots:[{name:"default"}]};__webpack_exports__.default={title:"Components/QiskitBanner",component:QiskitBanner,argTypes:{}};var index_stories_Template=function Template(args){return{components:{QiskitBanner:QiskitBanner},setup:function setup(){return{args:args}},template:'<qiskit-banner class="'+args.style+'">'+args.default+"</qiskit-banner>"}},ShortContent=index_stories_Template.bind({});ShortContent.args={default:"Lorem ipsum dolor sit amet"};var LongContent=index_stories_Template.bind({});LongContent.args={default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};var FixedHeight=index_stories_Template.bind({});FixedHeight.args={default:"Lorem ipsum dolor sit amet",style:"height: 100px;"};var WithLink=index_stories_Template.bind({});WithLink.args={default:"Lorem ipsum dolor sit amet. <a href='#'>Click here!</a>"},ShortContent.parameters=Object.assign({storySource:{source:'(args) => ({\n  components: { QiskitBanner },\n  setup() {\n    return { args };\n  },\n  template: `<qiskit-banner class="${args.style}">${args.default}</qiskit-banner>`,\n})'}},ShortContent.parameters),LongContent.parameters=Object.assign({storySource:{source:'(args) => ({\n  components: { QiskitBanner },\n  setup() {\n    return { args };\n  },\n  template: `<qiskit-banner class="${args.style}">${args.default}</qiskit-banner>`,\n})'}},LongContent.parameters),FixedHeight.parameters=Object.assign({storySource:{source:'(args) => ({\n  components: { QiskitBanner },\n  setup() {\n    return { args };\n  },\n  template: `<qiskit-banner class="${args.style}">${args.default}</qiskit-banner>`,\n})'}},FixedHeight.parameters),WithLink.parameters=Object.assign({storySource:{source:'(args) => ({\n  components: { QiskitBanner },\n  setup() {\n    return { args };\n  },\n  template: `<qiskit-banner class="${args.style}">${args.default}</qiskit-banner>`,\n})'}},WithLink.parameters)},823:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(13);var vue_esm_bundler=__webpack_require__(4);const _hoisted_1=Object(vue_esm_bundler.createVNode)("section",null,[Object(vue_esm_bundler.createVNode)("h2",null,"Pages in Storybook"),Object(vue_esm_bundler.createVNode)("p",null,[Object(vue_esm_bundler.createTextVNode)(" We recommend building UIs with a "),Object(vue_esm_bundler.createVNode)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},[Object(vue_esm_bundler.createVNode)("strong",null,"component-driven")]),Object(vue_esm_bundler.createTextVNode)(" process starting with atomic components and ending with pages. ")]),Object(vue_esm_bundler.createVNode)("p",null," Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: "),Object(vue_esm_bundler.createVNode)("ul",null,[Object(vue_esm_bundler.createVNode)("li",null,' Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories '),Object(vue_esm_bundler.createVNode)("li",null," Assemble data in the page component from your services. You can mock these services out using Storybook. ")]),Object(vue_esm_bundler.createVNode)("p",null,[Object(vue_esm_bundler.createTextVNode)(" Get a guided tutorial on component-driven development at "),Object(vue_esm_bundler.createVNode)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),Object(vue_esm_bundler.createTextVNode)(" . Read more in the "),Object(vue_esm_bundler.createVNode)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),Object(vue_esm_bundler.createTextVNode)(" . ")]),Object(vue_esm_bundler.createVNode)("div",{class:"tip-wrapper"},[Object(vue_esm_bundler.createVNode)("span",{class:"tip"},"Tip"),Object(vue_esm_bundler.createTextVNode)(" Adjust the width of the canvas with the "),Object(vue_esm_bundler.createVNode)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},[Object(vue_esm_bundler.createVNode)("g",{fill:"none","fill-rule":"evenodd"},[Object(vue_esm_bundler.createVNode)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})])]),Object(vue_esm_bundler.createTextVNode)(" Viewports addon in the toolbar ")])],-1);__webpack_require__(816);var Pagevue_type_script_lang_js={name:"my-page",components:{MyHeader:__webpack_require__(161).a},props:{user:{type:Object}},emits:["login","logout","createAccount"],render:function render(_ctx,_cache,$props,$setup,$data,$options){const _component_my_header=Object(vue_esm_bundler.resolveComponent)("my-header");return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)("article",null,[Object(vue_esm_bundler.createVNode)(_component_my_header,{user:$props.user,onLogin:_cache[1]||(_cache[1]=$event=>_ctx.$emit("login")),onLogout:_cache[2]||(_cache[2]=$event=>_ctx.$emit("logout")),onCreateAccount:_cache[3]||(_cache[3]=$event=>_ctx.$emit("createAccount"))},null,8,["user"]),_hoisted_1])}};var Page=Pagevue_type_script_lang_js;Pagevue_type_script_lang_js.__docgenInfo={displayName:"my-page",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var Header_stories=__webpack_require__(208),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page},function Template(args){return{components:{MyPage:Page},setup:function setup(){return{user:args.user}},template:'<my-page :user="user" />'}}),LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyPage },\n  // The story's `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    // Story args can be mapped to keys in the returned object\n    return { user: args.user };\n  },\n  // Then, those values can be accessed directly in the template\n  template: '<my-page :user=\"user\" />',\n})"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => ({\n  // Components used in your story `template` are defined in the `components` object\n  components: { MyPage },\n  // The story's `args` need to be mapped into the template through the `setup()` method\n  setup() {\n    // Story args can be mapped to keys in the returned object\n    return { user: args.user };\n  },\n  // Then, those values can be accessed directly in the template\n  template: '<my-page :user=\"user\" />',\n})"}},LoggedOut.parameters)},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(7),__webpack_require__(49),__webpack_require__(416),__webpack_require__(46),__webpack_require__(417);var client_api=__webpack_require__(838),types=__webpack_require__(836),esm=__webpack_require__(6),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[461,2,3]]]);