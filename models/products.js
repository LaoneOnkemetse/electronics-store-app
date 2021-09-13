var schema= new schema({
    name: {type: String, required:true},
    description: {type: String, required: true },
    productId: {type: Number, required: true},
    price: {type: Number, required: true}

});

model.exports = model('products',schema);