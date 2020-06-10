class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :hosted_by
      t.string :date
      t.string :location
      t.string :price

      t.timestamps
    end
  end
end
