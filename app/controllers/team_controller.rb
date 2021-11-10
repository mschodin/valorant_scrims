class TeamController < ApplicationController
  def show
  end

  def index
    puts "hi"
    @team = Team.find_by(:id => 4);
    puts @team.team_name
    puts @team.profile
  end

  def create
    puts "*********************************************"
    @team = Team.create(:team_name => params[:team_name])
    @team.profile = [[1, 2]]
    redirect_to profile_path(@profile.id)
  end
end
