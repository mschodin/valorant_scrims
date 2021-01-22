class SessionController < ApplicationController

  respond_to :json, :js, :html

  def status
    render :json => {:session_status => user_signed_in?}
  end

  def exists
    puts params[:email]
    puts User.exists?(email: params[:email])
    render :json => {:exists_status => User.exists?(email: params[:email])}
  end

end