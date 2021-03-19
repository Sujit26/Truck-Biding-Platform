# frozen_string_literal: true

json.extract! driver_detail, :id, :user_id, :lisence_number, :adhaar_card, :created_at, :updated_at
json.url driver_detail_url(driver_detail, format: :json)
