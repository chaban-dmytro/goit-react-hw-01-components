import { Profile } from './profile/Profile';
import { Statistic } from './statistic/Statistic';
import { FriendsList } from './friend_list/FriendList';
import { TransactionHistory } from './transaction_history/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  )
};


