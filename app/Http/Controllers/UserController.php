<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as Req;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
//        dd(User::latest()->get());
//        return Inertia::render('User/Index', [
//            'users' => User::latest()->get(),
//        ]);

        return Inertia::render(
            'User/Index',
            [
                'users' => User::query()
                    ->latest()
                    ->when(Req::input('search'), function ($query, $search) {
                        $query->where('name', 'like', '%' . $search . '%')
                            ->OrWhere('email', 'like', '%' . $search . '%');
                    })->paginate(8)
                    ->withQueryString(),
                'filters' => Req::only(['search'])
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('User/CreateEdit', [
            'selectStatus' => User::STATUS,
            'selectRole' => User::ROLE
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'unique:users'],
            'phone' => ['required', 'unique:users'],
        ])->validateWithBag('storeInformation');

        $request['status_id'] = User::ACTIVE;
        $request['password'] = bcrypt(12345678);

//        $request['email_verified_at'] = Carbon::now(); //just for development

        $user = User::create($request->all());
        $user->sendEmailVerificationNotification();

        return Redirect::route('user.index', [
            'users' => $user,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function show(User $user)
    {
//        dd(User::where('id', $user->id)->with('worker', 'owner')->first());
        return Inertia::render('User/Show', [
            'users' => User::where('id', $user->id)->with('worker', 'owner')->first(),
//            'history' => Transaction::where('user_id', $user->id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return Response
     */
    public function edit($id)
    {
//        $users = User::find($id);
//        dd($users);
        return Inertia::render('User/CreateEdit', [
            'users' => User::find($id),
            'selectStatus' => User::STATUS,
            'selectRole' => User::ROLE
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(Request $request, User $user)
    {
//        dd($request->all());
//        Validator::make($request->toArray(), [
//            'name' => ['required', 'string', 'max:255'],
//        ])->validateWithBag('updateBlogInformation');
        $user->update($request->all());

        return Redirect::route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function destroy(Request $request)
    {
        $user = User::find($request['id']);
        $user->delete();

        return Redirect::route('user.index');
    }

    public function resetPassword(User $user)
    {
//        dd($user);
//        $data = User::findOrFail($user);
        $data = $user;

        $data->password = bcrypt('12345678');
        // User user data...
        $data->fill($data->all()->toArray())->update();
    }
}
