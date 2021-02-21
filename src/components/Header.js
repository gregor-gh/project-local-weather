import HeaderButton from "./HeaderButton"
import HeaderIcon from "./HeaderIcon"
import HeaderText from "./HeaderText"


const Header = ({ headerIcon, headerText, toggleUnit }) => {
  return (
    <div className="header">
      <HeaderIcon headerIcon={headerIcon} />
      <HeaderText headerText={headerText}/>
      <HeaderButton toggleUnit={toggleUnit}/>
    </div>
  )
}

export default Header
