'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Linha = sequelize.define('Linha',{	
		idLinha: {
			field: 'idLinha',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		numLinha: {
			field: 'numLinha',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		comprimentoLinha: {
			field: 'comprimentoLinha',
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		inicioLinha: {
			field: 'inicioLinha',
			type: DataTypes.STRING,
			allowNull: false
		},
		finalLinha: {
			field: 'finalLinha',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkTrans: {
			field: 'fkTrans',
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tbTrans',
				key: 'idTrans'
			}
		}
	}, 
	{
		tableName: 'tbLinha', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    // Linha.sync({force: true})
    return Linha;
};
