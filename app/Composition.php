<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Composition extends Model
{

    const CREATED_AT = null;

    protected $hidden = ['pivot'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
