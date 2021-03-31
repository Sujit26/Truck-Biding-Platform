# frozen_string_literal: true

class DriverDetail < ApplicationRecord
  belongs_to :user
  # validates :lisence_number, allow_blank: false
  # validates :adhaar_card,  allow_blank: false
  
end
