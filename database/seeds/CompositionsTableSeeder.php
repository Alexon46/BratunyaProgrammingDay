<?php

use Illuminate\Database\Seeder;

class CompositionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('compositions')->insert([
            'title' => 'Adajio sol menor',
        ]);

        DB::table('compositions')->insert([
            'title' => 'Радостная песнь',
        ]);

        DB::table('compositions')->insert([
            'title' => 'Поэма любви к Израилю',
        ]);
    }
}
