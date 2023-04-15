import './UnderConstruction.style.css'

const UnderConstructionPage = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='title-wrapper'>
          <h1 className='title'> Page under construction 👀 </h1>
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
        <img className='img' src='https://media.tenor.com/bCfpwMjfAi0AAAAC/cat-typing.gif' />
      </div>
    </div>
  )
}

export default UnderConstructionPage