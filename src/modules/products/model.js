const PG = require('../../lib/Postgres/postgres');

class Products extends PG {
	ALL_PRO() {
		return this.fetchAll(`
         SELECT 
            p.pro_name, 
            p.pro_price, 
            p.pro_particle, 
            p.pro_format, 
            p.pro_guarantee, 
            p.pro_size, 
            p.pro_share_price,
            p.pro_info, 
            p.pro_new,
            p.pro_active,
            p.pro_images,
            p.pro_is_delete, 
            p.pro_id,
            p.model_id,
            m.model_name            
         FROM
               products p
         INNER JOIN 
               model_matras m
         USING (model_id)
         GROUP BY 
            p.pro_name,
            p.pro_price,
            p.pro_particle, 
            p.pro_format, 
            p.pro_guarantee, 
            p.pro_size, 
            p.pro_share_price,
            p.pro_info, 
            p.pro_new,
            p.pro_active,
            p.pro_images,
            p.pro_is_delete,
            p.pro_id,
            m.model_id,
            m.model_name  
         Having
            p.pro_is_delete = false
         ORDER BY
            p.pro_id
      `);
	}
      SEARCH_PRO (search_data) {
            return this.fetchAll(`
            SELECT 
            p.pro_name, 
            p.pro_price, 
            p.pro_particle, 
            p.pro_format, 
            p.pro_guarantee, 
            p.pro_size, 
            p.pro_share_price,
            p.pro_info, 
            p.pro_new,
            p.pro_active,
            p.pro_images,
            p.pro_is_delete, 
            p.pro_id,
            p.model_id,
            m.model_name            
         FROM
               products p
         INNER JOIN 
               model_matras m
         USING (model_id)          
         WHERE
         p.pro_is_delete = false AND (p.pro_name LIKE $1 OR m.model_name LIKE $1)
         ORDER BY
             p.pro_id 
      `, search_data)
      }
	ADD_PRO(pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size, pro_share_price, pro_info, pro_new, pro_active, pro_images,  model_id) {
		return this.fetch(`      
      INSERT INTO
            products 
                  (pro_name, 
                  pro_price, 
                  pro_particle, 
                  pro_format, 
                  pro_guarantee, 
                  pro_size, 
                  pro_share_price,
                  pro_info, 
                  pro_new,
                  pro_active,
                  pro_images,
                  model_id )
             VALUES
                  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  
      RETURNING *       
      `, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size, pro_share_price, pro_info, pro_new, pro_active, pro_images, model_id);
	}
   UPDATE_PRO(pro_id, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, model_id) {
		return this.fetch(`      
      UPDATE
            products 
      SET
            pro_name = $2, 
            pro_price = $3, 
            pro_particle = $4, 
            pro_format = $5, 
            pro_guarantee = $6, 
            pro_size = $7, 
            pro_share_price = $8,
            pro_info = $9, 
            pro_new = $10,
            pro_active = $11,
            pro_images = $12, 
            model_id = $13          
      WHERE 
            pro_id = $1
      `,pro_id, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, model_id);
	}
   DELETE_PRO (pro_id, pro_is_delete) {
      return this.fetch(`
         UPDATE 
               products 
         SET   
               pro_delete_at = CURRENT_TIMESTAMP,
               pro_is_delete = $2
         WHERE 
               pro_id = $1
         RETURNING * 
      `, pro_id, pro_is_delete)
   }
   EDIT_STATUS(pro_id, pro_active) {
      return this.fetch(`
         UPDATE 
               products 
         SET   
               pro_active = $2
         WHERE 
               pro_id = $1
         RETURNING * 
      `, pro_id, pro_active)
   }
}

module.exports = new Products();
