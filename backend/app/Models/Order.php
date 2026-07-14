<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  protected $fillable = [
    'user_id',
    'customer_name',
    'phone',
    'email',
    'address',
    'items',
    'total',
    'payment_method',
    'status',
];

    protected $casts = [
        'items' => 'array',
    ];
}