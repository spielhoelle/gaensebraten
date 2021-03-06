import React, { Component } from "react";

// 1st, make a new context
export const MyContext = React.createContext();

const reducer = (state, action) => {
  // console.log('Hello from Reducer', state, action);
  switch (action.type) {
    case "changeTime":
      return {
        ...state,
        time: action.value
      };
    case "DECREMENT_Y":
      return {
        ...state,
        y: state.y - 1
      };
    default:
      return state;
  }
};

// 2nd, create a provider component
export class MyProvider extends Component {
  state = {
    time: 0,
    y: 0,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    receipts: [
      {
        title: "Gaensebraten",
        body: `„Gaensebraten - Lorem ipsum dolor sit amet, consectetur, adipisci velit, …" ist ein
      Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout
      verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten.
      Die Verteilung der Buchstaben und der Wortlängen des
      pseudo-lateinischen Textes entspricht in etwa der natürlichen
      lateinischen Sprache. Der Text ist absichtlich unverständlich, damit
      der Betrachter nicht durch den Inhalt abgelenkt wird.`
      },
      {
        title: "Rindsgulasch",
        body: `Rindsgulasch - Lorem ipsum dolor sit amet, consectetur, adipisci velit, …" ist ein
      Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout
      verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten.
      Die Verteilung der Buchstaben und der Wortlängen des
      pseudo-lateinischen Textes entspricht in etwa der natürlichen
      lateinischen Sprache. Der Text ist absichtlich unverständlich, damit
      der Betrachter nicht durch den Inhalt abgelenkt wird.`
      },
      {
        title: "Schweinshaxn",
        body: `Schweinshaxn - Lorem ipsum dolor sit amet, consectetur, adipisci velit, …" ist ein
      Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout
      verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten.
      Die Verteilung der Buchstaben und der Wortlängen des
      pseudo-lateinischen Textes entspricht in etwa der natürlichen
      lateinischen Sprache. Der Text ist absichtlich unverständlich, damit
      der Betrachter nicht durch den Inhalt abgelenkt wird.`
      },
      {
        title: "Semmelknodel",
        body: `„Semmelknodel - Lorem ipsum dolor sit amet, consectetur, adipisci velit, …" ist ein
      Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout
      verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten.
      Die Verteilung der Buchstaben und der Wortlängen des
      pseudo-lateinischen Textes entspricht in etwa der natürlichen
      lateinischen Sprache. Der Text ist absichtlich unverständlich, damit
      der Betrachter nicht durch den Inhalt abgelenkt wird.`
      }
    ],
  };

  // we return a context provider
  render() {
    return (
      // <MyContext.Provider value="I am the value">
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
