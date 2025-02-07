interface CustomButtonProps {
  text: string
  color: 'bg-primary' | 'bg-secondary' | 'bg-danger'
  typeButton?: 'button' | 'submit'
  onClickButton: () => void
}

export default function CustomButton({ text, color, onClickButton, typeButton }: CustomButtonProps) {
  return (
    <button 
      className={`${color} text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`} 
      type={`${typeButton || 'button'}`}
    > 
      { text }
    </button>
  )
}
