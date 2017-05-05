
UPDATE vehicles
SET ownerId = NULL
where ID = $1;