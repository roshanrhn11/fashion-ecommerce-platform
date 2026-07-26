<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Order Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #000000; color: #ffffff; padding: 30px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background: #0d0d0f; border: 1px solid #141416; padding: 25px; border-radius: 12px;">
        <div style="text-align: center; border-bottom: 1px solid #222222; padding-bottom: 15px;">
            <h1 style="color: #ffffff; letter-spacing: 2px; margin: 0; text-transform: uppercase; font-size: 24px;">StyleCart</h1>
            <p style="color: #10b981; font-weight: bold; margin-top: 5px; font-size: 14px;">✔ ORDER CONFIRMED</p>
        </div>

        <div style="padding: 20px 0;">
            <p style="font-size: 15px; margin-bottom: 5px;">Hello <strong>{{ $order->customer_name }}</strong>,</p>
            <p style="color: #aaaaaa; font-size: 13px;">Thank you for your order! Your purchase details are summary below:</p>

            <div style="background-color: #000000; border: 1px solid #222222; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 13px; line-height: 1.8;">
                <p style="margin: 0;"><strong>Order Ref:</strong> <span style="color: #10b981;">ORD-{{ str_pad($order->id, 6, '0', STR_PAD_LEFT) }}</span></p>
                <p style="margin: 0;"><strong>Phone:</strong> {{ $order->phone }}</p>
                <p style="margin: 0;"><strong>Total Amount:</strong> LKR {{ number_format($order->total, 2) }}</p>
                <p style="margin: 0;"><strong>Payment Method:</strong> {{ $order->payment_method }}</p>
                <p style="margin: 0;"><strong>Delivery Address:</strong> {{ $order->address }}</p>
            </div>

            <p style="color: #888888; font-size: 12px;">We are preparing your package for delivery.</p>
        </div>

        <div style="text-align: center; font-size: 11px; color: #555555; border-top: 1px solid #222222; padding-top: 15px;">
            &copy; {{ date('Y') }} StyleCart E-Commerce. All rights reserved.
        </div>
    </div>
</body>
</html>