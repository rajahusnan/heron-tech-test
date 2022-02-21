export const Features = (props) => {
  console.log(props)
  return (
    <div id='features' className='text-center'>
       <div className=''>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Flight Operations Hub</h2>
        </div>
     
        <div className='row'>
          {props.data2
            ? props.data2.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>

        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div></div>
  )
}
