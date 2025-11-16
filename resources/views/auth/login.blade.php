@extends('layouts.app')

@section('content')
<div style="max-width: 400px; margin: 2rem auto;">
    <div style="background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h1 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1.5rem; text-align: center; color: #1f2937;">
            Iniciar Sesión
        </h1>

        @if ($errors->any())
            <div style="background: #fee2e2; border: 1px solid #fecaca; color: #991b1b; padding: 1rem; border-radius: 0.375rem; margin-bottom: 1.5rem;">
                @foreach ($errors->all() as $error)
                    <p>{{ $error }}</p>
                @endforeach
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email -->
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">
                    Correo Electrónico
                </label>
                <input 
                    type="email" 
                    name="email" 
                    value="{{ old('email') }}"
                    required 
                    autofocus
                    style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; font-family: inherit;"
                />
                @error('email')
                    <span style="color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem; display: block;">{{ $message }}</span>
                @enderror
            </div>

            <!-- Password -->
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">
                    Contraseña
                </label>
                <input 
                    type="password" 
                    name="password" 
                    required
                    style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; font-family: inherit;"
                />
                @error('password')
                    <span style="color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem; display: block;">{{ $message }}</span>
                @enderror
            </div>

            <!-- Remember Me -->
            <div style="margin-bottom: 1.5rem; display: flex; align-items: center;">
                <input 
                    type="checkbox" 
                    name="remember" 
                    id="remember"
                    style="width: 1rem; height: 1rem; cursor: pointer;"
                />
                <label for="remember" style="margin-left: 0.5rem; cursor: pointer;">
                    Recuérdame
                </label>
            </div>

            <!-- Submit -->
            <button 
                type="submit"
                style="width: 100%; padding: 0.75rem; background: #ff2d20; color: white; border: none; border-radius: 0.375rem; font-weight: 600; font-size: 1rem; cursor: pointer; transition: background 0.2s;"
                onmouseover="this.style.background='#dc2626'"
                onmouseout="this.style.background='#ff2d20'"
            >
                Iniciar Sesión
            </button>
        </form>

        <div style="margin-top: 1.5rem; text-align: center;">
            <p style="color: #6b7280; font-size: 0.875rem;">
                ¿No tienes cuenta? 
                <a href="{{ route('register') }}" style="color: #ff2d20; text-decoration: none; font-weight: 600;">
                    Regístrate aquí
                </a>
            </p>
        </div>
    </div>
</div>
@endsection
