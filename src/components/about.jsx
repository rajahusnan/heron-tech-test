export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about/aboutgroupimage.png' className='img-responsive border-img-shadwow' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>

              
              <h2>The Need for UAS Traffic Management (UTM)</h2>
              <h3>Increasing Demand for UA</h3>
              <h4>Market demand for UA is continuously
growing indicated by</h4>
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
             
              <h3>The Challenges</h3>
              <div className='list-style'>
                <div className='col-lg-12 col-sm-12 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
           
              </div>
             
            
              <h3>Increasing Complexity and Type of Operations</h3>
              <p>UA community trending towards operations that are more complex (beyond visual, multi-fleet and autonomous) for realization of greater economic value, productivity gains and environmental benefits. Development of Urban Air Mobility (UAM) and Advanced Air Mobility (AAM)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
