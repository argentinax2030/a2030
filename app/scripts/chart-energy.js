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

	A2030Charts.energy.setLines = function() {
		var ticks = [];
		$("#slide3 .c3-axis-x .tick line").each(function(i, e) {
			if (i < 6) {
				ticks.push(e.getBoundingClientRect().x);
			} else {
				ticks.push(0);
			}
		});
		A2030Charts.lines.render(ticks);
	};

	A2030Charts.energy.init = function() {
		if (!A2030Charts.energy.chart) {
			A2030Charts.energy.chart = c3.generate({
				bindto: A2030Charts.energy.parent,
				data: {
					x: "x",
					columns: A2030Charts.energy.data,
					color: function(color, d) {
						return "#fff";
					}
				},
				point: {
					show: false
				},
				legend: {
					show: false
				},
				axis: {
					y: {
						tick: {
							values: [0, 50, 100, 150, 200, 250]
						},
						min: 0,
						max: 250,
						padding: {
							bottom: 0,
							top: 10
						}
					},
					x: {
						tick: {
							values: [2011, 2020, 2025, 2030, 2035, 2040]
						},
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
				},
				oninit: function() {
					setTimeout(function() {
						A2030Charts.energy.chart.focus(["Líquidos"]);
						A2030Charts.energy.setLines();
					}, 500);

					var labelsText = A2030Charts.energy.data.map(function(e) {
						return e[0];
					});

					labelsText.shift();

					d3
						.select("#chart-energy-labels")
						.selectAll("button.buttons-slides")
						.data(labelsText)
						.enter()
						.append("button")
						.classed("buttons-slides", true)
						.classed("selected", function(id) {
							return id == "Líquidos";
						})
						.attr("data-id", function(id) {
							return id;
						})
						.html(function(id) {
							return id;
						})
						.each(function(id) {
							//d3.select(this).style('background-color', chart.color(id));
						})
						.on("mouseover", function(id) {
							A2030Charts.energy.chart.focus(id);
							$('button[data-id="Líquidos"]').removeClass(
								"selected"
							);
						})
						.on("mouseout", function(id) {
							A2030Charts.energy.chart.revert();
							A2030Charts.energy.chart.focus(["Líquidos"]);
							$('button[data-id="Líquidos"]').addClass(
								"selected"
							);
						})
						.on("click", function(id) {
							A2030Charts.energy.chart.focus(id);
						});
				}
			});
		} else {
			A2030Charts.energy.setLines();
		}
	};
})(window, document, jQuery, d3);
