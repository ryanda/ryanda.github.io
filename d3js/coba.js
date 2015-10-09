var w=400
var h=400
function bars(data){max=d3.max(data)
x=d3.scale.linear().domain([0,max]).range([0,w])
y=d3.scale.ordinal().domain(d3.range(data.length)).rangeBands([0,h],.2)
var vis=d3.select("#barchart")
var bars=vis.selectAll("rect.bar").data(data)
bars.attr("fill","#0a0").attr("stroke","#050")
bars.enter().append("svg:rect").attr("class","bar").attr("fill","#800").attr("stroke","#800")
bars.exit().transition().duration(300).ease("exp").attr("width",0).remove()
bars.attr("stroke-width",4).transition().duration(300).ease("quad").attr("width",x).attr("height",y.rangeBand()).attr("transform",function(d,i){return"translate("+[0,y(i)]+")"})}function init(){var svg=d3.select("#svg").attr("width",w+100).attr("height",h+100)
svg.append("svg:rect").attr("width","100%").attr("height","100%").attr("stroke","#000").attr("fill","none")
svg.append("svg:g").attr("id","barchart").attr("transform","translate(50,50)")
d3.select("#data1").on("click",function(d,i){bars(data1)})
d3.select("#data2").on("click",function(d,i){bars(data2)})
d3.select("#random").on("click",function(d,i){num=document.getElementById("num").value
bars(random(num))})
bars(data1)}