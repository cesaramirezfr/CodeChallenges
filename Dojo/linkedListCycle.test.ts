import { describe, expect, it } from 'bun:test';
import { hasCycle } from './linkedListCycle';
import { ListNode } from './linkedListNode';

describe('hasCycle', () => {
  it('should return true', () => {
    const head1 = new ListNode(3);
    const node1 = new ListNode(2);
    head1.next = node1;
    head1.next.next = new ListNode(0);
    head1.next.next.next = new ListNode(-4);
    head1.next.next.next.next = node1;
    
    const head2 = new ListNode(1);
    head2.next = new ListNode(2);
    head2.next.next = head2;

    expect(hasCycle(head1)).toBeTrue();
    expect(hasCycle(head2)).toBeTrue();
  });

  it('should return false', () => {
    const head3 = new ListNode(1);

    const head4 = new ListNode(1);
    head4.next = new ListNode(2);

    expect(hasCycle(head3)).toBeFalse();
    expect(hasCycle(head4)).toBeFalse();
  });
});
