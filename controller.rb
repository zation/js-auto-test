require 'sinatra'

set :public_folder, File.dirname(__FILE__)

get '/jquery' do
  redirect('/todo/jquery/index.html')
end

get '/backbone' do
  redirect('/todo/backbone/index.html')
end

post '/task' do
  return 'success'
end

get '*' do |path|
  File.read(path)
end