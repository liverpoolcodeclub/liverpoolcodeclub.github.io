$(function(){
    $('.project-steps__step').each(function(){
        var $step = $(this);
        var $checkbox = $('<span>').addClass('project-steps__step__checkbox');
        $checkbox.on('click', function(){
            $step.toggleClass('project-steps__step--completed');
        });
        $checkbox.prependTo($step);
    });
});