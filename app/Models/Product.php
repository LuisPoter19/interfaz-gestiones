<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'codigo_sku',
        'nombre',
        'descripcion',
        'cantidad_inicial',
        'unidad_medida',
        'nivel_minimo_stock',
        'precio_compra',
        'precio_venta',
        'moneda',
        'numero_serie',
        'fecha_caducidad',
        'estado',
        'cantidad_actual',
        'category_id',
        'supplier_id',
    ];

    public function category()
     {
        return $this->belongsTo(Category::class);
     }

     public function supplier()
     {
        return $this->belongsTo(Supplier::class);
     }
}
