import React, {useState} from 'react'
// import {Link} from'react-router-dom';
import Header from '../components/Header'
import '../asset/styles/app.scss'
import GroupCard from '../components/GroupCard'
import AddButton from '../components/addButton'
import Form from '../components/Form'
import AddLinkForm from '../components/AddLinkForm';
import AddTab from './addTab';

function Home() {

  const [links, setLinks]: any = useState([]);

  const addLinks = (link: any) =>{
      setLinks([...links, link ])
      console.log('added link')
  }
  return (
    <>
    <div className="page-wrapper">
    <Header headerTitle="lists">
   
    </Header>
    <main className="main">
      <Form addLinks={addLinks} />  
     {links.map((link:any) =>(
       
       <GroupCard title={link.link} url={"home/add-new-tab"}/>
     ))}
       {/* <GroupCard title='links ' url={"/add-new-tab"} />
       <GroupCard title='career' url={"/add-new-tab"} />
       <GroupCard title='adult content' url={"/add-new-tab"} />
       <GroupCard title='quotes' url={"/add-new-tab"} /> */}
      </main>
     {/* <Link to='/addTab'> <AddButton /></Link> */}
    </div>

    </>
    
  )
}

export default Home;