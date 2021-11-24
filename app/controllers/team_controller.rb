class TeamController < ApplicationController
  def show
  end

  def index
    puts "%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    puts Profile.all.collect(&:player_name)
    puts "%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    # puts Profile.all.select { |p| p.player_name}
  end

  def create
    @captain = Profile.find_by(:player_name => params[:captain])
    @team = Team.create(:team_name => params[:team_name], :captain_id => @captain.id)

    @players = Array.new
    @players.push(@captain)
    params[:teamList].each { |teammate| @players.push(Profile.find_by(:player_name => teammate)) unless (teammate.eql?("Select Player") or @players.include?(Profile.find_by(:player_name => teammate)))}

    @team.profiles = @players

    # TODO: redirect to team page on success
  end

  def get_all_profiles
    puts "***********************"
    puts Profile.all
  end
end
