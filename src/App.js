//rafce-->BOILERPLATE CODE
import React from 'react';
import {Routes,Route,Link}from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Exchanges,HomePage,Cryptocurrencies,CryptoDetails,News} from './components';
import './App.css'
// const App = () => {
//   return (
//     <div className="app">
//       <div className="navbar">
//           <Navbar/>
//       </div>
//       <div className="main">
//     <Layout>
//        <div className="routes">
//           <Routes>
//             <Route exact path="/">
//                <HomePage/>
//             </Route>
//             <Route exact path="/exchanges">
//                <Exchanges/>
//             </Route>
//             <Route exact path="/cryptocurrencies">
//                <Cryptocurrencies/>
//             </Route>
//             <Route exact path="/crypto/:coinId">
//                <CryptoDetails/>
//             </Route>
//             <Route exact path="/news">
//                <News/>
//             </Route>
//           </Routes>
//        </div>
//     </Layout>
const App = () => {
   return (
     <div className="app">
       {/* Navbar */}
       <div className="navbar">
         <Navbar />
       </div>
 
       {/* Main */}
       <div className="main">
         {/* Body */}
         <Layout>
           <div className="routes">
             <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/exchanges" element={<Exchanges />} />
               <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
               <Route path="/crypto/:coinId" element={<CryptoDetails />} />
               <Route path="/news" element={<News />} />
             </Routes>
           </div>
         </Layout>
      <div className="footer">
          <Typography.Title level={5} style={{color: 'white',textAlign:'center'}}>
            Cryptoverse <br/>
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
      </div>
      </div>
    </div>
  )
}

export default App
//npm start to start the site
//npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2
