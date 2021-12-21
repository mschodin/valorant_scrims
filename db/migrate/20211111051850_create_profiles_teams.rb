class CreateProfilesTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles_teams do |t|
      t.references :profile, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
