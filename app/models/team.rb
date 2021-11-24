class Team < ApplicationRecord
  has_and_belongs_to_many :profiles
  has_one :profile, foreign_key: :captain_id
end
