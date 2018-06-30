import React from "react";

function VoterList(props) {
  return (
    <ul class="voterlist">
      {props.voters.map((voter, i) => (
        <li key={voter.id}>
          <input
            type="checkbox"
            name={i}
            checked={voter.confirmed}
            onChange={event => props.handleInputChange(event)}
          />{" "}
          {voter.name}
        </li>
      ))}
    </ul>
  );
}

export default VoterList;
