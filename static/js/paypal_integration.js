paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: "ZAR",
                    value: '0.00' // Use the total amount from your Django context
                }
            }]
        });
    },
    
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Send the payment details to your server for processing
            fetch('/process_payment/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    orderID: data.orderID,
                    payerID: data.payerID
                })
            }).then(function(response) {
                // Handle the response from your server
                if (response.ok) {
                    window.location.href = '/payment_success/'; // Redirect to payment success page
                } else {
                    window.location.href = '/payment_failure/'; // Redirect to payment failure page
                }
            });
        });
    }
}).render('#paypal-button-container');
    



/* paypal_integration.js
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00' // amount for payment
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Call your server to save the transaction
        });
    }
}).render('#paypal-button-container');
*/