<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clothing Shop | Premium Fashion</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
</head>

<body class="bg-slate-50 text-slate-900 antialiased flex flex-col min-screen">

@php
    $cartCount = count(session('cart', []));
@endphp

<div class="bg-stone-900 text-stone-100 text-center py-2 px-4 text-xs font-medium tracking-wider uppercase">
    ⚡ Cash on Delivery Available | Islandwide Premium Delivery
</div>

<header class="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        <a href="/" class="text-xl font-extrabold tracking-tight uppercase hover:opacity-80 transition">
            Clothing<span class="text-amber-600">.</span>Shop
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="/" class="hover:text-black transition-colors">Home</a>
            <a href="/shop" class="hover:text-black transition-colors">Shop All</a>
            <a href="/shop?category=Men" class="hover:text-black transition-colors">Men</a>
            <a href="/shop?category=Women" class="hover:text-black transition-colors">Women</a>
            <a href="/shop?category=Kids" class="hover:text-black transition-colors">Kids</a>
            <a href="/contact" class="hover:text-black transition-colors">Contact</a>
        </nav>

        <div class="flex items-center gap-4">
            
            <a href="/cart" class="group relative flex items-center gap-2 p-2 hover:bg-stone-50 rounded-full transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-stone-700 group-hover:text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zs" />
                </svg>
                @if($cartCount > 0)
                    <span class="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                        {{ $cartCount }}
                    </span>
                @else
                    <span class="text-xs text-stone-400 font-medium">0</span>
                @endif
            </a>

            <div class="h-5 w-px bg-stone-200 hidden sm:block"></div>

            @if(session('admin_id'))
                <div class="flex items-center gap-2">
                    <a href="/admin" class="text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white px-4 py-2 rounded-md hover:bg-stone-800 transition">
                        Dashboard
                    </a>
                    <a href="/admin/logout" class="p-2 text-stone-400 hover:text-red-600 transition" title="Logout">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                    </a>
                </div>

            @elseif(session('user_id'))
                <div class="flex items-center gap-4 text-sm">
                    <div class="hidden lg:block text-right">
                        <p class="text-xs text-stone-400">Welcome back,</p>
                        <p class="font-semibold text-stone-800">{{ session('user_name') }}</p>
                    </div>

                    <a href="/my-orders" class="hover:text-amber-600 transition-colors font-medium">Orders</a>
                    <a href="/favorites" class="hover:text-amber-600 transition-colors font-medium">Favorites</a>
                    
                    <a href="/logout" class="text-xs font-semibold uppercase tracking-wider border border-stone-200 text-stone-700 px-3 py-1.5 rounded-md hover:bg-stone-50 transition">
                        Logout
                    </a>
                </div>

            @else
                <a href="/login" class="text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white px-5 py-2.5 rounded-md hover:bg-stone-800 transition shadow-sm">
                    Sign In
                </a>
            @endif
        </div>

    </div>
</header>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
    @yield('content')
</main>

<footer class="bg-stone-950 text-stone-400 mt-auto border-t border-stone-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div class="space-y-4">
            <h2 class="font-bold text-white uppercase tracking-widest text-lg">Clothing Shop</h2>
            <p class="text-sm text-stone-400 leading-relaxed max-w-sm">
                Curating timeless style and high-end streetwear. Providing premium, high-quality, islandwide fashion services across Sri Lanka.
            </p>
        </div>

        <div class="space-y-4">
            <h2 class="font-semibold text-stone-200 uppercase tracking-wider text-xs">Quick Navigation</h2>
            <ul class="space-y-2.5 text-sm">
                <li><a href="/shop" class="hover:text-white transition-colors">Browse Collections</a></li>
                <li><a href="/cart" class="hover:text-white transition-colors">Shopping Cart</a></li>
                <li><a href="/contact" class="hover:text-white transition-colors">Get In Touch</a></li>
            </ul>
        </div>

        <div class="space-y-4">
            <h2 class="font-semibold text-stone-200 uppercase tracking-wider text-xs">Customer Experience</h2>
            <ul class="space-y-2.5 text-sm">
                <li class="flex items-center gap-2">
                    <span class="text-stone-500">Hotline:</span> <span class="text-stone-300 font-medium">075 684 0574</span>
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-stone-500">Email:</span> <a href="mailto:shop@example.com" class="text-stone-300 hover:text-white transition-colors">shop@example.com</a>
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-stone-500">Payment:</span> <span class="text-stone-300">Cash on Delivery Available</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-900/60 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>© {{ date('Y') }} Clothing Shop. Crafted for premium experiences.</p>
        <div class="flex gap-4">
            <a href="#" class="hover:text-stone-400">Privacy Policy</a>
            <a href="#" class="hover:text-stone-400">Terms of Service</a>
        </div>
    </div>
</footer>

</body>
</html>