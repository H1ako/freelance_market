import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import AccentButton, {
  Props as ButtonProps,
} from '@/shared/components/ui/buttons/AccentButton'

export interface Props extends ButtonProps {}

export default function GoTopButton(props: ButtonProps) {
  return (
    <AccentButton {...props}>
      <FontAwesomeIcon icon={faAnglesUp} />
      Наверх
    </AccentButton>
  )
}
