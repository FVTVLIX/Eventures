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
  categories: [@all, @free, @food],
  user: @user
)

Event.create!(
  title: '4th of July Fest',
  hosted_by: 'Party People',
  date: 'July 4th, 2020 4:00PM EST',
  location: 'Central Park',
  price: 'Free',
  img_url: 'https://i.imgur.com/xafDgEA.jpg',
  categories: [@all, @free, @food, @music],
  user: @user
)

Event.create!(
  title: 'Backyard BBQ Party',
  hosted_by: 'Dre',
  date: 'July 10th, 2020 7:00PM EST',
  location: 'My Place',
  price: '$1.00',
  img_url: 'https://i.imgur.com/b2COSYO.jpg',
  categories: [@all, @food, @music, @weekend],
  user: @user
)

Event.create!(
  title: 'Charity Poker Night',
  hosted_by: 'Elon Musk',
  date: 'July 12th, 2020 11:00PM EST',
  location: 'His House',
  price: '$1,000,000.00',
  img_url: 'https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80',
  categories: [@all, @food, @weekend, @charity],
  user: @user
)

Event.create!(
  title: 'Pool Party',
  hosted_by: 'Pool Party People',
  date: 'August 6th, 2020 11:00AM EST',
  location: 'Brooklyn',
  price: 'Free',
  img_url: 'https://i.imgur.com/CSBfEGZ.jpg',
  categories: [@all, @free, @food, @music],
  user: @user
)

Event.create!(
  title: '4th Ann. Beer Fest',
  hosted_by: 'Miller Coors',
  date: 'July 1st, 2020 1:00PM EST',
  location: 'Manhattan',
  price: '$20.00',
  img_url: 'https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  categories: [@all, @food, @music, @weekend, @charity],
  user: @user
)