var express = require('express');
var Avaliacao = require('../models').Avaliacao;
var Linha = require('../models').Linha;
var router = express.Router();
var sequelize = require('../models').sequelize;
let sessoes = [];

// router.post('/enviarAvaliacao', function (req, res, next) {
//     console.log('Recuperando usuário por login senha');

//     var login = req.body.login; // depois de .body, use o nome (name) do campo em seu formulário de login
//     var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

//     let instrucaoSql = `select * from usuarioOnibus where email='${login}' and senha='${senha}'`;
//     console.log(instrucaoSql);

//     sequelize.query(instrucaoSql, {
//         model: usuarioAvaliacao
//     }).then(resultado => {
//         console.log(`Encontrados: ${resultado.length}`);

//         if (resultado.length == 1) {
//             sessoes.push(resultado[0].dataValues.nomeTrans);
//             console.log('sessoes: ', sessoes);
//             res.json(resultado[0]);
//         } else if (resultado.length == 0) {
//             res.status(403).send('Login e/ou senha inválido(s)');
//         } else {
//             res.status(403).send('Mais de um usuário com o mesmo login e senha!');
//         }

//     }).catch(erro => {
//         console.error(erro);
//         res.status(500).send(erro.message);
//     });
// });


// router.get('/enviarBairro/:bairro', function(req, res, next){
//     let bairroLinha = { bairro: req.body.bairro,
//     linha: req.body.linha,
//     bairroParametro: req.params.bairro}

//     res.send({message: bairroLinha.bairroParametro})

//     // res.json({bairro: bairroLinha.bairro, linha: bairroLinha.linha})

// })


