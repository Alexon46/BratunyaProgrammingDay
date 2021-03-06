<?php

use Illuminate\Database\Seeder;

class CompositionsTagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('composition_tag')->insert([
            'composition_id' => 1,
            'tag_id' => 1
        ]);
        DB::table('composition_tag')->insert([
            'composition_id' => 2,
            'tag_id' => 2
        ]);
        DB::table('composition_tag')->insert([
            'composition_id' => 2,
            'tag_id' => 3
        ]);
        DB::table('composition_tag')->insert([
            'composition_id' => 3,
            'tag_id' => 1
        ]);
        DB::table('composition_tag')->insert([
            'composition_id' => 3,
            'tag_id' => 2
        ]);
    }
}
