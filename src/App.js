import React from "react";
import moment from "moment";
import { Picker } from "emoji-mart";
import styled from "styled-components";
function App() {
  const AppContainer = styled.div`
    display: grid;
    overflow: hidden;
    background-color: #eaeaea;
    grid-template-columns: 5% 22% 73%;
    grid-template-rows: 10% 90%;
    gap: 4px 4px;
    height: 100vh;
    font-size: 14px;
    font-weight: 300;
    padding: 1px;
    font-family: "Lato", sans-serif;
  `;
  const LogoPanel = styled.div`
    grid-row-start: 1;
    grid-row-end: 3;
    background: #ffff;
    border-radius: 3px;
  `;
  const Logo = styled.div`
    display: block;
    margin: auto;
    margin-top: 10px;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    content: url("https://i.pinimg.com/564x/f7/d7/bc/f7d7bc7d5659028d268eab0d88818d7c.jpg");
  `;
  const ChatTop = styled.div`
    grid-column-start: 3;
    display: grid;
    grid-template-columns: 80px 80%;
    gap: 0px 18px;
    grid-template-rows: 50% 50%;
    background: #ffff;
    border-radius: 3px;
    height: 100%;
    line-height: 30px;
  `;
  const Chat = styled.div`
    grid-column-start: 3;
    grid-row-start: 2;
    background: #ffff;
    border-radius: 3px;
    overflow-y:scroll;
    height:85%;
  `;
  const InputContainer = styled.form`
    background:white;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    bottom: 0;
    border: 2px solid black;
    width: 72%;
  `;
  const TextInput = styled.input`
    position: relative;
    padding: 0 0 80px 0;
    width: 100%;
    height: 100%;
    font-size: inherit;
    line-height: 10px;
    border: 0;
    &:focus {
      outline: none;
    }
  `;

  const Attachment = styled.div`
  background:white;
    width: 30px;
    height: 30px;
    content: url("https://cdn2.iconfinder.com/data/icons/bold-application/500/plus-512.png");
    border: 1px solid black;
    border-radius: 50%;
    color: blue;
    margin: 10px;
    cursor: pointer;
  `;
  const Popup = styled.div`
    position: absolute;
    bottom: 100px;
    left: 20px;
    box-shadow: 10px 10px 8px 10px #888888;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: white;
    width: 100px;
    height: 100px;
    cursor: pointer;
    z-index: 2;
  `;
  const ListTop = styled.div`
    grid-column-start: 2;
    background: #ffff;
    border-radius: 3px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;
  const Tab = styled.div`
    cursor: pointer;
    font-size: 20px;
    ${({ active }) =>
      active &&
      `
    color: #2C3ED2;
    border-bottom: 3px solid #2C3ED2;
    border-top-left-radius:-10px
  `}
  `;
  const List = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    background: #ffff;
    border-radius: 3px;
  `;
  const Details = styled.div`
    display: grid;
    grid-template-columns: 75px 80%;
    grid-template-rows: 50% 50%;
    gap: 0px 20px;
    height: 10%;
    margin-top: 20px;
    margin-left: 10px;
  `;
  const Text = styled.div`
    display: grid;
    grid-template-columns: 75px 80%;
    grid-template-rows: 50% 50%;
    gap: 0px 20px;
    height: 80px;
    margin: 10px;
  `;
  const Name = styled.div`
    grid-row-start: 1;
    grid-column-start: 2;
    font-size: 18px;
    font-weight: 600;
  `;
  const Pic = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    background: #eaeaea;
    border-radius: 20px;
    margin: 2px;
  `;
  const Content = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
  `;
  const tabs = ["Direct", "Groups"];
  const Direct = [
    { name: "aravindmv97", content: "This is the last message ..." },
    { name: "aravindmv97", content: "This is the last message ..." },
    { name: "aravindmv97", content: "This is the last message ..." },
  ];
  const Groups = [
    { name: "test group", content: "This is the last message ..." },
  ];
  const [toggle, SetToggle] = React.useState(false);
  const [active, SetActive] = React.useState(tabs[0]);
  const [messages, SetMessages] = React.useState([
    {
      name: "aravindmv97",
      content:
        "Been here 2 weeks and WOW. Amazing team. I had the best 2 weeks in profits all year long. You guys are awesome. Thanks for your hard work and helping us to make money and learn each day. Leeesss Gggoooo",
      time: "20:09",
    },
  ]);
  const OnSend = (e) => {
    e.preventDefault();
    console.log(messages);
    SetMessages([
      ...messages,
      {
        name: "you",
        content: e.target.childNodes[1].value,
        time: moment().format("HH:mm"),
      },
    ]);
    // console.log(messages)
  };

  return (
    <AppContainer>
      <LogoPanel>
        <Logo />
      </LogoPanel>
      <ListTop>
        {tabs.map((tab) => {
          return (
            <Tab active={active === tab} onClick={() => SetActive(tab)}>
              {tab}
            </Tab>
          );
        })}{" "}
      </ListTop>
      <List>
        {active === "Direct" &&
          Direct.map((index) => {
            return (
              <Details>
                {" "}
                <Pic /> <Name>{index.name} </Name>{" "}
                <Content>{index.content}</Content>{" "}
              </Details>
            );
          })}
        {active === "Groups" &&
          Groups.map((index) => {
            return (
              <Details>
                {" "}
                <Pic /> <Name>{index.name} </Name>{" "}
                <Content>{index.content}</Content>{" "}
              </Details>
            );
          })}
      </List>
      <ChatTop>
        {" "}
        <Pic /> <Name>Elon Musk </Name> <Content>🟢 online</Content>{" "}
      </ChatTop>
      <Chat>
        {messages.map((index) => {
          return (
            <Text>
              <Pic />
              <Name>
                {index.name}
                <div style={{ fontSize: "12px", fontWeight: 100 }}>
                  {index.time}
                </div>
              </Name>
              <Content>{index.content}</Content>
            </Text>
          );
        })}
        <InputContainer onSubmit={OnSend}>
          {toggle && (
            <Popup>
              <div>image</div>
              <div>audio</div>
              <div>file</div>
            </Popup>
          )}
          <Attachment
            onClick={() => {
              SetToggle(!toggle);
            }}
          >
            {" "}
            hey
          </Attachment>
          <TextInput  placeholder="Enter Your Text here"/>
        </InputContainer>
      </Chat>
    </AppContainer>
  );
}

export default App;
