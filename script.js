document.getElementById('paymentForm').onsubmit = function(e) {
        e.preventDefault();

        const mobile = document.getElementById('mobile').value;
        const amount = document.getElementById('amount').value;

        if (!mobile || !amount || amount <= 0) {
            alert("Please fill in all fields with valid values.");
            return;
        }

        const options = {
            "key": "rzp_live_XnzgR8AoEu1HfA", 
            "amount": amount * 100, 
            "currency": "INR",
            "name": "BRAND PVT LIMITED ",
            "description": "Test Transaction",
            "handler": function (response) {
                // Handle successful payment here
                document.getElementById('successMessage').style.display = 'block';
                // Redirect to the success page after a brief delay
                setTimeout(function(){
                    window.location.href = "https://new.html/"; // Replace with your success URL
                }, 2000);
            },
            "prefill": {
                "contact": mobile
            },
            "theme": {
                "color": "#007bff"
            }
        };

       const rzp1 = new Razorpay(options);
        rzp1.open();
    };
