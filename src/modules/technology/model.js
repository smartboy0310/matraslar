const PG = require('../../lib/Postgres/postgres')

class Technology extends PG {
   ALL_TECHNOLOGY () {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               technology
         WHERE 
               tech_is_delete = false
         ORDER BY
               tech_id DESC
      `)
   }
   SELECTED__TECHNOLOGY(tech_id) {
      return this.fetch(`
      SELECT 
            tech_image
      FROM
         technology
      WHERE 
         tech_id = $1
      `, tech_id)
}
   ADD_TECHNOLOGY (tech_name, tech_title, tech_link, tech_new, tech_active, tech_image) {
      return this.fetch(`
         INSERT INTO
                     technology (
                        tech_name,
                        tech_title,
                        tech_link, 
                        tech_new, 
                        tech_active, 
                        tech_image
                        )
         VALUES      (
                        $1, $2, $3, $4, $5, $6
                     )
         RETURNING *          
      `, tech_name, tech_title, tech_link, tech_new, tech_active, tech_image)
   }
    UPDATE_TECHNOLOGY(tech_id, tech_name, tech_title, tech_link, tech_new, tech_active, tech_image) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
                  tech_name = $2, 
                  tech_title = $3,
                  tech_link = $4, 
                  tech_new = $5,
                  tech_active = $6, 
                  tech_image = $7
         WHERE 
               tech_id = $1
         RETURNING * 
      `,tech_id, tech_name, tech_title, tech_link, tech_new, tech_active, tech_image)
   }
   DELETE_TECHNOLOGY(tech_id, tech_is_delete) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
               tech_delete_at = CURRENT_TIMESTAMP,
               tech_is_delete= $2
         WHERE 
               tech_id = $1
         RETURNING * 
      `, tech_id, tech_is_delete)
   }
}

module.exports = new Technology