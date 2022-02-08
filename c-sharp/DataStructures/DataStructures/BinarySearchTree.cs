using System;
namespace DataStructures
{

  public class BinarySearchTree<T> : BinaryTree<T> where T : IComparable
  {

    // 1st Call will be: Add(tree.Root, 9)
    public void Add(Node<T> node, T value)
    {

      Node<T> newNode = new Node<T>(value);

      if (Root == null)
      {
        Root = newNode;
        return;
      }

      if (newNode.Value.CompareTo(node.Value) < 0)
      {
        if (node.Left == null) { node.Left = newNode; }
        else { Add(node.Left, value); }
      }
      else if (newNode.Value.CompareTo(node.Value) > 0)
      {
        if (node.Right == null) { node.Right = newNode; }
        else { Add(node.Right, value); }
      }

    }

  }

}
