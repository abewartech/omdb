<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Namirah',
            'email' => 'test@example.com',
            'password' => Hash::make('123456'),
            'username' => 'namirah'
        ]);

        \App\Models\Kategori::create([
            'name' => 'Romance',
        ]);

        \App\Models\Produk::create([
            'id_kategori' => 1,
            'name' => 'A Walk to Remember',
            'kode' => 'tt0281358',
            'foto' => 'awalktoremember.jpg'
        ]);
    }
}
