import React from "react";

function VoterListR(props) {
  return (
    <ol>
      {props.voters.map(voter => {
        return (
          <li
            clasName={voter.confirmed ? "completed" : "incompleted"}
            key={voter.id}
          >
            {voter.name} {voter.confirmed ? "[✔]" : "[x]"}
          </li>
        );
      })}
    </ol>
  );
}

export default VoterListR;
