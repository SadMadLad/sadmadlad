require 'yaml'
require 'json'
require 'byebug'

class YamlJsonifier
  SRC_PATH = '../data'
  DIST_PATH = '../src/assets'

  def initialize(file_name)
    @input_file = "#{SRC_PATH}/#{file_name}.yml"
    @output_file = "#{DIST_PATH}/#{file_name}.json"
  end

  def call
    yaml = YAML.load_file @input_file
    File.write @output_file, yaml.to_json
  end
end

YamlJsonifier.new(ARGV[0]).call