router.post('/enviarAvaliacao', function (req, res) {
    var tipoHtml = req.body.tipo
    var comentarioHtml = req.body.comentario
    var linhaHtml = req.body.linha
    Avaliacao.create({
        comentarioAvaliacao: comentarioHtml,
        tipoAvaliacao: tipoHtml,
        dataAvaliacao: (new Date().getDate()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear()),
        horaAvaliacao: (new Date().getHours()) + ':' + (new Date().getMinutes()),
        fkLinha: linhaHtml
    }).then(resultado => {
        console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
})

router.get('/inserirLinhas/:idTrans', function (req, res) {
    console.log('Recuperando avaliacoes');

    // let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, numLinha, idTrans from tbAvaliacao as av, tbLinha as lin, tbTrans as trans where av.fkLinha = lin.idLinha and lin.fkTrans = trans.idTrans and trans.idTrans = ${req.params.numLinha} order by idAvaliacao DESC;`;
    let instrucaoSql = `select * from tbLinha, tbTrans where fkTrans = idTrans and idTrans = ${req.params.idTrans} order by idLinha DESC;`;

    sequelize.query(instrucaoSql, {
        model: Linha
    }).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);

        if (resultado.length != 0) {
            // sessoes.push(resultado[0].dataValues);
            for (n = 0; n < resultado.length; n++) {
                sessoes.push(resultado[n].dataValues);
            }
            res.json(sessoes);
            console.log(sessoes);
            sessoes = [];

            // res.json({sessoesTeste: sessoes})
            //res.json(sessoes);
            //console.log(sessoes[n])
        } else if (resultado.length == 0) {
            res.status(403).send('Login e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }

    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});

router.get('/receberAvaliacoes/:idTrans', function (req, res) {
    console.log('Recuperando avaliacoes');

    // let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, numLinha, idTrans from tbAvaliacao as av, tbLinha as lin, tbTrans as trans where av.fkLinha = lin.idLinha and lin.fkTrans = trans.idTrans and trans.idTrans = ${req.params.numLinha} order by idAvaliacao DESC;`;
    let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, horaAvaliacao, numLinha, idTrans from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} order by idAvaliacao DESC;`;

    sequelize.query(instrucaoSql, {
        model: Avaliacao
    }).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);

        if (resultado.length != 0) {
            // sessoes.push(resultado[0].dataValues);
            for (n = 0; n < resultado.length; n++) {
                sessoes.push(resultado[n].dataValues);
            }
            res.json(sessoes);
            console.log(sessoes);
            sessoes = [];

            // res.json({sessoesTeste: sessoes})
            //res.json(sessoes);
            //console.log(sessoes[n])
        } else if (resultado.length == 0) {
            res.status(403).send('Login e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }

    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});

router.get('/receberAvaliacoesTipo/:idTrans/:tipo', function (req, res) {
    console.log('Recuperando avaliacoes');

    // let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, numLinha, idTrans from tbAvaliacao as av, tbLinha as lin, tbTrans as trans where av.fkLinha = lin.idLinha and lin.fkTrans = trans.idTrans and trans.idTrans = ${req.params.numLinha} order by idAvaliacao DESC;`;
    let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, horaAvaliacao, numLinha, idTrans from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = '${req.params.tipo}' order by idAvaliacao DESC;`;

    sequelize.query(instrucaoSql, {
        model: Avaliacao
    }).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);

        if (resultado.length != 0) {
            // sessoes.push(resultado[0].dataValues);
            for (n = 0; n < resultado.length; n++) {
                sessoes.push(resultado[n].dataValues);
            }
            res.json(sessoes);
            console.log(sessoes);
            sessoes = [];

            // res.json({sessoesTeste: sessoes})
            //res.json(sessoes);
            //console.log(sessoes[n])
        } else if (resultado.length == 0) {
            res.status(403).send('Login e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }

    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});

router.get('/receberAvaliacoesLinha/:idTrans/:idLinha', function (req, res) {
    console.log('Recuperando avaliacoes');

    // let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, numLinha, idTrans from tbAvaliacao as av, tbLinha as lin, tbTrans as trans where av.fkLinha = lin.idLinha and lin.fkTrans = trans.idTrans and trans.idTrans = ${req.params.numLinha} order by idAvaliacao DESC;`;
    let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, horaAvaliacao, numLinha, idTrans from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and numLinha = ${req.params.idLinha} order by idAvaliacao DESC;`;

    sequelize.query(instrucaoSql, {
        model: Avaliacao
    }).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);

        if (resultado.length != 0) {
            // sessoes.push(resultado[0].dataValues);
            for (n = 0; n < resultado.length; n++) {
                sessoes.push(resultado[n].dataValues);
            }
            res.json(sessoes);
            console.log(sessoes);
            sessoes = [];

            // res.json({sessoesTeste: sessoes})
            //res.json(sessoes);
            //console.log(sessoes[n])
        } else if (resultado.length == 0) {
            res.status(403).send('Login e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }

    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});

router.get('/graficoAvaliacaoTopico/:idTrans', function (req, res) {
    console.log('Recuperando avaliacoes');

    // let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, numLinha, idTrans from tbAvaliacao as av, tbLinha as lin, tbTrans as trans where av.fkLinha = lin.idLinha and lin.fkTrans = trans.idTrans and trans.idTrans = ${req.params.numLinha} order by idAvaliacao DESC;`;
    let instrucaoSql = `select count(idAvaliacao) as contador from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = 'infraPontos';
    select count(idAvaliacao) as contador from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = 'cumpHora';
    select count(idAvaliacao) as contador from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = 'seg';
    select count(idAvaliacao) as contador from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = 'infraOnibus';
    select count(idAvaliacao) as contador from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = 'condFunc';
    select count(idAvaliacao) as contador from tbAvaliacao, tbLinha, tbTrans where fkLinha = idLinha and fkTrans = idTrans and idTrans = ${req.params.idTrans} and tipoAvaliacao = 'outra';`

    sequelize.query(instrucaoSql, {
        model: Avaliacao
    }).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);

        if (resultado.length != 0) {
            // sessoes.push(resultado[0].dataValues);
            for (n = 0; n < resultado.length; n++) {
                sessoes.push(resultado[n].dataValues);
            }
            console.log(sessoes)
            res.json(sessoes)
            sessoes = [];

            // res.json({sessoesTeste: sessoes})
            //res.json(sessoes);
            //console.log(sessoes[n])
        } else if (resultado.length == 0) {
            res.status(403).send('Login e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }
        // res.json(sessoes);

    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });

});

router.get('/graficoAvaliacaoLinha/:idTrans', function (req, res) {
    console.log('Recuperando avaliacoes');

    // let instrucaoSql = `select comentarioAvaliacao, dataAvaliacao, numLinha, idTrans from tbAvaliacao as av, tbLinha as lin, tbTrans as trans where av.fkLinha = lin.idLinha and lin.fkTrans = trans.idTrans and trans.idTrans = ${req.params.numLinha} order by idAvaliacao DESC;`;
    let instrucaoSql = `select count(idAvaliacao) as contador, numLinha, idLinha, idTrans from tbAvaliacao, tbLinha, tbTrans where fkTrans = idTrans and idTrans = ${req.params.idTrans} and fkLinha = idLinha group by numLinha, idLinha, idTrans;`

    sequelize.query(instrucaoSql, {
        model: Avaliacao
    }).then(resultado => {
        console.log(`Encontrados: ${resultado.length}`);

        if (resultado.length != 0) {
            // sessoes.push(resultado[0].dataValues);
            for (n = 0; n < resultado.length; n++) {
                sessoes.push(resultado[n].dataValues);
            }
            console.log(sessoes)
            res.json(sessoes)
            sessoes = [];

            // res.json({sessoesTeste: sessoes})
            //res.json(sessoes);
            //console.log(sessoes[n])
        } else if (resultado.length == 0) {
            res.status(403).send('Login e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }
        // res.json(sessoes);

    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });

});
module.exports = router;