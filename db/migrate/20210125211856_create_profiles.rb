class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.references :user
      t.string :player_name
      t.string :player_rank
      t.string :player_logo

      t.timestamps
    end
  end
end
