@extends('layouts.admin')

@section('content')

<h1 class="text-3xl font-bold mb-6">Add New Product</h1>

@if(session('success'))
    <div class="bg-green-100 text-green-700 p-3 rounded mb-4">
        {{ session('success') }}
    </div>
@endif

<form action="/admin/products/store" method="POST" enctype="multipart/form-data"
      class="bg-white p-6 rounded-xl shadow max-w-2xl">
    @csrf

    <label class="block mb-2 font-bold">Product Name</label>
    <input type="text" name="name" required class="w-full border p-2 rounded mb-4">

    <label class="block mb-2 font-bold">Category</label>
    <select name="category" required class="w-full border p-2 rounded mb-4">
        <option value="">Select Category</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
        <option value="New Arrivals">New Arrivals</option>
        <option value="Offers">Offers</option>
    </select>

    <label class="block mb-2 font-bold">Price</label>
    <input type="number" name="price" required class="w-full border p-2 rounded mb-4">

    <label class="block mb-2 font-bold">Stock</label>
    <input type="number" name="stock" value="1" required class="w-full border p-2 rounded mb-4">

    <label class="block mb-2 font-bold">Description</label>
    <textarea name="description" class="w-full border p-2 rounded mb-4"></textarea>

    <label class="block mb-2 font-bold">Product Image</label>
    <input type="file" name="image" class="w-full border p-2 rounded mb-4">

    <button class="bg-black text-white px-8 py-3 rounded">
        Save Product
    </button>
</form>

@endsection