# frozen_string_literal: true

require 'application_system_test_case'

class DriverDetailsTest < ApplicationSystemTestCase
  setup do
    @driver_detail = driver_details(:one)
  end

  test 'visiting the index' do
    visit driver_details_url
    assert_selector 'h1', text: 'Driver Details'
  end

  test 'creating a Driver detail' do
    visit driver_details_url
    click_on 'New Driver Detail'

    fill_in 'Adhaar card', with: @driver_detail.adhaar_card
    fill_in 'Lisence number', with: @driver_detail.lisence_number
    fill_in 'User', with: @driver_detail.user_id
    click_on 'Create Driver detail'

    assert_text 'Driver detail was successfully created'
    click_on 'Back'
  end

  test 'updating a Driver detail' do
    visit driver_details_url
    click_on 'Edit', match: :first

    fill_in 'Adhaar card', with: @driver_detail.adhaar_card
    fill_in 'Lisence number', with: @driver_detail.lisence_number
    fill_in 'User', with: @driver_detail.user_id
    click_on 'Update Driver detail'

    assert_text 'Driver detail was successfully updated'
    click_on 'Back'
  end

  test 'destroying a Driver detail' do
    visit driver_details_url
    page.accept_confirm do
      click_on 'Destroy', match: :first
    end

    assert_text 'Driver detail was successfully destroyed'
  end
end
