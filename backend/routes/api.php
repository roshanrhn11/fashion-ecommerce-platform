<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\OrderController;


/*
|--------------------------------------------------------------------------
| Product API
|--------------------------------------------------------------------------
*/

Route::get('/products', [ProductController::class, 'index']);

Route::post('/products/store', [ProductController::class, 'store']);
Route::put('/products/{id}/update',
[ProductController::class,'update']);


Route::delete('/products/{id}/delete',
[ProductController::class,'destroy']);



/*
|--------------------------------------------------------------------------
| React Authentication API
|--------------------------------------------------------------------------
*/


// Register

Route::post('/register', function (Request $request) {


    $request->validate([

        'name' => 'required',

        'email' => 'required|email|unique:users',

        'password' => 'required|min:6',

    ]);



    $user = User::create([

        'name'=>$request->name,

        'email'=>$request->email,

        'password'=>Hash::make($request->password),

        'role'=>'customer',

    ]);



    $token = $user->createToken('react_token')->plainTextToken;



    return response()->json([

        'status'=>true,

        'message'=>'Registration successful',

        'token'=>$token,

        'user'=>$user

    ]);

});




// Login

Route::post('/login', function(Request $request){


    $request->validate([

        'email'=>'required|email',

        'password'=>'required'

    ]);



    $user = User::where(
        'email',
        $request->email
    )->first();



    if(!$user || !Hash::check($request->password,$user->password)){


        return response()->json([

            'status'=>false,

            'message'=>'Invalid email or password'

        ],401);


    }



    $token = $user->createToken('react_token')->plainTextToken;



    return response()->json([

        'status'=>true,

        'message'=>'Login successful',

        'token'=>$token,

        'user'=>$user

    ]);


});





/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/


Route::middleware('auth:sanctum')->group(function(){



    /*
    |--------------------------------------------------------------------------
    | Customer Orders
    |--------------------------------------------------------------------------
    */


    Route::post('/orders',
    [OrderController::class,'store']);



    Route::get('/my-orders',
    [OrderController::class,'myOrders']);



    // Customer cancel order

    Route::post('/my-orders/{id}/cancel',
    [OrderController::class,'cancelOrder']);






    /*
    |--------------------------------------------------------------------------
    | Admin Order Management
    |--------------------------------------------------------------------------
    */


    Route::post('/admin/orders/{id}/status',
    [OrderController::class,'updateStatus']);







    /*
    |--------------------------------------------------------------------------
    | User
    |--------------------------------------------------------------------------
    */


    Route::get('/user',function(Request $request){


        return response()->json([

            'user'=>$request->user()

        ]);


    });







    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */


    Route::post('/logout',function(Request $request){


        $request->user()
        ->currentAccessToken()
        ->delete();



        return response()->json([

            'status'=>true,

            'message'=>'Logout successful'

        ]);


    });



});