import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name, hp, sprites} = pokemon;
  const [frontView, setFront] = useState(true);

  function spriteClick(){
    console.log(frontView);
    setFront(!frontView);
  }

  return (
    <Card>
      <div onClick={spriteClick}>
        <div className="image">
          {frontView? <img src={sprites.front} alt="oh no" />: <img src={sprites.back} alt="oh no" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
