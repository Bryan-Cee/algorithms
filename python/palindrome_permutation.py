def has_palindrome_permutation(the_string):
    # Check if any permutation of the input is a palindrome
    letters_hash = {key: the_string.count(key) for key in the_string}
    letters_count = list(letters_hash.values())
    length_of_the_string = len(the_string)

    if length_of_the_string % 2 == 0:
        if letters_count.count(2) == length_of_the_string / 2:
            return True
        else:
            return False
    else:
        if letters_count.count(2) == (length_of_the_string - 1) / 2:
            return True
        else:
            return False


has_palindrome_permutation("civic")  # True
