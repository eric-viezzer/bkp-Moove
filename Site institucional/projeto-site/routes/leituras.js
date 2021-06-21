var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

/* Recuperar as últimas N leituras */
router.get('/ultimas', function (req, res, next) {

    // quantas são as últimas leituras que quer? 8 está bom?
    const limite_linhas = 7;

    console.log(`Recuperando as últimas ${limite_linhas} leituras`);

    let instrucaoSql = `select top 7 leitura,  FORMAT(dataMovimento,'HH:mm:ss') as momento_grafico from tbMovimento order by codMovimento desc`;

    // let momento1 = new Date();

    // for (let tempos = 0; tempos < 10; tempos++) {

    //     let momento2 = new Date(momento1 - 60000);

    //     console.log(`m1: ${momento1} - m2: ${momento2}`);

    //     const momento1Sql = `CONVERT(Datetime, '${momento1.toLocaleDateString()} ${momento1.toLocaleTimeString()}', 120)`;
    //     const momento2Sql = `CONVERT(Datetime, '${momento2.toLocaleDateString()} ${momento2.toLocaleTimeString()}', 120)`;

    //     let instrucao = `
    // 		(select count(codMovimento) from tbMovimento where
    // 		fkSensor = 1 and
    // 		dataMovimento BETWEEN ${momento2Sql} and ${momento1Sql}) 
    // 		-
    // 		(select count(codMovimento) from tbMovimento where
    // 		fkSensor = 2 and
    // 		dataMovimento BETWEEN ${momento2Sql} and ${momento1Sql}) 
    // 		as passageiros_t${tempos+1}
    // 	`
    //     if (tempos + 1 < 10) {
    //         instrucao += ',';
    //     }
    //     instrucaoSql += instrucao

    //     momento1.setTime(momento1 - 60000)
    // }

    instrucaoSql += ';'

    console.log(`consulta: ${instrucaoSql}`);


    sequelize.query(instrucaoSql, {
            model: Leitura,
            mapToModel: true
        })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});


// tempo real (último valor de cada leitura)
router.get('/tempo-real', function (req, res, next) {

    console.log(`Recuperando a última leitura`);

    const instrucaoSql = `select top 1 leitura, FORMAT(dataMovimento,'HH:mm:ss') as momento_grafico  
    from tbMovimento order by codMovimento desc`;

    sequelize.query(instrucaoSql, {
            type: sequelize.QueryTypes.SELECT
        })
        .then(resultado => {
            res.json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });

});


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {

    console.log(`Recuperando as estatísticas atuais`);

    const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from leitura`;

    sequelize.query(instrucaoSql, {
            type: sequelize.QueryTypes.SELECT
        })
        .then(resultado => {
            res.json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });

});


module.exports = router;

function agora() {
    const momento_atual = new Date();
    const retorno = `${momento_atual.toLocaleDateString()} ${momento_atual.toLocaleTimeString()}`;
    console.log(`Data e hora atuais: ${retorno}`);
    return retorno;
}