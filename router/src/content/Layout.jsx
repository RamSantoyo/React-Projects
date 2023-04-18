import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components';

//seleccionar por clase
const ContentNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;    
    background-color: #000;
    color: #fff;    
`;

const Ul = styled.ul`
display : flex;
justify-content: space-between;
align-items: center;
gap: 2.5rem;
list-style: none;
`;

const Linkstyle = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover{
        color: #f00;
    }
`;

const Section = styled.section`
    padding: 4rem 5rem;
`;

const Layaout = () => {
    
    return (
        <>
            <ContentNav>
                <div>
                    <h1>Logotipo</h1>
                </div>
                <nav>
                    <Ul>
                        <li>
                            <Linkstyle to="/">Home</Linkstyle>
                        </li>
                        <li>
                            <Linkstyle to="favoritos">Favoritos</Linkstyle>
                        </li>
                    </Ul>
                </nav>
            </ContentNav>

            <Section>
                <Outlet />
            </Section>    
        </>
    )
}

export default Layaout