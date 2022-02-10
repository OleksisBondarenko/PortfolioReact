import './style.scss'

import { currentRoute } from '../../assets/js/util'
import Button from '../../Atoms/Button'

const SuccessForm = () => {
    return (
        <div className='success-form'>
            <h2 className='success-form__thank'>
                Thanks a million! I`ll read your message as soon as possible =)
            </h2>

            <Button lable='back home?' link='/home'></Button>
        </div>
    )
}

export default SuccessForm