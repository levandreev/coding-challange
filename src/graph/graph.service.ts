import { Injectable } from '@nestjs/common';

export interface GNode {
  getName(): string;
  getChildren(): GNode[];
}

class MyNode implements GNode {
  constructor(
    private name: string,
    private children: GNode[] = [],
  ) {}

  getName(): string {
    return this.name;
  }

  getChildren(): GNode[] {
    return this.children;
  }
}

@Injectable()
export class GraphService {
  walkGraph(node: GNode): GNode[] {
    const result: GNode[] = [];
    const visited = new Set<string>();

    const traverse = (currentNode: GNode) => {
      if (visited.has(currentNode.getName())) {
        return;
      }

      visited.add(currentNode.getName());
      result.push(currentNode);

      currentNode.getChildren().forEach((child) => traverse(child));
    };

    traverse(node);
    return result;
  }

  paths(node: GNode): GNode[][] {
    if (node.getChildren().length === 0) {
      return [[node]];
    }

    const allPaths: GNode[][] = [];

    for (const child of node.getChildren()) {
      const childPaths = this.paths(child);
      for (const path of childPaths) {
        allPaths.push([node, ...path]);
      }
    }

    return allPaths;
  }

  getSampleWalkGraph(): GNode {
    const nodeC = new MyNode('C');
    const nodeB = new MyNode('B', [nodeC]);
    const nodeA = new MyNode('A', [nodeB, nodeC]);

    return nodeA;
  }

  getWalkGraphNodeNames(): string[] {
    const rootNode = this.getSampleWalkGraph();
    const resultNodes = this.walkGraph(rootNode);
    return resultNodes.map((node) => node.getName());
  }

  getSamplePathsGraph(): GNode {
    const nodeE = new MyNode('E');
    const nodeF = new MyNode('F');
    const nodeG = new MyNode('G');
    const nodeH = new MyNode('H');
    const nodeJ = new MyNode('J');

    const nodeB = new MyNode('B', [nodeE, nodeF]);
    const nodeC = new MyNode('C', [nodeG, nodeH, nodeE]);
    const nodeD = new MyNode('D', [nodeJ]);

    const nodeA = new MyNode('A', [nodeB, nodeC, nodeD]);

    return nodeA;
  }

  getGraphPaths(): string[][] {
    const rootNode = this.getSamplePathsGraph();
    const resultPaths = this.paths(rootNode);
    return resultPaths.map((path) => path.map((node) => node.getName()));
  }
}
