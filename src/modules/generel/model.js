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
   ADD_GENEREL(phone, practice, glad_client, guarantee, delivery) {
         return this.fetch(`
         INSERT INTO
                  generel (
                        phone,
                        practice, 
                        glad_client,
                        guarantee,
                        delivery
                        )
         VALUES      (
                        $1, $2, $3, $4, $5
                     )
         RETURNING *          
         `, phone, practice, glad_client, guarantee, delivery)
   }
}
module.exports = new Generel