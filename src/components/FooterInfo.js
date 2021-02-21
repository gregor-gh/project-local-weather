const FooterInfo = ({ infoArray, infoPane }) => {

const info = infoArray.map((el, index) => {
  return (
    <div key={index}>
      {el[0]}
    </div>
  )
})



  return (
    <div className="footerinfo">
      {infoPane && info}
    </div>
  )
}
export default FooterInfo
