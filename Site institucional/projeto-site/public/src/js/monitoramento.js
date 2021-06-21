function trocaLinha() {
    let data = []
    for (let i = 0; i < 7; i++) {
        data.push(parseInt(Math.random() * 81))
    }
    let line = document.querySelector('#lines').value
    lineChart.data.datasets[0].label = line
    lineChart.data.datasets[0].data = data
    lineChart.update()
}

setInterval(function () {
    let data1 = []
    let total1 = parseInt(Math.random() * 39) + 1
    let rest1 = 100 - total1
    data1.push(rest1)
    data1.push(total1)
    myPieChart1.data.datasets[0].data = data1
    myPieChart1.update()

    let data2 = []
    let total2 = parseInt(Math.random() * 39) + 1
    let rest2 = 100 - total2
    data2.push(rest2)
    data2.push(total2)
    myPieChart2.data.datasets[0].data = data2
    myPieChart2.update()

}, 3000)