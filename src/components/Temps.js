import Temp from "./Temp"

const Temps = ({ tempObj, unitCelcius }) => {
  return (
    <div className="temps">
      <Temp temptext={"current"} tempdegs={tempObj.temp} unitCelcius={unitCelcius}/>
      <Temp temptext={"min"} tempdegs={tempObj.temp_min} unitCelcius={unitCelcius}/>
      <Temp temptext={"max"} tempdegs={tempObj.temp_max} unitCelcius={unitCelcius}/>
    </div>
  )
}

export default Temps
