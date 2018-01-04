$(document).ready(function (){
    //search input
    $('#header__search').click(function (e) {
        e.preventDefault();
        $('.header__nav-input').show(300);

    });

    //dropdown filters
   $('#dropdown__btn-sort').click(function (e) {
       e.preventDefault();
       $('#dropdown__list-sort').show();
       $('.sc__sort-icon.icon-triangle-down').hide();
       $('.sc__sort-icon.icon-triangle-up').show();
   });

    $(document).on('click', function(e){
        if(!$(e.target).closest('#dropdown__btn-sort, #dropdown__list-sort').length) {
            $('#dropdown__list-sort').hide();
            $('.sc__sort-icon.icon-triangle-down').show();
            $('.sc__sort-icon.icon-triangle-up').hide();
        }
        if(!$(e.target).closest('#dropdown__btn-show, #dropdown__list-show').length) {
            $('#dropdown__list-show').hide();
            $('.sc__show-icon.icon-triangle-down').show();
            $('.sc__show-icon.icon-triangle-up').hide();
        }
        if(!$(e.target).closest('#header__search, .header__nav-input').length) {
            $('.header__nav-input').hide(300);
        }
    });

    $('#dropdown__btn-show').click(function(e) {
        e.preventDefault();
        $('#dropdown__list-show').show();
        $('.sc__show-icon.icon-triangle-down').hide();
        $('.sc__show-icon.icon-triangle-up').show();
    });


});
