const bargraph = document.querySelector("#bargraph").getContext('2d');
const gradientBg = bargraph.createLinearGradient(0,0,0,350);

gradientBg.addColorStop(0,'blue');
gradientBg.addColorStop(1,'rgb(100, 0, 255)');

const data = [
  { name: "No Failure", ratio: 0.1 },
  { name: "Power Failure", ratio: 0.3 },
  { name: "Heat Dissipation", ratio: 0.3 },
  { name: "Tool Wear", ratio: 0.2 },
  { name: "OverStrain Failure", ratio: 0.6 },
];
(async function () {

  new Chart(bargraph, {
    type: "bar",
    data: {
      labels: data.map((row) => row.name),
      datasets: [
        {
          data: data.map((row) => row.ratio),
          // backgroundColor: ['rgb(13, 66, 241)','rgb(13, 66, 241)','rgb(13, 66, 241)','rgb(13, 66, 241)','rgb(13, 66, 241)'],
          backgroundColor: ['#ffc154','orangered','#47b39c','#4F3F70','#1F75FE'],
          barThickness:120,
          borderRadius:10,
          borderWidth: 2,
          color:'white'
        },

      ],
    },
    options:{
        plugins:{
            legend:{
                display:false
            }
        }
    }
  });
})();

const doughnut = document.querySelector("#doughnutgraph").getContext('2d');

new Chart(doughnut, {
    type: "doughnut",
    doughnutCoefficient:0.1,
    data: {
      datasets: [
        {
          lables:data.map((row)=>row.name),
          data: data.map((row) => row.ratio),
          tickLength:12,
          backgroundColor: ['#ffc154','orangered','#47b39c','#4F3F70','#1F75FE'],
          borderColor:  ['#fc255','#e6b56','#47b39c','#43F70','#1F75FE'],
        },
      ],
    },
  
  });