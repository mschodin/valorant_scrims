class AddCaptainToTeams < ActiveRecord::Migration[5.2]
  def change
    add_reference :teams, :captain, foreign_key: true
  end
end
