@extends('layouts.shop')

@section('content')

<div class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">
    <h1 class="text-3xl font-bold mb-6 text-center">Customer Login</h1>

    @if(session('success'))
        <div class="bg-green-100 text-green-700 p-3 rounded mb-4">
            {{ session('success') }}
        </div>
    @endif

    @if(session('error'))
        <div class="bg-red-100 text-red-700 p-3 rounded mb-4">
            {{ session('error') }}
        </div>
    @endif

    <form action="/login" method="POST">
        @csrf

        <label class="block mb-2 font-bold">Email</label>
        <input type="email" name="email" required class="w-full border p-3 rounded-lg mb-4">

        <label class="block mb-2 font-bold">Password</label>
        <input type="password" name="password" required class="w-full border p-3 rounded-lg mb-6">

        <button class="w-full bg-black text-white py-3 rounded-lg">
            Login
        </button>
    </form>

    <p class="text-center mt-5">
        New customer?
        <a href="/register" class="text-red-600 font-bold">Register here</a>
    </p>
</div>

@endsection