@extends('layouts.shop')

@section('content')

<h1 class="text-3xl font-bold mb-6">Your Cart</h1>

@php
    $cart = session('cart', []);
    $total = 0;
@endphp

<div class="bg-white rounded-2xl shadow p-6">

@forelse($cart as $item)

    @php
        $subtotal = $item['price'] * $item['quantity'];
        $total += $subtotal;
    @endphp

    <div class="flex justify-between items-center border-b py-5">
        <div>
            <h2 class="font-bold text-lg">{{ $item['name'] }}</h2>
            <p class="text-gray-600">Quantity: {{ $item['quantity'] }}</p>
        </div>

        <div class="text-right">
            <p class="font-bold text-xl">Rs. {{ $subtotal }}</p>

            <a href="/cart/remove/{{ $loop->index }}"
               class="text-red-600 text-sm">
                Remove
            </a>
        </div>
    </div>

@empty

    <div class="text-center py-10">
        <p class="text-gray-600 mb-4">Your cart is empty.</p>

        <a href="/shop"
           class="bg-black text-white px-6 py-3 rounded-lg">
            Continue Shopping
        </a>
    </div>

@endforelse

@if(count($cart) > 0)
    <div class="text-right mt-6">
        <h2 class="text-3xl font-bold">
            Total: Rs. {{ $total }}
        </h2>

        <a href="/checkout"
           class="inline-block bg-black text-white px-10 py-3 rounded-lg mt-5">
            Proceed to Checkout
        </a>
    </div>
@endif

</div>

@endsection