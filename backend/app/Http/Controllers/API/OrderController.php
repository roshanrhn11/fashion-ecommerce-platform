<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Mail\OrderConfirmation;


class OrderController extends Controller
{


    /*
    |--------------------------------------------------------------------------
    | Place Order
    |--------------------------------------------------------------------------
    */

    public function store(Request $request)
    {


        $request->validate([

            'customer_name' => 'required|string|max:255',

            'phone' => 'required|string|max:20',

            'email' => 'nullable|email|max:255',

            'address' => 'required|string',

            'items' => 'required|array|min:1',

            'total' => 'required|numeric',

            'payment_method' => 'nullable|string',

        ]);



        $userId = null;


        if(auth('sanctum')->check()){

            $userId = auth('sanctum')->id();

        }



$order = Order::create([

    'user_id'=>$userId,

    'customer_name'=>$request->customer_name,

    'phone'=>$request->phone,

    'email'=>$request->email,

    'address'=>$request->address,

    'items'=>$request->items,

    'total'=>$request->total,

    'payment_method'=>
        $request->payment_method ?? 
        'Cash on Delivery',

    'status'=>'Pending',

]);


// Email temporarily disabled
// Add Laravel Queue email after order system is completed





        return response()->json([

            'status'=>true,

            'message'=>'Order placed successfully',

            'reference'=>
            'ORD-'.str_pad($order->id,6,'0','0'),

            'order'=>$order

        ]);


    }







    /*
    |--------------------------------------------------------------------------
    | Customer Orders
    |--------------------------------------------------------------------------
    */


    public function myOrders(Request $request)
    {


        if(!$request->user()){


            return response()->json([

                'status'=>false,

                'message'=>'Unauthenticated'

            ],401);


        }




        $orders = Order::where(

            'user_id',

            $request->user()->id

        )
        ->latest()
        ->get();




        return response()->json([


            'status'=>true,

            'orders'=>$orders


        ]);


    }







    /*
    |--------------------------------------------------------------------------
    | Customer Cancel Order
    |--------------------------------------------------------------------------
    */


    public function cancelOrder(Request $request,$id)
    {


        $order = Order::where(

            'id',$id

        )
        ->where(

            'user_id',

            auth('sanctum')->id()

        )
        ->first();





        if(!$order){


            return response()->json([

                'status'=>false,

                'message'=>'Order not found'

            ],404);


        }





        if(
            $order->status !== "Pending" &&
            $order->status !== "Confirmed"
        ){


            return response()->json([

                'status'=>false,

                'message'=>
                'Order cannot be cancelled now'

            ],400);


        }






        $order->update([

            'status'=>'Cancelled'

        ]);






        return response()->json([

            'status'=>true,

            'message'=>'Order cancelled successfully'

        ]);


    }








    /*
    |--------------------------------------------------------------------------
    | Admin Update Order Status
    |--------------------------------------------------------------------------
    */


    public function updateStatus(Request $request,$id)
    {


        $request->validate([

            'status'=>
            'required|in:Pending,Confirmed,Packed,Shipping,Delivered,Cancelled'

        ]);





        $order = Order::find($id);



        if(!$order){


            return response()->json([

                'status'=>false,

                'message'=>'Order not found'

            ],404);


        }






        $order->update([

            'status'=>$request->status

        ]);






        return response()->json([

            'status'=>true,

            'message'=>'Order status updated',

            'order'=>$order

        ]);



    }



}