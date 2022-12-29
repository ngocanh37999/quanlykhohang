import randomstring from 'randomstring'
import { v4 as uuidv4 } from 'uuid'
class Helper {
  formatCurrency(currency: number) {
    return new Intl.NumberFormat('de-DE').format(currency)
  }
  generate_id = () => uuidv4()
  generate_maSP = () => `DT${randomstring.generate(5).toUpperCase()}`
}
const helper = new Helper()
export default helper
