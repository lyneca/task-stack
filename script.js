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
    });
    // refreshStack();
}

$('.task-form').submit(function(event) {
    if ($('.task-add').val() == '') {
        removeTask();
    } else {
        addTask($('.task-add').val());
    }

    $('.task-add').val('');
    event.preventDefault();
});
