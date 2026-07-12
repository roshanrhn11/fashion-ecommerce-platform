@extends('layouts.admin')

@section('content')

<h1 class="text-3xl font-bold mb-6">Edit Product</h1>

<form action="/admin/products/{{ $product->id }}/update" method="POST" enctype="multipart/form-data"
      class="bg-white p-6 rounded-xl shadow max-w-2xl">
    @csrf

    <label class="block mb-2 font-bold">Product Name</label>
    <input type="text" name="name" value="{{ $product->name }}" required class="w-full border p-2 rounded mb-4">

    <label class="block mb-2 font-bold">Category</label>
    <select name="category" required class="w-full border p-2 rounded mb-4">
        <option value="Men" {{ $product->category == 'Men' ? 'selected' : '' }}>Men</option>
        <option value="Women" {{ $product->category == 'Women' ? 'selected' : '' }}>Women</option>
        <option value="Kids" {{ $product->category == 'Kids' ? 'selected' : '' }}>Kids</option>
        <option value="New Arrivals" {{ $product->category == 'New Arrivals' ? 'selected' : '' }}>New Arrivals</option>
        <option value="Offers" {{ $product->category == 'Offers' ? 'selected' : '' }}>Offers</option>
    </select>

    <label class="block mb-2 font-bold">Price</label>
    <input type="number" name="price" value="{{ $product->price }}" required class="w-full border p-2 rounded mb-4">

    <label class="block mb-2 font-bold">Stock</label>
    <input type="number" name="stock" value="{{ $product->stock }}" required class="w-full border p-2 rounded mb-4">

    <label class="block mb-2 font-bold">Description</label>
    <textarea name="description" class="w-full border p-2 rounded mb-4">{{ $product->description }}</textarea>

    @if($product->image)
        <img src="{{ asset('storage/' . $product->image) }}" class="w-32 h-32 object-cover rounded mb-4">
    @endif

    <label class="block mb-2 font-bold">Change Product Image</label>
    <input type="file" name="image" class="w-full border p-2 rounded mb-4">

    <button class="bg-black text-white px-8 py-3 rounded">
        Update Product
    </button>
</form>

@endsection