function addTask(id, task) {

	const $btnDelete = $('<button>')
	.addClass('btn btn-danger btn-xs pull-right btn-delete')
	.html('<i class="glyphicon glyphicon-trash"></i>');
	
	const $taskItem = $('<li>')
	.addClass('list-group-item')
	.text(task.title)
	.attr('data-id', id)
	.append($btnDelete);
	
	$tasksList
		.find(`[data-status="${task.status}"]`)
		.append($taskItem);
}

function removeTask() {
	localStorage.clear();
	$('[data-status]').find('li').remove(); 
}
function countStatistics() {
     let taskCounts = {
        1: 0,
        2: 0,
        3: 0
     }; 

     for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const task = JSON.parse(localStorage[key]);

            taskCounts[task.status]++;
        }
     }
     
     for (let key in taskCounts) {
        let $taskCounter = $(`[data-count-status="${key}"]`);

        if($taskCounter) {
             $taskCounter.text(taskCounts[key]);
        }
     }
}