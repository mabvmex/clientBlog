import React, {useState, useEffect} from 'react';
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { EditFilled, DeleteFilled, QuestionCircleFilled } from '@ant-design/icons';
import Modal from '../../../Modal';
import DragSortableList  from 'react-drag-sortable';
import { updateMenuApi, activateMenuApi, deleteMenuApi } from '../../../../api/menu';
import { getAccessTokenApi } from '../../../../api/auth';
import AddMenuWebForm from '../AddMenuWebForm';
import EditMenuWebForm from '../EditMenuWebForm';

import './MenuWebList.scss';


const { confirm } = ModalAntd;

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props;

    const [ listItems, setListItems ] = useState([]);
    const [ isVisibleModal, setIsVisibleModal ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState("");
    const [ modalContent, setModalContent ] = useState(null);

    useEffect( () => {
        const listItemsArray = [];
        
        menu.forEach(element => {
            listItemsArray.push({
            content: <MenuItem 
                element={element} 
                activateMenu = {activateMenu} 
                EditMenuWebModal={EditMenuWebModal}
                deleteMenu = {deleteMenu}
                />
            });
        });
        
        setListItems(listItemsArray);

    }, [menu])


    const activateMenu = (menu, status) => {
        const accessToken = getAccessTokenApi()

        activateMenuApi(accessToken, menu._id, status)
        .then(response => {
            notification['success']({
                message: response
            });
        })
    }


    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(element => {
            const { _id } = element.content.props.element;
            const order = element.rank;

            updateMenuApi(accessToken, _id, {order});
        })
    }
    
    const AddMenuWebModal = () => {
        setIsVisibleModal(true);
        setModalTitle('Crear nuevo menú');
        setModalContent(
            <AddMenuWebForm 
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
            />
        );
    }

    const deleteMenu = menu => {
        const accessToken = getAccessTokenApi();

        confirm ({
            title: 'Eliminar menú!',
            icon: <QuestionCircleFilled/>,
            content: `¿Deseas eliminar el menú ${menu.title}?`,
            okText: 'Eliminar',
            okType: 'danger primary',
            cancelText: 'Cancelar',
            onOk(){
                deleteMenuApi(accessToken, menu._id)
                .then(response => {
                    notification['success']({
                        message: response
                    });
                    setReloadMenuWeb(true);
                })
                .catch(() => {
                    notification['error']({
                        message: 'Error del servidor, intentelo más tarde'
                    })
                })
            }
        })
    }

    const EditMenuWebModal = menu => {
        setIsVisibleModal(true);
        setModalTitle(`Editar menú: ${menu.title}`);
        setModalContent(
            <EditMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
                menu = {menu}
            />
        )
    }

    return (
        <div className='menu-web-list'>
            <div className='menu-web-list__header'>
                <Button type='primary' shape='round' onClick={AddMenuWebModal}> Nuevo Menú </Button>
            </div>

            <div className='menu-web-list__items'>
                <DragSortableList items={listItems} onSort={onSort} type='vertical' />
            </div>

            <Modal
                title={modalTitle} 
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                >
                    {modalContent}
            </Modal>
        </div>
    )
}

function MenuItem(props) {
    const {element, activateMenu, EditMenuWebModal, deleteMenu } = props;

    return (
        <List.Item
            actions={[
                <Switch defaultChecked = {element.active} onChange={(e) => activateMenu(element, e) } />,
                <Button type='primary' shape='circle' size='large' onClick={() => EditMenuWebModal(element)}> <EditFilled />  </Button>,
                <Button type='danger' shape='circle' size='large'onClick={()=> deleteMenu(element)}> <DeleteFilled />  </Button>
            ]}>
            <List.Item.Meta title={element.title} description={element.url} />
        </List.Item>
    )
}