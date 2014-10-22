
/*var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });*/
var data = [0,-40.8,-52.8,-71.2,-75.1,-75.8,-85,-85.6,-88.6,-88.8,-96.3,-97.2,-102.3,-102.8,-104.8,-111.2,-116.2,-117.5,-119.8,-125.5,-132.6,-134.7,-136.7,-147.8,-148.4,-151.4,-153.9,-160.4,-168,-171.1,-172.8,-173.3,-174.5,-174.8,-175.3,-175.7,-176,-181.6,-182.2,-186.3,-187.4,-190.3,-195.7,-204,-205.8,-209,-212.2,-212.4,-225.5,-227.6,-229.5,-230,-232.2,-234.2,-234.8,-235.8,-242.6,-245.1,-249.2,-253.9,-254.9,-265.7,-287.2,-291.7,-292,-292.5,-323,-325.1,-326.7,-329.2,-332.9,-336.3,-339.4,-339.8,-344.7,-355.9,-371.4,-372.3,-376.4,-395.4,-399.9,-400.1,-401.5,-402.9,-405.1,-406.8,-409.4,-411.8,-412.8,-423.2,-432.2,-444.6,-447.7,-492.8,-507.5,-521.6,-593.2,-606.7,-632.9,-710.9,-777.2];
var width = 1000,
    barHeight = 20;
var opacityConstant = d3.min(data);
var x = d3.scale.linear()
    .domain(d3.extent(data))
    .range([0,width]);


var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length)

var bar = chart.selectAll("g")
		.data(data)
	.enter().append('g')
		.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })
    .attr("x", function(d) { return width; })
    .attr("width",0);

var rect = bar.append('rect')
   // .attr("x", function(d) { return width; })
    .attr("width",0)
    .attr("height", barHeight-1);

var potato = d3.selectAll('rect')
    .each(function(d,i){
        d3.select(this)
            .transition()
            .style("fill-opacity",0.1+Math.abs(d/opacityConstant))
            //.attr("x", function(d, i) { return x(Math.min(0, d)); })
            //.attr("width", function(d, i) { return Math.abs(x(d) - x(0)); })
            .attr('x', function(d,i) { return x(d); })
            .attr('width', function(d,i) { return Math.abs(x(d) - x(0)); })
            .duration(1000);
    });