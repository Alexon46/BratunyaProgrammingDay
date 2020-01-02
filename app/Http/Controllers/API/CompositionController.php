<?php

namespace App\Http\Controllers\API;

use App\Composition;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $compositions = Composition::with('tags');

        if ($request->has('search_s')) {
            $search = strtolower(request('search_s'));
            $compositions->where('title', 'like', "%{$search}%");
        }
        if ($request->has('title')) {
            $title = strtolower(request('title'));
            $title == 'asc' ? $compositions->orderBy('title') : $compositions->orderByDesc('title');
        }
        if ($request->has('date')) {
            $date = strtolower(request('date'));
            $date == 'asc' ? $compositions->orderBy('updated_at') : $compositions->orderByDesc('updated_at');
        }
        // should be optimized
        if ($request->has('tag')) {
            $tags = request('tag');
            $compositions->each(function ($composition) use ($tags) {
                $cTags = $composition;
                if (count($tags) == count($cTags) && in_array($tags, $cTags)){
                    return $composition;
                }
            });
        }

        return response()->json($compositions->get());
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
