const {mongodb} = require('../repository/MongoDB');

const getTenantDB = (tenantId, modelName, schema) => {
    const dbName = `${tenantId}`;
    const db = mongodb.useDb(dbName, {useCache: true});
    console.log(`Selecionando o banco ${dbName}`);
    db.model(modelName, schema);
    return db;
};

exports.getModelByTenant = (tenantId, modelName, schema) => {
    console.log(`tenant model por tenantId : ${tenantId}.`);
    const tenantDb = getTenantDB(tenantId, modelName, schema);
    return tenantDb.model(modelName);
};
