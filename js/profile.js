function addSrc() {
    $('.add-exp').css('background','rgb(17, 184, 128)');
    $('.add-src').css('background','black');
    $('.add-exp-box').css('display','none');
    $('.toggle-add-box').css('display','block');
    $('.add-src-box').css('display','block');
}
function addExp() {
    $('.add-src').css('background','rgb(17, 184, 128)');
    $('.add-exp').css('background','black');
    $('.add-src-box').css('display','none');
    $('.toggle-add-box').css('display','block');
    $('.add-exp-box').css('display','block');
}
function toggleAddBox() {
    $('.add-exp').css('background','rgb(17, 184, 128)');
    $('.add-src').css('background','rgb(17, 184, 128)');
    $('.add-exp-box').css('display','none');
    $('.add-src-box').css('display','none');
    $('.toggle-add-box').css('display','none');
}

function expandCatg(catgId) {
    document.getElementsByClassName('cr'+catgId)[0].style.display='none';
    document.getElementsByClassName('cd'+catgId)[0].style.display='block';
    document.getElementsByClassName('catgSumBox'+catgId)[0].style.display='block';
}
function compressCatg(catgId) {
    document.getElementsByClassName('cd'+catgId)[0].style.display='none';
    document.getElementsByClassName('cr'+catgId)[0].style.display='block';
    document.getElementsByClassName('catgSumBox'+catgId)[0].style.display='none';
}

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Nap',      2],
        ['Eat',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Monthly Expenditures'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

$(document).ready(function () {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
})