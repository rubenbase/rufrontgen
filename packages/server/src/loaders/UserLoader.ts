import { User } from "./../models/User";
import DataLoader = require("dataloader");

type BatchUser = (ids: string[]) => Promise<User[]>;

// [1, 2, ...]
// users = [{id: 2, name:'bob'}, {id: 1, name: 'tom'}]
const batchUsers: BatchUser = async ids => {
  const users = await User.findByIds(ids);

  const userMap: { [key: string]: User } = {};
  users.forEach(u => {
    userMap[u.id] = u;
  });
  return ids.map(id => userMap[id]);
};

export const userLoader = () => new DataLoader<string, User>(batchUsers);
