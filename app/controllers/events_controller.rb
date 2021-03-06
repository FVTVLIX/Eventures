class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]


  # GET /events
  def index
    @events = Event.all

    render json: @events, include: :categories
  end

  # GET /events/1
  def show
    render json: @event, include: :categories
  end

  # POST /events
  def create
    new_params = event_params

    new_params[:categories] = new_params[:categories].map do |cat|
      Category.find(cat)
    end
    
    @event = Event.new(new_params)
    @event.user = @current_user

    if @event.save
      render json: @event, include: :categories, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event, include: :categories
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  def event_to_category
    @category = Category.find(params[:category_id])
    @event = Event.find(params[:event_id])

    @category.events.push(@event)
    render json: @event, include: :categories
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def event_params
      params.require(:event).permit(:title, :hosted_by, :date, :location, :price, :img_url, :categories => [] )
    end
end
