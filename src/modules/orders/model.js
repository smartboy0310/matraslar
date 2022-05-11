const PG = require('../../lib/Postgres/postgres')

class Orders extends PG {
   ALL_ORDER () {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               orders
         WHERE 
               order_is_delete = false
         ORDER BY
               order_id DESC
      `)
   }
   SEARCH_ORDER (search_data) {
      return this.fetchAll(`
         SELECT 
               *
         FROM
               orders
         WHERE 
         order_is_delete = false AND (user_name LIKE $1 OR order_pro_name LIKE $1)
      `, search_data)
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

   DELETE_ORDER(order_id, order_is_delete) {
      return this.fetch(`
         UPDATE 
               technology 
         SET   
               order_delete_at = CURRENT_TIMESTAMP,
               order_is_delete= $2
         WHERE 
               order_id = $1
         RETURNING * 
      `, order_id, order_is_delete)
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