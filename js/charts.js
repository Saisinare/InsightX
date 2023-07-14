const bargraph = document.querySelector("#bargraph").getContext('2d');
const gradientBg = bargraph.createLinearGradient(0,0,0,350);

gradientBg.addColorStop(0,'blue');
gradientBg.addColorStop(1,'rgb(100, 0, 255)');

const data = [
  { name: "python", likes: 0.7 },
  { name: "c", likes: 0.3 },
  { name: "c++", likes: 0.3 },
  { name: "c++", likes: 0.2 },
  { name: "c++", likes: 0.6 },
];
(async function () {

  new Chart(bargraph, {
    type: "bar",
    data: {
      labels: data.map((row) => row.name),
      datasets: [
        {
          data: data.map((row) => row.likes),
          tickLength:12,
          backgroundColor: gradientBg,
          borderColor: "#084de0",
          barThickness:70,
          borderRadius:10
        },
      ],
    },
    
    options:{

        legned:{
          display:false

      },
      scales:{
        x:{
          grid:{
            drawOnChartArea:false
          }
        },
        y:{
          grid:{
            drawOnChartArea:false
            
          }
        }
      }
    }
  });
})();

const doughnutgraph = document.querySelector("#doughnutgraph").getContext('2d');

new Chart(doughnutgraph, {
  type: "doughnut",
  data: {
    datasets: [
      {
        lables:data.map((row)=>row.name),
        data: data.map((row) => row.likes),
        tickLength:12,
        backgroundColor: ['blue','rgb(153, 0, 255)','rgb(153, 120, 255)','rgb(153, 150, 255)','rgb(153, 150, 255)'],
        borderColor: "none",
        borderRadius:5
      },
    ],
  },

});
const linegraph = document.querySelector("#linegraph").getContext('2d');

(async function () {

  new Chart(linegraph, {
    type: "line",
    data: {
      labels: data.map((row) => row.name),
      datasets: [
        {
          data: data.map((row) => row.likes),
          tickLength:12,
          backgroundColor: gradientBg,
          borderColor: "#084de0",
          barThickness:70,
          borderRadius:10
        },
      ],
    },
    
    options:{
      maintainAspectRatio:false,
        legned:{
          display:false

      },
      scales:{
        x:{
          grid:{
            drawOnChartArea:false
          }
        },
        y:{
          grid:{
            drawOnChartArea:false
            
          }
        }
      }
    }
  });
})();
