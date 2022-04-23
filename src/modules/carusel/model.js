const PG = require('../../lib/Postgres/postgres')

class Carusel extends PG {
   CARUSEL () {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               carusel
      `)
   }
}
module.exports = new Carusel