import React from 'react';
import './App.css';
export function Home() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (<div className="bodys">

    <div className="topnav" id="myTopnav">


    
      <a className="share"><img src="images/share.svg" alt="Avatar" className="avatar" /></a>
       
   {/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">
        <i className="fa fa-bars"></i>
</a>*/}<a className="icon"><img src="images/mobile.svg" alt="Avatar" className="avatar" /></a>


    </div>

    <img src="images/pp.jpg" alt="Avatar" className="profile" id="profile__img"/><br />


    <h1 className="hname" id="twitter">favour_shaww</h1><br />
    <h1 className="hname2" id="slack">shawghost</h1>
    <div className="tabs">

      
      <div className='mainy'><a href="https://twitter.com/favour_shaww/" className="btnss" id="twitter"><p className="text">Twitter Link</p></a></div><br />
      <div className='mainy'><a href="https://training.zuri.team/" className="btnss" id="btn__zuri"><p className="text">Zuri Team</p></a></div><br />
      <div className='mainy'><a title="you can find any book for design and coding when you click on this link"  href="https://books.zuri.team/python-for-beginners?ref_id=shawghost" className="btnss" id="books"><p className="text">Zuri Books</p></a></div><br />
      <div className='mainy'><a title="Purchase my newest book on python here" href="https://books.zuri.team/python-for-beginners?ref_id=shawghost" className="btnss" id="book__python"><p className="text">Python Books</p></a></div><br />
      <div className='mainy'><a title="Planing on hiring a new developer?, click here to perform a full background check before hiring" href="https://background.zuri.team" className="btnss" id="pitch"><p className="text">Background Check for Coders</p></a></div><br />
      <div className='mainy'><a title="Zuri is offering a free design book, click here to grab one." href="https://books.zuri.team/design-rules" className="btnss" id="book__design"><p className="text">Design Books</p></a></div><br />
      <div className='mainy'><a href="/contact" className="btnss" id="contact"><p className="text">Contact Me</p></a></div><br />
    </div>

    
      <div className="btimgs" >
        <a  className="btimgs" ><img className="btimg" src="images/slack.svg" alt="Avatar" /></a><a href="https://github.com/Favourshaw" className="btimgs" ><img className="btimg" src="images/git.svg" alt="Avatar" /></a>
      </div>

   
  </div>
);
}

