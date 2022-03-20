import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  renderCryptoHeader = () => (
    <div className="crypto-header">
      <p className="coin-type-heading">Coin Type</p>
      <div className="usd-euro-container">
        <p className="coin-heading">USD</p>
        <p className="coin-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="crypto-list-container">
        {this.renderCryptoHeader()}
        <ul className="crypto-list">
          {cryptocurrenciesData.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptoDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-heading-list-img-container">
        <div className="crypto-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            className="crypto-img"
            alt="cryptocurrency"
          />
          {this.renderCryptoView()}
        </div>
      </div>
    )
  }
}
export default CryptocurrencyList
