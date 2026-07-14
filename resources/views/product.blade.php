@extends('layouts.shop')

@section('content')

<div class="bg-white rounded-2xl shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

    <div>
        @if($product->image)
            <img src="{{ asset('storage/' . $product->image) }}"
                 class="w-full h-[500px] object-cover rounded-2xl">
        @else
            <div class="w-full h-[500px] bg-gray-200 flex items-center justify-center rounded-2xl">
                No Image
            </div>
        @endif
    </div>

    <div>
        <p class="text-sm text-gray-500 mb-2">{{ $product->category }}</p>

        <h1 class="text-4xl font-bold mb-4">{{ $product->name }}</h1>

        <p class="text-3xl font-bold text-red-600 mb-4">
            Rs. {{ $product->price }}
        </p>

        <p class="text-gray-600 mb-6">
            {{ $product->description }}
        </p>

        <p class="mb-6">
            <b>Available Stock:</b> {{ $product->stock }}
        </p>

        <form action="/cart/add" method="POST">
            @csrf

            <input type="hidden" name="id" value="{{ $product->id }}">
            <input type="hidden" name="name" value="{{ $product->name }}">
            <input type="hidden" name="price" value="{{ $product->price }}">

            <label class="block font-bold mb-2">Quantity</label>

            <input type="number"
                   name="quantity"
                   value="1"
                   min="1"
                   max="{{ $product->stock }}"
                   class="border p-3 rounded-lg w-28 mb-6">

            <br>

            <button class="bg-black text-white px-10 py-3 rounded-lg hover:bg-gray-800">
                Add to Cart
            </button>
        </form>
    </div>

</div>

@endsection