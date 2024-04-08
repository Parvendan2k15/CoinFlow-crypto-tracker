import React from 'react'
import './Exchange.css'

const Exchange = () => {
  return (
    <div>
        <div className='exchange'>
            <h1>
            <br/>
            Top Cryptocurrency Exchanges
            <br/>
            </h1>
            <h3>
            <br/>
            Embark on Your Crypto Journey: Unveiling the Ultimate Exchange Platforms
            <br/>
            </h3>
            <h5>
                <br/>
            Discover meticulously chosen top cryptocurrency exchanges with unparalleled features, security, and user experience. Rigorously evaluated for reliability and transparency, prioritizing robust security measures. Enjoy extensive support for various cryptocurrencies and intuitive interfaces for traders of all levels. Empower yourself to make informed decisions and maximize your trading potential. Embark on your cryptocurrency journey with confidence today.   
            <br/>         
            </h5>
            <h4>
            <br/>   
            Cryptocurrency Exchange Platforms
            <br/>
            <br/>
            <br/>
            </h4>
            <div className='coin-cards'>
                <div>
                <div className="card" style= {{width: "18rem"}} >
  <div className="card-body">
    <h5 className="card-title">BINANCE</h5>
    <p className="card-text">Binance is one of the largest and most popular cryptocurrency exchanges globally, offering a wide range of trading pairs and services, including spot trading, futures trading, and staking.</p>
    <a href="#" className="card-link" target='_blank'>Binance</a>
  </div>
</div>
                </div>
                <div>
                <div className="card" style= {{width: "18rem"}} >
  <div className="card-body">
    <h5 className="card-title">COINBASE</h5>
    <p className="card-text">Coinbase is a user-friendly platform, particularly suitable for beginners, providing a straightforward interface for buying, selling, and storing various cryptocurrencies.</p>
    <a href="https://www.coinbase.com/exchange" className="card-link" target='_blank'>CoinBase</a>
  </div>
</div>
                </div>
                
            </div>
            <h4>
            <br/>
            <br/>   
            Cryptocurrency Swaps (Decentralized Exchanges - DEXs)            <br/>
            <br/>
            <br/>
            </h4>
            <div className='coin-cards'>
                <div>
                <div className="card" style= {{width: "18rem"}} >
  <div className="card-body">
    <h5 className="card-title">UNISWAP</h5>
    <p className="card-text">Uniswap is one of the largest decentralized exchanges (DEXs), operating on the Ethereum blockchain, and known for its automated market making and liquidity pools.</p>
    <a href="https://app.uniswap.org/" className="card-link" target='_blank'>Uniswap</a>
  </div>
</div>
                </div>
                <div>
                <div className="card" style= {{width: "18rem"}} >
  <div className="card-body">
    <h5 className="card-title">PANCAKESWAP</h5>
    <p className="card-text">PancakeSwap is a decentralized exchange built on the Binance Smart Chain (BSC), offering lower fees and faster transactions compared to Ethereum-based DEXs.</p>
    <br/>
    <a href="https://pancakeswap.finance/swap" className="card-link" target='_blank'>PancakeSwap</a>
  </div>
</div>
                </div>
                
            </div>
        </div>
        
    </div>
      
  )
}

export default Exchange
