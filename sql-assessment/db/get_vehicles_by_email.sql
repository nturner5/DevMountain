SELECT * FROM users
JOIN vehicles ON users.ID = vehicles.ownerId
WHERE users.email = $1;