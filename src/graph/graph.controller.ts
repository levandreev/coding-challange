import { Controller, Get } from '@nestjs/common';
import { GraphService } from './graph.service';

@Controller('graph')
export class GraphController {
  constructor(private readonly graphService: GraphService) {}

  @Get('walk')
  getGraph(): string[] {
    return this.graphService.getWalkGraphNodeNames();
  }

  @Get('paths')
  getPaths(): string[][] {
    return this.graphService.getGraphPaths();
  }
}
