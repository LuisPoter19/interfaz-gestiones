@extends('layouts.template')
@section('title' , 'Index')

@section('css')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/jquery.dataTables.min.css">
@endsection

@section('template')
    <div class=" container table-responsive prueba">
        <h4>Productos</h4>
        <div class="d-flex justify-content-start my-3">
            <button class="btn btn-primary" id="register" name="register">Añadir</button>
        </div>

        <table id="articulos" class="table table-striped table-bordered shadow-lg mt-4 text-muted table-hover" style="width:100%">
            <thead class="bg-primary text-white">
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Cantidad Inicial</th>
                    <th>Unidad Medida</th>
                    <th>Nivel Minimo Stock</th>
                    <th>Precio Compra</th>
                    <th>Precio Venta</th>
                    <th>Moneda</th>
                    <th>Número Serie</th>
                    <th>Fecha Caducidad</th>
                    <th>Estado</th>
                    <th>Cantidad Actual</th>
                    <th>Categoria</th>
                    <th>Proveedor</th>
                    <th class="space">Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                    <tr>
                        <td>{{ $product->codigo_sku }}</td>
                        <td>{{ $product->nombre }}</td>
                        <td>{{ $product->descripcion }}</td>
                        <td>{{ $product->cantidad_inicial }}</td>
                        <td>{{ $product->unidad_medida}}</td>
                        <td>{{ $product->nivel_minimo_stock}}</td>
                        <td>{{ $product->precio_compra}}</td>
                        <td>{{ $product->precio_venta}}</td>
                        <td>{{ $product->moneda}}</td>
                        <td>{{ $product->numero_serie}}</td>
                        <td>{{ $product->fecha_caducidad}}</td>
                        <td>{{ $product->estado}}</td>
                        <td>{{ $product->cantidad_actual}}</td>
                        <td>{{ $product->category->nombre}}</td>
                        <td>{{ $product->supplier->nombre}}</td>
                        <td class="space">
                            <form action="{{ route('product.destroy', ['id' => $product->id]) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <!--<a class="btn btn-primary">Editar</a>-->
                                <button type="button" class="bi bi-pencil-fill me-3 btn btn-primary edit-button" title="Editar" data-id="{{ $product->id }}"></button>
                                
                                <!--<button type="submit" class="btn btn-danger">Eliminar</button>-->
                                <button type="submit" class="bi bi-trash-fill btn btn-danger" title="Eliminar"></button>
                            </form>                        
                        </td>
                        
                    </tr>
                    
                @endforeach
            </tbody>
        </table>
    </div>
@section('js')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#articulos').DataTable();
        });
    </script>
@endsection

@endsection