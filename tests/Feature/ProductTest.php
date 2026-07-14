<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;


    public function test_user_can_view_products(): void
    {

        Product::create([
            'name' => 'Premium T Shirt',
            'category' => 'Men',
            'price' => 2500,
            'description' => 'Cotton T Shirt',
            'stock' => 10,
            'is_active' => true,
        ]);


        $response = $this->getJson('/api/products');


        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
            ]);
    }





    public function test_user_can_create_product(): void
    {

        $response = $this->postJson('/api/products/store', [

            'name' => 'Blue Hoodie',

            'category' => 'Men',

            'price' => 4500,

            'description' => 'Winter Hoodie',

            'stock' => 20

        ]);



        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => 'Product created successfully'
            ]);



        $this->assertDatabaseHas('products',[

            'name'=>'Blue Hoodie'

        ]);

    }







    public function test_user_can_update_product(): void
    {


        $product = Product::create([

            'name'=>'Old Product',

            'category'=>'Women',

            'price'=>3000,

            'description'=>'Old',

            'stock'=>5,

            'is_active'=>true

        ]);




        $response = $this->putJson(
            "/api/products/{$product->id}/update",
            [

                'name'=>'Updated Product',

                'category'=>'Women',

                'price'=>3500,

                'description'=>'Updated',

                'stock'=>15

            ]
        );




        $response
            ->assertStatus(200)
            ->assertJson([

                'status'=>true,

                'message'=>'Product updated successfully'

            ]);




        $this->assertDatabaseHas('products',[

            'name'=>'Updated Product'

        ]);

    }









    public function test_user_can_delete_product(): void
    {


        $product = Product::create([

            'name'=>'Delete Product',

            'category'=>'Kids',

            'price'=>2000,

            'description'=>'Test',

            'stock'=>5,

            'is_active'=>true

        ]);




        $response = $this->deleteJson(
            "/api/products/{$product->id}/delete"
        );




        $response
            ->assertStatus(200)
            ->assertJson([

                'status'=>true,

                'message'=>'Product deleted successfully'

            ]);




        $this->assertDatabaseMissing('products',[

            'id'=>$product->id

        ]);

    }


}