var product = require ('../models/products')

var products = [ 
    new product ({
    name: 'LCD screen',
    ddescription: '52 inch screen',
    productId: 01,
    price: 700
}),
new product ({
    name: 'samsung smartpone',
    ddescription: 'galaxy s9',
    productId: 02,
    price: 200

}),
new product ({
    name: 'keyboard and mouse',
    ddescription: 'qwert keboard and infra red mouse',
    productId: 03,
    price: 50
}),
new product ({
    name: 'dell i5 CPU',
    ddescription: '8GB ram 1TB i5 3.5GHz',
    productId: 04,
    price: 600
}),new product ({
    name: 'headset',
    ddescription: 'rubber earpiece headset',
    productId: 05,
    price: 7
}),new product ({
    name: 'rechargeable battries',
    ddescription: '5v rechargeable batteries',
    productId: 06,
    price: 1
}),
];

model.exports = model('products',schema);