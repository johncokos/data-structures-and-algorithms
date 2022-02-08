using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures
{
  public class Queue<T>
  {

    public Node<T> Front { get; set; }
    public Node<T> Back { get; set; }

    public bool Peek()
    {
      return Front != null;
    }

    public void Enqueue(T value)
    {
      Node<T> node = new Node<T>(value);
      if (Front == null)
      {
        Front = node;
        Back = node;
      } 
      else 
      {
        Back.Next = node;
        Back = node;
      }
    }

    public Node<T> Dequeue()
    {
      // find the top
      Node<T> currentFront = Front;

      // set the next one down to be the new top
      Front = Front.Next;

      // return what used to be the top
      return currentFront;

    }
  }
}
