CREATE TABLE admin (
   id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   login varchar(32) not null,
   password varchar(32) not null
);

CREATE TABLE model_matras (
   model_id bigserial PRIMARY KEY,
   model_name varchar(32) not null,
   model_active boolean DEFAULT true,
   model_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   model_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   model_is_delete boolean DEFAULT false
);

CREATE TABLE products (
   pro_id bigserial PRIMARY KEY,
   pro_name varchar(64) not null,
   pro_price int not null,
   pro_particle int not null,
   pro_format varchar(32) not null,
   pro_guarantee varchar(32) not null,
   pro_size varchar(32) not null,
   pro_share_price int DEFAULT null,
   pro_info varchar(256) not null,
   pro_new boolean DEFAULT true,
   pro_active boolean DEFAULT true,
   pro_images text [] not null,
   pro_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   pro_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   pro_is_delete boolean DEFAULT false,
   model_id int REFERENCES model_matras(model_id) not null
);

CREATE TABLE carusel (
   carusel_id serial PRIMARY KEY,
   carusel_title varchar(256) not null,
   carusel_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   carusel_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   carusel_image text not null
);

CREATE TABLE generel (
   phone text not null,
   practice varchar(64) not null,
   glad_client varchar(64) not null,
   guarantee varchar(64) not null,
   generel_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   generel_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   delivery varchar(64) not null
);

CREATE TABLE orders (
   order_id bigserial PRIMARY KEY,
   user_name varchar(64) not null,
   user_phone varchar(32) not null,
   order_pro_name varchar(64) not null,
   order_count int not null,
   order_is_delete boolean DEFAULT false,
   order_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   order_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   order_feedback boolean DEFAULT false
);

CREATE TABLE customers (
   cust_id bigserial PRIMARY KEY,
   curt_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   cust_phone varchar(32) not null,
   cust_feedback boolean DEFAULT false,
   cust_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   cust_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   cust_is_delete boolean DEFAULT false
);

CREATE TABLE technology (
   tech_id serial PRIMARY KEY,
   tech_name varchar(32) not null,
   tech_title varchar(256) not null,
   tech_link text not null,
   tech_new boolean DEFAULT true,
   tech_active boolean DEFAULT true,
   tech_image text not null,
   tech_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   tech_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   tech_is_delete boolean DEFAULT false
);

CREATE TABLE address (
   add_id serial PRIMARY KEY,
   add_name varchar(128) not null,
   add_intended varchar(256) not null,
   add_loc varchar(256) not null,
   add_active boolean DEFAULT true,
   add_image text[] not null,
   add_create_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   add_delete_at timestamptz DEFAULT CURRENT_TIMESTAMP,
   add_is_delete boolean DEFAULT false
);