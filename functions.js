function addTask(id, task) {
    const $taskItem = $('<li>').addClass('list-group-item').text(task.title);

    $tasksList
        .find(`[data-status="${task.status}"]`)
        .append($taskItem);

    countStatistics();
}

function removeAllTask () {    
        localStorage.clear();
        $('[data-status]').find('li').remove(); 
          
        countStatistics();
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