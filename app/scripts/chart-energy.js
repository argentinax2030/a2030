var A2030Charts = A2030Charts || {};

A2030Charts.energy = {};

(function(global, document, $, d3) {
	"use strict";

	A2030Charts.energy = {};

	A2030Charts.energy.parent = "#chart-energy-container";

	A2030Charts.energy.data = [
		["x", 2011, 2012, 2020, 2025, 2030, 2035, 2040],
		["Líquidos", 180.3, 183.6, 204.2, 212.5, 221.8, 233.2, 246.0],
		["Gas Natural", 121.6, 124.2, 138.3, 154.8, 173.1, 192.5, 211.4],
		["Carbón", 152.0, 153.3, 168.6, 173.2, 174.4, 176.9, 180.2],
		["Nuclear", 26.2, 24.5, 30.9, 34.6, 40.2, 43.4, 46.0],
		["Otros", 60.4, 63.8, 87.0, 98.8, 108.1, 119.5, 131.4]
	];

	A2030Charts.energy.init = function() {
		console.log("init A2030Charts.energy");

		if (!A2030Charts.energy.chart) {
			A2030Charts.energy.chart = c3.generate({
				bindto: A2030Charts.energy.parent,
				data: {
					x: "x",
					columns: A2030Charts.energy.data
				},
				axis: {
					x: {}
				}
			});
		}
	};
})(window, document, jQuery, d3);
