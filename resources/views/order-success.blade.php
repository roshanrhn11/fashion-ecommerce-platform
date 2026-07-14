@extends('layouts.shop')

@section('content')

<div class="bg-white rounded-2xl shadow p-10 text-center max-w-3xl mx-auto">

    <div class="text-green-600 text-6xl mb-4">
        ✓
    </div>

    <h1 class="text-4xl font-bold text-green-600 mb-4">
        Order Placed Successfully!
    </h1>

    <p class="text-gray-600 mb-4">
        Thank you, {{ $order->customer_name }}. Your order has been received.
    </p>

    <div class="bg-gray-100 rounded-xl p-6 my-6 text-left">
        <p class="mb-2"><b>Order ID:</b> #{{ $order->id }}</p>
        <p class="mb-2"><b>Total:</b> Rs. {{ $order->total }}</p>
        <p class="mb-2"><b>Payment:</b> {{ $order->payment_method }}</p>
        <p><b>Status:</b> {{ $order->status }}</p>
    </div>

    <p class="text-gray-600 mb-6">
        Our team will contact you soon to confirm delivery details.
    </p>

    <a href="/shop"
       class="bg-black text-white px-8 py-3 rounded-lg">
        Continue Shopping
    </a>

</div>

@endsection