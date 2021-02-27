var ctz = document.getElementById('barChart').getContext('2d');


// doughnuts
var ctyA = document.getElementById('doughnut-1').getContext('2d');
var ctyB = document.getElementById('doughnut-2').getContext('2d');
var ctyC = document.getElementById('doughnut-3').getContext('2d');

// background gradients for bar chart
var laptopBackground = ctz.createLinearGradient(0, 0, 0, 200);
var mobileBackground = ctz.createLinearGradient(0, 0, 0, 200);
laptopBackground.addColorStop(0, 'rgba(255, 199, 118, 0.4)');   
laptopBackground.addColorStop(1, 'rgba(254, 172, 134, 1)');
mobileBackground.addColorStop(0, 'rgba(218, 67, 163, 0.4)');   
mobileBackground.addColorStop(1, 'rgba(175, 83, 179, 1)');


// bar chart
var barChart =  new Chart(ctz, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
            {
                label: "Laptop",
                data: [40, 30, 60, 35, 60, 25, 50, 40],
                backgroundColor: laptopBackground,
                borderWidth: 0
            },
            {
                label: "Mobile",
                data: [50, 60, 40, 70, 35, 75, 30, 0],
                backgroundColor: mobileBackground,
                borderWidth: 0
            },
        ]
    },

    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top Selling Categories'
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
            boxWidth: 20,
            fontColor: 'black'
            }
        },
    }
});


// line chart 1
var config = {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: 'Apple',
            data: [0, 30, 60, 25, 60, 25, 50, 0],
            backgroundColor: 'rgba(23, 162, 184, .6)',
            borderColor: 'rgba(23, 162, 184, .6)',
            borderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 40,
        },
        {  
            label: 'Samsung',
            data: [0, 60, 25, 80, 35, 75, 30, 0],
            backgroundColor: 'rgba(232, 62, 140, .6)',
            borderColor: 'rgba(232, 62, 140, .6)',
            borderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 40,
        },
    ],
        fill: true,
    },

       
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Product Sales'
            },
        },
        legend: {
            display: true,
            position: 'top',    
            labels: {
              boxWidth: 20,
              fontColor: 'black',
            }
        },
    }
};


// line 2
var line2 = {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'First Time',
                data: [0, 40, 30, 30, 50, 40, 70, 80, 50, 68, 70, 75],
                borderColor: 'rgba(254, 105, 0, 1)',
                borderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 40,
                fill: false,
                lineTension: 0,
            },
            {  
                label: 'Returning',
                data: [0, 45, 42, 40, 70, 50, 60, 70, 60, 66, 70, 80],
                borderColor: 'rgba(62, 229, 146, 1)',
                fillColor: 'black',
                borderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 40,
                fill: false,
                lineTension: 0,
            }
        ],     
    },
       
    options: {
        responsive: true,
        tension: 0,

        plugins: {
            title: {
                display: true,
                text: 'Product Sales',
                
            },
        },
        legend: {
            display: true,
            position: 'top',    
            labels: {
              boxWidth: 20,
              fontColor: 'black',
            }
        },
    }
};



// doughnut 1

var doughnut1 =  new Chart(ctyA, {
    type: 'doughnut',
    data: {
        labels: ['Crêpe', 'Cashmere', 'Leather'],
        datasets: [
            {
                data: [21, 35, 44],
                backgroundColor: [
                    'rgb(62, 229, 146)',
                    'rgb(238, 9, 121)',
                    "rgb(44, 135, 240)"
                ],
                borderWidth: 2
            },
        ]
    },

    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Top Selling Fabrics',
            fontColor: "black",
            fontSize: 18,
            padding: 20,
        },
        
        legend: {
            display: false,
        },
    }
});



// doughnut 2(pie)

var doughnut2 =  new Chart(ctyB, {
    type: 'pie',
    data: {
        labels: ['Milk', 'Yoghurt', 'Cheese'],
        datasets: [
            {
                data: [67, 23, 10],
                backgroundColor: [
                    'rgb(44, 135, 240)',
                    'rgb(62, 229, 146)',
                    'rgb(238, 9, 121)'
                ],
                borderWidth: 2
            },
        ]
    },

    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Top Selling Dairy',
            fontColor: "black",
            fontSize: 18,
            padding: 20,
        },
        
        legend: {
            display: false,
        },
    }
});


// doughnut 3

var doughnut3 =  new Chart(ctyC, {
    type: 'doughnut',
    data: {
        labels: ['Phone', 'Camera', 'Watch'],
        datasets: [
            {
                data: [50, 20, 30],
                backgroundColor: [
                    'rgb(44, 135, 240)',
                    'rgb(62, 229, 146)',
                    "rgb(238, 9, 121)"
                ],
                borderWidth: 2,
            },
        ]
    },

    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Top Selling Gadgets',
            fontColor: "black",
            fontSize: 18,
            padding: 20,
        },
        
        legend: {
            display: false,
        },
    }
});










window.onload = function() {
    var ctx = document.getElementById('waveChart').getContext('2d');
    var ctxB = document.getElementById('lineChart').getContext('2d');
    window.myLine = new Chart(ctx, config);
    window.myLine = new Chart(ctxB, line2);
};