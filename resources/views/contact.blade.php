@extends('layouts.shop')

@section('content')

<h1 class="text-3xl font-bold mb-6">Contact Us</h1>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div class="bg-white p-8 rounded-2xl shadow">
        <h2 class="text-2xl font-bold mb-4">Shop Details</h2>

        <p class="mb-3"><b>Phone:</b> 07X XXX XXXX</p>
        <p class="mb-3"><b>Email:</b> shop@example.com</p>
        <p class="mb-3"><b>Address:</b> Sri Lanka</p>
        <p class="mb-6"><b>Payment:</b> Cash on Delivery</p>

        <a href="https://wa.me/947XXXXXXXX?text=Hello%20I%20want%20to%20order%20clothes"
           target="_blank"
           class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg">
            Chat on WhatsApp
        </a>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow">
        <h2 class="text-2xl font-bold mb-4">Delivery Information</h2>

        <p class="text-gray-600 mb-4">
            We deliver clothing items across Sri Lanka.
        </p>

        <p class="text-gray-600 mb-4">
            Delivery charges may depend on customer location.
        </p>

        <p class="text-gray-600">
            After placing the order, our team will contact you to confirm delivery.
        </p>
    </div>

</div>

@endsection