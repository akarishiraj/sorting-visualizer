(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],[,,,function(e,t,r){"use strict";function a(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}r.r(t),r.d(t,"getRandomNum",(function(){return a})),r.d(t,"getRandomArray",(function(){return n})),r.d(t,"arraysAreEqual",(function(){return l}));var n=function(){for(var e=[],t=0;t<20;t++)e.push(a(5,450));return e};function l(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}},,,function(e,t,r){e.exports={Layout:"Layout_Layout__2BpO9"}},,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(8),c=r.n(l),o=(r(14),r(15),r(6)),s=r.n(o),i=function(e){return n.a.createElement("div",{className:s.a.Layout},n.a.createElement("header",null,n.a.createElement("h1",null,"Sorting Visualizer")),n.a.createElement("main",{className:s.a.Content},e.children))},u=r(1),d=r(2),f=function(e,t){var r=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{style:r.current.style}}));var l="".concat(e.height,"px");return n.a.createElement("div",{className:["bar"].join(" "),style:{height:l},ref:r},n.a.createElement("p",null,e.children))},h=f=Object(a.forwardRef)(f),b=function(e){var t=["button",e.className];return n.a.createElement("button",{disabled:e.disabled,className:t.join(" "),onClick:e.clicked},e.children)},g=function(e){var t=["color-square"];return"none"===e.color&&(t=[""]),n.a.createElement("div",{className:"color-status"},n.a.createElement("div",{className:t.join(" "),style:{backgroundColor:e.color}}),n.a.createElement("div",{className:"color-desc"},e.children))},m=function(e){var t=e.statuses.map((function(e,t){return n.a.createElement(g,{key:t,color:""!==e.color?e.color:"none"},""===e.color&&n.a.createElement("div",{className:"color-wheel"}),e.desc)}));return n.a.createElement("div",{className:"color-legend"},t)},p=function(e,t){var r=Object(a.useRef)();return Object(a.useImperativeHandle)(t,(function(){return{classList:r.current.classList}})),n.a.createElement("div",{className:"play-controls",ref:r},n.a.createElement("div",{className:"buttons"},n.a.createElement("svg",{onClick:e.backwardStepClicked,disabled:e.disabled,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"step-backward",className:"svg-inline--fa fa-step-backward fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"})),e.paused?n.a.createElement(b,{className:"play-control",clicked:e.playClicked,disabled:e.disabled},e.playText):n.a.createElement(b,{className:"burgundy play-control",clicked:e.pauseClicked,disabled:e.disabled},e.pauseText),n.a.createElement("svg",{onClick:e.forwardStepClicked,disabled:e.disabled,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"step-forward",className:"svg-inline--fa fa-step-forward fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"}))))},E=p=Object(a.forwardRef)(p),v=function(e,t){var r=Object(a.useRef)(),l=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)(),s=["dropdown",e.className];Object(a.useImperativeHandle)(t,(function(){return{children:r.current.children,caretClassList:c.current.classList,optionsClassList:l.current.classList}}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:""},e.label),n.a.createElement("div",{className:s.join(" "),ref:r,onClick:function(){l.current.classList.toggle("collapsed"),""===l.current.style.height||"0px"===l.current.style.height?l.current.style.height=e.height:l.current.style.height=0,c.current.classList.toggle("flip")}},n.a.createElement("h2",{className:"default-value",ref:o},n.a.createElement("span",null,e.defaultValue),n.a.createElement("svg",{ref:c,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"svg-inline--fa fa-caret-down fa-w-10",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},n.a.createElement("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"}))),n.a.createElement("ul",{className:"collapsed",ref:l},e.options)))},O=v=Object(a.forwardRef)(v),S=["Bubble Sort","Selection Sort","Insertion Sort","Merge Sort","Quick Sort"],C=function(e,t){var r=Object(a.useRef)(),l=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{children:r.current.children,classList:r.current.classList,playControls:o.current}})),Object(a.useEffect)((function(){void 0===!l&&console.log(l.current)}),[l]);var s,i=S.map((function(t){return n.a.createElement("li",{key:t,onClick:function(){return r=t,e.changedSortingFunction(r),void(c.current.children[0].children[0].innerHTML=r);var r}},t)}));return e.heights&&(s=e.heights.map((function(t,r){return n.a.createElement(h,{key:r,height:t},e.showHeights&&t)}))),n.a.createElement("div",{className:"bars-container"},n.a.createElement(O,{height:3.27*S.length+"rem",ref:c,defaultValue:"Merge Sort",options:i,changedSortingFunction:e.changedSortingFunction}),n.a.createElement("div",{className:"bars",ref:r},e.disableControls?n.a.createElement("div",{className:"invalid-inputs hide-invalid",ref:l},n.a.createElement("h1",null,"Please place valid inputs"),n.a.createElement("svg",{className:"svg",id:"f4dfef0e-e963-4752-8b60-16883a06d9db","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"1080.0487",height:"748.00219",viewBox:"0 0 1080.0487 748.00219"},n.a.createElement("title",null,"cancel"),n.a.createElement("path",{d:"M832.20759,587.46822c0,67.693-40.24241,91.32887-89.88394,91.32887s-89.88394-23.63587-89.88394-91.32887,89.88394-153.80916,89.88394-153.80916S832.20759,519.77523,832.20759,587.46822Z",transform:"translate(-59.97565 -75.99891)",fill:"#fa9f42"}),n.a.createElement("polygon",{points:"679.994 535.79 718.305 465.702 680.138 526.903 680.552 501.43 706.956 450.722 680.662 494.688 681.406 448.873 709.68 408.504 681.523 441.669 681.988 357.66 679.191 464.109 650.56 420.284 678.845 473.092 676.166 524.259 676.087 522.901 642.948 476.597 675.986 527.699 675.651 534.098 675.591 534.195 675.619 534.72 668.823 603 677.902 603 678.992 597.484 711.949 546.507 679.074 592.443 679.994 535.79",fill:"#3f3d56"}),n.a.createElement("path",{d:"M1140.02435,369.81269c0,129.31047-76.873,174.46085-171.7007,174.46085s-171.7007-45.15038-171.7007-174.46085S968.32365,75.99891,968.32365,75.99891,1140.02435,240.50222,1140.02435,369.81269Z",transform:"translate(-59.97565 -75.99891)",fill:"#f2f2f2"}),n.a.createElement("polygon",{points:"902.093 448.494 903.851 340.273 977.035 206.388 904.127 323.296 904.918 274.635 955.355 177.771 905.127 261.758 905.127 261.759 906.549 174.24 960.558 97.124 906.772 160.478 907.661 0 902.078 212.444 902.537 203.68 847.625 119.628 901.656 220.503 896.54 318.246 896.387 315.652 833.084 227.2 896.196 324.817 895.556 337.041 895.441 337.225 895.494 338.228 882.513 586.21 899.856 586.21 901.937 458.123 964.894 360.745 902.093 448.494",fill:"#3f3d56"}),n.a.createElement("path",{d:"M1132.97565,640.5574c0,38.59549-250.36912,183.44369-543.05156,183.44369S59.97565,749.0362,59.97565,710.44071s231.44239,7.27952,524.12483,7.27952S1132.97565,601.96192,1132.97565,640.5574Z",transform:"translate(-59.97565 -75.99891)",fill:"#3f3d56"}),n.a.createElement("path",{d:"M1132.97565,640.5574c0,38.59549-250.36912,183.44369-543.05156,183.44369S59.97565,749.0362,59.97565,710.44071s231.44239,7.27952,524.12483,7.27952S1132.97565,601.96192,1132.97565,640.5574Z",transform:"translate(-59.97565 -75.99891)",opacity:"0.1"}),n.a.createElement("path",{d:"M1132.97565,640.5574c0,38.59549-250.36912,139.76663-543.05156,139.76663S59.97565,749.0362,59.97565,710.44071,291.418,674.04316,584.10048,674.04316,1132.97565,601.96192,1132.97565,640.5574Z",transform:"translate(-59.97565 -75.99891)",fill:"#3f3d56"}),n.a.createElement("ellipse",{cx:"535.87833",cy:"641.77394",rx:"225.04403",ry:"17.40672",opacity:"0.1"}),n.a.createElement("path",{d:"M417.57367,368.96457s65.88345,1.22006,53.68281,12.81067-57.953,0-57.953,0Z",transform:"translate(-59.97565 -75.99891)",fill:"#a0616a"}),n.a.createElement("path",{d:"M280.30415,228.18183s26.60021-4.75031,35.84921,16.72359,28.244,82.71589,28.244,82.71589,50.83308,33.64785,60.079,32.54232,25.05178,1.15023,22.15247,11.2372-1.6122,21.52484-8.28694,22.92668-17.29058-11.97954-25.415-5.53421-80.53015-17.09648-85.17856-21.97431-43.27878-110.50134-43.27878-110.50134S266.01479,227.83769,280.30415,228.18183Z",transform:"translate(-59.97565 -75.99891)",fill:"#fa9f42"}),n.a.createElement("polygon",{points:"277.379 605.607 280.429 631.228 254.808 637.939 240.167 631.228 240.167 608.657 277.379 605.607",fill:"#a0616a"}),n.a.createElement("polygon",{points:"208.445 622.078 211.495 647.699 185.874 654.41 171.233 647.699 171.233 625.128 208.445 622.078",fill:"#a0616a"}),n.a.createElement("path",{d:"M339.7946,401.60128l11.59061,42.0922L368.4661,529.098s4.88026,20.74108-4.88025,45.75239S336.13441,681.60593,339.7946,686.48618s-41.48217,8.54045-40.87214,3.66019,6.71036-71.98376,6.71036-71.98376,8.54044-59.1731,12.81067-66.49348-19.521-25.62134-19.521-25.62134-6.10031,70.15367-15.25079,76.254S275.74125,702.957,271.471,704.17711s-35.38185,6.10032-39.042,0,0-107.97565,0-107.97565,20.74108-77.47406,16.47086-88.45463-1.8301-57.953-1.8301-57.953-15.86083-35.99189-7.32038-54.90287Z",transform:"translate(-59.97565 -75.99891)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M337.96451,167.349s-25.62134,31.72166-24.40128,45.75239-40.26211-25.62134-40.26211-25.62134,29.89157-40.2621,29.89157-48.80255S337.96451,167.349,337.96451,167.349Z",transform:"translate(-59.97565 -75.99891)",fill:"#a0616a"}),n.a.createElement("circle",{cx:"277.68384",cy:"62.98363",r:"40.26211",fill:"#a0616a"}),n.a.createElement("path",{d:"M236.19284,378.78c-1.824,6.79577-4.08719,14.50047-3.76385,20.99122.20746,4.20313,11.36489,6.96045,26.79255,8.76616,14.30529,1.67758,32.283,2.53161,48.62569,2.97085,17.16021.46363,32.50245.46363,39.87779.46363,21.96115,0,4.27022-14.03074-4.27023-20.74109s-6.71035-101.87533-6.10031-114.076-5.49029-47.58249-5.49029-54.29285-14.35407-24.22438-14.35407-24.22438-3.33686,9.58362-16.75756-3.227-31.11163-16.47086-31.11163-16.47086c-13.4207,4.88025-35.99188,58.56306-37.21194,67.71354-.49417,3.71507-.08542,22.742.74422,44.46523,1.20174,31.75216,3.30029,69.2874,4.74606,73.27093C239.06,367.531,237.7973,372.80166,236.19284,378.78Z",transform:"translate(-59.97565 -75.99891)",fill:"#fa9f42"}),n.a.createElement("polygon",{points:"241.387 338.413 245.657 353.664 229.186 370.745 223.696 346.953 241.387 338.413",fill:"#a0616a"}),n.a.createElement("path",{d:"M306.85288,700.51692s12.81067,14.64076,22.57118,4.88025,9.15048-15.86083,10.98058-15.86083,29.28153,24.40128,29.28153,24.40128,46.97245,10.98057,21.35111,18.911-98.21513,2.44013-98.21513,0-1.8301-34.77182,4.88025-34.77182Z",transform:"translate(-59.97565 -75.99891)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M237.91927,716.98778s12.81067,14.64076,22.57118,4.88025,9.15048-15.86083,10.98058-15.86083,29.28153,24.40128,29.28153,24.40128,46.97246,10.98057,21.35112,18.911-98.21514,2.44013-98.21514,0-1.8301-34.77182,4.88025-34.77182Z",transform:"translate(-59.97565 -75.99891)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M292.45633,171.12178c-1.30065.84028-2.99385,1.69175-4.29617.85407a194.661,194.661,0,0,1-10.803-37.40333c-.82225-4.49515-1.393-9.49233,1.10424-13.3194.9849-1.50939,2.40274-2.74371,3.12416-4.39532,1.09254-2.50124.37345-5.39643.73641-8.10163.76042-5.66737,6.11775-9.62022,11.505-11.5373s11.23835-2.51176,16.37345-5.02733c4.87591-2.38861,8.78111-6.35,13.3025-9.35611s10.31287-5.0615,15.34812-3.03018c4.45436,1.797,7.229,6.33734,11.43921,8.64913,2.8571,1.5688,6.17272,2.00534,9.36187,2.67875a59.9218,59.9218,0,0,1,24.33972,11.30812,17.67252,17.67252,0,0,1,4.42964,4.56639c5.40289,8.8953-4.27062,20.98885-.00283,30.48113l-9.22662-7.28052a32.13074,32.13074,0,0,0-8.24035-5.237c-3.05623-1.15765-6.67559-1.29745-9.45179.42692-3.89609,2.42-4.95269,7.47582-6.3137,11.8557s-4.3705,9.23676-8.95561,9.12455c-6.23545-.15259-8.41611-8.85468-14.012-11.60979-3.6479-1.796-8.23962-.61324-11.34953,2.00618-3.10968,2.61923-4.97572,6.41973-6.34429,10.24826-.85526,2.39254-1.65774,5.08957-3.1768,7.16346-1.6754,2.28735-3.81829,2.47136-5.60773,4.17946C301.08225,162.81226,298.21838,167.39921,292.45633,171.12178Z",transform:"translate(-59.97565 -75.99891)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M236.19284,378.78c7.58272,10.99889,16.12928,22.34547,23.0287,29.75738,14.30529,1.67758,32.283,2.53161,48.62569,2.97085a38.52679,38.52679,0,0,0-10.75486-9.90691C289.162,396.721,270.251,338.768,270.251,338.768s23.18122-59.78313,29.28154-82.35431-17.69093-35.38185-17.69093-35.38185C270.861,211.88135,251.95,233.23247,251.95,233.23247s-9.65075,29.1107-18.7768,57.88593c1.20174,31.75216,3.30029,69.2874,4.74606,73.27093C239.06,367.531,237.7973,372.80166,236.19284,378.78Z",transform:"translate(-59.97565 -75.99891)",opacity:"0.1"}),n.a.createElement("path",{d:"M280.01148,216.15157s23.79124,12.81067,17.69092,35.38185-29.28153,82.35431-29.28153,82.35431,18.911,57.953,26.8414,62.83329,18.911,16.47086,10.37055,22.57118-14.64077,15.86083-20.74109,12.81067-6.10032-20.13105-16.47086-20.13105-52.46275-63.44332-53.07278-70.15367,34.77182-113.46594,34.77182-113.46594S269.0309,207.00109,280.01148,216.15157Z",transform:"translate(-59.97565 -75.99891)",fill:"#fa9f42"}),n.a.createElement("path",{d:"M774.7215,382.89095l-6.8628-6.86279a21.34485,21.34485,0,0,0-30.18617,0L604.55734,509.14335,471.44215,376.02816a21.34485,21.34485,0,0,0-30.18617,0l-6.86279,6.86279a21.34484,21.34484,0,0,0,0,30.18618L567.50837,546.19232,434.39319,679.3075a21.34484,21.34484,0,0,0,0,30.18618l6.86279,6.86279a21.34485,21.34485,0,0,0,30.18617,0L604.55734,583.24128,737.67253,716.35647a21.34485,21.34485,0,0,0,30.18617,0l6.8628-6.86279a21.34486,21.34486,0,0,0,0-30.18618L641.60631,546.19232,774.7215,413.07713A21.34486,21.34486,0,0,0,774.7215,382.89095Z",transform:"translate(-59.97565 -75.99891)",fill:"#ff6584"}),n.a.createElement("path",{d:"M429.6427,686.54463,558.80505,557.38235l-1.24334-1.24334L434.39317,679.30748A21.2598,21.2598,0,0,0,429.6427,686.54463Z",transform:"translate(-59.97565 -75.99891)",opacity:"0.1"}),n.a.createElement("path",{d:"M432.5526,387.21818a21.34488,21.34488,0,0,1,30.18621,0L595.854,520.33335,728.96915,387.21818a21.34488,21.34488,0,0,1,30.18621,0l6.86279,6.86279a21.34354,21.34354,0,0,1,4.75047,22.949l3.95289-3.95289a21.34479,21.34479,0,0,0,0-30.18614l-6.86279-6.86279a21.3449,21.3449,0,0,0-30.18621,0L604.55734,509.14331,471.44217,376.02814a21.3449,21.3449,0,0,0-30.18621,0l-6.86279,6.86279a21.2598,21.2598,0,0,0-4.75047,7.23715Z",transform:"translate(-59.97565 -75.99891)",opacity:"0.1"}),n.a.createElement("path",{d:"M642.84968,547.43565l-9.94669,9.9467L766.01815,690.49752a21.34356,21.34356,0,0,1,4.75047,22.94907l3.95289-3.953a21.34479,21.34479,0,0,0,0-30.18614Z",transform:"translate(-59.97565 -75.99891)",opacity:"0.1"}),n.a.createElement("path",{d:"M214.97565,636.19129c0,56.22159-33.42284,75.85206-74.652,75.85206s-74.652-19.63047-74.652-75.85206,74.652-127.7443,74.652-127.7443S214.97565,579.96971,214.97565,636.19129Z",transform:"translate(-59.97565 -75.99891)",fill:"#fa9f42"}),n.a.createElement("polygon",{points:"78.393 580.392 110.212 522.181 78.513 573.011 78.857 551.854 100.786 509.739 78.948 546.255 79.566 508.204 103.048 474.675 79.663 502.221 80.049 432.448 77.726 520.858 53.947 484.46 77.438 528.318 75.214 570.815 75.148 569.687 47.625 531.23 75.064 573.672 74.786 578.987 74.736 579.067 74.759 579.503 69.115 636.212 76.656 636.212 77.561 631.631 104.933 589.293 77.629 627.444 78.393 580.392",fill:"#3f3d56"}))):s),n.a.createElement(m,{statuses:e.statuses}),n.a.createElement(E,{ref:o,playClicked:function(){e.sort(e.sortConfig,e.heights)},pauseClicked:function(){return e.pause(e.setTimeouts)},forwardStepClicked:function(){return e.stepped(e.setTimeouts,"+")},backwardStepClicked:function(){return e.stepped(e.setTimeouts,"-")},paused:e.paused,disabled:e.disableControls,playText:"Sort",pauseText:"Pause",states:e.states,sliderChanged:e.sliderChanged,index:e.index,isSorting:e.isSorting}),n.a.createElement(b,{className:"burgundy new-array",clicked:e.generateNewArray,disabled:e.disableControls},"New Array"))},y=C=Object(a.forwardRef)(C),j=function(e){return n.a.createElement("div",{className:"card"},e.children)},N=function(e,t){var r=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{value:r.current.value}}));var l=["range",e.className];return n.a.createElement("div",{className:l.join(" ")},n.a.createElement("label",{htmlFor:e.htmlFor},e.label),n.a.createElement("input",{ref:r,type:"range",min:e.min,max:e.max,step:e.step,value:e.value,onChange:e.onChange,disabled:e.disabled,id:e.id,name:e.name}),n.a.createElement("div",{className:"range-labels"},n.a.createElement("p",null,e.leftText),n.a.createElement("p",null,e.rightText)))},A=N=Object(a.forwardRef)(N),k=function(e,t){var r=Object(a.useRef)();return Object(a.useImperativeHandle)(t,(function(){return{value:r.current.value}})),n.a.createElement("div",{className:"counter"},n.a.createElement(b,{className:"decrement",clicked:function(){return e.changeNum("-")},disabled:e.disabled},"-"),n.a.createElement("input",{ref:r,type:"number",value:e.value,onChange:function(t){e.changedArray(t,r.current.value)},disabled:e.disabled}),n.a.createElement(b,{className:"increment",clicked:function(){return e.changeNum("+")},disabled:e.disabled},"+"))},T=k=Object(a.forwardRef)(k),R=function(e,t){var r=Object(a.useRef)(),l=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{classList:r.current.classList,children:r.current.children}}));var s,i;return e.configs&&(s=e.configs.map((function(t){return n.a.createElement("li",{key:t.label,onClick:function(){return function(t){e.changedSortingConfig(t),o.current.children[0].children[0].innerHTML=t.label}(t)}},t.label)}))),e.configs.length>0&&(i=e.configs[0].label),n.a.createElement("div",{className:"controls",ref:c},n.a.createElement(j,null,n.a.createElement("h2",{className:"title"},"Controls"),n.a.createElement(A,{min:"5",max:"100",step:"1",value:e.size,onChange:e.changedArraySize,disabled:e.disableControls,id:"arrSize",name:"arrSize",htmlFor:"arrSize",label:"Array Size",leftText:"5",rightText:"100"}),n.a.createElement(T,{ref:l,changeNum:function(t){c.current.classList.remove("shake");var r=Number(l.current.value);"-"===t&&r>5?(l.current.value=r-1,e.changedArraySize(null,l.current.value)):"+"===t&&r<100?(l.current.value=r+1,e.changedArraySize(null,l.current.value)):setTimeout((function(){c.current.classList.add("shake")}),100)},changedArray:e.changedArraySize,disabled:e.disableControls,value:e.size}),n.a.createElement(A,{min:"5",max:"2000",value:e.speed,onChange:e.changedSortingSpeed,id:"sortSpeed",name:"sortSpeed",htmlFor:"sortSpeed",label:"Sorting Speed",leftText:"Extremely Slow",rightText:"Extremely Fast"}),n.a.createElement("h2",{className:"title"},"Options"),n.a.createElement(O,{className:"small",ref:o,label:"Implementation",defaultValue:i,options:s,height:3.55*e.configs.length+"rem"})),n.a.createElement("div",{className:"error-message",ref:r},n.a.createElement("p",null)))},L=R=Object(a.forwardRef)(R),I=r(3);var M=["#AFD5AA","#F0F2EF","#5C5346","#A69F98","#8C6057","#5BC0EB","#FDE74C","#9BC53D","#E55934","#FA7921","#729EA1","#B5BD89","#DFBE99","#EC9192","#DB5375","#283d3b","#197278","#edddd4","#c44536","#555b6e","#89b0ae","#bee3db","#ffd6ba","#e6b89c","#cad2c5","#84a98c","#52796f","#354f52","#2f3e46","#64a6bd","#90a8c3","#ada7c9","#d7b9d5","#f4cae0","#114b5f","#1a936f","#88d498","#c6dabf","#f3e9d2","#ed6a5a","#f4f1bb","#9bc1bc","#5ca4a9","#e6ebe0","#0081a7","#00afb9","#fdfcdc","#fed9b7","#f07167","#3d5a80","#98c1d9","#e0fbfc","#ee6c4d","#293241"],P=[{color:"#577590",desc:"Not Sorted"},{color:"#f9c74f",desc:"Comparing"},{color:"#f94144",desc:"Swap Values"},{color:"#90be6d",desc:"Sorted"}],w=[{color:"#577590",desc:"Not Sorted"},{color:"#f9c74f",desc:"Comparing"},{color:"#FF784F",desc:"Current Smallest"},{color:"#f94144",desc:"Swap Values"},{color:"#90be6d",desc:"Sorted"}],x=[{color:"#577590",desc:"Not Sorted"},{color:"#f9c74f",desc:"Comparing"},{color:"#f94144",desc:"Swap Values"},{color:"#1B5299",desc:"Correct Position"},{color:"#90be6d",desc:"Sorted"}],H=[{color:"#577590",desc:"Not Sorted"},{color:"#f9c74f",desc:"Comparing"},{color:"#f94144",desc:"Swap Values"},{color:"#90be6d",desc:"Sorted"},{color:"",desc:"Sorted in Subarray"}],D=[{color:"#577590",desc:"Not Sorted"},{color:"#FF784F",desc:"Pivot"},{color:"#1D8A99",desc:"Pivot Index"},{color:"#f9c74f",desc:"Compare with Pivot"},{color:"#1B5299",desc:"Less than Pivot"},{color:"#EFD6AC",desc:"Greater than Pivot"},{color:"#f94144",desc:"Swap Values"},{color:"#90be6d",desc:"Sorted"}];function G(e,t,r){var a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}function F(e){for(var t=[],r=0;r<e.length;r++){var a=r;t.push([Object(u.a)(e),r,a,"GET-INITIAL"]);for(var n=r+1;n<e.length;n++)if(t.push([Object(u.a)(e),n,a,"CHECK-MIN"]),e[n]<e[a]){var l=void 0;l=a===r?null:a,a=n,t.push([Object(u.a)(e),n,l,"CHANGE-MIN"])}else t.push([Object(u.a)(e),n,a,"CHANGE-BACK"]);a!==r?(t.push([Object(u.a)(e),r,a,"SWAPPING-1"]),W(e,r,a),t.push([Object(u.a)(e),r,a,"SWAPPING-2"]),t.push([Object(u.a)(e),r,a,"SWAPPING-3"])):t.push([Object(u.a)(e),r,a,"NO-SWAP"])}return t.push([Object(u.a)(e),null,null,"ALL-SORTED"]),t}function W(e,t,r){var a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}function V(e){for(var t=[],r=1;r<e.length;r++){var a=e[r];t.push([Object(u.a)(e),r,null,"START"]);for(var n=r-1;n>=0;n--){if(!(e[n]>a)){t.push([Object(u.a)(e),n,n+1,"DONE-1"]);break}t.push([Object(u.a)(e),n,n+1,"SWAP-1"]),t.push([Object(u.a)(e),n,n+1,"SWAP-2"]),B(e,n,n+1),t.push([Object(u.a)(e),n,n+1,"SWAP-3"]),t.push([Object(u.a)(e),n,n+1,"SWAP-4"])}t.push([Object(u.a)(e),n,n+1,"DONE-2"]),t.push([Object(u.a)(e),n,n+1,"DONE-3"])}for(var l=0;l<e.length;l++)t.push([Object(u.a)(e),l,l,"COLOR-SORTED"]);return t.push([Object(u.a)(e),null,null,"ALL-SORTED"]),t}function B(e,t,r){var a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}function Z(e,t,r,a,n,l,c){var o=[],s=0,i=0,d=a,f=n,h=!1;for(0===a&&l===e.length-1&&(c.push([Object(u.a)(e),a,l,"LAST-MERGED"]),h=!0);s<t.length&&i<r.length;)if(c.push([Object(u.a)(e),d,f,"COMPARING"]),t[s]<r[i])c.push([Object(u.a)(e),d++,f,"CASE-LEFT"]),o.push(t[s]),s++;else{c.push([Object(u.a)(e),d,f,"CASE-RIGHT-INIT"]);for(var b=e[f],g=f;g>d;g--)e[g]=e[g-1];e[d]=b,c.push([Object(u.a)(e),d,f++,"CASE-RIGHT-SHIFT"]),c.push([Object(u.a)(e),d,++d,"CASE-RIGHT-REVERT"]),o.push(r[i]),i++}for(;s<t.length;)c.push([Object(u.a)(e),d,f,"ONE-SIDE"]),o.push(t[s]),s++,d++;for(;i<r.length;)c.push([Object(u.a)(e),f,d,"ONE-SIDE"]),o.push(r[i]),i++,f++;return h||c.push([Object(u.a)(e),a,l,"MERGED"]),[o,a,l]}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,a=arguments.length>3?arguments[3]:void 0;if(t<r){var n=X(e,t,r,a);z(e,t,n-1,a),z(e,n+1,r,a)}else t===r&&(a.push([Object(u.a)(e),t,r,"SORTED-1"]),a.push([Object(u.a)(e),t,r,"SORTED-2"]));return a}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,a=arguments.length>3?arguments[3]:void 0,n=e[t],l=t;a.push([Object(u.a)(e),t,r,"GET-PIVOT"]);for(var c=t+1;c<=r;c++)a.push([Object(u.a)(e),c,l,"COMPARE"]),n>e[c]?++l!==c?(a.push([Object(u.a)(e),l,c,"SWAP-1"]),a.push([Object(u.a)(e),l,c,"SWAP-2"]),K(e,l,c),a.push([Object(u.a)(e),l,c,"SWAP-3"]),a.push([Object(u.a)(e),[t,l],c,"SWAP-4"])):(a.push([Object(u.a)(e),t,c,"SAME-INDEX-1"]),a.push([Object(u.a)(e),t,c,"SAME-INDEX-2"])):a.push([Object(u.a)(e),c,l,"GREATER"]);return l!==t?(a.push([Object(u.a)(e),t,l,"SWAP-PIVOT-1"]),K(e,t,l),a.push([Object(u.a)(e),t,l,"SWAP-PIVOT-2"]),a.push([Object(u.a)(e),t,l,"SWAP-PIVOT-3"])):a.push([Object(u.a)(e),t,l,"NO-CHANGE"]),l!==r?a.push([Object(u.a)(e),[t,l],r+1,"REVERT-BOTH"]):a.push([Object(u.a)(e),t,l,"REVERT-LEFT"]),l}function K(e,t,r){var a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}F([15,7,4,11,12,11]),V((0,r(3).getRandomArray)());var U=(0,r(3).getRandomArray)();!function e(t,r,a,n){if(r<a){var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,a=arguments.length>3?arguments[3]:void 0,n=Math.floor((t+r)/2),l=e[n],c=t,o=r;a.push([Object(u.a)(e),n,n,"GET-PIVOT"]);for(;;){for(;e[c]<l;)c++;for(;e[o]>l;)o--;if(c>=o)return o;K(e,c++,o--)}}(t,r,a,n);e(t,r,l,n),e(t,l+1,a,n)}}(U,0,U.length-1,[]);var _=[{implementation:function(e){for(var t,r,a=!1,n=[],l=e.length-1;l>=0;l--){for(t=!0,r=0;r<l;r++)e[r]>e[r+1]&&(G(e,r,r+1),t=!1,a=!0),n.push([Object(u.a)(e),r,r+1,"COMPARING"]),a&&(n.push([Object(u.a)(e),r,r+1,"SWAPPING-1"]),n.push([Object(u.a)(e),r,r+1,"SWAPPING-2"])),a=!1;if(n.push([Object(u.a)(e),r-1,r,"LAST-SORTED"]),t){for(var c=0;c<=r;c++)n.push([Object(u.a)(e),c,r,"NO-SWAPS"]);break}}return n.push([Object(u.a)(e),0,0,"ALL-SORTED"]),n},args:[],label:"Iterative"}],q=[{implementation:F,args:[],label:"Iterative"}],J=[{implementation:V,args:[],label:"Iterative"}],Q=[{implementation:function(e){var t=[];return e.length<=1?e:(function e(t,r,a,n){if(r===a)return;var l=Math.floor((r+a)/2);e(t,r,l,n),e(t,l+1,a,n),function(e,t,r,a,n){var l=t,c=r+1,o=t,s=r+1,i=!1;0===t&&a===e.length-1&&(n.push([Object(u.a)(e),t,a,"LAST-MERGED"]),i=!0);for(;l<=r&&c<=a;)if(n.push([Object(u.a)(e),o,s,"COMPARING"]),e[o]<=e[s])n.push([Object(u.a)(e),o++,s,"CASE-LEFT"]),l++;else{n.push([Object(u.a)(e),o,s,"CASE-RIGHT-INIT"]);for(var d=e[s],f=s;f>o;f--)e[f]=e[f-1];e[o]=d,n.push([Object(u.a)(e),o,s++,"CASE-RIGHT-SHIFT"]),n.push([Object(u.a)(e),o,++o,"CASE-RIGHT-REVERT"]),c++}for(;l<=r;)n.push([Object(u.a)(e),o,o,"ONE-SIDE"]),o++,l++;for(;c<=a;)n.push([Object(u.a)(e),s,s,"ONE-SIDE"]),s++,c++;i||n.push([Object(u.a)(e),t,a,"MERGED"])}(t,r,l,a,n)}(e,0,e.length-1,t),t.push([Object(u.a)(e),0,e.length-1,"ALL-SORTED"]),t)},args:[],label:"Recursive"},{implementation:function(e){for(var t=[],r=e.map((function(e,t){return[[e],t]}));r.length>1;){for(var a=r.length%2!==0,n=[],l=0;l<r.length;l+=2){var c=r[l][0],o=r[l+1][0],s=r[l][1],i=r[l+1][1]+r[l+1][0].length-1,d=r[l+1][1];if(a&&l===r.length-3){var f=r[l+2][0],h=r[l+2][1]+r[l+2][0].length-1;o=Z(e,o,f,r[l+1][1],r[l+2][1],h,t)[0],i=h,l++}var b=Z(e,c,o,s,d,i,t);n.push(b)}r=n}return t.push([Object(u.a)(e),0,0,"ALL-SORTED"]),t},args:[],label:"Iterative"}],$=[{implementation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return z(e,t,r,a),a.push([Object(u.a)(e),t,r,"ALL-SORTED"]),a},args:[],label:"Recursive"}],Y=function(e){var t=Object(a.useState)(),r=Object(d.a)(t,2),l=r[0],c=r[1],o=Object(a.useState)(!1),s=Object(d.a)(o,2),i=s[0],f=s[1],h=Object(a.useState)(!1),b=Object(d.a)(h,2),g=b[0],m=b[1],p=Object(a.useState)(100),E=Object(d.a)(p,2),v=E[0],O=E[1],S=Object(a.useState)(5),C=Object(d.a)(S,2),j=C[0],N=C[1],A=Object(a.useState)(5),k=Object(d.a)(A,2),T=k[0],R=k[1],G=Object(a.useState)(),F=Object(d.a)(G,2),W=F[0],V=F[1],B=Object(a.useState)(!1),Z=Object(d.a)(B,2),z=Z[0],X=Z[1],K=Object(a.useState)({}),U=Object(d.a)(K,2),Y=U[0],ee=U[1],te=Object(a.useState)([]),re=Object(d.a)(te,2),ae=re[0],ne=re[1],le=Object(a.useState)(!1),ce=Object(d.a)(le,2),oe=ce[0],se=ce[1],ie=Object(a.useState)([{}]),ue=Object(d.a)(ie,2),de=ue[0],fe=ue[1],he=Object(a.useState)([]),be=Object(d.a)(he,2),ge=be[0],me=be[1],pe=Object(a.useState)([]),Ee=Object(d.a)(pe,2),ve=Ee[0],Oe=Ee[1],Se=Object(a.useState)(!0),Ce=Object(d.a)(Se,2),ye=Ce[0],je=Ce[1],Ne=Object(a.useState)([]),Ae=Object(d.a)(Ne,2),ke=Ae[0],Te=Ae[1],Re=Object(a.useRef)(),Le=Object(a.useRef)(),Ie=Object(a.useRef)(0),Me=Object(a.useRef)();Object(a.useEffect)((function(){qe("Merge Sort"),He(100)}),[]),Object(a.useEffect)((function(){v<=20&&se(!0),Re.current.children[0]&&xe(v),g||Pe()}),[v]),Object(a.useEffect)((function(){we()}),[l]),Object(a.useEffect)((function(){V((function(){return W}))}),[l]),Object(a.useEffect)((function(){if(!ye&&W){var e=Ie.current;e<0&&(e=0),0===ke.length?(Ve(l),W(ge.slice(e),l,j,ve,ke)):Be(e,ke.length,j,ve,l,ke)}else ye&&T!==j&&i&&Fe(Y,l)}),[ye]);var Pe=function(){for(var e=[],t=0;t<v;t++)e.push(Object(I.getRandomNum)(25,300));De(ve),X(!0),c(e),Oe([]),me([]),Te([]),Ie.current=0,Ie.current=-1,Me.current.value=0},we=function(){if(z&&!g)for(var e=Re.current.children,t=0;t<v;t++)e[t].style.backgroundColor="#577590"},xe=function(e){"bar"!==Re.current.children[0].classList[0]&&(e<5||e>100||isNaN(e)?Re.current.children[0].classList.remove("hide-invalid"):Re.current.children[0].classList.add("hide-invalid"))},He=function(e){Le.current.classList.remove("show-error"),m(!1),(e<5||e>100||isNaN(e))&&(Le.current.children[0].innerHTML="INVALID: ",isNaN(e)||""===e?Le.current.children[0].innerHTML+="INPUT NOT A NUMBER":e<5?Le.current.children[0].innerHTML+="SIZE LESS THAN MINIMUM":e>100&&(Le.current.children[0].innerHTML+="SIZE MORE THAN MAXIMUM"),Le.current.classList.add("show-error"),m(!0)),De(ve),X(!0),c(l),Oe([]),me([]),Te([]),Ie.current=0,Ie.current=-1,Me.current.value=0},De=function(e){for(var t=Ie.current;t<e.length;t++)clearTimeout(e[t]);f(!1),je(!0)},Ge=function(e){if(i){De(ve),Ie.current=Number(e.target.value);var t=Ie.current;f(!0),Be(t,ke.length,j,ve,l,ke),je(!1)}else{Ie.current=Number(e.target.value);var r=Ie.current;Be(r,r+1,0,ve,l,ke)}},Fe=function(e,t){var r=Ie.current;if(r>=ke.length-1&&-1!==r){c(t.sort((function(e,t){return e-t}))),Oe([]),Te([]),Ie.current=0,Ie.current=-1,Me.current.value=0;var a=e.implementation.apply(e,[Object(u.a)(t)].concat(Object(u.a)(e.args)));return me(a),void je(!1)}if(je(!1),W||qe("Merge Sort"),0===ge.length){var n=e.implementation.apply(e,[Object(u.a)(t)].concat(Object(u.a)(e.args)));me(n)}},We=function(e,t){for(var r=Re.current.children,a=0;a<r.length;a++)t[e].push({height:r[a].style.height,color:r[a].style.backgroundColor})},Ve=function(e){for(var t=Re.current.children,r=0;r<t.length;r++)t[r].style.height=e[r]+"px",t[r].style.backgroundColor="#577590",t.length<=20&&(t[r].children[0].innerHTML=e[r])},Be=function(e,t,r,a,n,l){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"+";e!==t-1&&f(!0);for(var o=Re.current.children,s=0,i=function(e){if(e===l.length-1)return a.push(setTimeout((function(){"+"===c&&(Me.current.value=++Ie.current);for(var t=0;t<o.length;t++){var r=l[e][t].height;o[t].style.height=r,o[t].style.backgroundColor=l[e][t].color,o.length<=20&&(o[t].children[0].innerHTML=r.substring(0,r.indexOf("px")))}Ze(n)}),r*s++)),"break";a.push(setTimeout((function(){"+"===c&&(Me.current.value=++Ie.current);for(var t=0;t<o.length;t++){var r=l[e][t].height;o[t].style.height=r,o[t].style.backgroundColor=l[e][t].color,o.length<=20&&(o[t].children[0].innerHTML=r.substring(0,r.indexOf("px")))}}),r*s++))},u=e;u<t;u++){var d=i(u);if("break"===d)break}},Ze=function(e){Re.current.classList.add("sorted"),X(!1),f(!1),je(!0)},ze=function(e,t,r,a,n){f(!0),Re.current.classList.remove("sorted");for(var l=Re.current.children,c=0;c<e.length;c++)n.push([]);for(var o=0;o<e.length;o++){var s=e[o][3],i=e[o][1],u=e[o][2];"COMPARING"===s?(l[i].style.backgroundColor="#f9c74f",l[u].style.backgroundColor="#f9c74f",0!==i&&(l[i-1].style.backgroundColor="#577590")):"SWAPPING-1"===s?(l[i].style.backgroundColor="#f94144",l[u].style.backgroundColor="#f94144"):"SWAPPING-2"===s?(l[i].style.height=e[o][0][i]+"px",l[u].style.height=e[o][0][u]+"px",t.length<=20&&(l[i].children[0].innerHTML=e[o][0][i],l[u].children[0].innerHTML=e[o][0][u])):"LAST-SORTED"===s?"NO-SWAPS"===e[o+1][3]?(i>=0&&(l[i].style.backgroundColor="#577590"),l[u].style.backgroundColor="#577590"):(l[u].style.backgroundColor="#90be6d",i>=0&&(l[i].style.backgroundColor="#577590")):"NO-SWAPS"===s&&(l[i].style.backgroundColor="#90be6d"),We(o,n)}Ve(t),n.unshift([]),We(0,n),Be(0,n.length,r,a,t,n)},Xe=function(e,t,r,a,n){f(!0),Re.current.classList.remove("sorted");for(var l=Re.current.children,c=0;c<e.length;c++)n.push([]);for(var o=0;o<e.length;o++){var s=e[o][3],i=e[o][1],u=e[o][2];"GET-INITIAL"===s?l[i].style.backgroundColor="#f94144":"CHECK-MIN"===s?l[i].style.backgroundColor="#f9c74f":"CHANGE-BACK"===s?l[i].style.backgroundColor="#577590":"CHANGE-MIN"===s?(l[i].style.backgroundColor="#FF784F",u&&(l[u].style.backgroundColor="#577590")):"SWAPPING-1"===s?l[u].style.backgroundColor="#f94144":"SWAPPING-2"===s?(l[i].style.height=e[o][0][i]+"px",l[u].style.height=e[o][0][u]+"px",t.length<=20&&(l[i].children[0].innerHTML=e[o][0][i],l[u].children[0].innerHTML=e[o][0][u])):"SWAPPING-3"===s?(l[i].style.backgroundColor="#90be6d",l[u].style.backgroundColor="#577590"):"NO-SWAP"===s&&(l[i].style.backgroundColor="#90be6d"),We(o,n)}Ve(t),n.unshift([]),We(0,n),Be(0,n.length,r,a,t,n)},Ke=function(e,t,r,a,n){f(!0),Re.current.classList.remove("sorted");for(var l=Re.current.children,c=0;c<e.length;c++)n.push([]);for(var o=0;o<e.length;o++){var s=e[o][3],i=e[o][1],u=e[o][2];"START"===s||"SWAP-1"===s?l[i].style.backgroundColor="#f9c74f":"SWAP-2"===s?(l[i].style.backgroundColor="#f94144",l[u].style.backgroundColor="#f94144"):"SWAP-3"===s?(l[i].style.height=e[o][0][i]+"px",l[u].style.height=e[o][0][u]+"px",t.length<=20&&(l[i].children[0].innerHTML=e[o][0][i],l[u].children[0].innerHTML=e[o][0][u])):"SWAP-4"===s?(l[i].style.backgroundColor="#f9c74f",l[u].style.backgroundColor="#577590"):"DONE-1"===s?l[i].style.backgroundColor="#f9c74f":"DONE-2"===s?(i>=0&&(l[i].style.backgroundColor="#577590"),l[u].style.backgroundColor="#1B5299"):"DONE-3"===s||"SORTED"===s?l[u].style.backgroundColor="#577590":"COLOR-SORTED"===s&&(l[i].style.backgroundColor="#90be6d"),We(o,n)}Ve(t),n.unshift([]),We(0,n),Be(0,n.length,r,a,t,n)},Ue=function(e,t,r,a,n){f(!0),Re.current.classList.remove("sorted");for(var l=Re.current.children,c="#577590",o="#577590",s=Object(I.getRandomNum)(0,M.length-1),i=M[s],u=0;u<e.length;u++)n.push([]);for(var d=0;d<e.length;d++){var h=e[d][3],b=e[d][1],g=e[d][2];if("COMPARING"===h)c=l[b].style.backgroundColor,o=l[g].style.backgroundColor,l[b].style.backgroundColor="#f9c74f",l[g].style.backgroundColor="#f9c74f";else if("CASE-LEFT"===h)l[b].style.backgroundColor=i,l[g].style.backgroundColor=o;else if("CASE-RIGHT-INIT"===h)l[b].style.backgroundColor="#f94144",l[g].style.backgroundColor="#f94144";else if("CASE-RIGHT-SHIFT"===h){for(var m=g;m>=b;m--)l[m].style.height=e[d][0][m]+"px",t.length<=20&&(l[m].children[0].innerHTML=e[d][0][m]);l[g].style.backgroundColor=c,l[b+1].style.backgroundColor="#f94144"}else"CASE-RIGHT-REVERT"===h?(l[b].style.backgroundColor=i,l[g].style.backgroundColor=c):"ONE-SIDE"===h?l[b].style.backgroundColor=i:"LAST-MERGED"===h?i="#90be6d":"MERGED"===h&&(i=M[++s%M.length]);We(d,n)}Ve(t),n.unshift([]),We(0,n),Be(0,n.length,r,a,t,n)},_e=function(e,t,r,a,n){f(!0),Re.current.classList.remove("sorted");for(var l=Re.current.children,c=0;c<e.length;c++)n.push([]);for(var o=0;o<e.length;o++){var s=e[o][3],i=e[o][1],u=e[o][2];if("GET-PIVOT"===s)l[i].style.backgroundColor="#FF784F";else if("COMPARE"===s)l[i].style.backgroundColor="#f9c74f";else if("GREATER"===s)l[i].style.backgroundColor="#EFD6AC";else if("SWAP-1"===s)l[u].style.backgroundColor="#1B5299";else if("SAME-INDEX-1"===s)l[u].style.backgroundColor="#1B5299";else if("SAME-INDEX-2"===s)l[u].style.backgroundColor="#1D8A99",u-1!==i&&(l[u-1].style.backgroundColor="#1B5299");else if("SWAP-2"===s)l[i].style.backgroundColor="#f94144",l[u].style.backgroundColor="#f94144";else if("SWAP-3"===s)l[i].style.height=e[o][0][i]+"px",l[u].style.height=e[o][0][u]+"px",t.length<=20&&(l[i].children[0].innerHTML=e[o][0][i],l[u].children[0].innerHTML=e[o][0][u]);else if("SWAP-4"===s)i[1]-1!==i[0]&&(l[i[1]-1].style.backgroundColor="#1B5299"),l[i[1]].style.backgroundColor="#1D8A99",l[u].style.backgroundColor="#EFD6AC";else if("SWAP-PIVOT-1"===s)l[i].style.backgroundColor="#f94144",l[u].style.backgroundColor="#f94144";else if("SWAP-PIVOT-2"===s)l[i].style.height=e[o][0][i]+"px",l[u].style.height=e[o][0][u]+"px",t.length<=20&&(l[i].children[0].innerHTML=e[o][0][i],l[u].children[0].innerHTML=e[o][0][u]);else if("SWAP-PIVOT-3"===s)l[i].style.backgroundColor="#1B5299",l[u].style.backgroundColor="#90be6d";else if("NO-CHANGE"===s)l[i].style.backgroundColor="#90be6d";else if("REVERT-BOTH"===s)for(var d=i[0];d<u;d++)d!==i[1]&&(l[d].style.backgroundColor="#577590");else if("REVERT-LEFT"===s)for(var h=i;h<u;h++)l[h].style.backgroundColor="#577590";else"SORTED-1"===s?l[i].style.backgroundColor="#f94144":"SORTED-2"===s&&(l[i].style.backgroundColor="#90be6d");We(o,n)}Ve(t),n.unshift([]),We(0,n),Be(0,n.length,r,a,t,n)},qe=function(e){switch(e){case"Bubble Sort":V((function(){return ze})),ee(_[0]),ne(_),fe(P);break;case"Selection Sort":V((function(){return Xe})),ee(q[0]),ne(q),fe(w);break;case"Insertion Sort":V((function(){return Ke})),ee(J[0]),ne(J),fe(x);break;case"Merge Sort":V((function(){return Ue})),ee(Q[0]),ne(Q),fe(H);break;case"Quick Sort":V((function(){return _e})),ee($[0]),ne($),fe(D)}for(var t=0;t<ve.length;t++)clearTimeout(ve[t]);W&&(Pe(),f(!1),Oe([]),je(!0),Te([]),Ie.current=0,Ie.current=-1,Me.current.value=0)};return n.a.createElement("div",{className:"SortingVisualizer"},n.a.createElement("div",{className:"Bars"},n.a.createElement(y,{ref:Re,heights:l,statuses:de,pause:De,paused:ye,sortConfig:Y,setTimeouts:ve,states:ke,stepped:function(e,t){De(e);var r,a,n=Ie.current;if("+"===t&&n<ke.length-1&&n>=0)r=n+1,a=n+2;else{if(!("-"===t&&n>0))return Re.current.playControls.classList.remove("shake"),void setTimeout((function(){Re.current.playControls.classList.add("shake")}),10);n===ke.length-1&&Re.current.classList.remove("sorted"),r=n-1,a=n,Ie.current=n-1,Me.current.value=n-1}Be(r,a,0,e,l,ke,t)},showHeights:oe,disableControls:g,isSorting:i,changedSortingFunction:qe,generateNewArray:Pe,sort:Fe,sliderChanged:Ge,index:Ie.current}),n.a.createElement("input",{type:"range",ref:Me,className:"play-controls-range",min:0,max:ke.length-1,step:1,value:Ie.current,id:"playRange",name:"playRange",onChange:function(e){return Ge(e)},disabled:g})),n.a.createElement("div",{className:"Controls"},n.a.createElement(L,{ref:Le,size:v,speed:j,configs:ae,changedArraySize:function(e,t){var r;r=null===e?t:e.target.value,se(r<=20),O(r),He(r)},changedSortingSpeed:function(e){R(Number(j)),N(Number(e.target.value)),i&&(De(ve),f(!0))},changedSortingConfig:function(e){ee((function(t){return t!==e&&(De(ve),Pe(),f(!1),Oe([]),je(!0),Te([]),Ie.current=0,Ie.current=-1,Me.current.value=0),e}))}})))};var ee=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i,null,n.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1afa5761.chunk.js.map