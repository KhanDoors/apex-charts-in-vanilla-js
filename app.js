//Chart Options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "Population",
      data: [
        8550405,
        3971883,
        2720546,
        2296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
      ]
    }
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#f44336"]
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Largest Cities in U. S.",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25"
    }
  }
};

//Init Chart
const chart = new ApexCharts(document.querySelector(".chart1"), options);
const chart1 = new ApexCharts(document.querySelector(".chart2"), options);
const chart2 = new ApexCharts(document.querySelector(".chart3"), options);
const chart3 = new ApexCharts(document.querySelector(".chart4"), options);
const chart4 = new ApexCharts(document.querySelector(".chart5"), options);
const chart5 = new ApexCharts(document.querySelector(".chart6"), options);

// Render Chart
chart.render();
chart1.render();
chart2.render();
chart3.render();
chart4.render();
chart5.render();

//button
// document.querySelector("button").addEventListener("click", () =>
//   chart.updateOptions({
//     plotOptions: {
//       bar: {
//         horizontal: true
//       }
//     }
//   })
// );
