<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {

            $table->id();


            // Customer account connection
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();



            $table->string('customer_name');

            $table->string('phone');

            $table->string('email')
                ->nullable();


            $table->text('address');


            $table->json('items');


            $table->decimal('total',10,2);



            $table->string('payment_method')
                ->default('Cash on Delivery');



            /*
            Order Flow

            Pending
            Confirmed
            Packed
            Shipping
            Delivered
            Cancelled

            */

            $table->string('status')
                ->default('Pending');



            $table->timestamps();

        });
    }



    public function down(): void
    {
        Schema::dropIfExists('orders');
    }

};