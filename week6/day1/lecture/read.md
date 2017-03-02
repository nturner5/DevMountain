Primary key also known as a index or key. 
the index will act as a primary key that is unique
primary key is the parent of the foreign key.

foreign key is not unique.
It is alien to it. not unique to the record. 
foreign key is the child
this is what links to the two together. 

parent is the affected area
child is the injury
the injuries will have the foreign key
both of them will have the primary key






Day 1

SQL (Structured Query Language) ---Databases!

Monday, February 27, 2017
10:12 AM

Vocab: Standard application architecture (or "Stack)



Client
Router
Application --- The stuff your router forwards information to.
Persistence --- Stuff that sticks around (databases)

CRUD
    Create -- introducing novelty (creating something new!)
    Read --- Being able to translate
    Update --- this is actually like Deleting and then recreating anew.
    Delete ---
    
    The world is full of trade-offs.
    
    Mutable data - data that can be changed
    Immutable data --- can't be changed


3 main types of databases in computers:

    File System
    
    Relational DB
        SQL
    
    Document Store
        noSQL
        MongoDB
        Apache DB
        Firebase
        RethinkDB
        
        
    Relational databases are good at relationships.
        It tracks relationships of objects stored inside.
        
    Edgar Codd's 1970
    "A Relational Model of Data"
    
        #1.) Values in Tables
            In SQL, everything is stored as a value in a table. EVERYTHING. There are no objects.
            
        #2.) The Value can always be found with a combination of 3 things: Table name, the KEY and the Column.
            Id    Injury    Affectedmuscle    Cause    Timetoheal
            1    Groin pull    Adductor magnus    Zipline-failure    12
            
        
        
        #3.) Null Values - Don't store BLANK values. It is a NULL value (not a n empty string)
        
        For a database to be relational, it needs a comprehensive language to do it. SQL is that language. The structured query language.
        
        SQL manipulates the data in the database! Wahoo!
        
        
        
        Select * from injuries; //select all columns from injuries table.
        
        Select id, name from injuries    //select the id and name column from injuries.
        
        In SQL it is typical to CAPITALIZE the keywords in SQL.
        
         as ---allows you to set an alias for different sets of data, columns, etc.
         count    ---counts the values in the column
        where
        
        
        In SQL always use single quotes.
        
        Instead of = use "IS" keyword for equivalency, or IS NOT instead of !=
        
        Rows are referred to as "records" in the industry
        
        SELECT * FROM injuries WHERE name LIKE '%Pulled' ----anything that starts with "pulled"
        
        
        Pattern matching ---rarely used because it is slow.
        
        
        
        Enumeration (lists)
        
        Distinct ---takes the values without any duplicates
        
        Unique key -identifies unique items within a table
        Foreign Key --- a key from a foreign table. Doesn't have to be unique.
        
The ALTER statement changes the schema of a table.