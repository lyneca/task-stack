var taskStack = ['Hello'];

function refreshStack() {
    $('.tasks').empty();
    $.each(taskStack, (_, task) => {
        $('.tasks').prepend(
            $('<div>').addClass('task')
            .text(task)
            .hide()
            .fadeIn(100)
        )
    });
}

function addTask(task) {
    taskStack.push(task);
    $('.tasks').prepend(
        $('<div>').addClass('task')
        .text(task)
        .hide()
        .fadeIn(100)
    )
    // refreshStack();
}

function removeTask() {
    taskStack.pop();
    $('.task:first-child').css('background-color', '#bbffbb').delay(100).fadeOut(200, function() {
        $(this).remove()
        if ($('.task').length == 0) {
            $('.task-submit').html('<i class="fas fa-plus"></i>');
        }
    });

    // refreshStack();
}

$('.task-add').keyup(function() {
    if ($('.task-add').val() != '' || $('.task').length == 0) {
        $('.task-submit').html('<i class="fas fa-plus"></i>');
    } else {
        $('.task-submit').html('<i class="fas fa-check"></i>');
    }
});

$('.task-form').submit(function(event) {
    if ($('.task-add').val() == '') {
        removeTask();
    } else {
        addTask($('.task-add').val());
    }

    $('.task-add').val('');
    event.preventDefault();
});
