class MakePlayerNameUnique < ActiveRecord::Migration[5.2]
  def change
    add_index :profiles, :player_name, unique: true
  end
end
