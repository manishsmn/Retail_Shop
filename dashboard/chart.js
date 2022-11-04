// *****Dashboard Chart***** //
let ctx = document.getElementById('dashboardChart');
 if(ctx){
    ctx.getContext('2d');
    const dashboardChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Television', 'Laptop', 'Cell Phone', 'Fridge', 'Books', 'Gold','Pen', 'Notebook', 'Dress', 'Paint', 'Carpet', 'Food'],
            datasets: [{
                label: 'Recent Order',
                data: [1200, 750, 600, 300, 120, 1800,75,36,255,434,1236,422],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)',
                    'rgb(78,233,143)',
                    'rgb(230,214,0)',
                    'rgb(154,24,245)',
                    'rgb(248,162,4)',
                    'rgb(219,9,181)',
                    'rgb(179,212,255)',
                    'rgb(61,189,160)',
                    'rgb(138,224,78)',
                    'rgb(37,83,255)',
                    'rgb(126,17,89)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
    });
 }

// *****Sales Chart***** //
const sales = document.getElementById('salesChart');
 if (sales) {
    sales.getContext('2d');
    const salesChart = new Chart(sales, {
        type: 'doughnut',
        data: {
            labels: ['Television', 'Laptop', 'Cell Phone', 'Fridge', 'Books', 'Gold','Pen', 'Notebook', 'Dress', 'Paint', 'Carpet', 'Food'],
            datasets: [{
                label: 'Sales',
                data: [1200, 750, 600, 300, 120, 1800,75,36,255,434,1236,422],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)',
                    'rgb(78,233,143)',
                    'rgb(230,214,0)',
                    'rgb(154,24,245)',
                    'rgb(248,162,4)',
                    'rgb(219,9,181)',
                    'rgb(179,212,255)',
                    'rgb(61,189,160)',
                    'rgb(138,224,78)',
                    'rgb(37,83,255)',
                    'rgb(126,17,89)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
    });
 }
        

// *****SalesManWise Sales Chart***** //
 const salesmanwise = document.getElementById('salesmanWiseSales');
 if (salesmanwise) {
    salesmanwise.getContext('2d');
    const salesmanWiseSales = new Chart(salesmanwise, {
        type: 'line',
        data: {
            labels: ['Jonny', 'Kenny', 'Jenny', 'Killy', 'Filly', 'Bumbo','Bilbo', 'Frodo', 'Kimo', 'Zico', 'Jeco', 'Haso'],
            datasets: [{
                label: 'Salesman Wise Sales',
                data: [1500, 750, 600, 300, 120, 1800,75,36,255,434,1236,422],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)',
                    'rgb(78,233,143)',
                    'rgb(230,214,0)',
                    'rgb(154,24,245)',
                    'rgb(248,162,4)',
                    'rgb(219,9,181)',
                    'rgb(179,212,255)',
                    'rgb(61,189,160)',
                    'rgb(138,224,78)',
                    'rgb(37,83,255)',
                    'rgb(126,17,89)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
    });
 }

// *****Total Collection Chart***** //
 const totalcollection = document.getElementById('totalCollection');
 if (totalcollection) {
    totalcollection.getContext('2d');
    const totalCollection = new Chart(totalcollection, {
        type: 'polarArea',
        data: {
            labels: ['Cash', 'UPI', 'Paytm', 'Bank'],
            datasets: [{
                label: 'Total Collection',
                data: [3500, 540, 950, 8600],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)',
                    'rgb(78,233,143)',
                    'rgb(230,214,0)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
    });
 }

// *****SalesMan Attendance Chart***** //
 const salesmanattendance = document.getElementById('salesmanAttendance');
 if (salesmanattendance) {
    salesmanattendance.getContext('2d');
    const salesmanAttendance = new Chart(salesmanattendance, {
        type: 'doughnut',
        data: {
            labels: ['Present', 'Absent'],
            datasets: [{
                label: 'Attendance',
                data: [9, 3],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
});
}

// *****Sales Expense Chart***** //
const saleexpense = document.getElementById('salesExpense');
 if (saleexpense) {
    saleexpense.getContext('2d');
    const salesExpense = new Chart(saleexpense, {
        type: 'polarArea',
        data: {
            labels: ['Television', 'Laptop', 'Cell Phone', 'Fridge', 'Books', 'Gold','Pen', 'Notebook', 'Dress', 'Paint', 'Carpet', 'Food'],
            datasets: [{
                label: 'Expense',
                data: [1200, 750, 600, 300, 120, 1800,75,36,255,434,1236,422],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)',
                    'rgb(78,233,143)',
                    'rgb(230,214,0)',
                    'rgb(154,24,245)',
                    'rgb(248,162,4)',
                    'rgb(219,9,181)',
                    'rgb(179,212,255)',
                    'rgb(61,189,160)',
                    'rgb(138,224,78)',
                    'rgb(37,83,255)',
                    'rgb(126,17,89)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
    });
 }

// *****Sales Demand Chart***** //
const saledemand = document.getElementById('salesDemand');
 if (saledemand) {
    saledemand.getContext('2d');
    const salesDemand = new Chart(saledemand, {
        type: 'bar',
        data: {
            labels: ['Television', 'Laptop', 'Cell Phone', 'Fridge', 'Books', 'Gold','Pen', 'Notebook', 'Dress', 'Paint', 'Carpet', 'Food'],
            datasets: [{
                label: 'Demand',
                data: [52, 12, 14, 23, 35, 11,45,32,43,45,12,45],
                backgroundColor: [
                    'rgb(230,0,73)',
                    'rgb(63,182,255)',
                    'rgb(78,233,143)',
                    'rgb(230,214,0)',
                    'rgb(154,24,245)',
                    'rgb(248,162,4)',
                    'rgb(219,9,181)',
                    'rgb(179,212,255)',
                    'rgb(61,189,160)',
                    'rgb(138,224,78)',
                    'rgb(37,83,255)',
                    'rgb(126,17,89)'
                ],
            }]
        },
        options: {
            responsive:true,
        }
    });
 }