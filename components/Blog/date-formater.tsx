import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale';

type Props = {
  dateString: string
}

const DateFormater = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString} style={{ fontSize: '0.8em', color: '#444' }}>{ 
    format(date, `iiii, d 'de' LLLL 'de' yyyy`, { locale: ptBR })
  }</time>
}

export default DateFormater