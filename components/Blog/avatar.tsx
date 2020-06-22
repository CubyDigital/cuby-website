import DateFormater from './date-formater'

type Props = {
  name: string
  picture: string
  date: string
}

const Avatar = ({ name, picture, date }: Props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 30,
      marginBottom: 40,
      borderBottom: 'solid 1px #DDD'
    }}>
      <img 
        src={picture} 
        alt={name} 
        style={{
          width: 45,
          height: 45,
          borderRadius: '50%',
          marginRight: 20
        }}
      />
      <div>
        <div style={{ marginTop: 4, marginBottom: -2}}>{name}</div>
        <DateFormater dateString={date} />
      </div>
    </div>
  )
}

export default Avatar
