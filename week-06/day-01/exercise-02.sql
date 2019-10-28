CREATE TABLE Todos (
    TodoID INTEGER,
    Todo TEXT ,
    TodoState BOOLEAN 
);

INSERT INTO Todos (TodoID, Todo, TodoState) VALUES (1, "Get up", false), (2, "Eat breakfast", false);
INSERT INTO Todos (TodoID, Todo, TodoState) VALUES (3, "Go work", true), (4, "Go back home", false);
UPDATE Todos SET TodoState = true WHERE TodoID = 1;
DELETE FROM Todos where Todo="Eat breakfast";
SELECT Todo FROM Todos WHERE TodoState = true; 