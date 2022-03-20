import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {cryptoName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="logo-title-container">
        <img src={currencyLogo} className="currency-logo" alt={cryptoName} />
        <p className="crypto-name">{cryptoName}</p>
      </div>
      <div className="usd-euro-value-container">
        <p className="crypto-value">{usdValue}</p>
        <p className="crypto-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
