import React from 'react'

const Header = () => {
    return (
        <>
            <div class="container-fluid p-0 m-0 d-flex align-items-center justify-content-center navbar-outer ">
                <div class="row m-0 p-0 ">
                    <div class="tabs p-0">
                        <input type="radio" name="tabMenu" id="home" />
                        <input type="radio" name="tabMenu" id="profile" />
                        <input type="radio" name="tabMenu" id="setting" />
                        <input type="radio" name="tabMenu" id="like" />
                        <input type="radio" name="tabMenu" id="notification" />

                        <div class="buttons px-5 py-2 rounded-3">
                            <label for="home"><i class="fa-solid fa-house"></i><span>Home</span></label>
                            <label for="profile"><i class="fa-solid fa-user"></i><span>Student</span></label>
                            <label for="setting"><i class="fa-solid fa-gear"></i><span>Teacher</span></label>
                            <label for="like"><i class="fa-solid fa-heart"></i><span>Admin</span></label>
                            <label for="notification"><i class="fa-solid fa-bell"></i><span>Hustler</span></label>
                            <div class="underline"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header