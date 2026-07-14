@extends('layouts.admin')

@section('content')

<div class="flex justify-between items-center mb-6">
    <div>
        <h1 class="text-3xl font-bold">Admin Dashboard</h1>
        <p class="text-gray-600">Welcome, {{ session('admin_name') }}</p>
    </div>

    <a href="/admin/logout"
       class="bg-red-600 text-white px-5 py-2 rounded">
        Logout
    </a>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div class="bg-white p-6 rounded-xl shadow">
        <h2 class="text-gray-500">Total Products</h2>
        <p class="text-4xl font-bold">{{ $productsCount }}</p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow">
        <h2 class="text-gray-500">Total Orders</h2>
        <p class="text-4xl font-bold">{{ $ordersCount }}</p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow">
        <h2 class="text-gray-500">Pending Orders</h2>
        <p class="text-4xl font-bold">{{ $pendingOrders }}</p>
    </div>
</div>

<div class="bg-white p-6 rounded-xl shadow">
    <h2 class="text-2xl font-bold mb-4">Admin Menu</h2>

    <div class="flex flex-wrap gap-4">
        <a href="/admin/products" class="bg-black text-white px-5 py-3 rounded">
            Manage Products
        </a>

        <a href="/admin/products/create" class="bg-blue-600 text-white px-5 py-3 rounded">
            Add Product
        </a>

        <a href="/admin/orders" class="bg-green-600 text-white px-5 py-3 rounded">
            View Orders
        </a>
    </div>
</div>

@endsection