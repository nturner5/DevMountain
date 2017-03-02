# Express Day 2

- Primary Key is unique in the Database
- Foregin Key is a reference of the Primary key to the Parent

### JavaScript in SQL

- Objects and their children

### Cannot have orphaned children

- ALTER TABLE injuries ADD COLUMN affected_area_id INTEGER REFERENCES affected_areas(id);

## Examples

### Combine the two tables into one query

select * from affected_areas
join injuries 
  on affected_areas.id = injuries.affected_area_id;	

- The join is the Parent
- 'On' gets you the primary key to both tables

### Describing a specific name with 'where'

select * from affected_areas
join injuries
  on affected_areas.id = injuries.affected_area_id;	
where affected_areas.name = 'Neck';

- where gets the joined parent and child and finds where the affected area is 'Neck' or other specified value

### Limiting the amount of information we query

SELECT affected_areas.name, injuries.name
FROM affected_areas
JOIN injuries ON affected_areas.id = injuries.affected_area_id

SELECT injuries.id, injuries.name
FROM affected_areas
JOIN injuries ON affected_areas.id = injuries.affected_area_id
WHERE affected_areas.name = 'Neck';

- ambiguous means that they are they same. We must disambiguate them
- we disambiguate by using the 'select' so we only see the injuries.id and injuries name with the 'where' being specified

### You can see two queries in different table by making another 'select'

select * from affected_areas
join injuries on affected_areas.id = injuries.affected_area_id	
where affected_areas.name = 'Neck';

select * from affected_areas

### Nesting queries

select * from injuries
where affected_area_id 
 in (select id 
     from affected_areas 
     where name = 'Neck' or name = 'Groin');

- You can use the one above if you didn't know the id
- you can also use this:

select * from injuries
where affected_area_id in (1, 2);

### Using Group by

SELECT affected_areas.name, count(*)
FROM affected_areas
JOIN injuries ON affected_areas.id = injuries.affected_area_id
group by affected_areas.name

- Group by will group by the specificed value such as affected_areas.name
- The count will show how mnay children a parent has

### Delete

delete from injuries

- will delete the table
- Cannot get it back

## Mini Project

### Writing a join

- Join the Artist and Album tables, listing the artist name next to each album name

select Artist.Name, Album.Title from Album
join Artist on Album.AlbumId = Artist.ArtistId

### Using Group by

- How many albums does each artist have? Use a GROUP BY to aggregate the number of albums per artist:

select Artist.Name, count(*) from Album
join Artist on Album.AlbumId = Artist.ArtistId
group by Artist.Name

### Having

- How about limiting the list to artists with more than one album?

select Artist.Name, count(*) from Album
join Artist on Album.ArtistId = Artist.ArtistId
group by Artist.Name
having count(*) > 1;

### Making it a subquery

- Produce the same list in a subquery

select Artist.Name, 
	(
  	select count(*)
  	from Album
  	where Album.ArtistId = Artist.ArtistId) as num_albums
  )
from Artist
where num_albums > 1

# PORT 5432 #