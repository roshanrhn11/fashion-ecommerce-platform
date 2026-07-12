<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;


class ProductController extends Controller
{

    // Get all products
    public function index()
    {
        $products = Product::latest()->get();

        return response()->json([
            "status" => true,
            "products" => $products
        ]);
    }





    // Add Product
    public function store(Request $request)
    {

        $request->validate([

            "name" => "required",

            "category" => "required",

            "price" => "required|numeric",

            "stock" => "required|numeric",

            "description" => "nullable",

            "image" => "nullable|image"

        ]);




        $imagePath = null;



        if($request->hasFile("image")){


            $imagePath = $request
                ->file("image")
                ->store("products","public");


        }





        $product = Product::create([


            "name"=>$request->name,

            "category"=>$request->category,

            "price"=>$request->price,

            "stock"=>$request->stock,

            "description"=>$request->description,

            "image"=>$imagePath


        ]);






        return response()->json([

            "status"=>true,

            "message"=>"Product created successfully",

            "product"=>$product

        ]);

    }








    /*
    |--------------------------------------------------------------------------
    | Update Product
    |--------------------------------------------------------------------------
    */


    public function update(Request $request,$id)
    {


        $product = Product::find($id);



        if(!$product){


            return response()->json([

                "status"=>false,

                "message"=>"Product not found"

            ],404);


        }





        $request->validate([

            "name"=>"required",

            "category"=>"required",

            "price"=>"required|numeric",

            "stock"=>"required|numeric",

            "description"=>"nullable",

            "image"=>"nullable|image"

        ]);






        if($request->hasFile("image")){


            // Delete old image

            if($product->image){

                Storage::disk('public')
                ->delete($product->image);

            }



            $product->image =
            $request->file("image")
            ->store("products","public");


        }







        $product->update([


            "name"=>$request->name,

            "category"=>$request->category,

            "price"=>$request->price,

            "stock"=>$request->stock,

            "description"=>$request->description,


            "image"=>$product->image


        ]);







        return response()->json([


            "status"=>true,

            "message"=>"Product updated successfully",

            "product"=>$product


        ]);


    }










    /*
    |--------------------------------------------------------------------------
    | Delete Product
    |--------------------------------------------------------------------------
    */


    public function destroy($id)
    {


        $product = Product::find($id);



        if(!$product){


            return response()->json([

                "status"=>false,

                "message"=>"Product not found"

            ],404);


        }






        if($product->image){


            Storage::disk('public')
            ->delete($product->image);


        }






        $product->delete();






        return response()->json([


            "status"=>true,

            "message"=>"Product deleted successfully"


        ]);


    }



}