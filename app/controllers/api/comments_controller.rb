class Api::CommentsController < ApplicationController
    before_action :require_signed_in!, only: [:create, :destroy, :update]

    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        # debugger 
        if params[:comment][:body].empty?
            render json: ["comment cannot be empty"], status: 422
            return nil
        end
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save
            render :show
        else
            render json: ["Cannot post comments"], status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: ["Cannot edit comments"], status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.user_id == current_user.id
            @comment.destroy
            render :show
        else
            render json: ["Cannot delete this comment, please try again later"], status: 403
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :video_id)
    end
end
