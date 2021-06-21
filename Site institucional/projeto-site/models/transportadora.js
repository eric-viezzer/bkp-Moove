'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Transportadora = sequelize.define('Transportadora', {
		idTrans: {
			field: 'idTrans',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeTrans: {
			field: 'nomeTrans',
			type: DataTypes.STRING,
			allowNull: false
		},
		emailTrans: {
			field: 'emailTrans',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpjTrans: {
			field: 'cnpjTrans',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone1Trans: {
			field: 'telefone1Trans',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		telefone2Trans: {
			field: 'telefone2Trans',
			type: DataTypes.STRING,
			allowNull: true
		},
		estadosTrans: {
			field: 'estadosTrans',
			type: DataTypes.STRING,
			allowNull: true
		},
		cidadesTrans: {
			field: 'cidadesTrans',
			type: DataTypes.STRING,
			allowNull: true
		},
		senhaTrans: {
			field: 'senhaTrans',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'tbTrans',
		freezeTableName: true,
		underscored: true,
		timestamps: false,
	});

	// Transportadora.sync({force: true})
	return Transportadora;
};