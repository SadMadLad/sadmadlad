# frozen_string_literal: true

require 'json'

# Class to convert long code snippets or text to single line string to store in JSON.
class CodeSnippetJsonifier
  attr_reader :path_to_file, :code

  def initialize(path_to_file)
    @path_to_file = path_to_file
    @code = File.open(path_to_file, 'r').read.to_json
  end

  def call
    File.open('output.txt', 'w') { |file| file.write(code) }
  end
end

CodeSnippetJsonifier.new('CodeFile').call
