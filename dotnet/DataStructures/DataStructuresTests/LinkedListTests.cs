using System;
using Xunit;

using DataStructures;

namespace DataStructuresTests
{
  public class LinkedListTests
  {
    [Fact]
    public void Linked_List_Created_With_A_Value_Has_A_Head()
    {
      int value = 2;
      LinkedList testList = new LinkedList(value);
      Assert.Equal(value, testList.Head.Value);
    }

    [Fact]
    public void After_Insert_New_Node_Is_The_Head()
    {
      LinkedList testList = new LinkedList(5);
      // H(5) => NULL

      testList.Insert(10);
      // H(10) -> 5 -> NULL

      Assert.Equal(10, testList.Head.Value);
    }

    [Fact]
    public void After_Insert_New_Head_Next_Is_The_Old_Head()
    {
      LinkedList testList = new LinkedList(5);
      Node oldHead = testList.Head;

      testList.Insert(10);

      Assert.Equal(oldHead, testList.Head.Next);
    }
  }
}
