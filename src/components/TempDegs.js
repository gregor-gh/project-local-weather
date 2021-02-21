const TempDegs = ({ tempdegs, unitCelcius }) => {
  return (
    <div className="tempdegs">
      { //  if ... then just print
        tempdegs==="..."?
        tempdegs:
        // else check if it's celcius/farenheit and convert as necessary
          unitCelcius? Math.floor(tempdegs):Math.floor((Number(tempdegs)*9/5)+32) 
      }º{ // change unit according to var
        unitCelcius? "C":"F"
      }
    </div>
  )
}

export default TempDegs
