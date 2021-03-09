using System;
using System.Collections.Generic;

namespace HashTableDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            
            HashTable ht = new HashTable(1024);
            
            ht.Set("John","Husband");
            ht.Set("Cathy","Boss");
            ht.Set("Amanda","The Real Boss");
            ht.Set("Allie","Kid");
            ht.Set("Zach","Kid");
            ht.Set("Rosie","Dog");
            ht.Set("Justin","Student");
            ht.Set("Demi","Dog");
            ht.Set("Ovi","Student");
            ht.Set("Ben","Student");
            ht.Set("Khalil","Student");
            ht.Set("Michael","Student");
            ht.Set("Timea","Student");
            ht.Set("Jason","Student");

            ht.Print();
        }
    }

    class Node
    {
        public string Key { get; set; }
        public string Value { get; set; }

        public Node(string key, string value)
        {
            Key = key;
            Value = value;
        }
    }

    class HashTable
    {
        
        private LinkedList<Node>[] Map { get; set; }

        public HashTable(int size)
        {
            Map = new LinkedList<Node>[size];
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
                Map[hashkey] = new LinkedList<Node>();
            }

            Map[hashkey].AddFirst(new Node(key, value));

        }
        
        // Contains() 
        
        // Get()
        
        // Remove()
        
        

        public void Print()
        {
            for (int i = 0; i < Map.Length; i++)
            {
                if (Map[i] != null)
                {
                    Console.Write($"Bucket: {i}: ");
                    foreach (var item in Map[i])
                    {
                        Console.Write($"{item.Key}:{item.Value} -> ");
                    }
                    Console.Write("null" );
                    Console.WriteLine();
                }
            }
        }
    }
}
