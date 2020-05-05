$(document).ready(function(){
    $('.hour').each(function(){
       
        //console.log($(this));
        var currentHour = moment().startOf('hour');
        var comparedHour = moment().hour($(this).attr('data-hour')).startOf('hour');
    
        var task = localStorage.getItem($(this).attr('data-hour'));
        $(this).next().children('textarea').val(task);

        if(currentHour > comparedHour){
            $(this).next().children('textarea').addClass('past');
        }

        else if(currentHour.isSame(comparedHour,'hour')){
            $(this).next().children('textarea').addClass('present');

        }
        else{

            $(this).next().children('textarea').addClass('future');

        }
    
    });

    $('.saveBtn').click(function(event) {
        var task = $(this).prev().children('textarea').val();
        console.log(task);
        localStorage.setItem($(this).prev().prev().attr('data-hour'), task);

        
    });
});