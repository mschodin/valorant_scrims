class SessionController < ApplicationController

  respond_to :json, :js, :html

  def status
    render :json => {:session_status => user_signed_in?}
  end

end