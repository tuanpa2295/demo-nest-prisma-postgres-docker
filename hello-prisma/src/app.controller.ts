import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { User as UserModel, Role as RoleModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly userService: UserService,
    private readonly roleService: RoleService) {}

  // Default hello world

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Get a role by ID

  @Get('role/:id')
  async getRoleById(@Param('id') id: string): Promise<RoleModel> {
    return this.roleService.role({ id: Number(id) });
  }

  // Search roles

  @Get('filtered-roles/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<RoleModel[]> {
    return this.roleService.roles({
      where: {
        OR: [
          {
            title: { contains: searchString },
          }
        ],
      },
    });
  }

  // Get all roles

  @Get('roles')
  async allRoles(): Promise<RoleModel[]> {
    
    return this.roleService.roles({});
  }

  // Create role

  @Post('role')
  async createRole(
    @Body() roleData: { title: string; },
  ): Promise<RoleModel> {
    const { title } = roleData;
    
    return this.roleService.createRole({
      title
    });
  }

  // Create user

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; roleId: Number},
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  // Get all users

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  // Delete user

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {

    return this.userService.deleteUser({
        id: Number(id)
    });
  }

  // Update user data

  @Put('user/:id')
  async updateUser(@Param('id') id: string, @Body() userData: {name: string; roleId: Number}): Promise<UserModel> {

    const { roleId, name } = userData;

    return this.userService.updateUser({
      data: userData,
      where: { id: Number(id) },
    });
  }

  // Update role

  @Put('role/:id')
  async updateRole(@Param('id') id: string, @Body() roleData: {title: string}): Promise<RoleModel> {

    const { title } = roleData;

    return this.roleService.updateRole({
      where: { id: Number(id) },
      data: { title },
    });
  }

  // Delete role

  @Delete('role/:id')
  async deleteRole(@Param('id') id: string): Promise<RoleModel> {
    return this.roleService.deleteRole({ id: Number(id) });
  }
}
