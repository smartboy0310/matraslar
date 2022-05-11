const PG = require('../../lib/Postgres/postgres')

class Carusel extends PG {
   CARUSEL() {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               carusel
         ORDER BY
               carusel_id DESC
      `)
   }
   ADD_CARUSEL (carusel_title, carusel_image) {
     return this.fetch(`
     INSERT INTO
               carusel (
                     carusel_title,
                     carusel_image
                     )
     VALUES      (
                     $1, $2
                  )
      RETURNING * 
      `, carusel_title, carusel_image )
   }
}
module.exports = new Carusel