import { UserService } from '../user.service';

describe('UserService', () => {
  describe('getUser', () => {
    it('should return the correct user if it exists', () => {
      const userService = new UserService();
      let userFound = userService.getUser('1');
      expect(userFound).toMatchObject({
        email: 'john@doe.com',
        name: 'John Doe',
        id: '1',
        age: 25,
      });
      userFound = userService.getUser('2');
      expect(userFound).toMatchObject({
        email: 'mosiah@doe.com',
        name: 'Mosiah Azuaje',
        id: '2',
      });
      userFound = userService.getUser('3');
      expect(userFound).toMatchObject({
        email: 'lucas@doe.com',
        name: 'Lucas Flores',
        id: '3',
        age: 28,
      });
    });

    it('should return null when user not found', () => {
      const userService = new UserService();
      const userFound = userService.getUser('10');
      expect(userFound).toBeNull();
    });
  });
  describe('listUsers', () => {
    it('should return the list with limit properly applied', () => {
      const userService = new UserService();
      const list = userService.listUsers(2);

      expect(list.length).toEqual(2);

      const firstItem = list[0];
      expect(firstItem).toMatchObject({
        email: 'john@doe.com',
        name: 'John Doe',
        id: '1',
        age: 25,
      });

      const secondItem = list[1];
      expect(secondItem).toMatchObject({
        email: 'mosiah@doe.com',
        name: 'Mosiah Azuaje',
        id: '2',
      });
    });

    it('should return an empty array if limit is equal 0', () => {
      const userService = new UserService();
      const list = userService.listUsers(0);

      expect(list.length).toEqual(0);
    });
  });
});
