using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures
{

  class HashMap
  {

    private LinkedList<KeyValuePair<string, string>>[] Map { get; set; }

    public HashMap(int size)
    {
      Map = new LinkedList<KeyValuePair<string, string>>[size];
    }

    public int Hash(string key)
    {
      int hashValue = 0;

      char[] letters = key.ToCharArray();
      for (int i = 0; i < letters.Length; i++)
      {
        hashValue += letters[i];
      }

      hashValue = (hashValue * 599) % Map.Length;

      return hashValue;
    }

    public void Set(string key, string value)
    {
      int hashkey = Hash(key);

      if (Map[hashkey] == null)
      {
        Map[hashkey] = new LinkedList<KeyValuePair<string, string>>();
      }

      KeyValuePair<string, string> entry = new KeyValuePair<string, string>(key, value);
      Map[hashkey].Insert(entry);

    }

    // Remove()
    public string Remove(string key)
    {
      int hashkey = Hash(key);

      if (Map[hashkey] != null)
      {
        Node<KeyValuePair<string, string>> current = Map[hashkey].Head;
        while (current != null)
        {
          if (current.Value.Key == key)
          {
            Map[hashkey].Remove(current);
            break;
          }
          current = current.Next;
        }
      }

      return null;

    }


    // Contains() 
    public bool Contains(string key)
    {
      int hashkey = Hash(key);

      if (Map[hashkey] != null)
      {
        Node<KeyValuePair<string, string>> current = Map[hashkey].Head;
        while (current != null)
        {
          if (current.Value.Key == key) { return true; }
          current = current.Next;
        }
      }

      return false;

    }

    // Get()
    public string Get(string key)
    {
      int hashkey = Hash(key);

      if (Map[hashkey] != null)
      {
        Node<KeyValuePair<string, string>> current = Map[hashkey].Head;
        while (current != null)
        {
          if (current.Value.Key == key) { return current.Value.Value; }
          current = current.Next;
        }
      }

      return null;

    }



    public void Print()
    {
      for (int i = 0; i < Map.Length; i++)
      {
        if (Map[i] != null)
        {
          Console.Write($"Bucket: {i}: ");

          Node<KeyValuePair<string, string>> current = Map[i].Head;
          while (current != null)
          {
            Console.Write($"[{current.Value.Key}:{current.Value.Value}] => ");
            current = current.Next;
          }

          Console.WriteLine();
        }
      }
    }

  }
}
