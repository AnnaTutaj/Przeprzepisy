import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Segment, Popup } from "semantic-ui-react";

const RecipeViewLikes = ({ likedBy }) => {
  return (
    <>
      <Segment>
        <Header as='h3'>Najnowsze polubienia</Header>
        <Image.Group size='mini'>
          {likedBy &&
            likedBy.map((user) => (
              <Popup
                content={user.nick}
                key={user.id}
                trigger={<Image key={user.id} src={user.pictureURL} as={Link} to={`/uzytkownik/${user.id}`}/>}
              />
            ))}
        </Image.Group>
      </Segment>
    </>
  );
};

export default RecipeViewLikes;
