import { Perfil } from 'components/Perfil/Perfil';
// import { Statistics } from 'components/Statistics/statistics';


import Dark from 'components/arrow/arrows';



const styleTest = {
  width:'100%',
  height: '100%',
  margin:'0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 35,
  color: '#010101'
}

export const App = ({data}) => {
  return (
    <div
      style={styleTest}
      > 
      <Dark/>
      <Perfil user={data}/>
      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}
    </div>
  );
};
