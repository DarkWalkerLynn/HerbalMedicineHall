
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/chinese_medicine/chinese_medicine","pages/acupuncture/acupuncture","pages/me/me","pages/me/login_verification","pages/me/regist","pages/me/login_password","pages/search/search","pages/chinese_medicine/chinese_medicine_detail","pages/acupuncture/acupuncture_detail","pages/prescription/prescription","pages/prescription/prescription_detail","pages/chinese_medicine/chinese_medicine_list","pages/acupuncture/acupuncture_list"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#909399","selectedColor":"#303133","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/chinese_medicine/chinese_medicine","iconPath":"static/chinese_medicine.png","selectedIconPath":"static/chinese_medicine.png","text":"中药"},{"pagePath":"pages/acupuncture/acupuncture","iconPath":"static/acupuncture.png","selectedIconPath":"static/acupuncture.png","text":"易学针灸"},{"pagePath":"pages/prescription/prescription","iconPath":"static/common_patent_medicines.png","selectedIconPath":"static/common_patent_medicines.png","text":"常用方剂"},{"pagePath":"pages/me/me","iconPath":"static/me.png","selectedIconPath":"static/me.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"HerbalMedicineHall","compilerVersion":"2.9.8","entryPagePath":"pages/chinese_medicine/chinese_medicine","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/chinese_medicine/chinese_medicine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"中药"}},{"path":"/pages/acupuncture/acupuncture","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"易学针灸"}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/me/login_verification","meta":{},"window":{"navigationBarTitleText":"短信验证登录"}},{"path":"/pages/me/regist","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/me/login_password","meta":{},"window":{"navigationBarTitleText":"账号密码登录"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/chinese_medicine/chinese_medicine_detail","meta":{},"window":{"navigationBarTitleText":"中药详情"}},{"path":"/pages/acupuncture/acupuncture_detail","meta":{},"window":{"navigationBarTitleText":"穴位详情"}},{"path":"/pages/prescription/prescription","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"常用方剂"}},{"path":"/pages/prescription/prescription_detail","meta":{},"window":{"navigationBarTitleText":"方剂详情"}},{"path":"/pages/chinese_medicine/chinese_medicine_list","meta":{},"window":{"navigationBarTitleText":"中药列表"}},{"path":"/pages/acupuncture/acupuncture_list","meta":{},"window":{"navigationBarTitleText":"穴位列表"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
