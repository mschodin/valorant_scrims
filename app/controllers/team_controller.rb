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
    puts "This is how to create a team and assign multiple profiles to it"
    # @team = Team.create(:team_name => params[:team_name]
    # @profile1 = Profile.find_by(:id => 1)
    # @profile2 = Profile.find_by(:id => 2)
    # @team.profiles = [@profile1, @profile2]

    redirect_to profile_path(@profile.id)
  end

  def get_all_profiles
    puts "***********************"
    puts Profile.all
  end
end
