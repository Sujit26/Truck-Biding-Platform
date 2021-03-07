json.extract! user, :id, :name, :email, :phone_number, :is_verified, :user_type, :created_at, :updated_at
json.url user_url(user, format: :json)
