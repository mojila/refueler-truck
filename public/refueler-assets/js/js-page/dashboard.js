function randomScalingFactor(){
	return Math.floor( Math.random()*100 );
}

window.chartColors = { red: "rgb(255, 99, 132)", orange: "rgb(255, 159, 64)", yellow: "rgb(255, 205, 86)", green: "rgb(75, 192, 192)", blue: "rgb(54, 162, 235)", purple: "rgb(153, 102, 255)", grey: "rgb(201, 203, 207)" };


var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config = {
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'My First dataset',
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
			fill: false,
		}, {
			label: 'My Second dataset',
			fill: false,
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}]
	},
	options: {
		responsive: true,
		aspectRatio:4,
		title: {
			display: true,
			text: 'Chart sample'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
		},
		legend: {
			display: true
		}
	}
};

a = [
 {
   "Name": "Soekarno Hatta",
   "Total Transaction": 35,
   "Total Volume": 34234562
 },
 {
   "Name": "Juanda",
   "Total Transaction": 30,
   "Total Volume": 47583654
 },
 {
   "Name": "Kertajati",
   "Total Transaction": 17,
   "Total Volume": 78546223
 },
 {
   "Name": "Ngurah Rai",
   "Total Transaction": 29,
   "Total Volume": 74865908
 },
 {
   "Name": "Kualanamu",
   "Total Transaction": 20,
   "Total Volume": 42346533
 }
];



window.onload = function() {
	config.options.legend.display = false;
	var ctx1 = document.getElementById('canvas1').getContext('2d');
	window.myLine1 = new Chart(ctx1, config);

	setTimeout(function(){
		createTable(a,"table1"); 
	},1000);
	setTimeout(function(){
		$('tbody').click(function(){
			window.location.href="airport-detail.html";
		});
	},1000);
	
};
