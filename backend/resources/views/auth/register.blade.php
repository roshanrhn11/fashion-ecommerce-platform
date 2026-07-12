@extends('layouts.shop')

@section('content')

<div class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">
    <h1 class="text-3xl font-bold mb-6 text-center">Create Account</h1>

    <form action="/register" method="POST">
        @csrf

        <label class="block mb-2 font-bold">Full Name</label>
        <input type="text" name="name" required class="w-full border p-3 rounded-lg mb-4">

        <label class="block mb-2 font-bold">Email</label>
        <input type="email" name="email" required class="w-full border p-3 rounded-lg mb-4">

        <label class="block mb-2 font-bold">Password</label>
        <input type="password" name="password" required class="w-full border p-3 rounded-lg mb-6">

        <button class="w-full bg-black text-white py-3 rounded-lg">
            Register
        </button>
    </form>

    <p class="text-center mt-5">
        Already have an account?
        <a href="/login" class="text-red-600 font-bold">Login here</a>
    </p>
</div>

@endsection