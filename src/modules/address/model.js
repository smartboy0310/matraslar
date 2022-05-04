const PG = require('../../lib/Postgres/postgres')

class Address  extends PG {
   ALL_ADDRESS () {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               address
         WHERE 
               add_is_delete = false
      `)
   }
   ADD_ADDRESS (add_name, add_intended, add_loc, add_image) {
      return this.fetch(`
         INSERT INTO
                     address (
                        add_name,
                        add_intended,
                        add_loc,
                        add_image
                        )
         VALUES      (
                        $1, $2, $3
                     )
         RETURNING *          
      `, add_name, add_intended, add_loc, add_image)
   }
    UPDATE_ADDRESS(add_id, add_name, add_intended, add_loc, add_image) {
      return this.fetch(`
         UPDATE 
               address 
         SET   
                  tadd_name = $2,
                  add_intended = $3,
                  add_loc = $4,
                  add_image = $5
         WHERE 
               tech_id = $1
         RETURNING * 
      `,add_id, add_name, add_intended, add_loc, add_image)
   }
   DELETE_ADDRESS(add_id, add_is_delete) {
      return this.fetch(`
         UPDATE 
               address 
         SET   
               add_delete_at = CURRENT_TIMESTAMP
               add_is_delete= $2
         WHERE 
               add_id = $1
         RETURNING * 
      `, add_id, add_is_delete)
   }
   SELECTED__ADDRESS(add_id) {
      return this.fetch(`
      SELECT 
            add_image
      FROM
            address
      WHERE 
         add_id = $1
      `, add_id)
}
}

module.exports = new Address 