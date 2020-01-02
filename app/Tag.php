<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $hidden = ['pivot'];

    public function compositions()
    {
        return $this->belongsToMany(Composition::class);
    }
}
