var user = require ('../models/users')

var users = [
   //user qualifies for all percentage discounts
    new user({
        name: 'Matt',
        userId: 101,
        employee: true,
        affiliate: true,
        registrationDate: 2019-06-11
    }),
    //user qualifies for affilliate and two year discount
    new user({
        name: 'Michelle',
        userId: 102,
        employee: false,
        affiliate: true,
        registrationDate: 2017-09-01
    }),
    //user only qualifies for two year discount 
     new user({
        name: 'Nancy',
        userId: 103,
        employee: false,
        affiliate: false,
        registrationDate: 2019-06-11
    }),
    //user does not qualify for any percentage discount
    new user({
        name: 'Steve',
        userId: 104,
        employee: False,
        affiliate: False,
        registrationDate: 2021-07-05
    }),
    //user qualifies for all percentage discounts
    new user({
        name: 'Ephraim',
        userId: 105,
        employee: true,
        affiliate: true,
        registrationDate: 2012-03-12
    }),
    //user does not qualify for any percentage discount
    new user({
        name: 'Ellen',
        userId: 106,
        employee: false,
        affiliate: false,
        registrationDate: 2020-12-20
    })

];
model.exports = model('users',schema);