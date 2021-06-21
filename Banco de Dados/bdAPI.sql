use moove;
    
    create table ohwLeituraWind(
    id int primary key not null auto_increment,
    fkmaquina varchar(50),
    disk_load varchar(40),
    user_desktop varchar(50),
    placa_mae varchar(50),
    cpu_count varchar(50),
    memory_load varchar(50),
    memory_use varchar(50),
    memory_available varchar(50),
    video_card varchar(50),
    cpu_name varchar(50),
	cpu_clock varchar(50),
	cpu_temperature varchar(50),
	cpu_load varchar(50),
    media_clock varchar(50),
    media_temp varchar(50),
    datahora datetime
    );


select * from ohwLeituraWind;
