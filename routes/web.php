<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;


/*
|--------------------------------------------------------------------------
| Customer Website Routes
|--------------------------------------------------------------------------
*/


Route::get('/', function () {


    $latestProducts = Product::where('is_active', true)
        ->latest()
        ->take(4)
        ->get();


    return view('home', compact('latestProducts'));

});



Route::get('/shop', function(Request $request){


    $query = Product::where('is_active', true);


    $category = $request->category;

    $search = $request->search;

    $sort = $request->sort;



    if($category)
    {

        $query->where('category',$category);

    }



    if($search)
    {

        $query->where(
            'name',
            'like',
            '%' . $search . '%'
        );

    }



    if($sort == 'low_high')
    {

        $query->orderBy('price','asc');

    }
    elseif($sort == 'high_low')
    {

        $query->orderBy('price','desc');

    }
    else
    {

        $query->latest();

    }



    $products = $query->get();



    return view('shop', compact(
        'products',
        'category',
        'search',
        'sort'
    ));

});





Route::get('/product/{id}', function($id){


    $product = Product::findOrFail($id);


    return view('product', compact('product'));


});





/*
|--------------------------------------------------------------------------
| Customer Authentication
|--------------------------------------------------------------------------
*/


Route::get('/login', function(){

    return view('auth.login');

});



Route::post('/login', function(Request $request){


    $user = User::where(
        'email',
        $request->email
    )->first();



    if(!$user || !Hash::check(
        $request->password,
        $user->password
    ))
    {

        return back()->with(
            'error',
            'Invalid email or password'
        );

    }



    // Block admin from customer login

    if($user->role === 'admin')
    {

        return back()->with(
            'error',
            'Admin accounts cannot login here. Use admin login.'
        );

    }



    session()->put(
        'user_id',
        $user->id
    );


    session()->put(
        'user_name',
        $user->name
    );



    return redirect('/');


});




Route::get('/register', function(){


    return view('auth.register');


});





Route::post('/register', function(Request $request){


    User::create([

        'name'=>$request->name,

        'email'=>$request->email,

        'password'=>Hash::make($request->password),

        'role'=>'user',

    ]);



    return redirect('/login')
        ->with(
            'success',
            'Registration successful. Please login.'
        );


});





Route::get('/logout', function(){


    session()->forget([
        'user_id',
        'user_name'
    ]);



    return redirect('/');


});
/*
|--------------------------------------------------------------------------
| Separate Admin Login (WordPress Style)
|--------------------------------------------------------------------------
*/


Route::get('/admin/login', function(){


    return view('admin.login');


});





Route::post('/admin/login', function(Request $request){


    $user = User::where(
        'email',
        $request->email
    )->first();



    if(!$user || !Hash::check(
        $request->password,
        $user->password
    ))
    {

        return back()->with(
            'error',
            'Invalid email or password'
        );

    }



    if($user->role !== 'admin')
    {

        return back()->with(
            'error',
            'You are not authorized as admin'
        );

    }



    session()->put(
        'user_id',
        $user->id
    );


    session()->put(
        'user_name',
        $user->name
    );



    return redirect('/admin');


});





Route::get('/admin/logout', function(){


    session()->forget([
        'user_id',
        'user_name'
    ]);



    return redirect('/admin/login');


});





/*
|--------------------------------------------------------------------------
| Admin Dashboard
|--------------------------------------------------------------------------
*/


Route::get('/admin', function(){



    $user = User::find(
        session('user_id')
    );



    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $productsCount = Product::count();


    $ordersCount = Order::count();


    $pendingOrders = Order::where(
        'status',
        'Pending'
    )->count();



    return view(
        'admin.dashboard',
        compact(
            'productsCount',
            'ordersCount',
            'pendingOrders'
        )
    );


});





/*
|--------------------------------------------------------------------------
| Admin Orders Management
|--------------------------------------------------------------------------
*/


Route::get('/admin/orders', function(){


    $user = User::find(
        session('user_id')
    );



    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $orders = Order::latest()->get();



    return view(
        'admin.orders',
        compact('orders')
    );


});





