USE bdMoove; 

/* Criações das Tabelas*/
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50)
);

insert into usuario values
(null, 'Arthur Cabral'),
(null, 'Guilherme Paternezi');



CREATE TABLE maquina (
idMaquina INT PRIMARY KEY AUTO_INCREMENT,
tipoMaquina VARCHAR(20)
);

create table componentes (
idComponentes int primary key auto_increment,
tipo varchar(50),
metrica varchar(10)
);

insert into componentes values
(null, 'memory_load', '%'),
(null, 'memory_use', 'GB'),
(null, 'memory_available', 'GB'),
(null, 'cpu_clock', 'GHz'),
(null, 'cpu_temperature', '°C'),
(null, 'cpu_load', '%');


create table configuracao (
idConfiguracao int primary key auto_increment,
fkComponente int,
foreign key (fkComponente) references componentes(idComponentes),
fkMaquina int,
foreign key (fkMaquina) references maquina(idMaquina)
);

create table dados (
idDados int primary key auto_increment,
valor decimal(7,2),
dataHora datetime,
fkConfiguracao int,
foreign key (fkConfiguracao) references configuracao(idConfiguracao)
);




