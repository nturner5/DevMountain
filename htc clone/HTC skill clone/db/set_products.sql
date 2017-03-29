DROP TABLE IF EXISTS smartphones, accessories, item, deviceAccessory, users;

/*~~~~~~~~~~~~~~~~~~~*
      Item Table
*~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    itemtype VARCHAR(255)
);

INSERT INTO item (itemtype) values
('smartphones'),
('tablets'),
('cameras');



/*~~~~~~~~~~~~~~~~~~~*
    Phones Table
*~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE smartphones (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255),
    price DECIMAL,
    itemid INTEGER REFERENCES item(id)
);

INSERT INTO smartphones (name, image, price, description, itemid) VALUES 
('HTC U Ultra', '../../../assets/images/products/smartphones/htc-u-ultra-listing.png', 749.00, 'Perfectly symmetric. Exquisitely thin. HTC Sense Companion with Voice Recognition. HTC', 1),
('HTC 10', '../../../assets/images/products/smartphones/htc-10-listing.png', 699.00, 'Its more of what you’re looking for in a flagship phone. Unparalleled performance.', 1),
('HTC Bolt', '../../../assets/images/products/smartphones/htc-bolt-listing.png', 600.00, 'Meet HTC Bolt. The metal unibody phone that combines sophisticated style with sound tuned', 1),
('HTC One A9', '../../../assets/images/products/smartphones/htc-aero-listing.png', 429.00, 'Perfectly symmetric. Exquisitely thin. HTC Sense Companion with Voice Recognition. HTC', 1),
('HTC One M9', '../../../assets/images/products/smartphones/htc-aero-listing.png', 429.00, '20 MP camera with sapphire camera cover lens to deliver crisp, clear photos. Front-facing stereo speakers with ', 1);

/*~~~~~~~~~~~~~~~~~~~*
    Accesory Table
*~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE accessories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255),
    price DECIMAL,
    smartphonesid INTEGER REFERENCES smartphones(id)
);

INSERT INTO accessories (name, image, price, description, smartphonesid) VALUES 
('HTC Klik', '../../../assets/images/products/accessories/htc-kilk/HTC_Klik-listing.png', 49.99, 'The stylish HTC Klik case features a unique click-in design to ensure you’ve got everything secured, a removable kickstand', 2),
('HTC Ice View', '../../../assets/images/products/accessories/htc-ice-view/htc-ice-view-left-black.png', 49.99, 'See and interact with your phone, even when the cover is closed. HTC Ice View is our most versatile case yet, and', 2),
('HTC USonic Adaptive Audio Earphones', '../../../assets/images/products/accessories/htc-high-res-audio-earphones-black-listing-backup.png', 29.99, 'Be transported into your unique audio adventure. Sound has the power to take you on a journey. Without you', 1),
('HTC Hi-Res Audio Earphones', '../../../assets/images/products/accessories/htc-high-res-audio-earphones-black-listing-backup.png', 29.99, 'Great audio deserves great earphones. It’s the final step between your smartphone and your', 2),
('USB-C Digital to 3.5mm adaptor', '../../../assets/images/products/accessories/usb-c-digital.png', 11.99, 'Use your 3.5mm headphones with the USB-C Digital to 3.5mm adaptor', 1),
('HTC Car Dual Port Charger + USB Type-C Cable', '../../../assets/images/products/accessories/htc-dual-port-car-charger-c-cable.png', 32.99, 'Effortlessly power two devices at once with the 20W HTC Dual Port Car Charger. The compact charger fits virtually anywhere', 1),
('HTC Car Dual Port Charger + USB Type-C Cable', '../../../assets/images/products/accessories/htc-dual-port-car-charger-c-cable.png', 32.99,'Effortlessly power two devices at once with the 20W HTC Dual Port Car Charger. The compact charger fits virtually anywhere', 2),
('USB Type-C Cable', '../../../assets/images/products/accessories/usb-type-c-cable-black.png', 19.99, 'Charge and sync your phone and other compatible devices with this USB Type-C cable.', 1),
('USB Type-C Cable', '../../../assets/images/products/accessories/usb-type-c-cable-black.png', 19.99, 'Charge and sync your phone and other compatible devices with this USB Type-C cable.', 2),
('HTC Rapid Charger 3.0', '../../../assets/images/products/accessories/htc-rapid-charger-3-us-black.png', 34.99, 'Recharge faster. The new HTC Rapid Charger 3.0 is fully Quick Charge 3.0 compatible and able to recharge your battery', 1),
('HTC Rapid Charger 3.0', '../../../assets/images/products/accessories/htc-rapid-charger-3-us-black.png', 34.99, 'Recharge faster. The new HTC Rapid Charger 3.0 is fully Quick Charge 3.0 compatible and able to recharge your battery', 2),
('JBL Reflect Aware C Earphones', '../../../assets/images/products/accessories/jbl-reflect-aware-c-earphones-black-listing.png', 99.99, 'Introducing the world’s first USB-C* sport earphone with noise cancellation and adaptive noise control. JBL Reflect Aware C', 1),
('HTC Active Earphones', '../../../assets/images/products/accessories/htc-rc-e250-headset-yellow-listing-240x240.png', 39.99, 'Introducing the world’s first USB-C* sport earphone with noise cancellation and adaptive noise control. JBL Reflect Aware C', 2);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT,
    registered timestamp without time zone
);

INSERT INTO users (firstName, lastName, email, password) VALUES 
('Sang', 'Ahn', 'sang@gmail.com', 'mynameissang');