import ParticlesBg from "particles-bg";

export const Header = (props) => {

  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-12 intro-text'>
              
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
            <div class="row text-center">
    <div class="col-md-4">
      <span className="mx-auto">
      <img src="img/header/plane.png" class="img-circle" width="150" height="150"></img>
      </span>
    <h2>
                  {props.data ? props.data.title1 : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.contenttitle1 : 'Loading'}</p>
    </div>
    <div class="col-md-4">
    <img src="img/header/town.png" class="img-circle" width="150" height="150"></img>
    <h2>
                  {props.data ? props.data.title2 : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.contenttitle2 : 'Loading'}</p>
    </div>
    <div class="col-md-4">
    <img src="img/header/lock.png" class="img-circle" width="150" height="150"></img>
    <h2>
                  {props.data ? props.data.title3 : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.contenttitle3 : 'Loading'}</p>
    </div>
  </div>
          </div>
        </div>
      </div>
    </header>
  )
}
