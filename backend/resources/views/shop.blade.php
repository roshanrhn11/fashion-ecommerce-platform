@extends('layouts.shop')

@section('content')

<div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

    <div>
        <h1 class="text-3xl font-bold">
            {{ $category ? $category . ' Collection' : 'Shop Products' }}
        </h1>

        @if($category)
            <a href="/shop" class="text-red-600 font-bold">
                View All Products
            </a>
        @endif
    </div>

    <form action="/shop" method="GET" class="flex gap-2">

        @if($category)
            <input type="hidden" name="category" value="{{ $category }}">
        @endif

        <input type="text"
               name="search"
               value="{{ $search }}"
               placeholder="Search products..."
               class="border p-3 rounded-lg w-64">

               <select name="sort" class="border p-3 rounded-lg">
    <option value="">Sort</option>
    <option value="low_high" {{ $sort == 'low_high' ? 'selected' : '' }}>
        Price: Low to High
    </option>
    <option value="high_low" {{ $sort == 'high_low' ? 'selected' : '' }}>
        Price: High to Low
    </option>
</select>


        <button class="bg-black text-white px-6 rounded-lg">
            Search
        </button>
    </form>

</div>

<div class="grid grid-cols-1 md:grid-cols-4 gap-6">

    @forelse($products as $product)
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

                <h2 class="font-bold text-lg mb-2">
                    {{ $product->name }}
                </h2>

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
            No products available.
        </div>
    @endforelse

</div>

@endsection