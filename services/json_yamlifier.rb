# frozen_string_literal: true

require 'json'
require 'yaml'

# Converts JSON file to a YAML one. Takes in two arguments.
class JsonYamlifier
  attr_reader :input_file_path, :output_file_path

  def initialize
    @input_file_path = ARGV[0]
    @output_file_path = ARGV[1]
  end

  def call
    File.open(output_file_path, 'w') do |file|
      json = JSON.parse File.open(input_file_path, 'r').read
      file.write json.to_yaml
    end
  end
end

JsonYamlifier.new.call
