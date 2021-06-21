USE moove;

CREATE TABLE leituraMaq( 
    id int NOT NULL AUTO_INCREMENT, 
    cpu varchar(5) NOT NULL,
    ram varchar(5) NOT NULL, 
    ram_percent varchar(5) NOT NULL, 
    disk varchar(5) NOT NULL, 
    PRIMARY KEY (id)
    );
    
select * from leituraMaq;