Route::post('/admin/orders/{id}/status', function(
    Request $request,
    $id
){



    $user = User::find(
        session('user_id')
    );



    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $order = Order::findOrFail($id);



    $order->update([

        'status'=>$request->status,

    ]);



    return redirect('/admin/orders');


});
/*
|--------------------------------------------------------------------------
| Admin Product Management
|--------------------------------------------------------------------------
*/


Route::get('/admin/products', function(){


    $user = User::find(
        session('user_id')
    );


    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $products = Product::latest()->get();



    return view(
        'admin.products',
        compact('products')
    );


});





Route::get('/admin/products/create', function(){


    $user = User::find(
        session('user_id')
    );


    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    return view('admin.products-create');


});





Route::post('/admin/products/store', function(Request $request){


    $user = User::find(
        session('user_id')
    );


    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $imagePath = null;



    if($request->hasFile('image'))
    {

        $imagePath = $request->file('image')
            ->store('products','public');

    }



    Product::create([

        'name'=>$request->name,

        'category'=>$request->category,

        'price'=>$request->price,

        'stock'=>$request->stock,

        'description'=>$request->description,

        'image'=>$imagePath,

        'is_active'=>true,

    ]);



    return redirect('/admin/products/create')
        ->with(
            'success',
            'Product added successfully!'
        );


});





Route::get('/admin/products/{id}/edit', function($id){


    $user = User::find(
        session('user_id')
    );


    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $product = Product::findOrFail($id);



    return view(
        'admin.products-edit',
        compact('product')
    );


});





Route::post('/admin/products/{id}/update', function(
    Request $request,
    $id
){


    $user = User::find(
        session('user_id')
    );


    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $product = Product::findOrFail($id);



    $imagePath = $product->image;



    if($request->hasFile('image'))
    {

        $imagePath = $request->file('image')
            ->store('products','public');

    }



    $product->update([

        'name'=>$request->name,

        'category'=>$request->category,

        'price'=>$request->price,

        'stock'=>$request->stock,

        'description'=>$request->description,

        'image'=>$imagePath,

    ]);



    return redirect('/admin/products')
        ->with(
            'success',
            'Product updated successfully!'
        );


});





Route::post('/admin/products/{id}/delete', function($id){


    $user = User::find(
        session('user_id')
    );


    if(!$user || $user->role !== 'admin')
    {

        return redirect('/admin/login');

    }



    $product = Product::findOrFail($id);



    $product->delete();



    return redirect('/admin/products')
        ->with(
            'success',
            'Product deleted successfully!'
        );


});





/*
|--------------------------------------------------------------------------
| Customer Orders
|--------------------------------------------------------------------------
*/


Route::get('/my-orders', function(){


    if(!session('user_id'))
    {

        return redirect('/login');

    }



    $orders = Order::where(
        'user_id',
        session('user_id')
    )
    ->latest()
    ->get();



    return view(
        'my-orders',
        compact('orders')
    );


});





Route::post('/my-orders/{id}/cancel', function($id){


    if(!session('user_id'))
    {

        return redirect('/login');

    }



    $order = Order::where('id',$id)
        ->where(
            'user_id',
            session('user_id')
        )
        ->firstOrFail();



    if(in_array(
        $order->status,
        [
            'Pending',
            'Confirmed'
        ]
    ))
    {

        $order->update([

            'status'=>'Cancelled',

        ]);

    }



    return redirect('/my-orders');


});



// 2. உங்களுடைய பழைய ஹெல்த் செக் ரூட் (பேக்கப்)
Route::get('/healthz', function () {
    return response()->json([
        'status' => 'ok',
        'app' => 'StyleCart API'
    ]);
});



// தற்காலிகமாக டேட்டாபேஸ் டிராபிக் இல்லாமல் வெறும் JSON மட்டும் ரிட்டன் செய்கிறோம்
Route::get('/', function () {
    return response()->json([
        'status' => 'online',
        'app' => 'StyleCart API Production',
        'version' => '1.0.0',
        'message' => 'Backend is working perfectly with Docker!'
    ]);
});

Route::get('/up', function () {
    return response('Application up', 200);
});