import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"

const FooterButton = ({ toggleInfo, infoPane }) => {
  return (<>
      <button 
        className="footerbutton"
        onClick={toggleInfo}>
        {infoPane? 
          <FontAwesomeIcon icon={faArrowUp}/>:
          <FontAwesomeIcon icon={faArrowDown}/>}
      </button>
      
      </>
  )
}

export default FooterButton
