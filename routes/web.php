<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products\ProductController;

Route::get('/', [ProductController::class, 'index'])->name('products.index');
Route::post('/registerProduct', [ProductController::class, 'store'])->name('registerProduct');
