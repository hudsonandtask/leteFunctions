module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body && req.body.content) {


        // call function to loop through establishments 


        // context.bindings.ordersDocument = req.body
        // this is multiple subs? 

        // id need to loop though arr of orders

        context.bindings.ordersDocument = {
            "openedDate": "2017-04-20T11:59:45 +04:00",
            "modifiedDate": "2014-07-10T06:07:15 +04:00",
            "diningOption": "green",
            "checks": 
              {
                "openedDate": "2017-04-20T11:59:45 +04:00",
                "customer": "Janell Logan",
                "amount": "$3,698.63",
                "paymentStatus": "PAID"
              },
            "source": "In Store",
            "numberOfGuests": 38,
            "approvalStatus": "APPROVED ",
            "createdDevice": "drawer"
          };
          
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello mike this is the first connection" + req.body
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};