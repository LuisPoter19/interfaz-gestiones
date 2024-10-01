<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products\ProductController;

Route::get('/', [ProductController::class, 'index'])->name('products.index');
Route::post('/registerProduct', [ProductController::class, 'store'])->name('registerProduct');
Route::get('/product/{id}', [ProductController::class, 'edit']);
Route::put('/updateProduct/{id}', [ProductController::class, 'update'])->name('updateProduct');
