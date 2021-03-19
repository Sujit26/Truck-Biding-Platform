# frozen_string_literal: true

json.array! @driver_details, partial: 'driver_details/driver_detail', as: :driver_detail
