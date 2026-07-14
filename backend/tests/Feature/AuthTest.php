<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use Laravel\Sanctum\Sanctum;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register(): void
    {
        $response = $this->postJson('/api/register', [
            'name' => 'Roshan',
            'email' => 'roshan@test.com',
            'password' => 'password123',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => 'Registration successful',
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'roshan@test.com',
        ]);
    }

   public function test_user_cannot_login_with_wrong_password(): void
{
    User::create([
        'name' => 'Roshan',
        'email' => 'roshan@test.com',
        'password' => Hash::make('password123'),
        'role' => 'customer',
    ]);

    $response = $this->postJson('/api/login', [
        'email' => 'roshan@test.com',
        'password' => 'wrongpassword',
    ]);

    $response
        ->assertStatus(401)
        ->assertJson([
            'status' => false,
            'message' => 'Wrong password',
        ]);
}   
public function test_user_can_logout(): void
{
    $user = User::create([
        'name' => 'Roshan',
        'email' => 'roshan@test.com',
        'password' => Hash::make('password123'),
        'role' => 'customer',
    ]);

    Sanctum::actingAs($user);

    $response = $this->postJson('/api/logout');

    $response
        ->assertStatus(200)
        ->assertJson([
            'status' => true,
            'message' => 'Logout successful',
        ]);
}

public function test_user_can_login(): void
{
    User::create([
        'name' => 'Roshan',
        'email' => 'roshan@test.com',
        'password' => Hash::make('password123'),
        'role' => 'customer',
    ]);


    $response = $this->postJson('/api/login', [
        'email' => 'roshan@test.com',
        'password' => 'password123',
    ]);


    $response
        ->assertStatus(200)
        ->assertJson([
            'status' => true,
            'message' => 'Login successful',
        ]);
}
}