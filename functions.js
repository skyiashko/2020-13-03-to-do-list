function addTask(id, task) {
    const $taskItem = $('<li>')
        .addClass('list-group-item')
        .text(task.title || 'Untitled')
        .attr('data-id', id);

    const $btnEdit = $('<button>')
            .addClass('btn btn-warning btn-xs btn-edit pull-right')
            .html('<i class="glyphicon glyphicon-pencil"></i>')
            .css('margin-left', '10px');

    const $btnDelete = $('<button>')
            .addClass('btn btn-danger btn-xs pull-right btn-delete')
            .html('<i class="glyphicon glyphicon-trash"></i>')
            .css('margin-left', '10px');

    const $btnInfo = $('<button>')
            .addClass('btn btn-primary btn-xs btn-info pull-right')
            .html('<i class="glyphicon glyphicon-tasks"></i>')
            .attr('data-toggle', 'collapse')
            .attr('data-target', '#info' + id);

    $taskItem
            .append($btnDelete)
            .append($btnEdit)
            .append($btnInfo);
    
    const $dt = $('<dt>')
        .text(task.date || 'No date');

    const $dd = $('<dd>')
        .text(task.description || 'No description');
    
    const $dl = $('<dl>')
        .append($dt)
        .append($dd);

    const $infoContainer = $('<div>')
        .addClass('collapse container')
        .attr('id', 'info' + id)
        .append($dl);

    $taskItem.append($infoContainer); 
     
    $tasksList
        .find(`[data-status="${task.status}"]`)
        .append($taskItem);
}