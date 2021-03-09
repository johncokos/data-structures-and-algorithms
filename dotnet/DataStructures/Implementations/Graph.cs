using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures
{
  class Vertex<T>
  {
    public T Value { get; set; }
    public Vertex(T value)
    {
      Value = value;
    }
  }

  class Edge<T>
  {
    public int Weight { get; set; }
    public Vertex<T> Vertex { get; set; }
  }

  class Graph<T>
  {
    public Dictionary<Vertex<T>, List<Edge<T>>> AdjacencyList { get; set; }
    private int _size = 0;

    public Graph()
    {
      AdjacencyList = new Dictionary<Vertex<T>, List<Edge<T>>>();
    }

    //Add Node
    public Vertex<T> AddNode(T vertex)
    {
      Vertex<T> node = new Vertex<T>(vertex);
      AdjacencyList.Add(node, new List<Edge<T>>());
      _size++;
      return node;

    }

    // Add Edge
    /// <summary>
    /// Adds an undirected edge between two vertices in a graph.
    /// </summary>
    /// <param name="a">reference to first vertex</param>
    /// <param name="b">reference to second vertex</param>
    /// <param name="weight">value of weight between both vertices</param>
    public void AddUnDirectedEdge(Vertex<T> a, Vertex<T> b, int weight)
    {
      AddDirectedEdge(a, b, weight);
      AddDirectedEdge(b, a, weight);
    }

    /// <summary>
    /// Adds a directed edge between two vertices in a graph. 
    /// </summary>
    /// <param name="a">reference to first vertex</param>
    /// <param name="b">reference to second vertex</param>
    /// <param name="weight">value of weight between both vertices</param>
    public void AddDirectedEdge(Vertex<T> a, Vertex<T> b, int weight)
    {
      AdjacencyList[a].Add(
      new Edge<T>
      {
        Weight = weight,
        Vertex = b,
      });

    }

    public List<Edge<T>> GetNeighbors(Vertex<T> value)
    {
      return AdjacencyList[value];
    }

    public Vertex<T> GetVertex(T value)
    {
      foreach (var vertex in AdjacencyList)
      {
        if (vertex.Key.Value.Equals(value))
        {
          return vertex.Key;
        }

      }

      return null;
    }

    public List<Vertex<T>> GetAllVertices()
    {
      List<Vertex<T>> vertices = new List<Vertex<T>>();
      foreach (var vertex in AdjacencyList)
      {
        vertices.Add(vertex.Key);
      }

      return vertices;
    }

    public int Size()
    {
      return _size;
    }

    public void Print()
    {
      foreach (var item in AdjacencyList)
      {
        System.Console.Write($"Vertex {item.Key.Value} ->");

        foreach (var edge in item.Value)
        {
          Console.Write($"{edge.Vertex.Value},{edge.Weight} ->");
        }
        Console.WriteLine($"null");
      }
    }
  }
}
