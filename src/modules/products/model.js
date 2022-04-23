const PG = require('../../lib/Postgres/postgres');

class Products extends PG {
	ALL_PRO() {
		return this.fetchAll(`
         SELECT 
               *
         FROM
               products
         WHERE 
               pro_is_delete = false
      `);
	}
	ADD_PRO(pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size, pro_share_price, pro_info, pro_new, pro_active, pro_images, pro_is_delete, model_id) {
		return this.fetch(`      
      INSERT INTO
                  products 
                  (  pro_name, 
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
                     pro_is_delete, 
                     model_id )
      VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)  
      RETURNING *       
      `, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, pro_is_delete, model_id);
	}
   UPDATE_PRO(pro_id, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, model_id) {
		return this.fetch(`      
      UPDATE
            products 
      SET            pro_name = $2, 
                     pro_price = $3, 
                     pro_particle = $4, 
                     pro_format = $5, 
                     pro_guarantee = $6, 
                     pro_size = $7, 
                     pro_share_price = $8
                     pro_info = $9, 
                     pro_new = $10,
                     pro_active = $11,
                     pro_images = $12, 
                     model_id = $13 
      WHERE pro_id = $1
      RETURNING *       
      `,pro_id, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, model_id);
	}
   DELETE_PRO (pro_id, pro_is_delete) {
      return this.fetch(`
         UPDATE 
               products 
         SET   
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
