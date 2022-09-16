// modificare dimensiunele diagramei pentru telefon
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//verificare dimensiunea ecranului pentru telefon
if(width < 820){
  // definirea dimensiunelor noi pentru charts
  // document.getElementById("myChart").style.display = "400px";
  // document.getElementById("myChartSec").style.width = "410px";

}

if(width > 820){
  // script for Diagram
  var xValues = ["Management", "Conflict Resolution", "Creative Thinking", "Teamwork", "Networking", "Adaptability", "Leadership", "Patience"];
  var yValues = [20, 10, 15, 15, 10, 15, 15, 10];
  var barColors = [
    "#0FA3B1",
    "#EDAE49",
    "#20FC8F",
    "#F42B03",
    "#B5E2FA",
    "#646881",
    "#3777FF",
    "#70877F"
  ];

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }],
      
    },
    options: {
      title: {
        display: true,
        text: "Soft Skills",
      }
    }
  });

  // script for Diagram
  var xVarValues = ["Data structures and algorithms", "Database and SQL", "OOP", "IDE", "Design", "Web Development", "Data Security", "Text editors"];
  var yVarValues = [15, 11, 15, 9, 15, 15, 11, 10];
  var barVarColors = [
    "#0FA3B1",
    "#EDAE49",
    "#20FC8F",
    "#F42B03",
    "#B5E2FA",
    "#646881",
    "#3777FF",
    "#70877F"
  ];

  new Chart("myChartSec", {
    type: "doughnut",
    data: {
      labels: xVarValues,
      datasets: [{
        backgroundColor: barVarColors,
        data: yVarValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Hard Skills"
      }
    }
  });

// definirea dimensiunelor noi pentru charts
  document.getElementById("myChart").style.width = "600px";
  document.getElementById("myChartSec").style.width = "600x";
}

$(document).ready(function() {
    $('#item1').animate({
       borderBottomWidth: '170px'}, 1000);
    $('#item2').animate({
       borderBottomWidth: '130px'}, 1000);
    $('#item3').animate({
       borderBottomWidth: '50px'}, 1000);
    $('#item4').animate({
       borderBottomWidth: '37.5px'}, 1000);
    $('#item5').animate({
       borderBottomWidth: '37.5px'}, 1000);
    $('#item6').animate({
       borderBottomWidth: '37.5px'}, 1000);
    $('#item7').animate({
       borderBottomWidth: '62.5px'}, 1000);
  });