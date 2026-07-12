@extends('layouts.shop')

@section('content')

<!-- Hero Section -->
<section class="bg-black text-white rounded-3xl overflow-hidden mb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center">

        <div class="p-10 md:p-16">
            <p class="uppercase tracking-widest text-sm mb-4">
                New Fashion Collection
            </p>

            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Style for Everyone
            </h1>

            <p class="text-gray-300 mb-8">
                Discover Men’s Wear, Women’s Wear and Kids Fashion with Islandwide Delivery and Cash on Delivery.
            </p>

            <a href="/shop"
               class="bg-white text-black px-8 py-4 rounded-xl font-bold">
                Shop Now
            </a>
        </div>

        <div class="h-[500px] bg-gray-300 flex items-center justify-center text-black text-2xl">
           <div class="h-[500px]">
    <img src="{{ asset('images/banner.jpg') }}"
         class="w-full h-full object-cover">
</div>
        </div>

    </div>
</section>

<!-- Categories -->
<section class="mb-12">

    <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Shop by Category</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

       <a href="/shop?category=Men"
   class="relative h-72 rounded-2xl overflow-hidden shadow group">
    <img src="{{ asset('images/men.jpg') }}"
         class="w-full h-full object-cover group-hover:scale-105 transition">
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 class="text-3xl font-bold text-white">Men’s Wear</h3>
    </div>
</a>

<a href="/shop?category=Women"
   class="relative h-72 rounded-2xl overflow-hidden shadow group">
    <img src="{{ asset('images/women.jpg') }}"
         class="w-full h-full object-cover group-hover:scale-105 transition">
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 class="text-3xl font-bold text-white">Women’s Wear</h3>
    </div>
</a>

<a href="/shop?category=Kids"
   class="relative h-72 rounded-2xl overflow-hidden shadow group">
    <img src="{{ asset('images/kids.jpg') }}"
         class="w-full h-full object-cover group-hover:scale-105 transition">
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 class="text-3xl font-bold text-white">Kids Wear</h3>
    </div>
</a>

    </div>

</section>

<!-- Features -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div class="bg-white p-8 rounded-2xl shadow text-center">
        <h3 class="text-2xl font-bold mb-3">
            Cash on Delivery
        </h3>

        <p class="text-gray-600">
            Pay after receiving your order.
        </p>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow text-center">
        <h3 class="text-2xl font-bold mb-3">
            Islandwide Delivery
        </h3>

        <p class="text-gray-600">
            Delivery available all over Sri Lanka.
        </p>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow text-center">
        <h3 class="text-2xl font-bold mb-3">
            WhatsApp Support
        </h3>

        <p class="text-gray-600">
            Easy customer support via WhatsApp.
        </p>
    </div>

</section>

<!-- Latest Products -->
<section class="mt-12">

    <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Latest Products</h2>

        <a href="/shop" class="text-red-600 font-bold">
            View All
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

        @forelse($latestProducts as $product)

            <div class="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl transition">

                @if($product->image)
                    <img src="{{ asset('storage/' . $product->image) }}"
                         class="h-72 w-full object-cover">
                @else
                    <div class="h-72 bg-gray-200 flex items-center justify-center">
                        No Image
                    </div>
                @endif

                <div class="p-4">
                    <p class="text-sm text-gray-500">{{ $product->category }}</p>

                    <h3 class="font-bold text-lg mb-2">
                        {{ $product->name }}
                    </h3>

                    <p class="text-red-600 font-bold text-xl mb-4">
                        Rs. {{ $product->price }}
                    </p>

                    <a href="/product/{{ $product->id }}"
                       class="block bg-black text-white text-center py-3 rounded-lg">
                        View Product
                    </a>
                </div>

            </div>

        @empty

            <div class="col-span-4 bg-white p-10 rounded-xl shadow text-center">
                No latest products available.
            </div>

        @endforelse

    </div>

</section>

@endsection