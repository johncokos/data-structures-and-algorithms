using System;
using System.Collections.Generic;

namespace DataStructures
{
  class Program
  {
    static void Main(string[] args)
    {
      LinkedListFun();
      StackFun();
      QueueFun();
      HashMapFun();
    }

    static void LinkedListFun()
    {
      LinkedList<int> myNumbers = new LinkedList<int>(1);
      myNumbers.Insert(2);
      myNumbers.Insert(3);
      myNumbers.Insert(4);
      myNumbers.Insert(5);
      myNumbers.Insert(6);
      myNumbers.Insert(7);
      myNumbers.Insert(8);

      Console.WriteLine("LINKED LIST (numbers)");
      myNumbers.Print();
      myNumbers.PrintR(myNumbers.Head);

      LinkedList<string> myFamily = new LinkedList<string>();
      myFamily.Insert("John");
      myFamily.Insert("Cathy");
      myFamily.Insert("Zach");
      myFamily.Insert("Allie");
      Console.WriteLine("LINKED LIST (family)");
      myFamily.Print();
    }

    static void StackFun()
    {
      Stack<string> myFamily = new Stack<string>();
      myFamily.Push("John");
      myFamily.Push("Cathy");
      myFamily.Push("Zach");
      myFamily.Push("Allie");

      Console.WriteLine("STACK");
      while (myFamily.Peek())
      {
        Node<string> person = myFamily.Pop();
        Console.WriteLine($"POP: {person.Value}");
      }

    }

    static void QueueFun()
    {
      Queue<string> myFamily = new Queue<string>();
      myFamily.Enqueue("John");
      myFamily.Enqueue("Cathy");
      myFamily.Enqueue("Zach");
      myFamily.Enqueue("Allie");

      Console.WriteLine("QUEUE");
      while (myFamily.Peek())
      {
        Node<string> person = myFamily.Dequeue();
        Console.WriteLine($"DQ: {person.Value}");
      }

    }

    static void HashMapFun()
    {
      HashMap hm = new HashMap(6);

      hm.Set("John", "Husband");
      hm.Set("Cathy", "Boss");
      hm.Set("Amanda", "The Real Boss");
      hm.Set("Allie", "Kid");
      hm.Set("Zach", "Kid");
      hm.Set("Rosie", "Dog");
      hm.Set("Justin", "Student");
      hm.Set("Demi", "Dog");
      hm.Set("Ovi", "Student");
      hm.Set("Ben", "Student");
      hm.Set("Khalil", "Student");
      hm.Set("Michael", "Student");
      hm.Set("Timea", "Student");
      hm.Set("Jason", "Student");

      hm.Print();

      Console.WriteLine($"Zach? {hm.Contains("Zach")}");
      Console.WriteLine($"Fred? {hm.Contains("Fred")}");

      Console.WriteLine($"Zach? {hm.Get("Zach")}");
      Console.WriteLine($"Amanda? {hm.Get("Amanda")}");
      Console.WriteLine($"Fred? {hm.Get("Fred")}");


    }
  }
}
