<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase;



    public function test_user_can_place_order(): void
    {

        $response = $this->postJson('/api/orders', [

            'customer_name' => 'Roshan',

            'phone' => '0771234567',

            'email' => 'roshan@test.com',

            'address' => 'Colombo Sri Lanka',

            'items' => [
                [
                    'product_id' => 1,
                    'name' => 'T Shirt',
                    'quantity' => 2,
                    'price' => 2500
                ]
            ],

            'total' => 5000,

            'payment_method' => 'Cash on Delivery'

        ]);



        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => 'Order placed successfully'
            ]);



        $this->assertDatabaseHas('orders', [

            'customer_name' => 'Roshan',

            'status' => 'Pending'

        ]);

    }






    public function test_user_can_view_my_orders(): void
    {

        $user = User::create([

            'name' => 'Roshan',

            'email' => 'roshan@test.com',

            'password' => Hash::make('password123'),

            'role' => 'customer'

        ]);



        Sanctum::actingAs($user);



        Order::create([

            'user_id' => $user->id,

            'customer_name' => 'Roshan',

            'phone' => '0771234567',

            'email' => 'roshan@test.com',

            'address' => 'Colombo',

            'items' => [
                [
                    'name'=>'Shoes',
                    'quantity'=>1
                ]
            ],

            'total' => 3000,

            'payment_method'=>'Cash on Delivery',

            'status'=>'Pending'

        ]);



        $response = $this->getJson('/api/my-orders');



        $response
            ->assertStatus(200)
            ->assertJson([
                'status'=>true
            ]);

    }








    public function test_user_can_cancel_order(): void
    {

        $user = User::create([

            'name'=>'Roshan',

            'email'=>'roshan@test.com',

            'password'=>Hash::make('password123'),

            'role'=>'customer'

        ]);



        Sanctum::actingAs($user);



        $order = Order::create([

            'user_id'=>$user->id,

            'customer_name'=>'Roshan',

            'phone'=>'0771234567',

            'email'=>'roshan@test.com',

            'address'=>'Colombo',

            'items'=>[
                [
                    'name'=>'Shirt'
                ]
            ],

            'total'=>2500,

            'payment_method'=>'Cash on Delivery',

            'status'=>'Pending'

        ]);




        $response = $this->postJson(
            "/api/my-orders/{$order->id}/cancel"
        );




        $response
            ->assertStatus(200)
            ->assertJson([
                'status'=>true,
                'message'=>'Order cancelled successfully'
            ]);



        $this->assertDatabaseHas('orders',[

            'id'=>$order->id,

            'status'=>'Cancelled'

        ]);

    }








  public function test_admin_can_update_order_status(): void
{

    $admin = User::create([

        'name'=>'Admin',

        'email'=>'admin@test.com',

        'password'=>Hash::make('password123'),

        'role'=>'admin'

    ]);


    Sanctum::actingAs($admin);



    $order = Order::create([


        'customer_name'=>'Roshan',

        'phone'=>'0771234567',

        'email'=>'roshan@test.com',

        'address'=>'Colombo',

        'items'=>[
            [
                'name'=>'Laptop Bag'
            ]
        ],

        'total'=>5000,

        'payment_method'=>'Cash on Delivery',

        'status'=>'Pending'

    ]);




    $response = $this->postJson(
        "/api/admin/orders/{$order->id}/status",
        [

            'status'=>'Confirmed'

        ]
    );




    $response
        ->assertStatus(200)
        ->assertJson([

            'status'=>true,

            'message'=>'Order status updated'

        ]);




    $this->assertDatabaseHas('orders',[

        'id'=>$order->id,

        'status'=>'Confirmed'

    ]);

}

}