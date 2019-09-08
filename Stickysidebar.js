(function(a){a.fn.theiaStickySidebar=function(b){function d(h,i){return!(!0!==h.initialized)||!(a('body').width()<h.minWidth)&&(f(h,i),!0)}function f(h,i){h.initialized=!0,a('head').append(a('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),i.each(function(){function j(){l.fixedScrollTop=0,l.sidebar.css({'min-height':'1px'}),l.stickySidebar.css({position:'static',width:''})}function k(p){var q=p.height();return p.children().each(function(){q=Math.max(q,a(this).height())}),q}var l={};l.sidebar=a(this),l.options=h||{},l.container=a(l.options.containerSelector),0==l.container.size()&&(l.container=l.sidebar.parent()),l.sidebar.parents().css('-webkit-transform','none'),l.sidebar.css({position:'relative',overflow:'visible','-webkit-box-sizing':'border-box','-moz-box-sizing':'border-box','box-sizing':'border-box'}),l.stickySidebar=l.sidebar.find('.theiaStickySidebar'),0==l.stickySidebar.length&&(l.sidebar.find('script').remove(),l.stickySidebar=a('<div>').addClass('theiaStickySidebar').append(l.sidebar.children()),l.sidebar.append(l.stickySidebar)),l.marginTop=parseInt(l.sidebar.css('margin-top')),l.marginBottom=parseInt(l.sidebar.css('margin-bottom')),l.paddingTop=parseInt(l.sidebar.css('padding-top')),l.paddingBottom=parseInt(l.sidebar.css('padding-bottom'));var m=l.stickySidebar.offset().top,n=l.stickySidebar.outerHeight();l.stickySidebar.css('padding-top',1),l.stickySidebar.css('padding-bottom',1),m-=l.stickySidebar.offset().top,n=l.stickySidebar.outerHeight()-n-m,0==m?(l.stickySidebar.css('padding-top',0),l.stickySidebarPaddingTop=0):l.stickySidebarPaddingTop=1,0==n?(l.stickySidebar.css('padding-bottom',0),l.stickySidebarPaddingBottom=0):l.stickySidebarPaddingBottom=1,l.previousScrollTop=null,l.fixedScrollTop=0,j(),l.onScroll=function(p){if(p.stickySidebar.is(':visible')){if(a('body').width()<p.options.minWidth)return void j();if(p.sidebar.outerWidth(!0)+50>p.container.width())return void j();var q=a(document).scrollTop(),r='static';if(q>=p.container.offset().top+(p.paddingTop+p.marginTop-p.options.additionalMarginTop)){var x,s=p.paddingTop+p.marginTop+h.additionalMarginTop,t=p.paddingBottom+p.marginBottom+h.additionalMarginBottom,u=p.container.offset().top,v=p.container.offset().top+k(p.container),w=0+h.additionalMarginTop,y=p.stickySidebar.outerHeight()+s+t<a(window).height();x=y?w+p.stickySidebar.outerHeight():a(window).height()-p.marginBottom-p.paddingBottom-h.additionalMarginBottom;var z=u-q+p.paddingTop+p.marginTop,A=v-q-p.paddingBottom-p.marginBottom,B=p.stickySidebar.offset().top-q,C=p.previousScrollTop-q;'fixed'==p.stickySidebar.css('position')&&'modern'==p.options.sidebarBehavior&&(B+=C),'legacy'==p.options.sidebarBehavior&&(B=x-p.stickySidebar.outerHeight(),B=Math.max(B,x-p.stickySidebar.outerHeight())),B=0<C?Math.min(B,w):Math.max(B,x-p.stickySidebar.outerHeight()),B=Math.max(B,z),B=Math.min(B,A-p.stickySidebar.outerHeight());var D=p.container.height()==p.stickySidebar.outerHeight();r=D||B!=w?D||B!=x-p.stickySidebar.outerHeight()?q+B-p.sidebar.offset().top-p.paddingTop<=h.additionalMarginTop?'static':'absolute':'fixed':'fixed'}if('fixed'==r)p.stickySidebar.css({position:'fixed',width:p.sidebar.width(),top:B,left:p.sidebar.offset().left+parseInt(p.sidebar.css('padding-left'))});else if('absolute'==r){var E={};'absolute'!=p.stickySidebar.css('position')&&(E.position='absolute',E.top=q+B-p.sidebar.offset().top-p.stickySidebarPaddingTop-p.stickySidebarPaddingBottom),E.width=p.sidebar.width(),E.left='',p.stickySidebar.css(E)}else'static'==r&&j();'static'!=r&&!0==p.options.updateSidebarHeight&&p.sidebar.css({'min-height':p.stickySidebar.outerHeight()+p.stickySidebar.offset().top-p.sidebar.offset().top+p.paddingBottom}),p.previousScrollTop=q}},l.onScroll(l),a(document).scroll(function(p){return function(){p.onScroll(p)}}(l)),a(window).resize(function(p){return function(){p.stickySidebar.css({position:'static'}),p.onScroll(p)}}(l))})}b=a.extend({containerSelector:'',additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,sidebarBehavior:'modern'},b),b.additionalMarginTop=parseInt(b.additionalMarginTop)||0,b.additionalMarginBottom=parseInt(b.additionalMarginBottom)||0,function(h,i){var j=d(h,i);j||(console.log('TST: Body width smaller than options.minWidth. Init is delayed.'),a(document).scroll(function(k,l){return function(m){var n=d(k,l);n&&a(this).unbind(m)}}(h,i)),a(window).resize(function(k,l){return function(m){var n=d(k,l);n&&a(this).unbind(m)}}(h,i)))}(b,this)}})(jQuery);
