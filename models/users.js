var schema= new schema({
    name: {type: String, required:true},
    userId: {type: Number, required:true},
    employee: {type: Boolean, required: true },
    affiliate: {type: Boolean, required: true },
    RegistrationDate: {type: Date, required: true}

});

model.exports = model('users',schema);