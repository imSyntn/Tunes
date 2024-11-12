const Loader = ({black = false} : any) => {
  return (
    <div className='loaderWrapper'>
        <div className={`loader ${black ? 'BlackClass' : ''}`}></div>
    </div>
  )
}

export default Loader