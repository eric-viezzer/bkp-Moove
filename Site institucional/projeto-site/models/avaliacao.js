'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Avaliacao = sequelize.define('Avaliacao',{	
		idAvaliacao: {
			field: 'idAvaliacao',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		comentarioAvaliacao: {
			field: 'comentarioAvaliacao',
			type: DataTypes.TEXT,
			allowNull: false
		},
		tipoAvaliacao: {
			field: 'tipoAvaliacao',
			type: DataTypes.TEXT,
			allowNull: false
		}, 
		dataAvaliacao: {
			field: 'dataAvaliacao',
			type: DataTypes.TEXT,
			allowNull: false
		}, 
		horaAvaliacao: {
			field: 'horaAvaliacao',
			type: DataTypes.TEXT,
			allowNull: false
		},
		fkLinha: {
			field: 'fkLinha',
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tbLinha',
				key: 'idLinha'
			}
		}
	}, 
	{
		tableName: 'tbAvaliacao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    // Avaliacao.sync({force: true})
    return Avaliacao;
};
