"use strict";var A2030Charts=A2030Charts||{};A2030Charts.lines={},function(t,e,n,a){A2030Charts.lines={},A2030Charts.lines.parent="#a2030-container",A2030Charts.lines.init=function(){A2030Charts.lines.svg=a.select(A2030Charts.lines.parent).append("svg").attr("id","chart-lines"),A2030Charts.lines.svg.append("g").classed("lines",!0),A2030Charts.lines.updateSize(),A2030Charts.lines.randomize()},A2030Charts.lines.updateSize=function(){var t=a.select(A2030Charts.lines.parent).select(".content").node().getBoundingClientRect();A2030Charts.lines.svg&&A2030Charts.lines.svg.attr("width",t.width).attr("height",t.height),A2030Charts.lines.randomize()},A2030Charts.lines.randomize=function(){for(var t=a.select(A2030Charts.lines.parent).select(".content").node().getBoundingClientRect(),e=[],n=0;n<10;n++){var r=Math.floor(Math.random()*t.width)+1;e.push(r)}A2030Charts.lines.render(e)},A2030Charts.lines.render=function(t){var e=a.select(A2030Charts.lines.parent).select(".content").node().getBoundingClientRect();if(A2030Charts.lines.svg){var t=A2030Charts.lines.svg.selectAll("line.floating-lines").data(t);t.enter().append("line").classed("floating-lines",!0).attr("x1",function(t){return t}).attr("x2",function(t){return t}).attr("y1",0).attr("y2",e.height),t.transition().delay(function(t,e){return 100*e}).duration(1e3).ease("elastic").attr("y1",0).attr("y2",e.height).attr("x1",function(t){return t}).attr("x2",function(t){return t})}}}(window,document,jQuery,d3);var A2030Charts=A2030Charts||{};A2030Charts.network={},function(t,e,n,a){A2030Charts.network={},A2030Charts.network.parent="#chart-network-container",A2030Charts.network.data={nodes:[{name:"Internet de las cosas"},{name:"Big Data"},{name:"Inteligencia artificial"},{name:"Neurotecnología"},{name:"Nanomateriales"},{name:"Micro y nano satélites"},{name:"Fabricación aditiva"},{name:"Tecnologías avanzadas de almacenamiento de energía"},{name:"Biología sintética"},{name:"Blockchain"}],edges:[{source:3,target:1},{source:0,target:3},{source:0,target:4},{source:1,target:5},{source:2,target:5},{source:2,target:1},{source:3,target:4},{source:5,target:8},{source:5,target:9},{source:6,target:7},{source:6,target:0},{source:7,target:0},{source:3,target:5},{source:7,target:8},{source:8,target:9}]},A2030Charts.network.init=function(){var t=a.select(A2030Charts.network.parent).node().getBoundingClientRect(),e=t.width;A2030Charts.network.svg||(A2030Charts.network.svg=a.select(A2030Charts.network.parent).append("svg").attr("id","chart-network")),A2030Charts.network.svg.attr({width:e,height:400});var n=a.layout.force().nodes(A2030Charts.network.data.nodes).links(A2030Charts.network.data.edges).size([e,400]).linkDistance([40]).charge([-800]).theta(.5).gravity(.05).start(),r=A2030Charts.network.svg.selectAll("line").data(A2030Charts.network.data.edges).enter().append("line").attr("id",function(t,e){return"edge"+e}).style("stroke","#1886c7").style("pointer-events","none"),o=A2030Charts.network.svg.selectAll("circle").data(A2030Charts.network.data.nodes).enter().append("circle").attr({r:5}).style("fill",function(t,e){return"#1886c7"}).call(n.drag),i=A2030Charts.network.svg.selectAll(".nodelabel").data(A2030Charts.network.data.nodes).enter().append("text").attr({class:"nodelabel",stroke:"none",fill:"#fff"}).text(function(t){return t.name}),s=A2030Charts.network.svg.selectAll(".edgepath").data(A2030Charts.network.data.edges).enter().append("path").attr({d:function(t){return"M "+t.source.x+" "+t.source.y+" L "+t.target.x+" "+t.target.y},class:"edgepath","fill-opacity":0,"stroke-opacity":0,fill:"blue",stroke:"red",id:function(t,e){return"edgepath"+e}}).style("pointer-events","none");n.on("tick",function(){r.attr({x1:function(t){return t.source.x},y1:function(t){return t.source.y},x2:function(t){return t.target.x},y2:function(t){return t.target.y}}),o.attr({cx:function(t){return t.x},cy:function(t){return t.y}}),i.attr("x",function(t){return t.x+7}).attr("y",function(t){return t.y+5}),s.attr("d",function(t){return"M "+t.source.x+" "+t.source.y+" L "+t.target.x+" "+t.target.y})}),setInterval(function(){n.alpha(.1)},2e3)},A2030Charts.network.render=function(){}}(window,document,jQuery,d3);var A2030Charts=A2030Charts||{};A2030Charts.energy={},function(t,e,n,a){A2030Charts.energy={},A2030Charts.energy.parent="#chart-energy-container",A2030Charts.energy.data=[["x",2011,2012,2020,2025,2030,2035,2040],["Líquidos",180.3,183.6,204.2,212.5,221.8,233.2,246],["Gas Natural",121.6,124.2,138.3,154.8,173.1,192.5,211.4],["Carbón",152,153.3,168.6,173.2,174.4,176.9,180.2],["Nuclear",26.2,24.5,30.9,34.6,40.2,43.4,46],["Otros",60.4,63.8,87,98.8,108.1,119.5,131.4]],A2030Charts.energy.setLines=function(){var t=[];n("#slide3 .c3-axis-x .tick line").each(function(e,n){e<6?t.push(n.getBoundingClientRect().x):t.push(0)}),A2030Charts.lines.render(t)},A2030Charts.energy.init=function(){A2030Charts.energy.chart?A2030Charts.energy.setLines():A2030Charts.energy.chart=c3.generate({bindto:A2030Charts.energy.parent,data:{x:"x",columns:A2030Charts.energy.data,color:function(t,e){return"#fff"}},point:{show:!1},legend:{show:!1},axis:{y:{tick:{values:[0,50,100,150,200,250]},min:0,max:250,padding:{bottom:0,top:10}},x:{tick:{values:[2011,2020,2025,2030,2035,2040]},padding:{left:1,right:1}}},grid:{x:{show:!1},y:{show:!0}},oninit:function(){setTimeout(function(){A2030Charts.energy.chart.focus(["Líquidos"]),A2030Charts.energy.setLines()},500);var t=A2030Charts.energy.data.map(function(t){return t[0]});t.shift(),a.select("#chart-energy-labels").selectAll("button.buttons-slides").data(t).enter().append("button").classed("buttons-slides",!0).classed("selected",function(t){return"Líquidos"==t}).attr("data-id",function(t){return t}).html(function(t){return t}).each(function(t){}).on("mouseover",function(t){A2030Charts.energy.chart.focus(t),n('button[data-id="Líquidos"]').removeClass("selected")}).on("mouseout",function(t){A2030Charts.energy.chart.revert(),A2030Charts.energy.chart.focus(["Líquidos"]),n('button[data-id="Líquidos"]').addClass("selected")}).on("click",function(t){A2030Charts.energy.chart.focus(t)})}})}}(window,document,jQuery,d3);var A2030Charts=A2030Charts||{};A2030Charts.population={},function(t,e,n,a){A2030Charts.population={},A2030Charts.population.parent="#chart-population-container",A2030Charts.population.data=[["x",2015,2030,2050],["Africa",3.5,4.4,6.7],["Asia",7.9,12.1,18.8],["Europa",17.4,22.8,27.8],["América Latina y Caribe",7.6,11.8,18.6],["Norteamerica",15.1,20.7,21.4],["Oceania",12.5,16.2,19.5]],A2030Charts.population.setLines=function(){var t=[];n("#slide4 .c3-axis-x .tick line").each(function(e,n){e<3?t.push(n.getBoundingClientRect().x):t.push(0)}),A2030Charts.lines.render(t)},A2030Charts.population.init=function(){A2030Charts.population.chart?A2030Charts.population.setLines():A2030Charts.population.chart=c3.generate({bindto:A2030Charts.population.parent,data:{x:"x",columns:A2030Charts.population.data,color:function(t,e){return"#fff"}},point:{show:!1},axis:{y:{tick:{values:[5,10,15,20,25,30]},min:0,max:30,padding:{bottom:0,top:10}},x:{padding:{left:1,right:1}}},grid:{x:{show:!1},y:{show:!0}},legend:{show:!1},oninit:function(){setTimeout(function(){A2030Charts.population.chart.focus(["Europa"]),A2030Charts.population.setLines()},500);var t=A2030Charts.population.data.map(function(t){return t[0]});t.shift(),a.select("#chart-population-labels").selectAll("button.buttons-slides").data(t).enter().append("button").classed("buttons-slides",!0).classed("selected",function(t){return"Europa"==t}).attr("data-id",function(t){return t}).html(function(t){return t}).each(function(t){}).on("mouseover",function(t){A2030Charts.population.chart.focus(t),n('button[data-id="Europa"]').removeClass("selected")}).on("mouseout",function(t){A2030Charts.population.chart.revert(),A2030Charts.population.chart.focus(["Europa"]),n('button[data-id="Europa"]').addClass("selected")}).on("click",function(t){A2030Charts.population.chart.focus(t)})}})}}(window,document,jQuery,d3);var pymChild=pym.Child({polling:500}),A2030;!function(t,e,n,a){A2030={},A2030.pymChild=a.Child({polling:500}),A2030.currentIndex=1,A2030.intervalTime=4e3,A2030.intervalId=null,A2030.$timer=n("#timer"),A2030.$container=n("#a2030-container"),A2030.onLeave=function(t,e,a){n.isFunction(A2030.onLeaveFunctions["slide-"+t])&&(A2030.onLeaveFunctions["slide-"+t].call(),1==e?A2030.$controls.fadeOut():A2030.$controls.fadeIn())},A2030.afterLoad=function(t,e){n.isFunction(A2030.afterLoadFunctions["slide-"+e])&&(A2030.afterLoadFunctions["slide-"+e].call(),A2030.currentIndex=e)},A2030.afterRender=function(){A2030.afterLoadFunctions["slide-1"].call(),A2030.currentIndex=1;n("#pp-nav").append("<div id='controls'><div id='prev' class='btn-control'>&#9664;</div><div id='next' class='btn-control'>&#9654;</div></div>"),A2030.$controls=n("#controls").fadeOut(),A2030.$controls.find("#next").on("click touchstart",A2030.next),A2030.$controls.find("#prev").on("click touchstart",A2030.prev),A2030.$container.find("#btn-avanzar").on("click touchstart",A2030.next),A2030Charts.lines.init()},A2030.timerStart=function(t){A2030.animateBar(),A2030.intervalId=setInterval(function(){A2030.animateBar()},A2030.intervalTime)},A2030.animateBar=function(t){A2030.$timer.animate({width:"0%"},A2030.intervalTime,function(){n.fn.pagepiling.moveSectionDown(),A2030.clearBar()})},A2030.clearBar=function(t){A2030.$timer.css("width","100%")},A2030.play=function(t){t.preventDefault(),A2030.timerStart()},A2030.pause=function(t){t&&t.preventDefault(),clearInterval(A2030.intervalId),A2030.clearBar(),A2030.$timer.clearQueue()},A2030.next=function(t){t.preventDefault(),A2030.pause(),n.fn.pagepiling.moveSectionDown()},A2030.prev=function(t){t.preventDefault(),A2030.pause(),n.fn.pagepiling.moveSectionUp()},A2030.init=function(){var t={menu:null,direction:"vertical",verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"swing",loopBottom:!0,loopTop:!1,css3:!0,navigation:{textColor:"#fff",bulletsColor:"#fff",position:"left",tooltips:["Estamos en 2030","Revolución Industrial","Demanda energética","Bono demográfico","Desafíos","Argentina 2030","Equipo","Ejes de trabajo","Camino a 2030"]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,onLeave:A2030.onLeave,afterLoad:A2030.afterLoad,afterRender:A2030.afterRender};A2030.$pagepiling=n("#pagepiling"),A2030.$pagepiling.pagepiling(t)},A2030.onLeaveFunctions={"slide-1":function(){},"slide-2":function(){},"slide-3":function(){},"slide-4":function(){},"slide-5":function(){},"slide-6":function(){},"slide-7":function(){n('#slide7 [data-toggle="popover"]').popover("hide")},"slide-8":function(){n('#slide8 [data-toggle="popover"]').popover("hide")},"slide-9":function(){}},A2030.afterLoadFunctions={"slide-1":function(){A2030Charts.lines.randomize()},"slide-2":function(){var t=n("#a2030-container").width();A2030Charts.lines.render([0,0,0,0,0,t,t,t,t,t])},"slide-3":function(){A2030Charts.energy.init()},"slide-4":function(){A2030Charts.population.init()},"slide-5":function(){A2030Charts.lines.randomize()},"slide-6":function(){A2030Charts.lines.randomize()},"slide-7":function(){A2030Charts.lines.randomize(),n('#slide7 [data-toggle="popover"]').each(function(t){var e=n(this);setTimeout(function(){e.popover("show")},1e3*t)})},"slide-8":function(){A2030Charts.lines.randomize(),n('#slide8 [data-toggle="popover"]').each(function(t){var e=n(this);setTimeout(function(){e.popover("show")},1e3*t)})},"slide-9":function(){A2030Charts.lines.randomize()}}}(window,document,jQuery,pym),$(document).ready(function(){A2030.init(),$('[data-toggle="popover"]').popover()});