<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('codigo_sku')->unique();
            $table->string('nombre');
            $table->text('descripcion')->nullable();
            $table->integer('cantidad_inicial');
            $table->string('unidad_medida')->nullable();
            $table->integer('nivel_minimo_stock');
            $table->decimal('precio_compra');
            $table->decimal('precio_venta')->nullable();
            $table->string('moneda');
            $table->string('numero_serie');
            $table->date('fecha_caducidad')->nullable();
            $table->enum('estado', ['disponible', 'agotado', 'pendiente', 'inactivo'])->default('disponible');
            $table->integer('cantidad_actual');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('supplier_id');
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
