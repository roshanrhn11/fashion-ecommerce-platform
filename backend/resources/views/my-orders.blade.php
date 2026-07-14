@extends('layouts.shop')

@section('content')

<h1 class="text-3xl font-bold mb-6">My Orders</h1>

<div class="bg-white rounded-2xl shadow p-6">

@forelse($orders as $order)

    <div class="border-b py-6">
        <div class="flex justify-between">
            <div>
                <h2 class="text-xl font-bold">Order #{{ $order->id }}</h2>
                <p class="text-gray-600">Date: {{ $order->created_at->format('d M Y') }}</p>
                <p>Status: <b>{{ $order->status }}</b></p>
            </div>

            <div class="text-right">
                <p class="text-xl font-bold">Rs. {{ $order->total }}</p>

                @if(in_array($order->status, ['Pending', 'Confirmed']))
                    <form action="/my-orders/{{ $order->id }}/cancel" method="POST" class="mt-3">
                        @csrf
                        <button class="bg-red-600 text-white px-4 py-2 rounded-lg"
                                onclick="return confirm('Cancel this order?')">
                            Cancel Order
                        </button>
                    </form>
                @else
                    <p class="text-gray-500 mt-3">
                        Cannot cancel now
                    </p>
                @endif
            </div>
        </div>

        <h3 class="font-bold mt-4 mb-2">Items</h3>

        @foreach($order->items as $item)
            <p>
                {{ $item['name'] }} × {{ $item['quantity'] }}
                - Rs. {{ $item['price'] }}
            </p>
        @endforeach
    </div>

@empty

    <div class="text-center py-10">
        <p class="text-gray-600 mb-4">You have no orders yet.</p>
        <a href="/shop" class="bg-black text-white px-6 py-3 rounded-lg">
            Start Shopping
        </a>
    </div>

@endforelse

</div>

@endsection