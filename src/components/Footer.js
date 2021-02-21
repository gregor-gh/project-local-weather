import FooterButton from "./FooterButton"
import FooterInfo from "./FooterInfo"

const Footer = ({ infoArray, infoPane, toggleInfo }) => {
  return (
    <>
      <FooterButton 
        toggleInfo={toggleInfo}
        infoPane={infoPane}
      />
      <FooterInfo 
        infoArray={infoArray}
        infoPane={infoPane}
      />
    </>
  )
}

export default Footer
