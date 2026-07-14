@extends('layouts.admin')

@section('content')

<div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">Admin - Products</h1>

    <a href="/admin/products/create"
       class="bg-black text-white px-5 py-2 rounded">
        Add Product
    </a>
</div>

@if(session('success'))
    <div class="bg-green-100 text-green-700 p-3 rounded mb-4">
        {{ session('success') }}
    </div>
@endif

<div class="bg-white rounded-xl shadow p-6">

@forelse($products as $product)

    <div class="flex justify-between border-b py-4 items-center">
        <div class="flex gap-4 items-center">
            @if($product->image)
                <img src="{{ asset('storage/' . $product->image) }}"
                     class="w-20 h-20 object-cover rounded">
            @else
                <div class="w-20 h-20 bg-gray-200 flex items-center justify-center rounded">
                    No Image
                </div>
            @endif

            <div>
                <h2 class="font-bold">{{ $product->name }}</h2>
                <p>{{ $product->category }}</p>
                <p>Rs. {{ $product->price }}</p>
                <p>Stock: {{ $product->stock }}</p>
            </div>
        </div>

        <div class="space-x-2">
            <a href="/admin/products/{{ $product->id }}/edit"
               class="bg-blue-600 text-white px-4 py-2 rounded">
                Edit
            </a>

            <form action="/admin/products/{{ $product->id }}/delete"
                  method="POST" class="inline">
                @csrf
                <button class="bg-red-600 text-white px-4 py-2 rounded"
                        onclick="return confirm('Delete this product?')">
                    Delete
                </button>
            </form>
        </div>
    </div>

@empty
    <p>No products added yet.</p>
@endforelse

</div>

@endsection