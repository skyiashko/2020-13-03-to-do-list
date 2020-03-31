$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');
const $formEditTask = $('#formEditTask');
const $modalEditTask = $('#modalEditTask');

$formAddTask.on('submit', function(event) {
    event.preventDefault();

    let task = {
        id: new Date().getTime(), 
        title: $('[name="title"]', this).val(),
        status: 1, //1 - todo, 2 - in progress, 3 - done
        date: $('[name="date"]', this).val(),
		description: $('[name="description"]', this).val(),
    };

    addTask(task.id, task);
   
    localStorage.setItem(task.id, JSON.stringify(task));

    $modalAddTask.modal('hide');

    this.reset(); 
});

for (let key in localStorage) {
   
    if(!localStorage.hasOwnProperty(key)) continue;

    const task = JSON.parse(localStorage[key]);

    addTask(task.id, task);
}

$('body').on('click', '.btn-edit', function() {
    const $parent = $(this).parents('[data-id]');

    const taskId = $parent.data('id');

    const task = JSON.parse(localStorage.getItem(taskId));

    for(let key in task) {
        $formEditTask.find(`[name="${key}"]`).val(task[key]);
    }

    $modalEditTask.modal('show');
});

$formEditTask.on('submit', function(event) {
    event.preventDefault();

    let task = { 
        title: $('[name="title"]', this).val(),
        status: $('[name="status"]', this).val(),  //1 - todo, 2 - in progress, 3 - done
        id: $('[name="id"]', this).val(),
        date: $('[name="date"]', this).val(),
		description: $('[name="description"]', this).val()
    };

    $tasksList.find(`[data-id="${task.id}"]`).remove();

    addTask(task.id, task);

    $modalEditTask.modal('hide');

    localStorage.setItem(task.id, JSON.stringify(task));
});

$('body').on('click', '.btn-delete', function(event) {

    const $parent = $(this).parents('[data-id]')

    const taskId = $parent.data('id');
    $parent.remove();

    localStorage.removeItem(taskId);
});