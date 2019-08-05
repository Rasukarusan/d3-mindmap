var width = 500;
var height = 500;
    
var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
var e1 = [250,150,50,25]
var e2 = [250,300,150,50]
var es = [e1,e2]
var color = d3.scale.category10();
var g = svg.selectAll('g')
    .data(es).enter().append('g')
    .attr('transform', function(d, i) {
            return 'translate(0,0)';
    });
g.append('ellipse')
                .attr({
                'cx' :function(d){ return d[0]},
                'cy' :function(d){ return d[1]},
                'rx' :function(d){ return d[2]},
                'ry' :function(d){ return d[3]},
                'fill' : 'white',
                'stroke':function(d,i) { return color(i)},
                'opacity' : 1,
                })
var icon_size = 15
g.append('circle')
.attr({
    'cx' : function(d){ return d[0]}, 
    'cy' : function(d){ return d[1]-d[3]},
    'r' : icon_size,
    'fill' : 'white',
    'stroke':function(d,i) { return color(i)},
})

g.append('text')
 .attr({
    'x' : function(d) { return d[0]},
    'y' : function(d){ return d[1]-d[3]+icon_size/5},
    'text-anchor': 'middle',
    'stroke':function(d,i) { return color(i)},
    'font-family': 'sans-serif',
    'font-size': '15px'
 })
 .text('G');

g.append('text')
 .attr({
    'x' : function(d) { return d[0]},
    'y' : function(d) { return d[1]+d[3]/10}, 
    'text-anchor': 'middle',
    'stroke': 'steelblue',
    'font-family': 'sans-serif',
    'font-size': '10px'
 })
 .text('www.google.com');
