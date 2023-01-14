<?php

use App\Http\Controllers\ProfileController;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/kategori', function () {
    $kategori = Kategori::all();
    return Inertia::render('Kategori', ['data' => $kategori]);
})->middleware(['auth', 'verified'])->name('kategori');

Route::get('/produk', function () {
    $produk = Produk::all();
    return Inertia::render('Produk', ['data' => $produk]);
})->middleware(['auth', 'verified'])->name('produk');

Route::get('/detailproduk/{movie}', function () {
    return Inertia::render('DetailProduk', ['movieId' => request('movie')]);
})->middleware(['auth', 'verified'])->name('detailproduk');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
