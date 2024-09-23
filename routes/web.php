<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products\ProductController;

Route::get('/', [ProductController::class, 'index'])->name('products.index');
