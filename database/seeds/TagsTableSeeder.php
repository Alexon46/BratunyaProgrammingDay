<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([
            'tag' => 'sad',
        ]);
        DB::table('tags')->insert([
            'tag' => 'cool',
        ]);
        DB::table('tags')->insert([
            'tag' => 'funny',
        ]);
    }
}
