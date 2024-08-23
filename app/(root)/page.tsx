import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstname: 'User1'}
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
            </header>
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={150000}
            />
        </div>
    </section>
  )
}

export default Home