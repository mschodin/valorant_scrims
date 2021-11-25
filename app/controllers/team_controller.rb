class TeamController < ApplicationController
  def show
  end

  def index
  end

  def create
    @captain = Profile.find_by(:player_name => params[:captain])
    @team = Team.create(:team_name => params[:team_name], :captain_id => @captain.id)

    @players = Array.new
    @players.push(@captain)
    params[:teamList].each { |teammate| @players.push(Profile.find_by(:player_name => teammate)) unless (teammate.eql?("Select Player") or @players.include?(Profile.find_by(:player_name => teammate)))}

    @team.profiles = @players

    redirect_to team_path(@team.id)
  end

  def get_all_profiles
  end
end
