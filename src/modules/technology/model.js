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
      `)
   }
   ADD_TECHNOLOGY (tech_name, tech_title, tech_link, tech_new, tech_active) {
      return this.fetch(`
         INSERT INTO
                     technology (
                        tech_name,
                        tech_title,
                        tech_link, 
                        tech_new, 
                        tech_active
                        )
         VALUES      (
                        $1, $2, $3, $4, $5
                     )
         RETURNING *          
      `, tech_name, tech_title, tech_link, tech_new, tech_active)
   }
    UPDATE_TECHNOLOGY(tech_id, tech_name, tech_title, tech_link) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
                  tech_name = $2, 
                  tech_title = $3,
                  tech_link = $4, 
                  tech_new = $5,
                  tech_active = $6
         WHERE 
               tech_id = $1
         RETURNING * 
      `,tech_id, tech_name, tech_title, tech_link)
   }
   DELETE_TECHNOLOGY(tech__id, tech__is_delete) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
               tech_delete_at = CURRENT_TIMESTAMP,
               tech__is_delete= $2
         WHERE 
               tech__id = $1
         RETURNING * 
      `, tech__id, tech__is_delete)
   }
}

module.exports = new Technology