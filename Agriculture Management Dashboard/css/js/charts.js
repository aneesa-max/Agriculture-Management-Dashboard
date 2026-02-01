new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['Wheat', 'Rice', 'Corn'],
    datasets: [{
      label: 'Yield',
      data: [1200, 2000, 900]
    }]
  }
});

new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ['Winter', 'Summer', 'Spring'],
    datasets: [{
      data: [1, 1, 1]
    }]
  }
});

new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Production',
      data: [1000, 1500, 1800]
    }]
  }
});
