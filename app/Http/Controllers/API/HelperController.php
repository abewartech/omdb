<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;

class HelperController extends Controller
{
    public function storekategori()
    {
        $kategori = new Kategori();
        $kategori->name = request('name');
        $kategori->save();

        return response()->json([
            'success' => true,
            'message' => $kategori,
        ], 200);
    }

    public function updatekategori()
    {
        $kategori = Kategori::find(request('id'));
        $kategori->name = request('name');
        $kategori->update();

        return response()->json([
            'success' => true,
            'message' => $kategori,
        ], 200);
    }
    
    public function deletekategori()
    {
        $kategori = Kategori::find(request('id'));
        $kategori->delete();

        return response()->json([
            'success' => true,
            'message' => $kategori,
        ], 200);
    }

    public function storeproduk()
    {
        $produk = new Produk();
        $produk->name = request('name');
        $produk->id_kategori = request('kategori');
        $produk->kode = request('code');
        $produk->foto = request('foto');
        $produk->save();

        return response()->json([
            'success' => true,
            'message' => $produk,
        ], 200);
    }

    public function updateproduk()
    {
        $produk = Produk::find(request('id'));
        $produk->name = request('name');
        $produk->update();

        return response()->json([
            'success' => true,
            'message' => $produk,
        ], 200);
    }
    
    public function deleteproduk()
    {
        $produk = Produk::find(request('id'));
        $produk->delete();

        return response()->json([
            'success' => true,
            'message' => $produk,
        ], 200);
    }
}
