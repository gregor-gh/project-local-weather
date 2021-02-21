import TempText from "./TempText";
import TempDegs from "./TempDegs"

const Temp = ({ tempdegs, temptext, unitCelcius }) => {
  return (
    <div>
      <TempText temptext={temptext} />
      <TempDegs tempdegs={tempdegs}
        unitCelcius={unitCelcius} />
    </div>
  )
}

export default Temp
