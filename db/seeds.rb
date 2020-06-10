# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
Category.destroy_all
User.destroy_all


@user = User.create!({ username: 'admin', email: 'admin@email.com', password: '123456' })

@all = Category.create!(name: 'All')
@free = Category.create!(name: 'Free')
@music = Category.create!(name: 'Music')
@food = Category.create!(name: 'Food & Drink')
@weekend = Category.create!(name: 'This Weekend')
@charity = Category.create!(name: 'Charity & Causes')

Event.create!(
  title: '12th Annual Food Festival',
  hosted_by: 'NYC',
  date: 'July 20th, 2020 7:00PM EST',
  location: 'Central Park',
  price: 'Free',
  img_url: 'https://i.imgur.com/x3bNna2.jpg',
  categories: [@all, @free, @food]
)