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
   ADD_GENEREL(phone, practice, guarantee, delivery) {
         return this.fetch(`
         INSERT INTO
                  generel (
                        phone,
                        practice,
                        guarantee,
                        delivery
                        )
         VALUES      (
                        $1, $2, $3, $4
                     )
         RETURNING *          
         `, phone, practice, guarantee, delivery)
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