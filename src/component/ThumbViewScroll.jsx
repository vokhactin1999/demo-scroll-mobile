
import Picker from 'react-mobile-picker'

const imgList =  [{id:1, title:'Lennon'}, {id:2, title: 'Jackson'}, {id:3, title:'Jordan'}, {id:4, title: 'Legend'}, {id:5, title: 'Taylor'}, {id:6, title: 'Taylor'}]


function ThumbViewScroll({pickerValue, handleSetValue}) {

  return (
    <Picker value={pickerValue} onChange={handleSetValue} wheel="normal">
  
        <Picker.Column key={name} name='thumbId'>
          {imgList.map(option => (
            <Picker.Item key={option.id} value={option.id}>
             {({ selected }) => (
            /* Use the `selected` state ti conditionally style the selected item */
            <div style={{ color: selected ? 'red' : 'black' }}>
              {option.title}
            </div>
          )}
            
            </Picker.Item>
          ))}
        </Picker.Column>

    </Picker>
  )
}

export default ThumbViewScroll;