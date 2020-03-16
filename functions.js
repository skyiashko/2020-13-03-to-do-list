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
