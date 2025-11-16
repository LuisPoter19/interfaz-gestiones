@extends('layouts.app')

@section('content')
<div style="background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem; color: #1f2937;">
        Bienvenido, {{ Auth::user()->name }}!
    </h1>
    
    <p style="color: #6b7280; margin-bottom: 2rem;">
        Has iniciado sesión exitosamente en el Sistema de Gestión de Productos.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
        <!-- Card 1: Productos -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Productos</h3>
            <p style="opacity: 0.9;">Gestiona tu catálogo de productos</p>
            <a href="/products" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); color: white; text-decoration: none; border-radius: 0.375rem; font-weight: 600; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                Ir a Productos →
            </a>
        </div>

        <!-- Card 2: Categorías -->
        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Categorías</h3>
            <p style="opacity: 0.9;">Organiza tus productos por categoría</p>
            <a href="/categories" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); color: white; text-decoration: none; border-radius: 0.375rem; font-weight: 600; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                Ir a Categorías →
            </a>
        </div>

        <!-- Card 3: Proveedores -->
        <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Proveedores</h3>
            <p style="opacity: 0.9;">Administra tus proveedores</p>
            <a href="/suppliers" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); color: white; text-decoration: none; border-radius: 0.375rem; font-weight: 600; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                Ir a Proveedores →
            </a>
        </div>
    </div>

    <div style="margin-top: 2rem; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem; border-left: 4px solid #ff2d20;">
        <h3 style="font-weight: 700; margin-bottom: 0.5rem;">Información de tu cuenta</h3>
        <p><strong>Email:</strong> {{ Auth::user()->email }}</p>
        <p style="margin-top: 0.5rem;">
            <strong>Miembro desde:</strong> {{ Auth::user()->created_at->format('d/m/Y') }}
        </p>
    </div>
</div>
@endsection
