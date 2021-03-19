# frozen_string_literal: true

require 'test_helper'

class DriverDetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @driver_detail = driver_details(:one)
  end

  test 'should get index' do
    get driver_details_url
    assert_response :success
  end

  test 'should get new' do
    get new_driver_detail_url
    assert_response :success
  end

  test 'should create driver_detail' do
    assert_difference('DriverDetail.count') do
      post driver_details_url,
           params: { driver_detail: { adhaar_card: @driver_detail.adhaar_card, lisence_number: @driver_detail.lisence_number,
                                      user_id: @driver_detail.user_id } }
    end

    assert_redirected_to driver_detail_url(DriverDetail.last)
  end

  test 'should show driver_detail' do
    get driver_detail_url(@driver_detail)
    assert_response :success
  end

  test 'should get edit' do
    get edit_driver_detail_url(@driver_detail)
    assert_response :success
  end

  test 'should update driver_detail' do
    patch driver_detail_url(@driver_detail),
          params: { driver_detail: { adhaar_card: @driver_detail.adhaar_card, lisence_number: @driver_detail.lisence_number,
                                     user_id: @driver_detail.user_id } }
    assert_redirected_to driver_detail_url(@driver_detail)
  end

  test 'should destroy driver_detail' do
    assert_difference('DriverDetail.count', -1) do
      delete driver_detail_url(@driver_detail)
    end

    assert_redirected_to driver_details_url
  end
end
