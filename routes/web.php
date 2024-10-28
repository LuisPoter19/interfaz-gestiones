<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products\ProductController;
use App\Http\Controllers\Products\CategoryController;
use App\Http\Controllers\Products\SupplierController;

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index'])->name('products.index');
    Route::post('/register', [ProductController::class, 'store'])->name('product.register');
    Route::get('/{id}/edit', [ProductController::class, 'edit']);
    Route::put('/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/{id}', [ProductController::class, 'destroy'])->name('product.destroy');
    Route::get('/get-new-product-code', [ProductController::class, 'getNewProductCode'])->name('product.code');
});


Route::get('/categories', [CategoryController::class, 'getCategories'])->name('getCategories');
Route::get('/suppliers', [SupplierController::class, 'getSuppliers'])->name('getSuppliers');

