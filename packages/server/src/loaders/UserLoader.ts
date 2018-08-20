import { User } from "./../models/User";
import DataLoader = require("dataloader");

type BatchUser = (ids: string[]) => Promise<User[]>;

/*
    They can't be not ordered
    [1, 2, ...]
    users = [{id: 2, name:'bob'}, {id: 1, name: 'tom'}]
*/

const batchUsers: BatchUser = async ids => {
  // 1 sql call to get all users
  const users = await User.findByIds(ids);

  // we order them because dataloader need them to be ordered
  const userMap: { [key: string]: User } = {};
  users.forEach(u => {
    userMap[u.id] = u;
  });
  return ids.map(id => userMap[id]);
};

export const userLoader = () => new DataLoader<string, User>(batchUsers);
