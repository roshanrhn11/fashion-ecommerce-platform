@extends('layouts.admin')

@section('content')

<h1 class="text-3xl font-bold mb-6">Admin - Orders</h1>

<div class="bg-white rounded-xl shadow p-6">

@forelse($orders as $order)

    <div class="border-b py-6">
        <div class="flex justify-between">
            <div>
                <h2 class="text-xl font-bold">Order #{{ $order->id }}</h2>
                <p>{{ $order->customer_name }}</p>
                <p>{{ $order->phone }}</p>
                <p>{{ $order->email }}</p>
                <p>{{ $order->address }}</p>
            </div>

            <div class="text-right">
                <p class="font-bold">Rs. {{ $order->total }}</p>
                        <form action="/admin/orders/{{ $order->id }}/status" method="POST" class="mt-3">
                @csrf

                <label class="block mb-1 font-bold">Status</label>

                <select name="status" class="border p-2 rounded">
                    <option value="Pending" {{ $order->status == 'Pending' ? 'selected' : '' }}>Pending</option>
                    <option value="Confirmed" {{ $order->status == 'Confirmed' ? 'selected' : '' }}>Confirmed</option>
                    <option value="Packed" {{ $order->status == 'Packed' ? 'selected' : '' }}>Packed</option>
                    <option value="Delivered" {{ $order->status == 'Delivered' ? 'selected' : '' }}>Delivered</option>
                    <option value="Cancelled" {{ $order->status == 'Cancelled' ? 'selected' : '' }}>Cancelled</option>
                </select>

                <button class="bg-black text-white px-4 py-2 rounded">
                    Update
                </button>
            </form>
            </div>
        </div>

        <h3 class="font-bold mt-4">Items</h3>

        @foreach($order->items as $item)
            <p>
                {{ $item['name'] }} -
                Qty: {{ $item['quantity'] }} -
                Rs. {{ $item['price'] }}
            </p>
        @endforeach
    </div>

@empty
    <p>No orders yet.</p>
@endforelse

</div>

@endsection