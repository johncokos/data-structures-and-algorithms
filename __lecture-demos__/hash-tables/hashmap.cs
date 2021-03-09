using System;
using System.Collections.Generic;


namespace hashtable
{
    class Program
    {
        static void Main(string[] args)
        {
            HashTable ht = new HashTable(14);

            ht.Set("John","Boss");
            ht.Set("Cathy","The Real Boss");
            ht.Set("Zach","Kid 1");
            ht.Set("Allie","Kid 2");
            ht.Set("Rosie","Dog");
            ht.Set("Cat","TA");
            ht.Set("Justin","Student");
            ht.Set("Jason","Student");
            ht.Set("Ben","Student");
            ht.Set("Timea","Student");
            ht.Set("Jen","Student");
            ht.Set("Khalil","Student");
            ht.Set("Michael","Student");
            ht.Set("Ovi","Student");

            ht.Print();
        }
    }

    class Node
    {
        public string Key { get; set; }
        public string Value { get; set; }

        public Node(string key, string val)
        {
            Key = key;
            Value = val;
        }
    }

    class HashTable
    {

        private LinkedList<Node>[] Map { get; set; }

        public HashTable(int size)
        {
            Map = new LinkedList<Node>[size];
        }

        public void Set(string key, string value)
        {
            int hashedkey = Hash(key);

            if (Map[hashedkey] == null)
            {
                Map[hashedkey] = new LinkedList<Node>();
            }

            Map[hashedkey].AddFirst(new Node(key, value));
        }

        public int Hash(string key)
        {
            int hashValue = 0;
            char[] letters = key.ToCharArray();
            for (int i = 0; i < letters.Length; i++)
            {
                hashValue += letters[i];
            }

            Console.Write($"[{key}] Char Codes Add To: {hashValue} ... ");
            hashValue = (hashValue * 599) % Map.Length;

            Console.Write($"Converted To Hash Value: {hashValue}");
            Console.WriteLine();
            return hashValue;


        }

        public void Print()
        {
            for (int i=0; i< Map.Length; i++)
            {
                if( Map[i] != null) {
                    Console.Write($"Bucket: {i}: ");
                    foreach (var item in Map[i])
                    {
                        Console.Write($"{item.Key}: {item.Value} -> ");
                    }
                    Console.Write("null");
                    Console.WriteLine();
                }
            }
        }

    }

}
