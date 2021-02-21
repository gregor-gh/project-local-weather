const HeaderButton = ({ toggleUnit }) => {
  return (
    <button className="headerbutton"
        onClick={toggleUnit}>
          ºC/ºF
    </button>
  )
}

export default HeaderButton
