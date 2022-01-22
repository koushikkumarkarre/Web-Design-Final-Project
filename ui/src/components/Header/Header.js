import react from 'react';
import './Header.scss'


class Header extends react.Component {

    render() {
//Header for the given application
        return (
            <header class="header">

                <div class="text-bo">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">my Study circle</span>
                        <span class="heading-primary-sub">A New Era of Free Virtual Learning</span>
                    </h1>
                </div>

            </header>
        )
    }
}

export default Header;