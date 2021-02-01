class ProfileController < ApplicationController
  def show
    @profile = Profile.find_by(:user_id => current_user.id)
  end

  def create
    puts "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
    puts current_user.id
    puts params[:player_name]
    puts params[:player_rank]
    @profile = Profile.create!(:user_id => current_user.id, :player_name => params[:player_name], :player_rank => params[:player_rank])
    redirect_to profile_path(@profile.id)
  end

  def index

  end
end