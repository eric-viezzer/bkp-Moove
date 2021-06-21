create database bdMonitoramento;
use bdMonitoramento;

create table tbTransportadora(
	codTrans int primary key auto_increment,
	nomeTrans varchar(40),
	cnpjTrans varchar(20),
    senhaTrans varchar(40),
    telefone1 varchar(12),
    telefone2 varchar(12)
);

create table tbLinha(
	numLinha int primary key,
     fkTrans int,
     kmLinha float,
     foreign key (fkTrans) references tbTransportadora (codTrans)
);

create table tbBus(
	codBus int primary key,
	 modelo varchar(25),
	 qtdPorta int,
	 fkTrans int,
     foreign key (fkTrans) references tbTransportadora (codTrans)
);

create table tbLinhaBus (
	codLinhaBus int primary key auto_increment
    , dataLinhaBus date
    , hrComeco time
    , hrFim time
    , fkLinha int
    , fkBus int
    , foreign key (fkLinha) references tbLinha (numLinha)
    , foreign key (fkBus) references tbBus (codBus)
);

create table tbSensor(
	codSensor int primary key auto_increment
	, fkBus int
	, tipoSensor char(1)
    , foreign key (fkBus) references tbBus (codBus)
);

create table tbMovimento(
	codMovimento int primary key auto_increment
    , fkSensor int
    , dataMovimento date
    , hora time
    , localizacao varchar(60)
    , foreign key (fkSensor) references tbSensor (codSensor)
);

insert into tbTransportadora (nomeTrans, cnpjTrans) 
values
	('Sambaíba Transportes Urbanos', ' 01.751.967/0011-40')
	, ('Consorcio Bandeirante De Transporte','05.903.674/0001-10')
	, ('Viação Metrópole Paulista','31.974.104/0004-73');

insert into tbLinha (numLinha, fkTrans, kmLinha)
values 
	(1234, 1, 12.4)
	, (1345, 2, 18.5)
	, (2835, 3, 19.3);

insert into tbBus (codBus, modelo, qtdporta, fkTrans) 
values
	(123, 'Caio', 3, 1)
	, (241, 'Mercedes-Benz', 2, 2)
	, (322, 'Volkswagen', 2, 3);

insert into tbLinhaBus (dataLinhaBus,hrComeco,hrFim,fkLinha,fkBus) 
values
	('2020-03-09', '07:01:45', '23:02:35', 1234, 123)
	,('2020-03-02','07:30:52','23:31:43',2835, 241)
	,('2020-03-04','08:00:00','23:59:59',1345, 322);

insert into tbSensor (fkBus,tipoSensor) 
values
	(123,'E')
	, (123,'S')
	, (123,'S')
	, (241,'E')
    , (241, 'S')
    , (322, 'E')
    , (322, 'S');

insert into tbMovimento (fkSensor,dataMovimento,hora,localização) 
values
	(1,'2020-03-04','17:44:23','23,35')
	,(1,'2020-03-04','17:44:54','28,25')
	,(2,'2020-03-04','17:48:34','24,47')
	,(3,'2020-03-04','17:52:24','28,25')
	,(4,'2020-03-04','17:58:21','23,35')
	,(5,'2020-03-04','17:58:51','24,47');

select * from tbTransportadora;
select * from tbLinha;
select * from tbMovimento;
select * from tbSensor;