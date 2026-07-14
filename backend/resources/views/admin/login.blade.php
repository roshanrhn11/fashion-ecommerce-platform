<!DOCTYPE html>
<html>
<head>
    <title>Admin Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">

<div class="bg-white p-8 rounded-xl shadow w-full max-w-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Admin Login</h1>

    @if(session('error'))
        <div class="bg-red-100 text-red-700 p-3 rounded mb-4">
            {{ session('error') }}
        </div>
    @endif

    <form action="/admin/login" method="POST">
        @csrf

        <label class="block mb-2 font-bold">Email</label>
        <input type="email" name="email" required
               class="w-full border p-2 rounded mb-4">

        <label class="block mb-2 font-bold">Password</label>
        <input type="password" name="password" required
               class="w-full border p-2 rounded mb-6">

        <button class="w-full bg-black text-white py-3 rounded">
            Login
        </button>
    </form>
</div>

</body>
</html>