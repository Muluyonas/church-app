import React from "react";
import './style.css';

const quotes = [
  {
    amharic: "ታቦርና አርሞንዔም በስምህ ደስ ይላቸዋል። ክንድህ ከኃይልህ ጋር ነው፤ እጅህ በረታች ቀኝህም ከፍ ከፍ አለች። መዝ. 88፡12-13",
    norsk: "Tabor og Hermon jubler over ditt navn. Din arm er mektig, din hånd er sterk, høyre arm er løftet. Sal 89:13-14"
  }
];

const Quotes = () => {
  const showAmharicQuote = quotes.map(quote => <p key={quote}>❝{quote.amharic}</p>);
  const showEnglishQuote = quotes.map(quote => <p key={quote}>{quote.norsk}❞</p>);
  return (
    <div className="quote">
      {showAmharicQuote}
      {showEnglishQuote}
    </div>
  );
};

export default Quotes;
