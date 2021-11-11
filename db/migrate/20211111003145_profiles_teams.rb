class ProfilesTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles_teams, id: false do |t|
      t.belongs_to :teams
      t.belongs_to :profiles
    end
  end
end
