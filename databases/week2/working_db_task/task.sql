-- use hyf_db_lesson1;
-- 1)Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task(
    title, 
    description,
    created, 
    updated,
    due_Date, 
    status_ID, 
    user_ID)
VALUES( 
    'hyf_db_lesson2',
    'learn mysql database',
	 NOW(),
	'2019-11-18 11:30:00',
    '2020-01-01 12:00:00',
     1,
     6);
 
 
 
 -- 2) Change the title of a task with these attributes: taskID, newTitle
 UPDATE task
 SET title = 'do mysql database homework'
 WHERE id = 10;
 
 
 -- 3)Change the task due date with these attributes: taskID, newDueDate
 UPDATE task
 SET due_date = '2019-11-23 12:00:00'
 WHERE id = 10;
 
 -- 4)Change the task status with these attributes: taskID, newStatus
 UPDATE task
 SET status_id = 3
 WHERE id = 10;
 
 -- 5) Mark a task as complete with this attribute: taskID
 UPDATE task 
 SET status_id = 3
 WHERE id = 11;
 
 -- 6) Delete task with this attribute: taskID
 DELETE FROM task
 WHERE id = 12;
 
 





 

