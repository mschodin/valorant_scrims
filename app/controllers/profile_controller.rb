class ProfileController < ApplicationController
  def show
    if params[:id] =~ /\d/ and Profile.exists?(:id => params[:id])
      view_user = params[:id]
    else
      view_user = current_user.id
    end
    @profile = Profile.find_by(:user_id => view_user)
  end

  def create
    @profile = Profile.create!(:user_id => current_user.id, :player_name => params[:player_name], :player_rank => params[:player_rank])
    redirect_to profile_path(@profile.id)
  end

  def index
  end

  def update
    @profile = Profile.find_by(:user_id => current_user.id)
    @profile.player_name = params[:profile_name]
    @profile.player_rank = params[:profile_rank]
    @profile.save
    redirect_to profile_path(@profile.id)
  end
end