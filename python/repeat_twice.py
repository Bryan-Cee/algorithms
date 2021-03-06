import unittest


def find_repeat2(numbers):
    # time complexity O(n)
    # space complexity O(n)
    numbers_seen = set()
    for number in numbers:
        if number in numbers_seen:
            return number
        else:
            numbers_seen.add(number)
    
    
    raise Exception('no duplicate!')


def find_repeat(numbers):
    # time complexity O(n^2)
    # space complexity O(1)
    for number in range(1, len(numbers)):
        number_seen = False
        for i in numbers:
            if i == number:
                if number_seen:
                    return number
                else:
                    number_seen = True
    
    raise Exception('no duplicate!')















# Tests

class Test(unittest.TestCase):

    def test_just_the_repeated_number(self):
        actual = find_repeat([1, 1])
        expected = 1
        self.assertEqual(actual, expected)

    def test_short_list(self):
        actual = find_repeat([1, 2, 3, 2])
        expected = 2
        self.assertEqual(actual, expected)

    def test_medium_list(self):
        actual = find_repeat([1, 2, 5, 5, 5, 5])
        expected = 5
        self.assertEqual(actual, expected)

    def test_long_list(self):
        actual = find_repeat([4, 1, 4, 8, 3, 2, 7, 6, 5])
        expected = 4
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)