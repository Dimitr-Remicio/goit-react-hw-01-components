export const App = () => {
  return (
    <>
    <div 
      style={{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width:'auto',
        height:'200px',
        marginBottom:'20px',
        borderRadius:'30px',
        boxShadow: '0px 0px 10px 1px #232124',
        backgroundImage:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png)',
        backgroundSize:'cover',
      }} />
    
    <div
      className="title"
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#ebeced'
      }}
    > React homework template
    </div>
    </>
    
  );
  
};

export const Text = () => {
  return (
    <div className="text"
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#6ADAF8'
      }}
    >
      se ha deployado correctamente.....
    </div>
    
  );
  
};


