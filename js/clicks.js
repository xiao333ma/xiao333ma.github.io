var title = document.querySelector('title').innerHTML;

var setClicks = function(data){
    var spans = document.querySelectorAll('#clicks');
    var clicks = "（╯‵□′）╯︵┴─┴";
    if(data.hasOwnProperty('clicks'))
        clicks = data['clicks'];
    for(var i=0;i<spans.length;i++)
        spans[i].innerHTML = clicks;
}

$.ajax({
    'url' : '/clicks/clicks.php',
    'data' : {
        'title' : title
    },
    'dataType' : 'json',
    'method' : 'GET',
    'success' : setClicks,
    'error' : setClicks
});