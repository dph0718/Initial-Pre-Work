import os
# import re

# Replaces contents of all .js files in the root folder with "Learned: ... " starter text in JS comment format.


'''
	When making this function more usable, the insert_comment_template_conditional function can be used 
	to conditionally check for parameters,
	and whether a match was found.
	But since I'm using this to quickly write to my own files, 
	I know the format of the file names,
	and so I won't check.
'''


def insert_comment_template():
	# Use local path
	dir_path = os.path.dirname(os.path.realpath(__file__))
	print("The Current Path: "+dir_path)
	# Loop through file names in folder
	for i, filename in enumerate(os.listdir(dir_path)):
		print("Type of file:", type(filename))
		# If it's a JavaScript file,
		if filename.endswith('.js'):
			filename_b = open(filename, 'w')
			print('Ends with .js Type of File.' + str(filename_b))

			# Write the "Learned: " template into the file.
			# CAUTION: It will REPLACE existing content -- it will NOT prepend the data to existing content.
			filename_b.write('/* Learned:\n  - firstwords \n*/')
			print('Successfully wrote to ' + str(filename_b))


insert_comment_template()


'''
def insert_comment_template_conditional(*directory):
	# Check if a directory parameter was provided. Use current directory if not.
	if not directory:
		print("not directory")
		dir_path = os.path.dirname(os.path.realpath(__file__))
	else:
		print('was directory')
		dir_path = directory

	# Loop through files in folder
	for i, filename in enumerate(os.listdir(dir_path)):
		stats = os.stat(filename)
		print(stats.st_size)
		
		# Use Regex to find 1+ consecutive digits followed by a hyphen
		title_num = re.match(r'\d+(?=-)', filename)

		# Convert the matched string to an integer
		num = int(title_num.group())
		print(title_num)
		if filename.endswith(".js") and num > 3:
			filename.write('/* Learned:\n  - firstwords \n*/')
		else:
			print('Nothin found')
'''
