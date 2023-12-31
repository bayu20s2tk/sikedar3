<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Overtrue\LaravelFollow\Traits\Follower;
use Overtrue\LaravelLike\Traits\Liker;
use Overtrue\LaravelSubscribe\Traits\Subscriber;
use Overtrue\LaravelVote\Traits\Voter;
use Stephenjude\Wallet\Interfaces\Wallet;
use Stephenjude\Wallet\Traits\HasWallet;

class User extends Authenticatable implements Wallet, MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use HasWallet;
    use Subscriber;
    use Voter;
//    use Liker;
//    use Follower;
//    use HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'password',
        'role_id',
        'status_id',
        'email_verified_at' //just for development
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    const ACTIVE = 1;
    const NONACTIVE = 2;
    const BANNED = 3;
    const STATUS = [
        self::ACTIVE => 'Aktif',
        self::NONACTIVE => 'Nonaktif',
        self::BANNED => 'Blokir',
    ];

    const COLOR = [
        self::ACTIVE => 'bg-green-100 text-green-800',
        self::NONACTIVE => 'bg-amber-100 text-amber-800',
        self::BANNED => 'bg-red-100 text-red-800',
    ];

    const ADMIN = 1;
    const MENTOR = 2;
    const USER = 3;
    const ROLE = [
        self::ADMIN => 'Admin',
        self::MENTOR => 'Mentor',
        self::USER => 'Peserta',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:d-m-Y',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
//    protected $with = [
//        'worker',
//        'owner',
//    ];

    protected $appends = [
        'profile_photo_url',
        'created',
        'role',
        'color',
        'status',
        'review_worker_average',
        'review_user_average'
    ];

    public function getCreatedAttribute()
    {
        return date('d M Y', strtotime($this->created_at));
    }
    public function getStatusAttribute(): string
    {
        return self::STATUS[$this->status_id];
    }
    public function getColorAttribute(): string
    {
        return self::COLOR[$this->status_id];
    }
    public function getRoleAttribute(): string
    {
        return self::ROLE[$this->role_id];
    }

    public function getReviewWorkerAverageAttribute(): string | null
    {
        return Review::Where([['worker_id', $this->id],])->pluck('rating')->avg();
    }
    public function getReviewUserAverageAttribute(): string | null
    {
        return Review::Where([['user_id', $this->id],])->pluck('rating')->avg();
    }
    public function worker(): HasMany
    {
        return $this->hasMany(Review::class, 'worker_id', 'id')->latest();
    }
    public function owner(): HasMany
    {
        return $this->hasMany(Review::class, 'owner_id', 'id')->latest();
    }

}
