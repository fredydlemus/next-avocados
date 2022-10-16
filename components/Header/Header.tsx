import { useState, useEffect } from 'react';
import { Confirm } from 'semantic-ui-react';
import Die from './RottenHeader';
import Alive from './AnimatedHeader';
import ModalHeaderContent from './ModalHeaderContent';

const Header = () => {

    const [visible, setVisible] = useState(false);
    const [iDie, setIDie] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [count, setCount] = useState(0);

    const closeModal = () => setModalOpen(false);
    const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

    useEffect(() => {
        window.setTimeout(toggleVisible, 350);
    }, []);

    useEffect(() => {
        if (count === 4) {
            setIDie(true);
            setModalOpen(true);
        }
    }, [count]);

    return (
        <div className='container'>
            {iDie ? <Die /> : <Alive
                onClick={toggleVisible}
                visible={visible}
                onComplete={() => setCount((prevCount) => prevCount + 1)}
            />}
            <Confirm
                open={modalOpen}
                content={ModalHeaderContent}
                onCancel={closeModal}
                onConfirm={closeModal}
                cancelButton='Oh, Sorry'
                confirmButton='OK'
                closeOnDimmerClick={false}
            />
            <style jsx>{`
                .container {
                    margin: 2rem 0 3rem;
                }
                .container :global(.header) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}

export default Header