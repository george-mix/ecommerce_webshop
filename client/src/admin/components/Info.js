import React from 'react';

const Info = ({ info, setInfo }) => {
    const addInfo = () => {
        setInfo([...info, { name: '', description: '', id: Date.now() }])
    };

    const deleteInfo = (num) => {
        setInfo(info.filter(i => i.id !== num))
    };

    const changeInfo = (key, value, id) => {
        setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
    };

    return (
        <div>
            <button type="button" onClick={addInfo}>Add Info</button>
            {info.map(inf => {
                return (
                    <div key={inf.id}>
                        <div>
                            <label>Info Name:</label>
                            <input
                                value={inf.name}
                                onChange={(e) => changeInfo('name', e.target.value, inf.id)}
                                placeholder="name" />
                        </div>
                        <div>
                            <label>Info Description:</label>
                            <textarea
                                value={inf.description}
                                onChange={(e) => changeInfo('description', e.target.value, inf.id)}
                                placeholder="description" />
                        </div>
                        <button onClick={() => deleteInfo(inf.id)}>Delete</button>
                    </div>)
            }
            )}
        </div>
    )
}

export default Info;
