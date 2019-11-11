# Definition for singly-linked list.


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def reverse_list(self, head):
        prev, curr = None, head
        while curr:
            curr.next, prev, curr = prev, curr, curr.next
        return prev


node = ListNode(5)
node.next = ListNode(4)
node.next.next = ListNode(3)
node.next.next.next = ListNode(2)

result = Solution()
l = result.reverse_list(node)

print(l.val)
print(l.next.val)
print(l.next.next.val)
print(l.next.next.next.val)
