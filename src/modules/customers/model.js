const PG = require('../../lib/Postgres/postgres')

class Customers extends PG {
   ALL_CUSTOMERS () {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               customers
         WHERE 
               cust_is_delete = false
      `)
   }
   ADD_CUSTOMERS (cust_phone ) {
      return this.fetch(`
         INSERT INTO
                     customers (
                        cust_phone,
                        )
         VALUES      (
                        $1
                     )
         RETURNING *          
      `, cust_phone)
   }
    EDIT_FEEDBACK(cust_id, cust_feedback) {
      return this.fetch(`
         UPDATE 
               customers 
         SET   
               cust_feedbac = $2
         WHERE 
               cust_id = $1
         RETURNING * 
      `, cust_id, cust_feedback)
   }
   DELETE_CUSTOMERS(cust_id, cust_is_delete) {
      return this.fetch(`
         UPDATE 
               customers 
         SET   
               cust_delete_at = CURRENT_TIMESTAMP
               cust_is_delete= $2
         WHERE 
               cust_id = $1
         RETURNING * 
      `, cust_id, cust_is_delete)
   }
}
module.exports = new Customers