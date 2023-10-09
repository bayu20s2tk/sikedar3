<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CourseItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//        dd($request->all());
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
            'content' => ['required'],
        ])->validateWithBag('storeInformation');

        $request['user_id'] = auth()->user()->id;

        CourseItem::create($request->all());
//        return Redirect::route('course.edit', [
//            'course' => CourseItem::create($request->all())
//        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(CourseItem $courseItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseItem $courseItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseItem $courseItem)
    {
//        dd($request->all(), $courseItem);
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
            'content' => ['required'],
        ])->validateWithBag('updateInformation');
        $courseItem->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseItem $courseItem)
    {
        $courseItem->delete();
    }
}
