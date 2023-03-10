import { StyledContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <div>
            <StyledContainer
                header>
                <h2> {title} </h2>
                {extraHeaderContent}
            </StyledContainer>
            <StyledContainer
                mainContent>
                {body}
            </StyledContainer>
        </div>
    </section>
);

export default Section;
