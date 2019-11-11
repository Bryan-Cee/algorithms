import unittest


def get_permutations(string):
    # Generate all permutations of the input string
    if len(string) <= 1:
        return set([string])
    else:
        new_list = []
        for i in range(len(string)):
            first = string[i]
            rest = string[:i] + string[i + 1:]
            for l in get_permutations(rest):
                new_list.append(first + l)
        return set(new_list)


# Tests

class Test(unittest.TestCase):

    def test_empty_string(self):
        actual = get_permutations('')
        expected = set([''])
        self.assertEqual(actual, expected)

    def test_one_character_string(self):
        actual = get_permutations('a')
        expected = set(['a'])
        self.assertEqual(actual, expected)

    def test_two_character_string(self):
        actual = get_permutations('ab')
        expected = set(['ab', 'ba'])
        self.assertEqual(actual, expected)

    def test_three_character_string(self):
        actual = get_permutations('abc')
        expected = set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)


if __name__ == "__main__":
    perms = get_permutations("abc")
    print(perms)
