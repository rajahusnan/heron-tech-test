export const Mutliagen = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
        <div className='col-xs-12 col-md-6'>
            <div className='about-text'>

              
              <h2>MARS – Multi-Agent Routing & Scheduling System</h2>
        
              <div className='list-style'>
                <div className='col-lg-12 col-sm-12 col-xs-12'>
                <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                  
                </div>
           
              </div>
             
        </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/feature/startegic.png' className='img-responsive border-img-shadwow2' alt='' />{' '}
          </div>
      
        </div>
      </div>
    </div>
  )
}
