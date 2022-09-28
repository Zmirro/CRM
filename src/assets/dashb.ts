import earnig_svg from '../assets/svg/money-recive.svg'
import balance_svg from '../assets/svg/wallet-money.svg'
import sales_svg from '../assets/svg/bag.svg'
import arrow_up from '../assets/svg/arrow-up.svg'
import arrow_down from '../assets/svg/arrow-down.svg'
import {DashBoardLocal} from '../types/dashb'

const dashb:DashBoardLocal[] = [
    {
        logoSvgMoney:[earnig_svg,balance_svg,sales_svg],
        title:['Earning','Balance','Total Sales'],
        money_name:['earning','Balance','sales'],
        money:[198, 2.4, 89],
        logoSvgArrow:[arrow_up, arrow_down],
        procents:[37.8, 2, 11]
    }]

export default dashb;