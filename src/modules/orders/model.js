const PG = require('../../lib/Postgres/postgres')

class Orders extends PG {
   ALL_ORDERS () {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               orders
      `)
   }
   
   ADD_ORDER (user_name, user_phone, order_pro_name, order_count ) {
      return this.fetch(`
         INSERT INTO
                     orders (
                        user_name,
                        user_phone, 
                        order_pro_name, 
                        order_count
                     )
         VALUES      (
                        $1, $2, $3, $4
                     )
         RETURNING *          
      `, user_name, user_phone, order_pro_name, order_count)
   }

   DELETE_ORDER(order__id, order__is_delete) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
               order_delete_at = CURRENT_TIMESTAMP
               order__is_delete= $2
         WHERE 
               order__id = $1
         RETURNING * 
      `, order__id, order__is_delete)
   }

   COUNT_FEEDBACK() {
      return this.fetch(`
      SELECT 
            COUNT(*) AS clients 
      FROM 
            orders 
      WHERE 
            order_feedback = true;
      `)
   }
   EDIT_FEEDBACK(order_id, order_feedback) {
      return this.fetch(`
         UPDATE 
               orders 
         SET   
               order_feedback = $2
         WHERE 
               order_id = $1
         RETURNING * 
      `, order_id, order_feedback)
   }
}
module.exports = new Orders