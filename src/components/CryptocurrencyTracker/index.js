import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCrypto()
  }

  getCrypto = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    console.log(fetchedData)
    this.setState({
      cryptocurrenciesData: fetchedData.map(eachCrypto => ({
        id: eachCrypto.id,
        cryptoName: eachCrypto.currency_name,
        usdValue: eachCrypto.usd_value,
        euroValue: eachCrypto.euro_value,
        currencyLogo: eachCrypto.currency_logo,
      })),
      isLoading: false,
    })
  }

  renderCryptoList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div textid="loader" className="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return <>{isLoading ? this.renderLoader() : this.renderCryptoList()}</>
  }
}
export default CryptocurrencyTracker
