CREATE TABLE injuries
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(40),
  description TEXT,
  tth INTEGER
);

-- What is a schema? https://raw.githubusercontent.com/kendagriff/sql-course/master/images/falcon.jpg

-- Create data in our new table
INSERT INTO injuries
(id, name, description, tth)
VALUES (1, 'Pulled Groin', 'Results from putting too much stress on muscles in your groin and thigh.', 2);

-- Add the rest

INSERT INTO injuries (id, name, description, tth) VALUES (2, 'Cervical Radiculopathy', 'Pinched nerve.', 6);
INSERT INTO injuries (id, name, description, tth) VALUES (3, 'Herniated Disc', 'Soft substance on the inside of the disc (nucleus pulposi) is pushed out', 12);
INSERT INTO injuries (id, name, description, tth) VALUES (4, 'Femur Fracture', 'Bone fracture.', 8);
INSERT INTO injuries (id, name, description, tth) VALUES (5, 'Shattered Toenail', '20 percent of the US population suffers from onychorrhexis.', 3);
INSERT INTO injuries (id, name, description, tth) VALUES (6, 'Nintendo Thumb', 'Painful affliction of opposable digits.', 1);
INSERT INTO injuries (id, name, description, tth) VALUES (7, 'Amnesia', null, 1);
INSERT INTO injuries (id, name, description, tth) VALUES (8, 'Pulled Muscle', 'Results from putting too much stress on any muscles.', 2);

-- What does it mean to "query"?

-- Inspect entire table, returning all its records and columns.
SELECT * FROM injuries;

-- Inspect individual columns on a table.
SELECT name, description FROM injuries;

-- ! Try fetching tth and affected_area_id

-- Summarize the Time-to-heal field
SELECT sum(tth) FROM injuries;

-- ! Try other functions: avg, min, max

-- Count the records
SELECT count(id) FROM injuries;
 
SELECT count(*) FROM injuries;

-- ? What's the difference?

-- Constrain the results
SELECT * FROM injuries WHERE id = 2;
 
-- ! Try finding all injuries where id is greater than or equal to 2

-- Querying on strings
SELECT * FROM injuries WHERE name = 'Nintendo Thumb';

-- Null values
SELECT * FROM injuries WHERE description IS NULL;

-- Combine clauses
SELECT * FROM injuries WHERE tth < 10 AND description IS NOT NULL; 

-- ! How would you find injuries that take 9 or 10 months to heal?
-- ! Can you think of a second way to accomplish the same thing?

-- Pattern matching: https://www.postgresql.org/docs/8.3/static/functions-matching.html
SELECT * FROM injuries WHERE name LIKE 'Pulled%'

-- Enumerations
SELECT * FROM injuries WHERE id IN (1, 2, 3);

-- ! Can you find all records BUT 1, 2, and 3?

-- Sort the results
SELECT * FROM injuries ORDER BY tth;
SELECT * FROM injuries ORDER BY tth ASC;
SELECT * FROM injuries ORDER BY tth DESC;

-- Limit the results
SELECT * FROM injuries ORDER BY tth DESC LIMIT 2;

-- Random results
SELECT * FROM injuries ORDER BY random() LIMIT 1;

-- Distinct values
SELECT tth FROM injuries;           -- dupes
SELECT DISTINCT tth FROM injuries;  -- no dupes

-- END DAY NOTES:
--
-- EXPLAIN SELECT * FROM injuries WHERE name LIKE 'Pulled%'

Select all artists that start with the word Black

select * from Artist 
where Name like 'Black%'

select avg(Total)
from Invoice
