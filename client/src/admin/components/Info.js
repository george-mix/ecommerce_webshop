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
        <div className="modal__main__info">
            {info.map(inf => {
                return (
                    <div
                        className="modal__main__info__section"
                        key={inf.id}>
                        <div className="modal__main__input">
                            <div className="modal__main__input__info">
                                <label>Info Name:</label>
                                <input
                                    value={inf.name}
                                    onChange={(e) => changeInfo('name', e.target.value, inf.id)}
                                    placeholder="name" />
                            </div>
                        </div>
                        <div className="modal__main__input">
                            <div className="modal__main__input__info">
                                <label>Info Description:</label>
                                <textarea
                                    value={inf.description}
                                    onChange={(e) => changeInfo('description', e.target.value, inf.id)}
                                    placeholder="description" />
                            </div>
                        </div>
                        <div className="modal__main__input__delete">
                            <button
                                onClick={() => deleteInfo(inf.id)}>Delete Info</button>
                        </div>

                    </div>)
            }
            )}
            <div className="modal__main__info__button">
                <button type="button" onClick={addInfo}>Add Info</button>
            </div>
        </div>
    )
}

export default Info;
