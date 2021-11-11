class TeamController < ApplicationController
  def show
  end

  def index
    puts "hi"
    # @team = Team.find_by(:id => 1);
    # puts @team.team_name
    # puts @team.profiles
  end

  def create
    puts "*********************************************"
    @team = Team.create(:team_name => params[:team_name])
    @profile = Profile.find_by(:id => 1)
    @profile.teams.create(team_name: @team.team_name, team_id: @team.id)
    # @profile.teams.create(team_id: @team.id, profile_id: @profile.id)
    # @team.profiles.create(id: 1)

    # @team.profiles = [Profile.find_by(:id => 1)]
    redirect_to profile_path(@profile.id)
  end
end
