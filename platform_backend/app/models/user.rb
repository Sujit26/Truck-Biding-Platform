class User < ApplicationRecord
	validates :name, presence: true
	validates :phone_number, length: {is: 10}, allow_blank: false
	validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
