<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => 'admin',
            'password' => 'admin',
            'is_admin' => true,
        ]);
        DB::table('users')->insert([
            'username' => 'xenx',
            'password' => 'xenx',
        ]);
        DB::table('users')->insert([
            'username' => 'xamellion',
            'password' => 'xamellion',
        ]);
    }
}
