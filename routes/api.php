<?php

use App\Http\Controllers\API\HelperController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//kategori
Route::post('kategori', [HelperController::class, 'storekategori']);
Route::post('editkategori', [HelperController::class, 'updatekategori']);
Route::delete('kategori/{id}', [HelperController::class, 'deletekategori']);

//produk
Route::post('produk', [HelperController::class, 'storeproduk']);
Route::post('editproduk', [HelperController::class, 'updateproduk']);
Route::delete('produk/{id}', [HelperController::class, 'deleteproduk']);