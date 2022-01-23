class ApplicationController < ActionController::Base
    helper_method :current_user, :signed_in? # Expose these methods to the views

  private
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def sign_in!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
        #set the session session_token to be equal to the user session_token base_64
    end

    def sign_out!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def require_signed_in!
        redirect_to new_session_url unless signed_in?
    end   
end
