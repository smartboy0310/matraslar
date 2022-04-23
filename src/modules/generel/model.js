const PG = require('../../lib/Postgres/postgres')

class Generel extends PG {
   GENEREL() {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               generel
      `)
   }
   UPDATE_GLAD_CLIENT(count_client) {
      return this.fetch(`
      UPDATE 
            generel 
      SET   
            glad_client = $1
      RETURNING glad_client
      `, count_client)
   }
}
module.exports = new Generel