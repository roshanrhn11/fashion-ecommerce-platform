<h2>Thank you for your order!</h2>

<p>Your order has been received successfully.</p>

<h3>Order Details</h3>

<p>
Order ID:
{{ $order->id }}
</p>

<p>
Total:
LKR {{ $order->total }}
</p>

<p>
Payment Method:
{{ $order->payment_method }}
</p>

<p>
Status:
{{ $order->status }}
</p>

<br>

<p>
We will contact you before delivery.
</p>