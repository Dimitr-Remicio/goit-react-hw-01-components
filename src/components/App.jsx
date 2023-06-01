import { Perfil } from 'components/Perfil/Perfil';

import FriendsList from 'components/FriendsList/FriendsList';
import TransactionsTable from 'components/TransactionHistory/TransactionHistory';
import Dark from 'components/arrow/arrows';
import Statistics  from 'components/Statistics/Statistics';

import stats from 'data/stats.json';
import friends from 'data/friends.json';
import user from 'data/user.json';
import transactions from 'data/transactions.json';



const styleTest = {
  width:'100%',
  height: '100%',
  margin:'0 auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 35,
  color: '#010101',
}

const section = {
  width:'100vw',
  height: '100vh',
  margin:' 0 auto',
  marginBottom:'100px',
  paddingRight: '100px',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const content = {
  width:'100%',
  height: 'auto',
  margin:'0 auto',
  top: '0%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  
}

export default function App() {
  
  return (
    <>
    <div style={styleTest}> 
      <Dark/>
      <div style={content}> 
      
        <div style={section} name="profile" id='profile'> 
          <Perfil user={user}/>
        </div>

        <div style={section} name="states" id='states'>
          <Statistics stats={stats}/> 
        </div>
        
        <div style={section} name="friends" id='friends'>
          <FriendsList friends={friends}/> 
        </div>
        
        <div style={section} name="tabtransaction" id='tabtransaction'>
          <TransactionsTable items={transactions}/> 
        </div>

        
      </div>
    </div>

    </>
  );
};
