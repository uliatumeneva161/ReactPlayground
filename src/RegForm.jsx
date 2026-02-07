function RegForm({regFormData, dispReg, handleSendForm}) { 
    return (<div>
        <p>{regFormData.submitStatus === 'no' && ''}</p>
         <p>{regFormData.submitStatus === 'active' && 'sending'}</p>
          <p>{regFormData.submitStatus === 'send' && 'send'}</p>
            <p>{regFormData.values.name}-{regFormData.values.email}</p>
        <form>
            {regFormData.touched.name && regFormData.errors.name && (
  <span style={{ color: 'red' }}>{regFormData.errors.name}</span>
)}
            <input value={regFormData.values.name} placeholder="name" name="name"
                onBlur={(e) => dispReg({
                    type: 'BLUR_FIELD',
                    payload: {field : e.target.name }
                })}

            onChange={(e) => dispReg({
              type: 'CHANGE_FIELD',
              payload: { field: e.target.name, value: e.target.value }
            })} />
          
            <input value={regFormData.values.email} placeholder="email" name="email"
                onBlur={(e) => { 
                    dispReg({
                        type: 'BLUR_FIELD',
                        payload: {field: e.target.name}
                    })
                }}
            onChange={(e) => dispReg({
              type: 'CHANGE_FIELD',
              payload: { field: e.target.name, value: e.target.value }
            })}
            />
            
          <button type="button" onClick={handleSendForm}>send data</button>
        </form>
    </div>)
}

export default RegForm