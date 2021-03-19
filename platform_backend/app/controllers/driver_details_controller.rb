# frozen_string_literal: true

class DriverDetailsController < ApplicationController
  before_action :set_driver_detail, only: %i[show edit update destroy]

  # GET /driver_details or /driver_details.json
  def index
    @driver_details = DriverDetail.all
  end

  # GET /driver_details/1 or /driver_details/1.json
  def show; end

  # GET /driver_details/new
  def new
    @driver_detail = DriverDetail.new
  end

  # GET /driver_details/1/edit
  def edit; end

  # POST /driver_details or /driver_details.json
  def create
    @driver_detail = DriverDetail.new(driver_detail_params)

    respond_to do |format|
      if @driver_detail.save
        format.html { redirect_to @driver_detail, notice: 'Driver detail was successfully created.' }
        format.json { render :show, status: :created, location: @driver_detail }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @driver_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /driver_details/1 or /driver_details/1.json
  def update
    respond_to do |format|
      if @driver_detail.update(driver_detail_params)
        format.html { redirect_to @driver_detail, notice: 'Driver detail was successfully updated.' }
        format.json { render :show, status: :ok, location: @driver_detail }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @driver_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /driver_details/1 or /driver_details/1.json
  def destroy
    @driver_detail.destroy
    respond_to do |format|
      format.html { redirect_to driver_details_url, notice: 'Driver detail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_driver_detail
    @driver_detail = DriverDetail.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def driver_detail_params
    params.require(:driver_detail).permit(:user_id, :lisence_number, :adhaar_card)
  end
end
