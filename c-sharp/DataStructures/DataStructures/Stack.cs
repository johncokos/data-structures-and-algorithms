using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures
{
  public class Stack<T>
  {
    public Node<T> Top { get; set; }

    public bool Peek()
    {
      return Top != null;
    }

    public void Push(T value)
    {
      Node<T> node = new Node<T>(value);
      node.Next = Top;
      Top = node;
    }

    public Node<T> Pop()
    {
      // find the Top
      Node<T> currentTop = Top;

      // set the next one down to be the new Top
      Top = currentTop.Next;

      // return what used to be the Top
      return currentTop;

    }
  }
}
