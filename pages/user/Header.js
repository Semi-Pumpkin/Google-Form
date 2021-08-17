import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from "@material-ui/core"
import formimage from "../../public/images/forms_2020q4_48dp.jpg"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "../../public/images/profile.jpg"
import Image from 'next/image'




export default function Header() {
    console.log(formimage);
    return (<>

        <div className="header">
            <div className="header_info">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                
                <Image src={formimage} alt="no image" />
                
            </div>
            <div className="header_search">
                <SearchIcon></SearchIcon>
                <input type="text" name="search" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar>
                        <Image src={avatarimage} />
                    </Avatar>
                </IconButton>

            </div>

        </div>


        <style jsx>
            {`
            .header{
                position:sticky;
            margin-left:10px;
            margin-right:10px;
            padding-top:5px;
            padding-bottom:5px;

            display:flex;
            height:47px;
            background-color:white;
            color:black;
            justify-content: space-between;
            align-items: center;
    

            }



            .header_info{
                display:flex;
            flex-direction:row;
            align-items: center;

            }

            .info{
                color:#5f6368;
            font-size:22px;
            padding-left:5px;
            }

            .form_image{

                height:40px;
            width:40px;
            }
            .header_search{
                display:flex;
            flex-direction:row;
            background-color:#F4F4F9;
            border-radius:10px;
            color:-internal-light-dark(black, white);
            width:700px;
            height:45px;
            }

            .header_search > input{
                border:none;
            height:40px;
            background:transparent;
            outline:none;
            width:100%;
    
    
            }
        
            `}
        </style>
    </>
    )
}
