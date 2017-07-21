$(function() {
	var estimatePi = new estimatePiClass();
	try {
		alert(estimatePi.calculate(1000,0,120))
	}
	catch (e) {
		console.log(e.toString());
	}
});

var estimatePiClass = function(){};

estimatePiClass.prototype = {

	isNumeric: function (number) {
		//As of January 17th, 2015, this is how jQuery does their isNumeric
		//Therefore, it is used here as jQuery is a somewhat Standard Javascript
		//Library
		return !isNaN(parseFloat(number)) && isFinite(number);
	},

	calculate: function(randomlyGenerate,minRange,maxRange) {
		var gcd = new gcdClass();
		var coprimes = 0;
		var totalRuns = randomlyGenerate;
		while(randomlyGenerate > 0) {
			Math.ceil(minRange);
			Math.floor(maxRange)
			var firstValue = Math.floor(Math.random() * (maxRange-minRange+1) + minRange);
			var secondValue = Math.floor(Math.random() * (maxRange-minRange+1) + minRange);
			if (gcd.calculate(firstValue, secondValue) == 1) {
				coprimes++;
			}
			randomlyGenerate--;
		}
		var probability = coprimes/totalRuns;
		var piEstimate = Math.sqrt(6/probability);
		return piEstimate;
	},
};
