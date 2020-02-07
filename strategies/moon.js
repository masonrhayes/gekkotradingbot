// Let's create our own strategy
var strat = {};

// Prepare everything our strat needs
strat.init = function() {
  this.addTulipIndicator('ema7', 'ema', {
    optInTimePeriod: 7
  });
  this.addTulipIndicator('ema99', 'ema', {
    optInTimePeriod: 99
  });
}

// What happens on every new candle?
strat.update = function(candle) {
  // your code!
}

// For debugging purposes.
strat.log = function() {
  // your code!
}

// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function(candle) {
  const ema7 = this.tulipIndicators.ema7.result.result;
  const ema99 = this.tulipIndicators.ema99.result.result;

  if(ema7 > ema99) {
    this.advice('long') //{
      //direction: 'long',
      //trigger: {
        //type: 'trailingStop',
        //trailPercentage: 8
      }
   // });
  
  if(ema7 < ema99) {
    this.advice('short')
    }
  }


// Optional for executing code
// after completion of a backtest.
// This block will not execute in
// live use as a live gekko is
// never ending.
strat.end = function() {
  // your code!
}

module.exports = strat;