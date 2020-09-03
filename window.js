// Run this function after the page has loaded
$(() => {
  let url

  const si = require('systeminformation');
  setInterval(function(){
    si.cpuTemperature().then(data => $('#cpu-temp').text(data.main))
    si.battery().then(data => {
        $('#battery-percent').text(data.percent)
    });
    }, 300);

    }
)
