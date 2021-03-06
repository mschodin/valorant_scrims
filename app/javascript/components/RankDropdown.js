import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import iron1 from '/app/assets/images/ranks/iron1.png';
import iron2 from '/app/assets/images/ranks/iron2.png';
import iron3 from '/app/assets/images/ranks/iron3.png';
import bronze1 from '/app/assets/images/ranks/bronze1.png';
import bronze2 from '/app/assets/images/ranks/bronze2.png';
import bronze3 from '/app/assets/images/ranks/bronze3.png';
import silver1 from '/app/assets/images/ranks/silver1.png';
import silver2 from '/app/assets/images/ranks/silver2.png';
import silver3 from '/app/assets/images/ranks/silver3.png';
import gold1 from '/app/assets/images/ranks/gold1.png';
import gold2 from '/app/assets/images/ranks/gold2.png';
import gold3 from '/app/assets/images/ranks/gold3.png';
import plat1 from '/app/assets/images/ranks/plat1.png';
import plat2 from '/app/assets/images/ranks/plat2.png';
import plat3 from '/app/assets/images/ranks/plat3.png';
import diamond1 from '/app/assets/images/ranks/diamond1.png';
import diamond2 from '/app/assets/images/ranks/diamond2.png';
import diamond3 from '/app/assets/images/ranks/diamond3.png';
import immortal from '/app/assets/images/ranks/immortal3.png';
import radiant from '/app/assets/images/ranks/radiant.png';

function RankDropdown(props) {
    return (
        <Dropdown className={'rank_dropdown'}>
            <Dropdown.Toggle variant={'light btn-sm'} id={'rank_dropdown'}>
                <Image className={'rank_options'} src={props.selected_rank}/>
            </Dropdown.Toggle>

            <Dropdown.Menu className={'rank_dropdown_menu'} bsPrefix={'rank_dropdown_menu'}>
                <Dropdown.Item onClick={()=>props.changeRank(iron1)}><Image className={'rank_options'} src={iron1}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(iron2)}><Image className={'rank_options'} src={iron2}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(iron3)}><Image className={'rank_options'} src={iron3}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(bronze1)}><Image className={'rank_options'} src={bronze1}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(bronze2)}><Image className={'rank_options'} src={bronze2}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(bronze3)}><Image className={'rank_options'} src={bronze3}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(silver1)}><Image className={'rank_options'} src={silver1}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(silver2)}><Image className={'rank_options'} src={silver2}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(silver3)}><Image className={'rank_options'} src={silver3}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(gold1)}><Image className={'rank_options'} src={gold1}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(gold2)}><Image className={'rank_options'} src={gold2}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(gold3)}><Image className={'rank_options'} src={gold3}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(plat1)}><Image className={'rank_options'} src={plat1}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(plat2)}><Image className={'rank_options'} src={plat2}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(plat3)}><Image className={'rank_options'} src={plat3}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(diamond1)}><Image className={'rank_options'} src={diamond1}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(diamond2)}><Image className={'rank_options'} src={diamond2}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(diamond3)}><Image className={'rank_options'} src={diamond3}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(immortal)}><Image className={'rank_options'} src={immortal}/></Dropdown.Item>
                <Dropdown.Item onClick={()=>props.changeRank(radiant)}><Image className={'rank_options'} src={radiant}/></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default RankDropdown;