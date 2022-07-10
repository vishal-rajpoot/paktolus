import React, { useState } from 'react'
import './Teams.css'



const Teams = ({onClose, val}) => {

    const [player , setPlayer] = useState( {
        fname: '', lname: '', category: '', captain: '', ViceCaptain: ''
    });

    const handleinputs = (event) => {
        // console.log(event);

        let name = event.target.name
        let value = event.target.value

        setPlayer( { ...player , [name]: value})

    }
    
    const handleData = (event) => {
        event.preventDefault()
        alert(`${player.fname} ,  ${player.lname},  ${player.category} ${player.captain}  ${player.ViceCaptain}  has been added to the team`)
    }

    return(
        <div className='Teams'>
            <button className="btn-close Closebtn" onClick={onClose}/>
            <h2>Enter the player Details</h2>
            <form onSubmit={handleData}>
            <input type="text" placeholder='Player First Name' name = 'fname' className='input' value = {player.fname} onChange={ handleinputs}/>
            <input type= 'text' placeholder='Player Last Name' name = 'lname' className='input' value = {player.lname} onChange={ handleinputs}/>
            <div>
            Category - <select id="characterstics" name = 'category' value = {player.category} onChange={ handleinputs}>
                            <option value="Batsman" defaultChecked>Batsman</option>
                            <option value="Bowler">Bowler</option>
                            <option value="All-rounder">All-rounder</option>
                            <option value="Wicket keeper">Wicket keeper</option>
                        </select>
            </div>
            <div>
                <input type="checkbox" id="Captain" name="Captain" className='checkbox' value = {false} onChange={handleinputs}/>
                <label htmlFor="Captain">Captain</label>
                <br/>
                <input type="checkbox" id="Vice-Captain" name="Vice-Captain" value={true} className='checkbox' onChange={ handleinputs}/>
                <label htmlFor="Vice-Captain">Vice-Captain</label>
            </div>
            <button type='submit' className='add-btn'>Add Player</button>
            </form>

        </div>
    )
}

export default Teams