import { Perfil } from 'components/Perfil/Perfil';
// import Statistics from 'components/Statistics/statistics';
// import { Statistics } from 'components/Statistics/statistics';
import TableState from 'components/Statistics/Statistics.jsx';
import FriendsList from 'components/FriendsList/FriendsList.jsx';
import stats from 'data/stats.json';
import friends from 'data/friends.json';
import user from 'data/user.json';
import transactions from 'data/transactions.json';
// import stats from 'data/stats.json';

import Dark from 'components/arrow/arrows';
// import staticStats from "../data/staticStats.json";
// import user from "../data/user.json";


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
  margin:'0 auto',
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
      
        <div style={section} name="Profile" id="Profile"> 
          <Perfil user={user}/>
        </div>

        <div style={section} name="statistics" id="statistics">
          <TableState stats={stats}/> 
        </div>
        
        <div style={section} >
          <FriendsList friends={friends}/> 
        </div>
        
        <div style={section} >
          <transactionsTable items={transactions}/> 
        </div>
      
      </div>
    </div>

    </>
  );
};
