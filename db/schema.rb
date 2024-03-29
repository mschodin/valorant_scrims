# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_24_185618) do

  create_table "profiles", force: :cascade do |t|
    t.integer "user_id"
    t.string "player_name"
    t.string "player_rank"
    t.string "player_logo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_name"], name: "index_profiles_on_player_name", unique: true
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "profiles_teams", force: :cascade do |t|
    t.integer "profile_id"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_profiles_teams_on_profile_id"
    t.index ["team_id"], name: "index_profiles_teams_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "team_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "captain_id"
    t.index ["captain_id"], name: "index_teams_on_captain_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
