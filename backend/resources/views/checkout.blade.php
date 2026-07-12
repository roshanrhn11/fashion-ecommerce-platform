@extends('layouts.shop')

@section('content')

<h1 class="text-3xl font-bold mb-6">Checkout</h1>

@php
    $cart = session('cart', []);
    $total = 0;

    foreach($cart as $item) {
        $total += $item['price'] * $item['quantity'];
    }
@endphp

@if(count($cart) == 0)

    <div class="bg-white p-10 rounded-2xl shadow text-center">
        <p class="text-gray-600 mb-4">Your cart is empty.</p>

        <a href="/shop"
           class="bg-black text-white px-6 py-3 rounded-lg">
            Go to Shop
        </a>
    </div>

@else

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <form action="/order/place" method="POST" class="bg-white p-6 rounded-2xl shadow">
        @csrf

        <h2 class="text-2xl font-bold mb-4">Customer Details</h2>

        <label class="block mb-2 font-bold">Full Name</label>
        <input type="text" name="customer_name" required
               class="w-full border p-3 rounded-lg mb-4">

        <label class="block mb-2 font-bold">Phone Number</label>
        <input type="text" name="phone" required
               class="w-full border p-3 rounded-lg mb-4">

        <label class="block mb-2 font-bold">Email</label>
        <input type="email" name="email"
               class="w-full border p-3 rounded-lg mb-4">

        <label class="block mb-2 font-bold">Delivery Address</label>
        <textarea name="address" required
                  class="w-full border p-3 rounded-lg mb-4"></textarea>

        <input type="hidden" name="total" value="{{ $total }}">

        <button class="w-full bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
            Place Order - Cash on Delivery
        </button>
    </form>

    <div class="bg-white p-6 rounded-2xl shadow">
        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

        @foreach($cart as $item)
            <div class="flex justify-between border-b py-3">
                <span>{{ $item['name'] }} x {{ $item['quantity'] }}</span>
                <span>Rs. {{ $item['price'] * $item['quantity'] }}</span>
            </div>
        @endforeach

        <h2 class="text-3xl font-bold mt-5 text-right">
            Total: Rs. {{ $total }}
        </h2>

        <div class="bg-green-100 text-green-700 p-4 rounded-lg mt-5">
            Payment Method: Cash on Delivery
        </div>
    </div>

</div>

@endif

@endsection