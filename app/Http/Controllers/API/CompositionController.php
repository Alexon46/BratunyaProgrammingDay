<?php

namespace App\Http\Controllers\API;

use App\Composition;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $compositions = Composition::with('tags');

        if ($request->has('search_s')) {
            $search = request('search_s');
            $compositions->where('title', 'like', "%{$search}%");
        }
        if ($request->has('title')) {
            $title = request('title');
            $title == 'asc' ? $compositions->orderBy('title') : $compositions->orderByDesc('title');
        }
        if ($request->has('date')) {
            $date = request('date');
            $date == 'asc' ? $compositions->orderBy('updated_at') : $compositions->orderByDesc('updated_at');
        }
        if ($request->has('tag')) {
            $tags = request('tag');
            $compositions->whereHas('tags', function ($query) use ($tags) {
                $query->whereIn('tag', $tags);
            });
        }
        $result = $compositions->get();
        return $result->isNotEmpty() ? response()->json($result) : response()->json(['error' => 'Ничего не найдено']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
