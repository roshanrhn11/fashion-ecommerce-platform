<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

<div class="flex min-h-screen">

    <!-- Sidebar -->
    <aside class="w-64 bg-black text-white p-6">

        <h1 class="text-3xl font-bold mb-8">
            Admin Panel
        </h1>

        <nav class="space-y-4">

            <a href="/admin"
               class="block hover:text-red-400">
                Dashboard
            </a>

            <a href="/admin/products"
               class="block hover:text-red-400">
                Products
            </a>

            <a href="/admin/products/create"
               class="block hover:text-red-400">
                Add Product
            </a>

            <a href="/admin/orders"
               class="block hover:text-red-400">
                Orders
            </a>

            <a href="/"
               class="block hover:text-red-400">
                Visit Website
            </a>

            <a href="/admin/logout"
               class="block text-red-400">
                Logout
            </a>

        </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">

        <div class="mb-6">
            <h2 class="text-2xl font-bold">
                Welcome, {{ session('admin_name') }}
            </h2>
        </div>

        @yield('content')

    </main>

</div>

</body>
</html>