// Conexión a base de datos, para leer la lista de productos, o para guardar un historial de compras
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://root:example@mongo:27017', function(err, db) {
    if (err) {
        throw err
    }
    let dbo = db.db('mydb')
    // 
})