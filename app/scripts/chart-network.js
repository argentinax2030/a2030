var A2030Charts = A2030Charts || {};

A2030Charts.network = {};

(function(global, document, $, d3) {
	'use strict';

	A2030Charts.network = {};

	A2030Charts.network.parent = '#chart-network-container';

	A2030Charts.network.data = {
		nodes: [
			{ name: 'Internet de las cosas' },
			{ name: 'Big Data' },
			{ name: 'Inteligencia artificial' },
			{ name: 'Neurotecnología' },
			{ name: 'Nanomateriales' },
			{ name: 'Micro y nano satélites' },
			{ name: 'Fabricación aditiva' },
			{ name: 'Tecnologías avanzadas de almacenamiento de energía' },
			{ name: 'Biología sintética' },
			{ name: 'Blockchain' }
		],
		edges: [
			{ source: 3, target: 1 },
			{ source: 0, target: 3 },
			{ source: 0, target: 4 },
			{ source: 1, target: 5 },
			{ source: 2, target: 5 },
			{ source: 2, target: 1 },
			{ source: 3, target: 4 },
			{ source: 5, target: 8 },
			{ source: 5, target: 9 },
			{ source: 6, target: 7 },
			{ source: 6, target: 0 },
			{ source: 7, target: 0 },
			{ source: 3, target: 5 },
			{ source: 7, target: 8 },
			{ source: 8, target: 9 }
		]
	};

	A2030Charts.network.init = function() {
		console.log('init A2030Charts.network');

		var sizes = d3
			.select(A2030Charts.network.parent)
			.node()
			.getBoundingClientRect();

		var w = sizes.width;
		var h = 400;
		var linkDistance = 40;

		if (!A2030Charts.network.svg) {
			A2030Charts.network.svg = d3
				.select(A2030Charts.network.parent)
				.append('svg')
				.attr('id', 'chart-network');
		}

		A2030Charts.network.svg.attr({ width: w, height: h });

		var force = d3.layout
			.force()
			.nodes(A2030Charts.network.data.nodes)
			.links(A2030Charts.network.data.edges)
			.size([w, h])
			.linkDistance([linkDistance])
			.charge([-800])
			.theta(0.5)
			.gravity(0.05)
			.start();

		var edges = A2030Charts.network.svg
			.selectAll('line')
			.data(A2030Charts.network.data.edges)
			.enter()
			.append('line')
			.attr('id', function(d, i) {
				return 'edge' + i;
			})
			.style('stroke', '#1886c7')
			.style('pointer-events', 'none');

		var nodes = A2030Charts.network.svg
			.selectAll('circle')
			.data(A2030Charts.network.data.nodes)
			.enter()
			.append('circle')
			.attr({ r: 5 })
			.style('fill', function(d, i) {
				return '#1886c7';
			})
			.call(force.drag);

		var nodelabels = A2030Charts.network.svg
			.selectAll('.nodelabel')
			.data(A2030Charts.network.data.nodes)
			.enter()
			.append('text')
			.attr({
				class: 'nodelabel',
				stroke: 'none',
				fill: '#fff'
			})
			.text(function(d) {
				return d.name;
			});

		var edgepaths = A2030Charts.network.svg
			.selectAll('.edgepath')
			.data(A2030Charts.network.data.edges)
			.enter()
			.append('path')
			.attr({
				d: function(d) {
					return (
						'M ' +
						d.source.x +
						' ' +
						d.source.y +
						' L ' +
						d.target.x +
						' ' +
						d.target.y
					);
				},
				class: 'edgepath',
				'fill-opacity': 0,
				'stroke-opacity': 0,
				fill: 'blue',
				stroke: 'red',
				id: function(d, i) {
					return 'edgepath' + i;
				}
			})
			.style('pointer-events', 'none');

		force.on('tick', function() {
			edges.attr({
				x1: function(d) {
					return d.source.x;
				},
				y1: function(d) {
					return d.source.y;
				},
				x2: function(d) {
					return d.target.x;
				},
				y2: function(d) {
					return d.target.y;
				}
			});

			nodes.attr({
				cx: function(d) {
					return d.x;
				},
				cy: function(d) {
					return d.y;
				}
			});

			nodelabels
				.attr('x', function(d) {
					return d.x + 7;
				})
				.attr('y', function(d) {
					return d.y + 5;
				});

			edgepaths.attr('d', function(d) {
				var path =
					'M ' +
					d.source.x +
					' ' +
					d.source.y +
					' L ' +
					d.target.x +
					' ' +
					d.target.y;
				//console.log(d)
				return path;
			});
		});

		setInterval(function() {
			force.alpha(0.1);
		}, 2000);
	};

	A2030Charts.network.render = function() {};
})(window, document, jQuery, d3);
