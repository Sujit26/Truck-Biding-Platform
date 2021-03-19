# frozen_string_literal: true

class CreateDriverDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :driver_details do |t|
      t.references :user, null: false, foreign_key: true
      t.string :lisence_number
      t.string :adhaar_card

      t.timestamps
    end
  end
end
