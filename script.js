function buyProduct(productName, productPrice) {

    // Step 1: Ask product quantity

    let quantity = prompt("Enter product quantity:");

    // Step 2: Check prompt cancellation

    if (quantity === null) {

        alert("Order process cancelled!");

        return;
    }

    // Step 3: Convert quantity into number

    quantity = Number(quantity);

    // Step 4: Validate quantity

    if (!Number.isInteger(quantity) || quantity <= 0) {

        alert("Invalid quantity! Please enter a positive whole number.");

        return;
    }

    // Step 5: Calculate total price

    let totalPrice = productPrice * quantity;

    // Step 6: Display order details

    alert(
        "Product: " + productName +
        "\nQuantity: " + quantity +
        "\nTotal Price: ₹" + totalPrice
    );

    // Step 7: Confirm order

    let confirmOrder = confirm("Do you want to confirm your order?");

    if (confirmOrder) {

        // Step 8: Ask customer name

        let customerName = prompt("Enter your name:");

        // Step 9: Validate customer name

        if (customerName === null || customerName.trim() === "") {

            alert("Invalid customer name! Order cannot be completed.");

            return;
        }

        customerName = customerName.trim();

        // Step 10: Select Order Summary

        let summary = document.getElementById("orderSummary");

        // Step 11: Display order details

        summary.innerHTML = `
            <h2>Here is your Order Summary.....</h2>

            <p><b>Customer Name:</b> ${escapeHTML(customerName)}</p>

            <p><b>Product Name:</b> ${productName}</p>

            <p><b>Product Price:</b> ₹${productPrice.toLocaleString("en-IN")}</p>

            <p><b>Quantity:</b> ${quantity}</p>

            <p><b>Total Price:</b> ₹${totalPrice.toLocaleString("en-IN")}</p>

            <p class="success">Order Successfully Placed!</p>

            <p class="success">Thank You for Shopping with ORVIX MART!</p>
        `;

        // Step 12: Success message

        alert("Order Successfully Placed!\nThank You for Shopping!");

        // Step 13: Display details in console

        console.log("Customer Name:", customerName);

        console.log("Product Name:", productName);

        console.log("Product Price:", productPrice);

        console.log("Quantity:", quantity);

        console.log("Total Price:", totalPrice);

    }

    else {

        // Step 14: Order cancellation

        let summary = document.getElementById("orderSummary");

        summary.textContent = "Your order has been cancelled!";

        summary.className = "order-summary cancel";

        alert("Order Cancelled Successfully!");

    }

}


// Function to safely display customer name

function escapeHTML(value) {

    return value.replace(/[&<>"']/g, function(character) {

        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];

    });

}