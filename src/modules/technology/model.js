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
   ADD_TECHNOLOGY (tech_name, tech_title, tech_link) {
      return this.fetch(`
         INSERT INTO
                     technology (
                        tech_name,
                        tech_title,
                        tech_link
                        )
         VALUES      (
                        $1, $2, $3
                     )
         RETURNING *          
      `, tech_name, tech_title, tech_link)
   }
    UPDATE_TECHNOLOGY(tech_id, tech_name, tech_title, tech_link) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
                  tech_name = $2, 
                  tech_title = $3,
                  tech_link = $4
         WHERE 
               tech_id = $1
         RETURNING * 
      `,tech_id, tech_name, tech_title, tech_link)
   }
   DELETE_TECHNOLOGY(cust_id, cust_is_delete) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
               cust_is_delete= $2
         WHERE 
               cust_id = $1
         RETURNING * 
      `, cust_id, cust_is_delete)
   }
}

module.exports = new Technology