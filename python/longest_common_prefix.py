from typing import List


class Solution:
    def longest_common_prefix(self, strs: List[str]) -> str:
        prefix = strs[0]
        for i in range(len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[:len(prefix) - 1]
        return prefix


if __name__ == "__main__":
    string = Solution()

    print(string.longest_common_prefix(["flower", "flow", "flight"]))
