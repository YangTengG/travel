webpackJsonp([1],{"3hAk":function(t,e){},"5xBY":function(t,e){},"88n1":function(t,e){},"9n10":function(t,e){},CCTB:function(t,e){},GmRG:function(t,e){},HG2g:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},a,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},s,!1,function(t){i("5xBY")},null,null).exports,r=i("/ocq"),c=i("Dd8w"),o=i.n(c),l=i("NYxO"),d={name:"HomeHeader",computed:o()({},Object(l.b)(["city"]),{currentCity:function(){return this.city}})},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n      "+t._s(t.currentCity)+"\n      "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    请输入城市/景点/游玩主题\n  ")])}]};var m=i("VU/8")(d,u,!1,function(t){i("88n1")},"data-v-52c6104a",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.sliderList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"banner"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var h=i("VU/8")({name:"HomeSwiper",data:function(){return{swiperOption:{autoplay:5e3,loop:!0,effect:"coverflow",pagination:".swiper-pagination"},sliderList:[{id:"0001",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg"},{id:"0002",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg"}]}}},p,!1,function(t){i("X6Ol")},"data-v-3920fc90",null).exports,f={name:"HomeCategory",data:function(){return{swiperOption:{},cateList:[{cateId:"001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票"},{cateId:"002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",desc:"一日游"},{cateId:"003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",desc:"上海必游"},{cateId:"004",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",desc:"动植物园"},{cateId:"005",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"踏青赏花"},{cateId:"006",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",desc:"辰山植物园"},{cateId:"007",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",desc:"迪士尼"},{cateId:"008",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",desc:"动植物园"},{cateId:"009",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"踏青赏花"},{cateId:"010",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",desc:"辰山植物园"},{cateId:"011",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",desc:"迪士尼"}]}},computed:{swiperPages:function(){var t=[];return this.cateList.forEach(function(e,i){var a=Math.floor(i/8);t[a]||(t[a]=[]),t[a].push(e)}),t}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.swiperPages,function(e,a){return i("swiper-slide",{key:a},t._l(e,function(e){return i("div",{key:e.id,staticClass:"cate-item"},[i("div",{staticClass:"cate-img-box"},[i("img",{staticClass:"cate-img",attrs:{src:e.imgUrl,alt:"分类"}})]),t._v(" "),i("p",{staticClass:"cate-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var g=i("VU/8")(f,v,!1,function(t){i("lcez")},"data-v-4dd89407",null).exports,_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"module-title"},[t._v("本周推荐")]),t._v(" "),i("ul",{staticClass:"recommend-list"},t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"recommend-item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"recommend-img-box"},[i("img",{staticClass:"recommend-img",attrs:{src:e.imgUrl,alt:"推荐"}})]),t._v(" "),i("div",{staticClass:"scenic-info"},[i("p",{staticClass:"scenic-name"},[t._v(t._s(e.scenicName))]),t._v(" "),i("p",{staticClass:"scenic-price"},[t._v("￥"+t._s(e.scenicPrice)+" 起")])])])}),1)])},staticRenderFns:[]};var C=i("VU/8")({name:"HomeRecommend",data:function(){return{recommendList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg",scenicName:"上海迪士尼乐园",scenicPrice:399},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg",scenicName:"上海欢乐谷",scenicPrice:150},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_250x250_133a005e.jpg",scenicName:"上海影视乐园",scenicPrice:62},{id:"0004",imgUrl:"http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg",scenicName:"东方明珠",scenicPrice:85},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg",scenicName:"上海杜莎夫人蜡像馆",scenicPrice:127.9}]}}},_,!1,function(t){i("HG2g")},"data-v-39c0159c",null).exports,y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preference"},[i("div",{staticClass:"module-title"},[t._v("猜你喜欢")]),t._v(" "),i("div",{staticClass:"preference-list"},[i("ul",t._l(t.preferenceList,function(e){return i("router-link",{key:e.id,staticClass:"prefer-item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"prefer-img",attrs:{src:e.imgUrl,alt:"猜你喜欢"}}),t._v(" "),i("div",{staticClass:"prefer-info"},[i("p",{staticClass:"name"},[t._v(t._s(e.scenicName))]),t._v(" "),i("p",{staticClass:"summary"},[t._v(t._s(e.scenicSummary))]),t._v(" "),i("p",{staticClass:"price"},[i("span",{staticClass:"price-text"},[t._v("￥"),i("span",{staticClass:"price-num"},[t._v(t._s(e.scenicPrice))])]),t._v("\n             起\n          ")])])])}),1)])])},staticRenderFns:[]};var w=i("VU/8")({name:"HomePreference",data:function(){return{preferenceList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg",scenicName:"上海迪士尼乐园",scenicSummary:"上海迪士尼乐园上海迪士尼乐园",scenicPrice:399},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg",scenicName:"上海欢乐谷",scenicSummary:"上海迪士尼乐园上海迪士尼乐园",scenicPrice:150},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_250x250_133a005e.jpg",scenicName:"上海影视乐园",scenicSummary:"上海迪士尼乐园上海迪士尼乐园",scenicPrice:62},{id:"0004",imgUrl:"http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg",scenicName:"东方明珠",scenicSummary:"上海迪士尼乐园上海迪士尼乐园",scenicPrice:85},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg",scenicName:"上海杜莎夫人蜡像馆",scenicSummary:"上海迪士尼乐园上海迪士尼乐园",scenicPrice:127.9}]}}},y,!1,function(t){i("i5K1")},"data-v-0541ee18",null).exports,b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("div",{staticClass:"module-title"},[t._v("周末去哪儿")]),t._v(" "),i("div",{staticClass:"weekend-list"},[i("ul",t._l(t.weekendList,function(e){return i("li",{staticClass:"weekend-item"},[i("div",{staticClass:"weekend-img-container"},[i("img",{staticClass:"weekend-img",attrs:{src:e.imgUrl,alt:"周末去哪儿"}})]),t._v(" "),i("div",{staticClass:"weekend-info"},[i("p",{staticClass:"name"},[t._v(t._s(e.scenicName))]),t._v(" "),i("p",{staticClass:"summary"},[t._v(t._s(e.scenicSummary))])])])}),0)])])},staticRenderFns:[]};var k=i("VU/8")({name:"HomeWeekend",data:function(){return{weekendList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",scenicName:"上海必打卡",scenicSummary:"中西合璧，现代和传统各有各的精彩"},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg",scenicName:"上海看花",scenicSummary:"这个好天气，一起去看花吧"},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg",scenicName:"上海城市观光",scenicSummary:"来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光"},{id:"0004",imgUrl:"http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg",scenicName:"情迷博物馆",scenicSummary:"走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~"}]}}},b,!1,function(t){i("PSMO")},"data-v-6f361d98",null).exports,x=i("mtWM"),z=i.n(x),S={name:"Home",components:{HomeHeader:m,HomeSwiper:h,HomeCategory:g,HomeRecommend:C,HomePreference:w,HomeWeekend:k},data:function(){return{lastCity:""}},computed:o()({},Object(l.b)(["city"])),mounted:function(){this.lastCity=this.city,this.getHomeInfo()},methods:{getHomeInfo:function(){z.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){console.log(t)}},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-header"),this._v(" "),e("home-swiper"),this._v(" "),e("home-category"),this._v(" "),e("home-recommend"),this._v(" "),e("home-preference"),this._v(" "),e("home-weekend")],1)},staticRenderFns:[]};var $=i("VU/8")(S,U,!1,function(t){i("ogZP")},"data-v-7bb19521",null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont city-header-back"},[this._v("")])])],1)},staticRenderFns:[]};var j=i("VU/8")({name:"CityHeader"},N,!1,function(t){i("GmRG")},"data-v-cdf02b40",null).exports,I=i("GQaK"),H={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",searchResult:[],timer:null}},computed:{hasNoData:function(){return!this.searchResult.length}},mounted:function(){this.scroll=new I.a(this.$refs.result,{click:!0})},watch:{keyword:function(){var t=this;this.keyword?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.getCityByKeyworld()},100)):this.searchResult=[]}},methods:{getCityByKeyworld:function(){var t=this,e=[];for(var i in this.cities)this.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});this.searchResult=e},handleCityClick:function(t){this.$store.dispatch("changeCity",t.target.innerText),this.$router.push("/")}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"result",staticClass:"search-result"},[i("ul",[t._l(t.searchResult,function(e){return i("li",{staticClass:"result-item border-bottom",on:{click:t.handleCityClick}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"result-item no-data"},[t._v("没有匹配数据")])],2)])])},staticRenderFns:[]};var T=i("VU/8")(H,E,!1,function(t){i("SZzC")},"data-v-ef2e53a2",null).exports,q={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},data:function(){return{}},computed:{currenCity:function(){return this.$store.state.city}},mounted:function(){this.scroll=new I.a(this.$refs.listWrapper,{click:!0})},methods:{handleCityClick:function(t){this.$store.dispatch("changeCity",t.target.innerText),this.$router.push("/")}},watch:{letter:function(){if(this.letter){var t="#"==this.letter?this.$refs[this.letter]:this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"listWrapper",staticClass:"list"},[i("div",[i("div",{ref:"#",staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(t.currenCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:t.handleCityClick}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,a){return i("div",{key:a,ref:a,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(a))]),t._v(" "),i("div",{staticClass:"city-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"city-item border-bottom",on:{click:t.handleCityClick}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var L=i("VU/8")(q,R,!1,function(t){i("lkEO")},"data-v-6399605e",null).exports,P={name:"CityAlphabet",props:{letters:Array},data:function(){return{touchStatus:!1,timer:null}},methods:{handleLetterClick:function(t){this.$emit("letterChange",t.target.innerText)},handleTouchStart:function(t){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=e.$refs["#"][0].offsetTop,a=t.touches[0].clientY-79,s=Math.floor((a-i)/18);s>=0&&s<e.letters.length&&e.$emit("letterChange",e.letters[s])},16)},handleTouchEnd:function(t){this.touchStatus=!1}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alphabet"},[i("ul",{staticClass:"list",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick}},[t._v("\n      "+t._s(e)+"\n    ")])}),0)])},staticRenderFns:[]};var O={name:"City",components:{CityHeader:j,CitySearch:T,CityList:L,CityAlphabet:i("VU/8")(P,F,!1,function(t){i("WTK8")},"data-v-cbf498dc",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t.unshift("#"),t}},mounted:function(){this.getCitiesData()},methods:{getCitiesData:function(){z.a.get("/api/city.json").then(this.getCitiesDataSucc)},getCitiesDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}},handleLetterChange:function(t){this.letter=t}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{letters:t.letters},on:{letterChange:t.handleLetterChange}})],1)},staticRenderFns:[]};var G=i("VU/8")(O,D,!1,function(t){i("3hAk")},"data-v-2d8bfa75",null).exports,V={name:"DetailHeader",props:{sightName:String},data:function(){return{isAbsHeader:!0,opacityStyle:{opacity:0}}},mounted:function(){window.addEventListener("scroll",this.handleWindowScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleWindowScroll)},methods:{handleWindowScroll:function(t){var e=document.documentElement.scrollTop,i=.55*document.documentElement.clientWidth-43;if(e>10){this.isAbsHeader=!1;var a=e/i+.2;a=a>1?1:a,this.opacityStyle={opacity:a}}else this.isAbsHeader=!0}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isAbsHeader,expression:"isAbsHeader"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont header-abs-back"},[t._v("")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAbsHeader,expression:"!isAbsHeader"}],staticClass:"header-fixed",style:t.opacityStyle},[i("div",{staticClass:"name"},[t._v(t._s(t.sightName))]),t._v(" "),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-fixed-back"},[t._v("")])])],1)],1)},staticRenderFns:[]};var W=i("VU/8")(V,A,!1,function(t){i("WGMW")},"data-v-317acb31",null).exports,M={name:"CommonGallary",props:{images:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("closeGallary")}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallary",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.images,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t,alt:"gallary"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Z=i("VU/8")(M,B,!1,function(t){i("hVoc")},"data-v-b099b7f6",null).exports,K={name:"DetailBanner",props:{bannerImg:String,sightName:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},components:{CommonGallary:Z},methods:{handleBannerClick:function(){this.showGallary=!0},hanleCloseGallary:function(){this.showGallary=!1}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:"banner"}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"sight-name"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{images:t.gallaryImgs},on:{closeGallary:t.hanleCloseGallary}})],1)},staticRenderFns:[]};var X=i("VU/8")(K,Y,!1,function(t){i("xFAl")},"data-v-414c6d07",null).exports,J={name:"DetailList",props:{categoryList:Array}},Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-list"},[e("div",{staticClass:"base-info"})])}]};var tt={name:"Detail",components:{DetailHeader:W,DetailBanner:X,DetailList:i("VU/8")(J,Q,!1,function(t){i("Spd1")},"data-v-b370b10a",null).exports},data:function(){return{sightName:"",bannerImg:"",categoryList:[],gallaryImgs:[]}},mounted:function(){console.log("detail mounted"),this.getDetailInfo()},methods:{getDetailInfo:function(){z.a.get("/api/detail.json").then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.categoryList=e.categoryList,this.gallaryImgs=e.gallaryImgs}}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("detail-header",{attrs:{sightName:this.sightName}}),this._v(" "),e("detail-banner",{attrs:{bannerImg:this.bannerImg,sightName:this.sightName,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-list",{attrs:{categoryList:this.categoryList}})],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("rZZk")},"data-v-4f593ebc",null).exports;a.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",base:"/travel/",component:$},{path:"/city",name:"City",base:"/travel/",component:G},{path:"/detail/:id",name:"Detail",base:"/travel/",component:it}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),st="上海";try{localStorage.currentCity&&(st=localStorage.currentCity)}catch(t){}var nt={city:st};a.a.use(l.a);var rt=new l.a.Store({state:nt,mutations:{changeCity:function(t,e){t.city=e;try{localStorage.currentCity=e}catch(t){}}},actions:{changeCity:function(t,e){t.commit("changeCity",e)}}}),ct=i("v5o6"),ot=i.n(ct),lt=i("F3EI"),dt=i.n(lt);i("9n10"),i("M6Sr"),i("CCTB"),i("TzC8"),i("v2ns");a.a.config.productionTip=!1,a.a.use(dt.a),ot.a.attach(document.body),new a.a({el:"#app",router:at,store:rt,components:{App:n},template:"<App/>"})},PSMO:function(t,e){},SZzC:function(t,e){},Spd1:function(t,e){},TzC8:function(t,e){},WGMW:function(t,e){},WTK8:function(t,e){},X6Ol:function(t,e){},hVoc:function(t,e){},i5K1:function(t,e){},lcez:function(t,e){},lkEO:function(t,e){},ogZP:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=i("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(s,n,!1,null,null,null);e.default=r.exports},rZZk:function(t,e){},v2ns:function(t,e){},xFAl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ba85419740857b560911.js.map