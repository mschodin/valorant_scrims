class ActivityChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    session = connection.session
    stream_from "activity_channel_#{session[:room_id]}"
  end
end
