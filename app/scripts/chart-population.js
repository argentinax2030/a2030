var A2030Charts = A2030Charts || {};

A2030Charts.population = {};

(function(global, document, $, d3) {
	'use strict';

	A2030Charts.population = {};

	A2030Charts.population.parent = '#chart-population-container';

	A2030Charts.population.data = [
		['x', 2015, 2030, 2050],
		['Africa', 3.5, 4.4, 6.7],
		['Asia', 7.9, 12.1, 18.8],
		['Europa', 17.4, 22.8, 27.8],
		['América Latina y Caribe', 7.6, 11.8, 18.6],
		['Norteamerica', 15.1, 20.7, 21.4],
		['Oceania', 12.5, 16.2, 19.5]
	];

	A2030Charts.population.init = function() {
		console.log('init A2030Charts.population');

		if (!A2030Charts.population.chart) {
			A2030Charts.population.chart = c3.generate({
				bindto: A2030Charts.population.parent,
				data: {
					x: 'x',
					columns: A2030Charts.population.data,
					color: function(color, d) {
						return '#fff';
					}
				},
				point: {
					show: false
				},
				axis: {
					y: {
						tick: {
							values: [5, 10, 15, 20, 25, 30]
						},
						min: 0,
						max: 30,
						padding: {
							bottom: 0,
							top: 10
						}
					},
					x: {
						padding: {
							left: 1,
							right: 1
						}
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: true
					}
				}
			});
		}
	};
})(window, document, jQuery, d3);
