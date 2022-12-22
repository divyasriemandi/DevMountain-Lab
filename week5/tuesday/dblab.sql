Brainstorming

product this table will hold information about the products offered, each row will be an individual product”.

-procut_id
-product_name
-product reviews
-how many product in store


user this table will hold infor about the user, each row will be user info
    -when they logged in
    - email & pw (db col)
    - what users like and dont like
    - users need to be able to create a cart

list this table will hold users list of products 
-date
-item_name
-item_category




INSERT INTO products(product_name,product_review,product_rating,product_count)
VALUES 
('egg','fresh',5,20),
('corn','sweet',3,200),
('milk','not tasty',1,2);

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_email TEXT,
  user_password TEXT
);

INSERT INTO users(user_email,user_password)
VALUES
('hkacer@gmail.com','123456'),
('divya@gmail.com','123456hgnbhn6'),
('emrer@gmail.com','123fcgvf456'),
('cemre@gmail.com','134hgnb23456'),
('mirac@gmail.com','123bbh456'),
('rokk@gmail.com','1234wesg56');


CREATE TABLE checkout(
  card_id SERIAL PRIMARY KEY,
  card_holder_name TEXT,
  cvv INTEGER,
  exp_date TEXT,
  billing_address TEXT,
  coupons TEXT
);

INSERT INTO checkout(card_holder_name,cvv,exp_date,billing_address,coupons)
VALUES
('Haice kacer',456, '15/23', '21723 debbb dr', '45rgth'),
('Cemre kacer',126, '1/23', '227657 tow dr', '567thf'),
('mirr kacer',342, '4/22', '45632 gabriel dr', '12edg6'),
('emm kacer',908, '7/27', '78965 long dr', 'o67thd');

CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  cart_count INTEGER,
  item_name TEXT
);
INSERT INTO cart(cart_count,item_name)
VALUES
(6,'egg'),
(1,'milk'),
(2,'corn'),
(5,'nuts'),
(8,'bread'),
(9,'cheese');

CREATE TABLE groups(
  group_id SERIAL PRIMARY KEY,
  procut_id INTEGER,
  user_id INTEGER,
  card_id INTEGER,
  cart_id INTEGER
);

INSERT INTO groups(procut_id,user_id,card_id,cart_id)
VALUES
(1,2,3,4),
(1,3,6,2),
(2,2,3,4),
(3,2,3,4),
(4,2,3,4);






create table grocery_visit(
    date TEXT, 
    time_spent_min INTEGER, 
    amount_spent INTEGER
    );
create table grocery_list(
    date TEXT, 
    item_name TEXT, 
    item_category TEXT
    );


insert into grocery_list 
values("2020-12-03", "Hamburger patties", "Meat and Fish"),
("2020-12-03", "Chips", "Pantry"),
("2020-12-03", "Avocado", "Fruits and Vegetables"),
("2020-12-03", "Lime", "Fruits and Vegetables"),
("2020-12-03", "Tomato", "Fruits and Vegetables"),
("2020-12-15", "Rice cakes", "Pantry"),
("2020-12-15", "Graham crackers", "Pantry"),
("2020-12-15", "Toothpaste", NULL),
("2020-12-15", "Flour", "Pantry"),
("2020-12-15", "Yeast", "Pantry"),
 ("2020-12-15", "Popcorn", "Pantry"),
("2020-12-15", "Eggs", NULL);
