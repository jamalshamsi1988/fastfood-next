import styles from './Instruction.module.css'


const Instruction = () => {
  return (
    <div className={styles.container} >
        
      <h3>How to Order?</h3>
      <ul>
        <li>Sign in (or create an account) and set your delivery address.</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap â€œAdd to Cartâ€‌.</li>
        <li>To place your order, select â€œView cartâ€‌ or â€œCheckoutâ€‌.</li>
        <li>Review your order and tap â€œPlace Orderâ€‌...</li>
        <li>Track your order progress.</li>
      </ul>

      
    </div>
  )
}

export default Instruction
