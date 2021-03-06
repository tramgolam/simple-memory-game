// let the editor know that `Chart` is defined by some code
// included in another file (in this case, `index.html`)
// Note: the code will still work without this line, but without it you
// will see an error in the editor
/* global Chart */

// create an object with world population data
const data = {
  'STREAM': 90,
  'CHAOS': 78,
  'FREEZE': 88,
  'AIR': 90,
  'VOLTAGE': 100,
};

// create an array of continents to use as labels for the charts
const continents = Object.keys(data);

// create an array of populations to use as data values by looping
// through the continents and adding each new value to the array
const populations = [];
continents.forEach((continent) => {
  populations.push(data[continent]);
});

// initialize a chart and put it in the 'barChart' div

//I like this, just commenting it out for now because I need to sleep soon

/*const bar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(bar, {
  type: 'bar', // make it a bar chart
  data: {
    labels: continents, // use the array of continents as labels
    datasets: [{
      label: 'Population (in millions)',
      data: populations, // use the array of populations to draw bars
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // make the bars translucent red
      borderColor: 'rgba(255, 99, 132, 1)', // make the borders of the bars opaque red
      borderWidth: 1 // set the border width to 1 pixel
    }]
  },
  options: {
    // the y-axis should start at 0
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
  }
});

*/
/*
//This is also dope, commenting out for now because I am short on time.

// initialize a chart and put it in the 'pieChart' div
const pie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pie, {
  type: 'pie', // make it a pie chart
  data: {
    labels: continents, // use the array of continents to label each 
    datasets: [{
      data: populations, // use the array of populations to draw pie slices
      // set each pie slice to a translucent color
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      // set the border of each pie slice to the same color as the background
      // of the slice but opaque
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1 // set border width to 1 pixel
    }]
  }
});
*/

// attempting a radar plz god
const radar = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(radar, {
  type: 'radar',
  data: {
    labels: continents,
    datasets: [{
      label: 'A Moderately Heavy DDR song-- MAXX' ,
      data: populations,
      backgroundColor: 'rgba(118, 246, 253, 0.45)', //hopefully this aint fugly
      borderColor: 'rgb(148, 239, 199)', //same
      borderWidth: 2 //thicc
    }]
  },
  objects: {
    //Tbh idk what this is doing
    scale: {
        // Hides the scale
        display: false
    }
  },
});
