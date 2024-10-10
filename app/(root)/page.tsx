import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Arham',lastName: 'Shah', email: 'arhamshah1310@gmail.com'}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn? loggedIn.firstname : "Guest"}
                subtext="Access and manage your account and transaction efficiently."
                />
            
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={150000}
            />
            </header>
            RECENT TRANSACTIONS 
            
        </div>
        <RightSidebar
              user={loggedIn}
              transactions={[]}
              banks={[{currentBalance:1234},{currentBalance:156}]}     
            />
    </section>
  )
}

export default Home