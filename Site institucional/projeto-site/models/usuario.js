'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		id: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			field: 'nomeUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'emailUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			field: 'cnpjUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkTrans: {
			field: 'fkTrans',
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tbTransportadora',
				key: 'codTrans'
			}
		}
	}, {
		tableName: 'tbUsuario',
		freezeTableName: true,
		underscored: true,
		timestamps: false,
	});

	// Usuario.sync({force: true})
	return Usuario;
};