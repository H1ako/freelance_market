import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import AccentButton from '@/shared/components/ui/AccentButton'

export default function GoTopButton() {
  return (
    <AccentButton>
      <FontAwesomeIcon icon={faAnglesUp} />
      Наверх
    </AccentButton>
  )
}
