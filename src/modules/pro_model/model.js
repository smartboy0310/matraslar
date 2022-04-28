const PG = require('../../lib/Postgres/postgres')


class ProModel extends PG {
   ALL_MODEL (){
      return this.fetchAll(`
         SELECT   
               *
         FROM
               model_matras
      `)
   }
   ADD_MODEL(model_name) {
      return this.fetch(`
         INSTER INTO
                     model_matras (
                        name
                     )
         VALUES   (
                     $1
                    )
         RETURNING *        
      `, model_name)
   }
  
   UPDATE_MODEL(model_id, model_name) {
      return this.fetch(`
      UPDATE 
            model_matras
      SET
            model_name = $2
      WHERE 
            model_id = $1
      RETURNING *
      `, model_id, model_name)
   }
   DELETE_MODEL(model_id, model_is_delete) {
      return this.fetch(`
      UPDATE 
            model_matras
      SET
            model_delete_at = CURRENT_TIMESTAMP
            model_is_delete = $2
      WHERE 
            model_id = $1
      RETURNING *
      `, model_id, model_is_delete)
   }
}

module.exports = new ProModel