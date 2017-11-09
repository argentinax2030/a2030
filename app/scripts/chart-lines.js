var A2030Charts = A2030Charts || {};

A2030Charts.lines = {};

(function(global, document, $, d3) {
	'use strict';

	A2030Charts.lines = {};

	A2030Charts.lines.parent = '#a2030-container';

	A2030Charts.lines.init = function() {
		A2030Charts.lines.svg = d3
			.select(A2030Charts.lines.parent)
			.append('svg')
			.attr('id', 'chart-lines');

		A2030Charts.lines.svg.append('g').classed('lines', true);

		A2030Charts.lines.updateSize();
		A2030Charts.lines.randomize();
	};

	A2030Charts.lines.updateSize = function() {
		var sizes = d3
			.select(A2030Charts.lines.parent)
			.select('.content')
			.node()
			.getBoundingClientRect();

		if (A2030Charts.lines.svg) {
			A2030Charts.lines.svg
				.attr('width', sizes.width)
				.attr('height', sizes.height);
		}
		A2030Charts.lines.randomize();
	};

	A2030Charts.lines.randomize = function() {
		var sizes = d3
			.select(A2030Charts.lines.parent)
			.select('.content')
			.node()
			.getBoundingClientRect();

		var random = [];
		for (var i = 0; i < 10; i++) {
			var newNumber = Math.floor(Math.random() * sizes.width) + 1;
			random.push(newNumber);
		}

		A2030Charts.lines.render(random);
	};

	A2030Charts.lines.render = function(lines) {
		var sizes = d3
			.select(A2030Charts.lines.parent)
			.select('.content')
			.node()
			.getBoundingClientRect();

		if (A2030Charts.lines.svg) {
			var lines = A2030Charts.lines.svg
				.selectAll('line.floating-lines')
				.data(lines);

			lines
				.enter()
				.append('line')
				.classed('floating-lines', true)
				.attr('x1', function(d) {
					return d;
				})
				.attr('x2', function(d) {
					return d;
				})
				.attr('y1', 0)
				.attr('y2', sizes.height);

			lines
				.transition()
				.delay(function(d, i) {
					return i * 100;
				})
				.duration(1000)
				.ease('elastic')
				.attr('y1', 0)
				.attr('y2', sizes.height)
				.attr('x1', function(d) {
					return d;
				})
				.attr('x2', function(d) {
					return d;
				});
		}
	};
})(window, document, jQuery, d3);
