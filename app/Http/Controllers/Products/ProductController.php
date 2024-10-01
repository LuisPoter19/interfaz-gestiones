<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
Use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        return view('products.index', ['products' => $products]);

    

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();

        $product->codigo_sku = $request->code;
        $product->nombre = $request->name;
        $product->descripcion = $request->description;
        $product->cantidad_inicial = $request->initialAmount;
        $product->unidad_medida = $request->unit;
        $product->nivel_minimo_stock = $request->minimumStock;
        $product->precio_compra = $request->purchasePrice;
        $product->precio_venta = $request->salePrice;
        $product->moneda = $request->money;
        $product->numero_serie = $request->serialNumber;
        $product->fecha_caducidad = $request->expirationDate;
        $product->estado = $request->state;
        $product->cantidad_actual = $request->amountCurrent;
        $product->category_id = $request->category;
        $product->supplier_id = $request->supplier;

        $product->save();

        session()->flash('success', 'Producto guardado exitosamente.');

        return redirect('/');
    }

    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        $product->codigo_sku = $request->code;
        $product->nombre = $request->name;
        $product->descripcion = $request->description;
        $product->cantidad_inicial = $request->initialAmount;
        $product->unidad_medida = $request->unit;
        $product->nivel_minimo_stock = $request->minimumStock;
        $product->precio_compra = $request->purchasePrice;
        $product->precio_venta = $request->salePrice;
        $product->moneda = $request->money;
        $product->numero_serie = $request->serialNumber;
        $product->fecha_caducidad = $request->expirationDate;
        $product->estado = $request->state;
        $product->cantidad_actual = $request->amountCurrent;
        $product->category_id = $request->category;
        $product->supplier_id = $request->supplier;

        $product->save();

        session()->flash('success', 'Producto guardado exitosamente.');

        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
