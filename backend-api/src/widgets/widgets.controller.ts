import { Controller, Get, Res, Param, Query, Post, Body } from '@nestjs/common';

@Controller('widgets')
export class WidgetsController {

  @Post(':param')
  async create(@Body() req: any, @Res() res: any): Promise<string> {
    console.log(req)
    return res.send('This action adds a new widget');
  }

  @Get(':param')
  async getWidget(@Param() param: any, @Query() queryParams: any, @Res() res: any): Promise<string> {
    console.log('requested')
    return res.sendFile('main-es2015.js', { root: '../ae-app-externals/dist/ae-app' });
  }
}
